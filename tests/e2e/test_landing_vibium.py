"""
Primary End-to-End Test Suite for Thinking-as-a-Service using Vibium.
Protocol: W3C WebDriver BiDi over WebSockets.
Engine: Autonomous Chrome for Testing lifecycle.

This module validates the 7 canonical user-journey and architectural scenarios:
1. Hero Section & Copy Integrity
2. WhatsApp Floating CTA Dynamic Scroll Behavior
3. Video Player Module & Timing Metadata
4. Executive Advisor / Leadership Card (Dr. Andrés López Astudillo, PhD)
5. Kumu High-Density Embed Iframes (Desktop Resolution)
6. CEMSTWO Interactive SVG Graph (Semantic Attributes & State Synchronization)
7. Pricing & Methodology Content Integrity
"""

import os
import time
from typing import Callable, Any
import pytest

DEFAULT_BASE_URL = os.environ.get("BASE_URL", "http://localhost:4173/Thinking-as-a-Service/")


def wait_for_condition(
    predicate: Callable[[], Any],
    timeout: float = 3.5,
    interval: float = 0.1,
    failure_message: str = "Condition not met within timeout",
) -> Any:
    """Poll predicate until it returns truthy value or timeout expires."""
    deadline = time.time() + timeout
    last_val = None
    while time.time() < deadline:
        last_val = predicate()
        if last_val:
            return last_val
        time.sleep(interval)
    last_val = predicate()
    if not last_val:
        raise AssertionError(f"{failure_message} (waited {timeout}s)")
    return last_val


def test_landing_hero(vibe, base_url):
    """
    Scenario 1: Hero Section & Copy
    Verifies page title, headline 'Deje de automatizar el caos. Automatice el margen.',
    subheadline, and editorial branding.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    # 1. Page Title Check
    title = vibe.title()
    assert "Thinking as a Service" in title, f"Unexpected page title: '{title}'"

    # 2. Primary Headline (H1)
    h1 = wait_for_condition(
        lambda: vibe.find("h1"),
        timeout=10.0,
        failure_message="H1 element was not found in DOM after React hydration",
    )
    assert h1 is not None, "H1 element was not found in DOM"
    h1_text = h1.text().strip()
    assert "Deje de automatizar el caos. Automatice el margen." in h1_text, (
        f"H1 headline mismatch. Expected 'Deje de automatizar el caos. Automatice el margen.', got: '{h1_text}'"
    )

    # 3. Hero Subcopy / Narrative
    hero_section = vibe.find("#iceberg-surface")
    assert hero_section is not None, "#iceberg-surface section was not found"
    hero_text = hero_section.text()
    assert "enfoque sistémico" in hero_text or "No vendemos software" in hero_text, (
        f"Hero section missing core strategic narrative: '{hero_text}'"
    )

    # 4. Editorial Branding / Eyebrow
    assert "Diseño Organizacional" in hero_text or "Ciencia de Redes" in hero_text, (
        f"Hero section missing editorial branding: '{hero_text}'"
    )


def test_whatsapp_floating_cta(vibe, base_url):
    """
    Scenario 2: WhatsApp Floating CTA
    Verifies presence of #floating-cta, initial hidden state,
    scroll trigger past 45% viewport depth, .visible class activation,
    and valid wa.me destination href.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    cta = wait_for_condition(
        lambda: vibe.find("#floating-cta"),
        timeout=10.0,
        failure_message="Could not find #floating-cta element in DOM after hydration",
    )
    assert cta is not None, "Could not find #floating-cta element in DOM"

    # Initial state: should not be visible
    initial_classes = (cta.getAttribute("class") or "").split()
    assert "visible" not in initial_classes, (
        f"Floating CTA should not have .visible class prior to scroll: {initial_classes}"
    )

    # Scroll down past 45% of viewport height (1.0 viewport height)
    vibe.evaluate("window.scrollBy(0, window.innerHeight)")

    # Wait for .visible class transition
    def cta_is_visible():
        classes = (cta.getAttribute("class") or "").split()
        return "visible" in classes

    wait_for_condition(
        cta_is_visible,
        timeout=3.5,
        failure_message=f"Floating CTA did not acquire .visible class after scroll: {cta.getAttribute('class')}",
    )

    # Verify WhatsApp link format
    href = cta.getAttribute("href") or ""
    assert "wa.me" in href, f"Floating CTA href does not target WhatsApp: '{href}'"


