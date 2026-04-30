const MODE_STORAGE_KEY = 'kumu-visual-mode';
const REST_START_HOUR = 19;
const REST_END_HOUR = 6;

document.addEventListener('DOMContentLoaded', () => {
    initAdaptiveMode();
    renderTeam();
    initRevealObserver();
    initMotionAwareMedia();
    initD3Network();
});

function getAutomaticMode() {
    const hour = new Date().getHours();
    return hour >= REST_START_HOUR || hour < REST_END_HOUR ? 'rest' : 'day';
}

function setMode(mode, persist = false) {
    const nextMode = mode === 'rest' ? 'rest' : 'day';
    document.documentElement.dataset.timeMode = nextMode;

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
        themeMeta.setAttribute('content', nextMode === 'rest' ? '#080d12' : '#f4f7fb');
    }

    document.querySelectorAll('[data-mode-option]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.modeOption === nextMode));
    });

    if (persist) {
        localStorage.setItem(MODE_STORAGE_KEY, nextMode);
    }
}

function initAdaptiveMode() {
    const savedMode = localStorage.getItem(MODE_STORAGE_KEY);
    setMode(savedMode || getAutomaticMode());

    document.querySelectorAll('[data-mode-option]').forEach((button) => {
        button.addEventListener('click', () => setMode(button.dataset.modeOption, true));
    });
}

function renderTeam() {
    const teamContainer = document.getElementById('team-container');
    if (!teamContainer || typeof teamData === 'undefined') return;

    const fragment = document.createDocumentFragment();

    teamData.forEach((member) => {
        const article = document.createElement('article');
        article.className = 'team-member';

        const image = document.createElement('img');
        image.src = member.foto;
        image.alt = member.nombre;
        image.loading = 'lazy';
        image.decoding = 'async';

        const body = document.createElement('div');
        body.className = 'team-member__body';

        if (member.rol) {
            const role = document.createElement('span');
            role.className = 'team-member__role';
            role.textContent = member.rol;
            body.append(role);
        }

        const name = document.createElement('h3');
        name.textContent = member.nombre;

        const description = document.createElement('p');
        description.textContent = member.descripcion;

        body.append(name, description);
        article.append(image, body);
        fragment.append(article);
    });

    teamContainer.replaceChildren(fragment);
}

function initRevealObserver() {
    const revealElements = document.querySelectorAll('.reveal-text');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealElements.forEach((element) => element.classList.add('active'));
        return;
    }

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
    });

    revealElements.forEach((element) => scrollObserver.observe(element));
}

function initMotionAwareMedia() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const videos = document.querySelectorAll('video[data-autoplay="true"]');

    const syncVideoState = () => {
        videos.forEach((video) => {
            if (reduceMotion.matches) {
                video.pause();
                video.removeAttribute('autoplay');
            } else {
                video.play().catch(() => {});
            }
        });
    };

    syncVideoState();
    reduceMotion.addEventListener('change', syncVideoState);
}

function initD3Network() {
    const container = document.getElementById('d3-canvas-container');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!container || typeof d3 === 'undefined' || reduceMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;

    const svg = d3.select('#d3-canvas-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('aria-hidden', 'true');

    const getThemeColor = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    let lineColor = getThemeColor('--accent-cyan');
    let nodeColor = getThemeColor('--accent-fern');

    const numNodes = width < 768 ? 32 : 82;
    const nodes = d3.range(numNodes).map(() => ({
        radius: Math.random() * 2 + 1,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42
    }));

    const g = svg.append('g');

    const render = () => {
        const distanceThreshold = width < 768 ? 92 : 145;

        nodes.forEach((node) => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
        });

        const links = [];
        for (let i = 0; i < nodes.length; i += 1) {
            for (let j = i + 1; j < nodes.length; j += 1) {
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

        const lines = g.selectAll('line').data(links);
        lines.enter()
            .append('line')
            .merge(lines)
            .attr('x1', (d) => d.source.x)
            .attr('y1', (d) => d.source.y)
            .attr('x2', (d) => d.target.x)
            .attr('y2', (d) => d.target.y)
            .attr('stroke', lineColor)
            .attr('stroke-width', 0.7)
            .attr('opacity', (d) => d.opacity * 0.42);

        lines.exit().remove();

        const circles = g.selectAll('circle').data(nodes);
        circles.enter()
            .append('circle')
            .merge(circles)
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y)
            .attr('r', (d) => d.radius)
            .attr('fill', nodeColor)
            .attr('opacity', 0.46);

        circles.exit().remove();

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        svg.attr('width', width).attr('height', height);
    }, { passive: true });

    const observer = new MutationObserver(() => {
        lineColor = getThemeColor('--accent-cyan');
        nodeColor = getThemeColor('--accent-fern');
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-time-mode'] });

    window.addEventListener('pagehide', () => cancelAnimationFrame(animationFrameId));
}
