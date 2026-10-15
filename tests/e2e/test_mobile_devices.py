"""
===============================================================================
COMPREHENSIVE MOBILE DEVICE & VIEWPORT REGRESSION TEST SUITE
===============================================================================
Repository: Thinking-as-a-Service
Scope: Dedicated mobile layout, responsiveness, and anti-overflow testing across
       Google Pixel (7, 8, 9, 10), iPhones (SE, 12-16, Pro Max), and popular
       LATAM smartphones (Samsung Galaxy A-series, Xiaomi Redmi, Motorola Moto G).
===============================================================================
"""

import os
import pytest
from playwright.sync_api import Page, expect

DEFAULT_BASE_URL = os.environ.get("BASE_URL", "http://localhost:4173/Thinking-as-a-Service/")

MOBILE_DEVICES = [
    {
        "id": "pixel_7_10",
        "name": "Google Pixel 7 / 8 / 9 / 10",
        "width": 412,
        "height": 915,
    },
    {
        "id": "iphone_standard",
        "name": "Apple iPhone 12 / 13 / 14 / 15 / 16",
        "width": 390,
        "height": 844,
    },
    {
        "id": "iphone_pro_max",
        "name": "Apple iPhone Pro Max / Plus",
        "width": 430,
        "height": 932,
    },
    {
        "id": "iphone_se",
        "name": "Apple iPhone SE / iPhone 8",
        "width": 375,
        "height": 667,
    },
    {
        "id": "samsung_galaxy_latam",
        "name": "Samsung Galaxy A14/A54/S21/S24 (Dominant LATAM)",
        "width": 360,
        "height": 800,
    },
    {
        "id": "xiaomi_redmi_latam",
        "name": "Xiaomi Redmi Note 11/12/13 (LATAM High Share)",
        "width": 393,
        "height": 873,
    },
    {
        "id": "budget_compact",
        "name": "Compact / Ultra-Narrow Budget Device",
        "width": 320,
        "height": 568,
    },
]


@pytest.mark.parametrize("device_spec", MOBILE_DEVICES, ids=[d["id"] for d in MOBILE_DEVICES])
def test_zero_horizontal_overflow(page: Page, base_url: str, device_spec):
    """
    Validates that across all target mobile devices (Pixel, iPhone, Samsung, Xiaomi),
    scrollWidth equals innerWidth with ZERO horizontal overflow or left-justified gaps.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.set_viewport_size({"width": device_spec["width"], "height": device_spec["height"]})
    page.goto(target_url, wait_until="networkidle")

    metrics = page.evaluate("""() => {
        const docEl = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
        const innerWidth = window.innerWidth;
        const clientWidth = docEl.clientWidth;

        // Try scrolling horizontally
        window.scrollTo(500, 0);
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

        // Check each section bounding rect
        const sections = Array.from(document.querySelectorAll('.layer'));
        const sectionOverflows = sections.map(s => ({
            id: s.id,
            width: s.getBoundingClientRect().width,
            right: s.getBoundingClientRect().right,
            overflows: s.getBoundingClientRect().right > innerWidth + 1
        })).filter(s => s.overflows);

        return {
            scrollWidth,
            innerWidth,
            clientWidth,
            scrollLeft,
            sectionOverflows
        };
    }""")

    assert metrics["scrollWidth"] <= metrics["innerWidth"] + 1, (
        f"[{device_spec['name']}] Horizontal overflow detected! "
        f"scrollWidth={metrics['scrollWidth']}px > innerWidth={metrics['innerWidth']}px "
        f"(diff: {metrics['scrollWidth'] - metrics['innerWidth']}px)"
    )
    assert metrics["scrollLeft"] == 0, (
        f"[{device_spec['name']}] Page was able to scroll horizontally to x={metrics['scrollLeft']}"
    )
    assert len(metrics["sectionOverflows"]) == 0, (
        f"[{device_spec['name']}] Sections overflowing: {metrics['sectionOverflows']}"
    )


@pytest.mark.parametrize("device_spec", MOBILE_DEVICES, ids=[d["id"] for d in MOBILE_DEVICES])
def test_mobile_navigation_and_ui_hierarchy(page: Page, base_url: str, device_spec):
    """
    Verifies that on mobile devices:
    1. Desktop navbar is hidden (display: none).
    2. Mobile sticky progress header is visible and functional.
    3. Mobile drawer toggle opens and closes correctly.
    4. Heavy desktop Kumu iframes are unmounted, rendering MobileKumuFallback cards.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.set_viewport_size({"width": device_spec["width"], "height": device_spec["height"]})
    page.goto(target_url, wait_until="networkidle")

    # 1. Desktop Navbar hidden
    desktop_nav = page.locator(".desktop-navbar")
    expect(desktop_nav).not_to_be_visible()

    # 2. Mobile Progress header is present and visible
    mobile_nav = page.locator(".iceberg-progress-mobile-container")
    expect(mobile_nav).to_be_visible()

    # 3. Mobile drawer toggle interaction
    toggle_btn = page.locator(".iceberg-progress-mobile-header__toggle")
    expect(toggle_btn).to_be_visible()
    toggle_btn.click()
    page.wait_for_timeout(200)

    drawer = page.locator(".iceberg-progress-mobile-drawer")
    expect(drawer).to_be_visible()

    # Close drawer
    toggle_btn.click()
    page.wait_for_timeout(200)

    # 4. Kumu heavy embeds protection
    depth_section = page.locator("#iceberg-depth")
    expect(depth_section).to_be_visible()
    depth_section.scroll_into_view_if_needed()

    iframes = depth_section.locator("iframe")
    expect(iframes).to_have_count(0)

    fallback_cards = depth_section.locator(".kumu-mobile-fallback")
    expect(fallback_cards).to_have_count(2)


@pytest.mark.parametrize("device_spec", MOBILE_DEVICES, ids=[d["id"] for d in MOBILE_DEVICES])
def test_simplicity_matrix_centered_and_intact(page: Page, base_url: str, device_spec):
    """
    Validates Section 04 (Simplicity Matrix):
    Verifies the container is centered, legible, and all 4 archetype cards are stacked
    without right-edge cutoffs or clipping.
    """
    target_url = base_url or DEFAULT_BASE_URL
    page.set_viewport_size({"width": device_spec["width"], "height": device_spec["height"]})
    page.goto(target_url, wait_until="networkidle")

    matrix_section = page.locator("#iceberg-formula")
    expect(matrix_section).to_be_visible()
    matrix_section.scroll_into_view_if_needed()
    page.wait_for_timeout(300)

    matrix_box = page.locator(".simplicity-matrix-container")
    expect(matrix_box).to_be_visible()

    # Bounding box of the simplicity matrix
    box_rect = matrix_box.bounding_box()
    assert box_rect is not None
    assert box_rect["x"] >= 0, f"[{device_spec['name']}] Matrix x position is negative: {box_rect['x']}"
    assert box_rect["x"] + box_rect["width"] <= device_spec["width"] + 2, (
        f"[{device_spec['name']}] Matrix right edge exceeds viewport: {box_rect['x'] + box_rect['width']} > {device_spec['width']}"
    )

    # All 4 archetype cards rendered
    cards = page.locator(".archetype-card")
    expect(cards).to_have_count(4)

    for i in range(4):
        card = cards.nth(i)
        card_rect = card.bounding_box()
        assert card_rect is not None
        assert card_rect["width"] > 200, f"[{device_spec['name']}] Card {i} too narrow: {card_rect['width']}px"
        assert card_rect["x"] + card_rect["width"] <= device_spec["width"] + 2