def test_video_player_module(vibe, base_url):
    """
    Scenario 3: Video Player Module
    Verifies video element presence, controls attribute, and duration metadata '07:36'.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    video_module = wait_for_condition(
        lambda: vibe.find(".video-module"),
        timeout=10.0,
        failure_message="Could not find .video-module container after hydration",
    )
    assert video_module is not None, "Could not find .video-module container"
    video_module.scrollIntoView()

    # Verify HTML5 <video> tag and controls
    video_elem = vibe.find(".video-module video")
    assert video_elem is not None, "Could not find <video> element inside .video-module"
    assert video_elem.getAttribute("controls") is not None, (
        "Video element must have 'controls' attribute enabled"
    )

    # Verify duration metadata '07:36'
    duration_elem = vibe.find(".video-module__duration")
    assert duration_elem is not None, "Could not find .video-module__duration element"
    duration_text = duration_elem.text().strip()
    assert "07:36" in duration_text, (
        f"Video duration mismatch: expected '07:36' in '{duration_text}'"
    )


def test_team_executive_advisor(vibe, base_url):
    """
    Scenario 4: Team / Executive Advisor
    Verifies #equipo / .signal-lead renders PhD Andrés López Astudillo.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    advisor_panel = wait_for_condition(
        lambda: vibe.find("#equipo"),
        timeout=10.0,
        failure_message="Could not find #equipo executive advisor element after hydration",
    )
    assert advisor_panel is not None, "Could not find #equipo executive advisor element"
    advisor_panel.scrollIntoView()

    # Verify .signal-lead class
    classes = (advisor_panel.getAttribute("class") or "").split()
    assert "signal-lead" in classes, f"#equipo does not have .signal-lead class: {classes}"

    # Verify advisor name and PhD credential
    advisor_text = advisor_panel.text()
    assert "Andrés López Astudillo" in advisor_text, (
        f"Advisor panel does not mention 'Andrés López Astudillo': '{advisor_text}'"
    )
    assert "PhD" in advisor_text or "Dr." in advisor_text, (
        f"Advisor panel missing PhD / doctoral credentials: '{advisor_text}'"
    )


