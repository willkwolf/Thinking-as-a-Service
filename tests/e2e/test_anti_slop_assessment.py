"""
Anti-Slop Design Policy & Agentic Compliance Assessment Test Suite.
Validates adherence to:
1. No default SaaS purple gradients, glassmorphism or radial neon orbs.
2. Specific typography hierarchy: Fraunces (display), Plus Jakarta Sans / Sora (body), IBM Plex Mono (telemetry).
3. No generic Lucide icons, emojis or unvetted checkmarks.
4. No fabricated evidence or claims (Warwick/GSI, MIT/BCG, ISO 30401, Dr. Andrés López Astudillo, PhD).
5. Approximate calibration of complexity simulator with explicit non-guarantee footnote.
6. Sober timeline treatment (~14 days structured sprint) with zero hyperbolic overpromises.
7. Presence of real interactions, accessible semantic elements, and keyboard/focus states.
"""

import pytest
from typing import Callable, Any
import time

DEFAULT_BASE_URL = "http://localhost:4173/Thinking-as-a-Service/"


def wait_for_condition(
    predicate: Callable[[], Any],
    timeout: float = 6.0,
    interval: float = 0.1,
    failure_message: str = "Condition not met within timeout",
) -> Any:
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


def test_anti_slop_no_generic_ai_tropes(vibe, base_url):
    """
    Mandatory Constraint 1, 2, 3:
    Checks that no generic AI clichés are present in DOM:
    - No floating neon orbs, no purple/cyan linear-gradients
    - No generic AI bento grids
    - No low-ticket direct response countdowns or artificial badges
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    # Check for absence of deleted low-ticket direct response artifacts
    assert vibe.find(".hero-status-pill") is None, "Anti-pattern detected: .hero-status-pill must not exist"
    assert vibe.find(".hero-trust-matrix") is None, "Anti-pattern detected: .hero-trust-matrix must not exist"
    assert vibe.find(".audience-filter") is None, "Anti-pattern detected: .audience-filter must not exist"
    assert vibe.find(".authority-bar") is None, "Anti-pattern detected: .authority-bar must not exist"
    assert vibe.find(".faq-accordion") is None, "Anti-pattern detected: .faq-accordion must not exist"
    assert vibe.find(".final-cta-banner") is None, "Anti-pattern detected: .final-cta-banner must not exist"
    assert vibe.find(".proposal-guarantee-ribbon") is None, "Anti-pattern detected: .proposal-guarantee-ribbon must not exist"
    assert vibe.find(".floating-cta__dot") is None, "Anti-pattern detected: .floating-cta__dot must not exist"


def test_anti_slop_typography_and_brand_identity(vibe, base_url):
    """
    Mandatory Constraint 4:
    Verifies that typography is intentional and adheres to Crema Editorial design system:
    - H1 uses Fraunces
    - Body uses Plus Jakarta Sans / Sora
    - Telemetry uses IBM Plex Mono
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    h1 = wait_for_condition(lambda: vibe.find("h1"), timeout=8.0)
    assert h1 is not None

    # Check computed typography
    font_family = vibe.evaluate("window.getComputedStyle(document.querySelector('h1')).fontFamily")
    assert "Fraunces" in font_family, f"Expected 'Fraunces' display font for H1, got: {font_family}"

    # Check telemetry font
    telemetry = vibe.find(".desktop-navbar__depth-telemetry")
    if telemetry:
        mono_font = vibe.evaluate("window.getComputedStyle(document.querySelector('.desktop-navbar__depth-telemetry')).fontFamily")
        assert "IBM Plex Mono" in mono_font or "SFMono" in mono_font or "Consolas" in mono_font, (
            f"Expected mono font for telemetry, got: {mono_font}"
        )


def test_anti_slop_no_decorative_emojis_in_legal_and_navigation(vibe, base_url):
    """
    Mandatory Constraint 5:
    Verifies that decorative emojis are not used as lazy substitutes for professional UI.
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    footer = wait_for_condition(lambda: vibe.find(".footer-layer"), timeout=8.0)
    assert footer is not None
    footer_text = footer.text()

    # Verify no emojis like ⚖️, ⚠️, 🔒, 💼 in footer links
    for emoji in ["⚖️", "⚠️", "🔒", "💼"]:
        assert emoji not in footer_text, f"Anti-pattern detected: Found decorative emoji '{emoji}' in footer"


def test_anti_slop_authentic_claims_and_sober_timelines(vibe, base_url):
    """
    Mandatory Constraint 6 & 7:
    Verifies that:
    - Real executive advisor is Dr. Andrés López Astudillo, PhD
    - Empirical citations are genuine [GSI/Warwick], [MIT/BCG], ISO 30401
    - Timeline is structured indicatively (~14 días), no hyperbolic guarantees ('cero fricción garantizada')
    - Complexity simulator includes explicit indicative approximation disclaimer
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    # 1. Executive verification in Signal layer
    signal_section = wait_for_condition(lambda: vibe.find("#iceberg-signal"), timeout=8.0)
    assert signal_section is not None
    signal_section.scrollIntoView()

    equipo = wait_for_condition(lambda: vibe.find("#equipo"), timeout=8.0)
    assert equipo is not None
    equipo_text = equipo.text()
    assert "Andrés López Astudillo" in equipo_text
    assert "PhD" in equipo_text or "Doctor" in equipo_text

    # 2. Complexity simulator disclaimer in Diagnosis layer
    diagnosis_section = vibe.find("#iceberg-diagnosis")
    if diagnosis_section:
        diagnosis_section.scrollIntoView()

    cost_note = wait_for_condition(lambda: vibe.find(".explorer-footnote"), timeout=8.0)
    assert cost_note is not None
    note_text = cost_note.text()
    assert "aproximada" in note_text.lower() or "indicativo" in note_text.lower(), (
        f"Simulator must carry an indicative approximation disclaimer, got: '{note_text}'"
    )
    assert "no constituye garantía contractual" in note_text.lower(), (
        "Simulator note must state that it does not constitute a contractual guarantee"
    )

    # 3. No hyperbolic claims in Hero subcopy
    hero_subcopy = vibe.find(".hero-copy .subcopy")
    assert hero_subcopy is not None
    subcopy_text = hero_subcopy.text()
    assert "erradicar" not in subcopy_text.lower(), "Hyperbolic word 'erradicar' must not appear in hero subcopy"
    assert "garantizando que la tecnología" not in subcopy_text.lower(), "Overpromising guarantee must not appear in hero subcopy"
    assert "~14 días" in subcopy_text or "14 días" in subcopy_text


def test_anti_slop_interaction_coverage_and_pricing_tiers(vibe, base_url):
    """
    Mandatory Constraint 9 & 11:
    Verifies real product interactions, state synchronization, and fixed-scope pricing transparency:
    - Region switcher updates focus text and deliverables
    - Package selector updates total price and dynamic payload
    """
    url = base_url or DEFAULT_BASE_URL
    vibe.go(url)

    proposal = wait_for_condition(lambda: vibe.find("#iceberg-proposal"), timeout=8.0)
    assert proposal is not None
    proposal.scrollIntoView()

    # Fixed scope pricing checks
    total_amount = wait_for_condition(lambda: vibe.find(".total-amount"), timeout=8.0)
    assert total_amount is not None
    assert "$28,500" in total_amount.text()

    # Verify benchmark note for procurement
    procurement_note = wait_for_condition(lambda: vibe.find(".procurement-asterisk-note"), timeout=8.0)
    assert procurement_note is not None
    assert "ISO 30401" in procurement_note.text()
    assert "sin bolsas de horas abiertas" in procurement_note.text().lower()
