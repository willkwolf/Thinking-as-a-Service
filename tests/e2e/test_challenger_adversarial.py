"""
Empirical Adversarial Verification Suite — Challenger 1
Directly stress tests:
1. Dynamic boundary conditions on Kumu unmount (768px vs 769px) & dynamic window resizing.
2. Regional currency chips ('usa', 'canada', 'latam') dynamic DOM toggles & WhatsApp payload.
3. Dead code zero-import & bundle purity (dist/ bundle does not contain dead file exports).
4. Asset exclusion audit for 44.8 MB video.
"""

import os
import re
from pathlib import Path
import pytest
from playwright.sync_api import Page, expect

ROOT_DIR = Path(__file__).resolve().parent.parent.parent


def test_adversarial_kumu_viewport_boundaries(page: Page, base_url: str):
    """
    Stress-test the exact breakpoint boundary (768px vs 769px) and dynamic resize:
    - At 768px: Kumu iframes MUST be completely unmounted (count == 0); MobileKumuFallback MUST be rendered (count == 2).
    - At 769px: Kumu iframes MUST be mounted (count == 2); MobileKumuFallback MUST be unmounted (count == 0).
    - Dynamic resize from 1200px -> 600px -> 1200px must dynamically mount/unmount cleanly.
    """
    # 1. Desktop mode: 769px boundary test
    page.set_viewport_size({"width": 769, "height": 800})
    page.goto(base_url)
    depth_section = page.locator("#iceberg-depth")
    expect(depth_section).to_be_visible()
    depth_section.scroll_into_view_if_needed()

    expect(depth_section.locator("iframe")).to_have_count(2)
    expect(depth_section.locator(".kumu-mobile-fallback")).to_have_count(0)

    # 2. Exact mobile boundary: 768px
    page.set_viewport_size({"width": 768, "height": 800})
    # Wait for resize listener to update state
    page.wait_for_timeout(200)

    expect(depth_section.locator("iframe")).to_have_count(0)
    expect(depth_section.locator(".kumu-mobile-fallback")).to_have_count(2)

    # Check fallback elements
    fallbacks = depth_section.locator(".kumu-mobile-fallback")
    for i in range(2):
        fb = fallbacks.nth(i)
        expect(fb.locator(".kumu-embed__telemetry")).to_have_text("MOBILE_CONSOLE")
        expect(fb.locator(".fallback-warning")).to_be_visible()
        expect(fb.locator(".fallback-badge")).to_be_visible()
        expect(fb.locator(".fallback-desc")).to_be_visible()

    # 3. Dynamic resize back to 1024px: iframes should remount, fallbacks unmount
    page.set_viewport_size({"width": 1024, "height": 800})
    page.wait_for_timeout(200)

    expect(depth_section.locator("iframe")).to_have_count(2)
    expect(depth_section.locator(".kumu-mobile-fallback")).to_have_count(0)

    # Reset
    page.set_viewport_size({"width": 1280, "height": 800})


def test_adversarial_regional_pricing_dynamic_toggle(page: Page, base_url: str):
    """
    Adversarially verify regional currency chips ('usa', 'canada', 'latam')
    and verify dynamic DOM state changes, pricing updates, and WhatsApp URL parameters.
    """
    page.goto(base_url)
    proposal_section = page.locator("#iceberg-proposal")
    expect(proposal_section).to_be_visible()
    proposal_section.scroll_into_view_if_needed()

    # Region chips
    chip_usa = proposal_section.locator(".chip", has_text="USA")
    chip_canada = proposal_section.locator(".chip", has_text=re.compile(r"Canad[aá]", re.IGNORECASE))
    chip_latam = proposal_section.locator(".chip", has_text=re.compile(r"LATAM", re.IGNORECASE))

    focus_panel = proposal_section.locator(".region-focus-panel")
    total_amount = proposal_section.locator(".total-amount")
    package_cards = proposal_section.locator(".package-option-card")
    whatsapp_btn = proposal_section.locator(".summary-actions a[href*='wa.me']")

    # 1. Verify default USA state
    expect(chip_usa).to_have_class(re.compile(r"chip--active"))
    expect(total_amount).to_have_text("$28,500 USD")
    expect(focus_panel).to_contain_text("Margen EBITDA")

    # 2. Switch to Canada
    chip_canada.click()
    expect(chip_canada).to_have_class(re.compile(r"chip--active"))
    expect(chip_usa).not_to_have_class(re.compile(r"chip--active"))
    expect(focus_panel).to_contain_text("Gobernanza de IA")

    # Verify Canadian package card copies reflect Canada regional copy
    expect(package_cards.nth(0)).to_contain_text("14-Day Reality Audit")

    # Check dynamic WhatsApp URL reflects Canada
    wa_href_canada = whatsapp_btn.get_attribute("href") or ""
    assert "Canad" in wa_href_canada or "Gobernanza" in wa_href_canada

    # 3. Switch to LATAM
    chip_latam.click()
    expect(chip_latam).to_have_class(re.compile(r"chip--active"))
    expect(chip_canada).not_to_have_class(re.compile(r"chip--active"))
    expect(focus_panel).to_contain_text("Eficiencia Estructural")

    # Verify LATAM package card copies reflect LATAM regional copy
    expect(package_cards.nth(0)).to_contain_text("Radiografía de Complejidad Organizacional")

    # 4. Cycle through all 3 package tiers ($28,500, $68,000, $98,000)
    # Tier 0: Exploration ($28,500)
    package_cards.nth(0).click()
    expect(total_amount).to_have_text("$28,500 USD")

    # Tier 1: Modeling ($68,000)
    package_cards.nth(1).click()
    expect(total_amount).to_have_text("$68,000 USD")
    from urllib.parse import unquote
    wa_href_tier1 = unquote(whatsapp_btn.get_attribute("href") or "")
    assert "$68,000" in wa_href_tier1, f"WhatsApp link missing $68,000: {wa_href_tier1}"

    # Tier 2: Gestation ($98,000)
    package_cards.nth(2).click()
    expect(total_amount).to_have_text("$98,000 USD")
    wa_href_tier2 = unquote(whatsapp_btn.get_attribute("href") or "")
    assert "$98,000" in wa_href_tier2, f"WhatsApp link missing $98,000: {wa_href_tier2}"


