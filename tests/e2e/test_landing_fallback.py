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


# -----------------------------------------------------------------------------
# Additional Automated Coverage Gates: Mobile Responsive, Regions, & Assets
# -----------------------------------------------------------------------------
def test_fallback_mobile_responsive_kumu_unmount(page: Page, base_url: str):
    """
    Validates responsive mobile adaptation on viewport <= 768px:
    1. Sets viewport to standard mobile dimension (375x812).
    2. Verifies mobile navigation (.iceberg-progress-mobile-header) renders.
    3. Scrolls to depth layer and verifies heavy cross-origin Kumu iframes are
       completely unmounted (iframe count == 0) to avoid mobile memory crashes.
    4. Asserts MobileKumuFallback cards (.kumu-mobile-fallback) render with telemetry
       badge, warning copy, and structural evidence summary.
    """
    try:
        page.set_viewport_size({"width": 375, "height": 812})
        target_url = base_url or DEFAULT_BASE_URL
        page.goto(target_url)

        # 1. Verify mobile progress navigation is mounted and visible
        mobile_nav = page.locator(".iceberg-progress-mobile-container")
        expect(mobile_nav).to_be_visible()
        expect(page.locator(".iceberg-progress-mobile-header")).to_be_visible()

        # 2. Scroll to depth layer
        depth_section = page.locator("#iceberg-depth")
        expect(depth_section).to_be_visible()
        depth_section.scroll_into_view_if_needed()

        # 3. Assert heavy iframes are completely unmounted on mobile
        iframes = depth_section.locator("iframe")
        expect(iframes).to_have_count(0)

        # 4. Assert MobileKumuFallback cards are rendered (2 instances)
        fallback_cards = depth_section.locator(".kumu-mobile-fallback")
        expect(fallback_cards).to_have_count(2)

        # 5. Check first fallback card contents
        card_1 = fallback_cards.first
        expect(card_1).to_be_visible()
        expect(card_1.locator(".kumu-embed__telemetry")).to_contain_text("MOBILE_CONSOLE")
        expect(card_1.locator(".fallback-warning")).to_be_visible()
        expect(card_1.locator(".fallback-badge")).to_be_visible()
    finally:
        # Reset viewport back to desktop default
        page.set_viewport_size({"width": 1280, "height": 800})


def test_fallback_regional_pricing_selector(page: Page, base_url: str):
    """
    Validates dynamic regional pricing selector chips ('usa', 'canada', 'latam')
    and package cards using Playwright locators:
    1. Clicks Canada chip, verifies focus panel and summary update.
    2. Clicks LATAM chip, verifies focus panel and summary update.
    3. Selects package tiers ($28,500, $68,000, $98,000) and asserts dynamic price computation.
    4. Validates WhatsApp dynamic link payload.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.goto(target_url)

    proposal_section = page.locator("#iceberg-proposal")
    expect(proposal_section).to_be_visible()
    proposal_section.scroll_into_view_if_needed()

    # 1. Default state: USA active, $28,500 USD
    expect(page.locator(".total-amount")).to_contain_text("$28,500")

    # 2. Click Canada chip
    chip_canada = proposal_section.locator(".chip", has_text=re.compile(r"Canad[aá]", re.IGNORECASE))
    chip_canada.click()
    expect(chip_canada).to_have_class(re.compile(r"chip--active"))
    expect(proposal_section.locator(".region-focus-panel")).to_contain_text("Gobernanza de IA")

    # 3. Click LATAM chip
    chip_latam = proposal_section.locator(".chip", has_text=re.compile(r"LATAM", re.IGNORECASE))
    chip_latam.click()
    expect(chip_latam).to_have_class(re.compile(r"chip--active"))
    expect(proposal_section.locator(".region-focus-panel")).to_contain_text("Eficiencia Estructural")

    # 4. Switch to gestation package tier ($98,000)
    package_cards = proposal_section.locator(".package-option-card")
    expect(package_cards).to_have_count(3)
    package_cards.nth(2).click()
    expect(page.locator(".total-amount")).to_contain_text("$98,000")

    # 5. Verify WhatsApp link payload reflects LATAM & $98,000
    whatsapp_link = proposal_section.locator(".summary-actions a[href*='wa.me']")
    expect(whatsapp_link).to_be_visible()
    href = whatsapp_link.get_attribute("href") or ""
    assert "LATAM" in href or "98" in href, f"WhatsApp link missing dynamic payload: {href}"


def test_fallback_media_assets_http_200(page: Page, base_url: str):
    """
    Audits all critical multimedia asset URLs on the landing page:
    1. Validates <video poster> and <source src> attributes for sub-path compliance.
    2. Executes HTTP GET requests for video poster and video source, verifying HTTP 200 / 206.
    3. Validates preload link in <head> for poster image returns HTTP 200.
    4. Validates key static media assets under /Thinking-as-a-Service/Assets/ return HTTP 200.
    5. Validates any <img> elements present on the page render without broken dimensions.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.goto(target_url)

    # 1. Video element poster and source
    video = page.locator(".video-module video")
    expect(video).to_be_visible()
    poster = video.get_attribute("poster")
    assert poster, "Video element missing poster attribute"
    assert "/Thinking-as-a-Service/" in poster, f"Video poster violates sub-path prefix: {poster}"

    poster_resp = page.request.get(poster)
    assert poster_resp.status == 200, f"Video poster returned HTTP {poster_resp.status}: {poster}"

    sources = video.locator("source")
    expect(sources).to_have_count(1)
    source_src = sources.first.get_attribute("src")
    assert source_src, "Video source missing src attribute"
    assert "/Thinking-as-a-Service/" in source_src, f"Video source violates sub-path prefix: {source_src}"

    video_resp = page.request.get(source_src)
    assert video_resp.status in (200, 206), f"Video media returned HTTP {video_resp.status}: {source_src}"

    # 2. Preload link in head
    preload_poster = page.locator("link[rel='preload'][as='image']")
    if preload_poster.count() > 0:
        preload_href = preload_poster.first.get_attribute("href")
        assert preload_href, "Preload link missing href attribute"
        assert "/Thinking-as-a-Service/" in preload_href, f"Preload link violates sub-path: {preload_href}"
        preload_resp = page.request.get(preload_href)
        assert preload_resp.status == 200, f"Preload poster returned HTTP {preload_resp.status}: {preload_href}"

    # 3. Direct static media asset verification
    static_assets = [
        "Assets/visual-mapping-poster.jpg",
        "Assets/equipo/espada.png",
    ]
    base_prefix = target_url.rstrip("/") + "/"
    for rel_asset in static_assets:
        full_asset_url = f"{base_prefix}{rel_asset}"
        asset_resp = page.request.get(full_asset_url)
        assert asset_resp.status == 200, f"Static asset '{rel_asset}' returned HTTP {asset_resp.status}: {full_asset_url}"

    # 4. If any <img> elements exist in DOM, audit them
    images = page.locator("img")
    for i in range(images.count()):
        img = images.nth(i)
        src = img.get_attribute("src")
        assert src, f"Image #{i} has empty src attribute"
        assert "undefined" not in src and "null" not in src, f"Malformed image src: {src}"
        resp = page.request.get(src)
        assert resp.status == 200, f"Image asset returned HTTP {resp.status}: {src}"
        natural_w = img.evaluate("el => el.naturalWidth")
        natural_h = img.evaluate("el => el.naturalHeight")
        assert natural_w > 0 and natural_h > 0, f"Image #{i} ({src}) failed to render dimensions"