def test_kumu_embeds(vibe, base_url):
    """
    Scenario 5: Kumu Embeds
    Verifies 2 kumu-embed iframes are present on desktop view.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    depth_section = wait_for_condition(
        lambda: vibe.find("#iceberg-depth"),
        timeout=10.0,
        failure_message="Could not find #iceberg-depth section after hydration",
    )
    assert depth_section is not None, "Could not find #iceberg-depth section"
    depth_section.scrollIntoView()

    iframes = vibe.findAll(".kumu-embed iframe")
    assert len(iframes) == 2, (
        f"Expected exactly 2 Kumu embed iframes on desktop, found {len(iframes)}"
    )

    for idx, iframe in enumerate(iframes):
        src = iframe.getAttribute("src") or ""
        assert "embed.kumu.io" in src, (
            f"Iframe #{idx + 1} src does not target embed.kumu.io: '{src}'"
        )


def test_cemstwo_interactive_svg_graph(vibe, base_url):
    """
    Scenario 6: CEMSTWO Interactive SVG Graph
    Verifies .cemstwo-graph__svg, tests hover on node E using semantic attribute selector
    (.cemstwo-graph__node-group[aria-label^='E:']), verifies node active class and detail panel
    synchronization (.cemstwo-detail__letter == 'E'); then tests hover on node C and verifies synchronization.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    svg = wait_for_condition(
        lambda: vibe.find(".cemstwo-graph__svg"),
        timeout=10.0,
        failure_message="Could not find .cemstwo-graph__svg element after hydration",
    )
    assert svg is not None, "Could not find .cemstwo-graph__svg element"
    svg.scrollIntoView()

    # Query nodes using semantic aria-label prefix
    node_t = wait_for_condition(
        lambda: vibe.find(".cemstwo-graph__node-group[aria-label^='T:']"),
        timeout=10.0,
        failure_message="Node T group was not found",
    )
    node_e = wait_for_condition(
        lambda: vibe.find(".cemstwo-graph__node-group[aria-label^='E:']"),
        timeout=10.0,
        failure_message="Node E group was not found",
    )
    node_c = wait_for_condition(
        lambda: vibe.find(".cemstwo-graph__node-group[aria-label^='C:']"),
        timeout=10.0,
        failure_message="Node C group was not found",
    )

    assert node_t is not None, "Node T group was not found"
    assert node_e is not None, "Node E group was not found"
    assert node_c is not None, "Node C group was not found"

    # 1. Verify default active node is T
    def is_t_active():
        return "cemstwo-graph__node-group--active" in (node_t.getAttribute("class") or "")

    wait_for_condition(
        is_t_active,
        timeout=2.5,
        failure_message=f"Node T should be active by default: {node_t.getAttribute('class')}",
    )

    detail_letter = vibe.find(".cemstwo-detail__letter")
    assert detail_letter.text().strip() == "T", "Detail letter should initially be T"

    # 2. Hover over Node E
    node_e.hover()

    def is_e_active_and_synced():
        e_cls = (node_e.getAttribute("class") or "").split()
        t_cls = (node_t.getAttribute("class") or "").split()
        letter = vibe.find(".cemstwo-detail__letter").text().strip()
        return (
            "cemstwo-graph__node-group--active" in e_cls
            and "cemstwo-graph__node-group--active" not in t_cls
            and letter == "E"
        )

    wait_for_condition(
        is_e_active_and_synced,
        timeout=3.5,
        failure_message="Node E hover failed to activate node E or synchronize detail letter to 'E'",
    )

    # 3. Hover over Node C
    node_c.hover()

    def is_c_active_and_synced():
        c_cls = (node_c.getAttribute("class") or "").split()
        e_cls = (node_e.getAttribute("class") or "").split()
        letter = vibe.find(".cemstwo-detail__letter").text().strip()
        return (
            "cemstwo-graph__node-group--active" in c_cls
            and "cemstwo-graph__node-group--active" not in e_cls
            and letter == "C"
        )

    wait_for_condition(
        is_c_active_and_synced,
        timeout=3.5,
        failure_message="Node C hover failed to activate node C or synchronize detail letter to 'C'",
    )


def test_pricing_and_methodology_copy_integrity(vibe, base_url):
    """
    Scenario 7: Pricing / Methodology details copy integrity
    Verifies core metrics (10,2%), diagnosis, simplicity matrix, and proposal structure.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    body = wait_for_condition(
        lambda: (
            vibe.find("body")
            if vibe.find("body") and len(vibe.find("body").text().strip()) > 50
            else None
        ),
        timeout=10.0,
        failure_message="Body did not populate text after hydration",
    )
    assert body is not None, "Could not find body element"
    body_text = body.text()

    # Core mathematical and framework metrics
    assert ("10,2%" in body_text or "10.2%" in body_text), "Missing structural metric '10.2%' in body copy"
    assert (
        "Complexity Diagnosis" in body_text
        or "Diagnóstico de Complejidad" in body_text
        or "Diagnostico de Complejidad" in body_text
    ), "Missing 'Complexity Diagnosis' or 'Diagnóstico de Complejidad' in body copy"
    assert (
        "matriz de simplicidad" in body_text.lower()
        or "simplicity matrix" in body_text.lower()
    ), "Missing 'Matriz de Simplicidad' or 'Simplicity Matrix' in body copy"

    # Executive proposal & pricing section
    proposal_section = wait_for_condition(
        lambda: vibe.find("#iceberg-proposal"),
        timeout=10.0,
        failure_message="Could not find #iceberg-proposal section after hydration",
    )
    assert proposal_section is not None, "Could not find #iceberg-proposal section"
    proposal_section.scrollIntoView()
    proposal_text = proposal_section.text()
    assert "Propuesta" in proposal_text or "Pricing" in proposal_text, (
        f"Proposal section missing pricing/proposal copy: '{proposal_text[:200]}'"
    )

    # Methodology note in evidence layer
    evidence_section = vibe.find("#iceberg-evidence")
    assert evidence_section is not None, "Could not find #iceberg-evidence section"
    evidence_text = evidence_section.text()
    assert "METODOLÓGICA" in evidence_text or "METHODOLOGY" in evidence_text, (
        "Evidence layer missing methodology note marker"
    )
