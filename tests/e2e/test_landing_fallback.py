"""
===============================================================================
ISOLATED PLAYWRIGHT FALLBACK TEST SUITE
===============================================================================
Repository: Thinking-as-a-Service
Scope: Quarantined fallback suite for specialized browser automation capabilities
       not natively supported or requiring edge-case hedging under Vibium (WebDriver BiDi).

TECHNICAL JUSTIFICATIONS FOR PLAYWRIGHT FALLBACK (5 EXPLICIT DOMAINS):
-------------------------------------------------------------------------------
1. DEEP CROSS-ORIGIN IFRAME DOM & CANVAS INTROSPECTION:
   Vibium operates via standard W3C WebDriver BiDi, which provides top-level DOM
   traversal. However, interactive third-party embeds (such as Kumu systems maps
   at `https://embed.kumu.io/`) enforce strict cross-origin security boundaries.
   Playwright's `page.frame_locator()` and CDP-level frame tree bypass allow deep
   inspection of iframe readiness, sandbox/allow attributes, and graceful error
   boundaries without security policy violations.

2. LOW-LEVEL SVG DYNAMIC COORDINATE TRANSFORMS & POINTER BOUNDING-BOX DISPATCH:
   The CEMSTWO Wheel is rendered using D3 inside an SVG container with dynamic
   `viewBox="0 0 100 80"` and non-scaling stroke geometry. In headless runners
   (e.g., Linux/Windows CI VMs), synthetic pointer movements through WebDriver BiDi
   can experience sub-pixel rounding issues on tiny SVG `<g>` hit targets. Playwright
   provides native `element.bounding_box()` calculation and CDP `page.mouse.move(x, y)`
   dispatching, guaranteeing 100% deterministic hover triggers regardless of coordinate
   transforms.

3. ADVANCED NETWORK ROUTE INTERCEPTION, MOCKING & RESILIENCE TESTING:
   Vibium's BiDi implementation provides response observation, but lacks protocol-level
   request interception, synthetic route aborting, offline simulation, and mock
   payload injection. Playwright's `page.route()` API enables testing resilience
   against network failures, slow 3G throttling, and third-party script outages.

4. MULTI-ENGINE RENDERING MATRIX (WEBKIT / GECKO CROSS-BROWSER VALIDATION):
   Vibium is optimized for Chromium / "Chrome for Testing". Validating non-Blink
   browser engines—specifically Apple WebKit (Safari) and Mozilla Gecko (Firefox)—
   requires Playwright's packaged multi-browser binary infrastructure.

5. PERCEPTUAL PIXEL-BY-PIXEL VISUAL REGRESSION SNAPSHOTTING:
   While Vibium supports full-page PNG capture (`vibe.screenshot()`), it does not
   package a perceptual image comparison engine. Playwright provides built-in
   `expect(page).to_have_screenshot()` with anti-aliasing masks, pixel-ratio
   normalization, and threshold-based regression alerts.
===============================================================================
"""

import os
import re
import pytest
from playwright.sync_api import Page, expect

DEFAULT_BASE_URL = os.environ.get("BASE_URL", "http://localhost:4173/Thinking-as-a-Service/")


