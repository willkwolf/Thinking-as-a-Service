document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Team Data
    const teamContainer = document.getElementById('team-container');
    if (teamContainer && typeof teamData !== 'undefined') {
        teamData.forEach(member => {
            const memberHTML = `
                <div class="team-member">
                    <img src="${member.foto}" alt="${member.nombre}">
                    <h3>${member.nombre}</h3>
                    <p>${member.descripcion}</p>
                </div>
            `;
            teamContainer.innerHTML += memberHTML;
        });
    }

    // 2. Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll('.reveal-text');
    const ctaButton = document.getElementById('floating-cta');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => scrollObserver.observe(el));

    // Show floating CTA after scrolling past the hero section
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            ctaButton.classList.add('visible');
        } else {
            ctaButton.classList.remove('visible');
        }
    });

    // 3. D3.js Network Background Simulation
    initD3Network();
});

function initD3Network() {
    const container = document.getElementById('d3-canvas-container');
    if (!container || typeof d3 === 'undefined') return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const svg = d3.select('#d3-canvas-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Generate random nodes
    const numNodes = width < 768 ? 40 : 100;
    const nodes = d3.range(numNodes).map(() => ({
        radius: Math.random() * 2 + 1,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
    }));

    // Link logic
    const distanceThreshold = width < 768 ? 100 : 150;

    const g = svg.append("g");

    // We'll update points manually in a requestAnimationFrame loop instead of using full d3.forceSimulation for performance
    const render = () => {
        // Move nodes
        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;

            // Bounce off walls
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;
        });

        // Find links
        const links = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < distanceThreshold) {
                    links.push({
                        source: nodes[i],
                        target: nodes[j],
                        opacity: 1 - (dist / distanceThreshold)
                    });
                }
            }
        }

        // Draw Links
        const lines = g.selectAll('line').data(links);
        lines.enter()
            .append('line')
            .merge(lines)
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y)
            .attr('stroke', 'rgba(0, 209, 255, 0.2)')
            .attr('stroke-width', 0.5)
            .attr('opacity', d => d.opacity * 0.5);

        lines.exit().remove();

        // Draw Nodes
        const circles = g.selectAll('circle').data(nodes);
        circles.enter()
            .append('circle')
            .merge(circles)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.radius)
            .attr('fill', 'rgba(62, 142, 126, 0.5)'); // eco-mid color

        circles.exit().remove();

        requestAnimationFrame(render);
    };

    render();

    // Handle Resize
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        svg.attr('width', width).attr('height', height);
    });
}