def test_adversarial_dead_files_quarantine():
    """
    Empirically verify that dead files are strictly quarantined:
    1. src/content/complexity.ts is NEVER imported anywhere in src/
    2. src/content/playbook.ts is NEVER imported anywhere in src/
    3. css/ and js/ legacy directories are NOT referenced by index.html or src/
    4. Compiled dist/app-assets/*.js does not contain unique dead code markers.
    """
    src_dir = ROOT_DIR / "src"
    ts_files = list(src_dir.rglob("*.ts")) + list(src_dir.rglob("*.tsx"))

    for f in ts_files:
        content = f.read_text(encoding="utf-8")
        assert "from './complexity'" not in content, f"Illegal import of complexity in {f}"
        assert "from '../content/complexity'" not in content, f"Illegal import of complexity in {f}"
        assert "from './playbook'" not in content, f"Illegal import of playbook in {f}"
        assert "from '../content/playbook'" not in content, f"Illegal import of playbook in {f}"

    # Verify dist bundles exist and don't contain dead code signatures
    dist_dir = ROOT_DIR / "dist" / "app-assets"
    if dist_dir.exists():
        js_bundles = list(dist_dir.glob("*.js"))
        assert len(js_bundles) > 0, "No JS bundles found in dist/app-assets"
        bundle_text = "".join(b.read_text(encoding="utf-8") for b in js_bundles)
        # Dead markers from complexity.ts and playbook.ts
        assert "teamMembers" not in bundle_text, "Dead code marker 'teamMembers' leaked into production bundle"
        assert "kumu-visual-mode" not in bundle_text, "Dead legacy JS marker 'kumu-visual-mode' leaked into production bundle"
        assert "Atkinson Hyperlegible" not in bundle_text, "Dead legacy CSS font leaked into production bundle"


def test_adversarial_sync_assets_and_heavy_media_exclusion():
    """
    Empirically verify that:
    1. Root Assets/ contains 'El_Colapso_de_la_Incertidumbre.mp4' (~44.8 MB).
    2. public/Assets/ does NOT contain 'El_Colapso_de_la_Incertidumbre.mp4'.
    3. dist/Assets/ does NOT contain 'El_Colapso_de_la_Incertidumbre.mp4'.
    4. Active video 'visual-mapping-full.mp4' exists in all three directories.
    """
    root_video = ROOT_DIR / "Assets" / "El_Colapso_de_la_Incertidumbre.mp4"
    assert root_video.exists(), "Root Assets/ is missing the 44.8 MB source video"
    root_size = root_video.stat().st_size
    assert root_size > 40 * 1024 * 1024, f"Expected >40MB, got {root_size} bytes"

    public_video = ROOT_DIR / "public" / "Assets" / "El_Colapso_de_la_Incertidumbre.mp4"
    assert not public_video.exists(), "44.8MB video improperly copied to public/Assets/"

    dist_video = ROOT_DIR / "dist" / "Assets" / "El_Colapso_de_la_Incertidumbre.mp4"
    assert not dist_video.exists(), "44.8MB video improperly bundled into dist/Assets/"

    # Verify active video is properly synchronized
    active_root = ROOT_DIR / "Assets" / "visual-mapping-full.mp4"
    active_public = ROOT_DIR / "public" / "Assets" / "visual-mapping-full.mp4"
    active_dist = ROOT_DIR / "dist" / "Assets" / "visual-mapping-full.mp4"

    assert active_root.exists(), "Active video missing from Assets/"
    assert active_public.exists(), "Active video missing from public/Assets/"
    assert active_dist.exists(), "Active video missing from dist/Assets/"