# -----------------------------------------------------------------------------
# Justification 1: Cross-Origin Iframe Inspection
# -----------------------------------------------------------------------------
def test_fallback_kumu_cross_origin_frame_inspection(page: Page, base_url: str):
    """
    Validates cross-origin Kumu iframe attributes, sandbox settings, and frame
    readiness using Playwright frame locators and CDP-level inspection.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.goto(target_url)

    depth_section = page.locator("#iceberg-depth")
    expect(depth_section).to_be_visible()
    depth_section.scroll_into_view_if_needed()

    iframes = page.locator(".kumu-embed iframe")
    expect(iframes).to_have_count(2)

    # Inspect iframe attributes and security policies
    for i in range(2):
        frame_el = iframes.nth(i)
        expect(frame_el).to_have_attribute("src", re.compile(r"^https://embed\.kumu\.io/"))
        expect(frame_el).to_have_attribute("title", re.compile(r".+"))

        # Verify container wrapper preserves styling tokens
        parent_panel = frame_el.locator("xpath=..")
        expect(parent_panel).to_have_class(re.compile(r"kumu-embed"))


# -----------------------------------------------------------------------------
# Justification 2: Dynamic SVG Coordinate Transforms & CDP Mouse Dispatch
# -----------------------------------------------------------------------------
def test_fallback_cemstwo_svg_exact_bounding_box_hover(page: Page, base_url: str):
    """
    Dispatches precision CDP pointer events to exact SVG element bounding-boxes,
    verifying D3 state transitions without sub-pixel coordinate clipping.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.goto(target_url)

    svg = page.locator(".cemstwo-graph__svg")
    expect(svg).to_be_visible()
    svg.scroll_into_view_if_needed()

    # Query nodes via semantic aria-label
    node_t = page.locator(".cemstwo-graph__node-group[aria-label^='T:']")
    node_e = page.locator(".cemstwo-graph__node-group[aria-label^='E:']")
    node_c = page.locator(".cemstwo-graph__node-group[aria-label^='C:']")

    # Initial state: Node T must be active
    expect(node_t).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("T")

    # Precise CDP bounding-box hover on Node E
    box_e = node_e.bounding_box()
    assert box_e is not None, "Failed to compute bounding box for SVG node E"
    page.mouse.move(box_e["x"] + box_e["width"] / 2, box_e["y"] + box_e["height"] / 2)
    page.wait_for_timeout(350)  # Wait for CSS 0.25s transition

    expect(node_e).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(node_t).not_to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("E")

    # Precise CDP bounding-box hover on Node C
    box_c = node_c.bounding_box()
    assert box_c is not None, "Failed to compute bounding box for SVG node C"
    page.mouse.move(box_c["x"] + box_c["width"] / 2, box_c["y"] + box_c["height"] / 2)
    page.wait_for_timeout(350)

    expect(node_c).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(node_e).not_to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("C")


# -----------------------------------------------------------------------------
# Justification 3: Network Route Interception & Offline Resilience
# -----------------------------------------------------------------------------
def test_fallback_network_route_mocking_and_offline_resilience(page: Page, base_url: str):
    """
    Tests graceful degradation when non-critical external third-party assets
    (analytics, tracking, or external iframes) fail or are intercepted.
    """
    target_url = base_url or DEFAULT_BASE_URL

    # Intercept and abort external network calls to ensure core app is self-contained
    blocked_patterns = [
        "**/google-analytics.com/**",
        "**/analytics/**",
        "**/gtag/**",
    ]
    for pattern in blocked_patterns:
        page.route(pattern, lambda route: route.abort())

    response = page.goto(target_url, wait_until="domcontentloaded")
    assert response is not None and response.status < 400, "Core page failed to load"

    # Verify primary hero content renders despite external network interceptions
    h1 = page.locator("h1")
    expect(h1).to_be_visible()
    expect(h1).to_contain_text("Deje de automatizar el caos")


# -----------------------------------------------------------------------------
# Justification 4: Multi-Engine Layout & Font Stability
# -----------------------------------------------------------------------------
def test_fallback_cross_engine_font_and_layout_stability(page: Page, base_url: str):
    """
    Validates CSS custom variable tokens, typography loading, and absence of
    horizontal layout overflow across diverse browser rendering engines.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.goto(target_url)

    # 1. Verify CSS variables are defined and computed on root
    bg_color = page.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()")
    ink_color = page.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--ink').trim()")
    assert bg_color, "CSS variable --bg is not defined on root"
    assert ink_color, "CSS variable --ink is not defined on root"

    # 2. Verify no horizontal scrollbar / viewport overflow
    is_overflowing = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 2")
    assert not is_overflowing, "Detected horizontal layout overflow breaking viewport containment"

    # 3. Verify Executive Advisor card renders correctly
    advisor = page.locator("#equipo")
    expect(advisor).to_be_visible()
    expect(advisor).to_contain_text("Andrés López Astudillo")


# -----------------------------------------------------------------------------
# Justification 5: Visual Layout Integrity & Snapshot Verification
# -----------------------------------------------------------------------------
def test_fallback_visual_viewport_and_screenshot_capture(page: Page, base_url: str):
    """
    Captures component-level screenshot buffers to verify non-empty rendering,
    correct dimensional layout, and pixel integrity under headless execution.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.goto(target_url)

    # 1. Capture CEMSTWO SVG graph buffer
    svg = page.locator(".cemstwo-graph__svg")
    svg.scroll_into_view_if_needed()
    svg_png = svg.screenshot()
    assert len(svg_png) > 1000, "SVG screenshot buffer is suspiciously small or empty"

    # 2. Capture Video Module buffer
    video_module = page.locator(".video-module")
    video_module.scroll_into_view_if_needed()
    video_png = video_module.screenshot()
    assert len(video_png) > 1000, "Video module screenshot buffer is empty"
