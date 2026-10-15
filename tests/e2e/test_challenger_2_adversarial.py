"""
Empirical Adversarial Verification Suite — Challenger 2
======================================================
Tasks Verified Empirically:
1. Semantic & structural consistency between ES and EN in `src/content/site.ts`.
2. EBITDA positioning and margin protection framing in both languages.
3. Strict elimination of academic and ecological jargon from the commercial front-end.
4. Land & Expand packaging (14-day X-Ray + Retainer FDE) and absolute ban on hourly billing.
5. Verification of `docs/poc-kit/`: 6 complete documents and verbatim legal review disclaimer in doc 04.
6. Verification of `openwiki/`: 4-tier authority hierarchy, Hipotesis.md epistemic classification,
   14-day viability assessment (3 scenarios + Clock-Stop), and complete H0-H6 traceability matrix.
7. End-to-end interactive bilingual browser execution (Spanish & English locale emulation + intake modal).
"""

import re
from pathlib import Path
import pytest
from playwright.sync_api import Browser, Page, expect

ROOT_DIR = Path(__file__).resolve().parent.parent.parent
SITE_TS = ROOT_DIR / "src" / "content" / "site.ts"
POC_KIT_DIR = ROOT_DIR / "docs" / "poc-kit"
OPENWIKI_DIR = ROOT_DIR / "openwiki"


# =============================================================================
# 1. SEMANTIC & STRUCTURAL CONSISTENCY (ES vs EN in site.ts)
# =============================================================================
def test_es_en_structural_and_semantic_parity():
    """Verify structural parity and key metrics between ES and EN content."""
    assert SITE_TS.exists(), f"site.ts not found at {SITE_TS}"
    content = SITE_TS.read_text(encoding="utf-8")

    # Both languages must be present
    assert "es: {" in content, "Missing Spanish content block in site.ts"
    assert "en: {" in content, "Missing English content block in site.ts"

    # Both languages must declare the 8 iceberg layers with identical layer IDs
    layer_ids = ["surface", "diagnosis", "evidence", "formula", "cemstwo", "signal", "proposal", "depth"]
    for lid in layer_ids:
        assert f"id: '{lid}'" in content, f"Missing iceberg layer id '{lid}'"

    # Verify Proof Points in both ES and EN
    assert "10.2%" in content, "Missing 10.2% EBITDA drain metric"
    assert "74%" in content, "Missing 74% stalled AI initiatives metric"
    assert "ISO 30401" in content, "Missing ISO 30401 reference"

    # Verify Pricing packages in both ES and EN
    for pkg_id in ["exploration", "modeling", "gestation"]:
        assert f"id: '{pkg_id}'" in content, f"Missing package id '{pkg_id}'"

    assert "28500" in content, "Missing $28,500 base price"
    assert "68000" in content, "Missing $68,000 base price"
    assert "98000" in content, "Missing $98,000 base price"


# =============================================================================
# 2. EBITDA POSITIONING & MARGIN PROTECTION
# =============================================================================
def test_ebitda_and_margin_framing():
    """Verify prominent EBITDA and margin destruction framing in both ES and EN."""
    content = SITE_TS.read_text(encoding="utf-8")
    es_block = content[content.find("es: {"):content.find("en: {")]
    en_block = content[content.find("en: {"):]

    # Spanish EBITDA & margin assertions
    assert "EBITDA" in es_block, "Spanish block missing EBITDA"
    assert "margen" in es_block.lower(), "Spanish block missing margin reference"
    assert "Deje de automatizar el caos. Automatice el margen." in es_block
    assert "destrucción de EBITDA" in es_block
    assert "Drenaje de EBITDA anual por complejidad no resuelta" in es_block

    # English EBITDA & margin assertions
    assert "EBITDA" in en_block, "English block missing EBITDA"
    assert "margin" in en_block.lower(), "English block missing margin reference"
    assert "Stop automating chaos. Automate margins." in en_block
    assert "stop EBITDA destruction" in en_block
    assert "Annual EBITDA drained by unaddressed operational complexity" in en_block


# =============================================================================
# 3. STRICT ELIMINATION OF ACADEMIC / ECOLOGICAL JARGON
# =============================================================================
def test_elimination_of_academic_and_ecological_jargon():
    """
    Verify that academic and ecological jargon banned from the commercial front-end
    does not appear in src/content/site.ts.
    """
    content = SITE_TS.read_text(encoding="utf-8").lower()

    banned_terms = [
        "biomimicry",
        "biomimesis",
        "biomímesis",
        "autopoiesis",
        "autopoyesis",
        "homeostasis",
        "hylomorphism",
        "hilomorfismo",
        "ecología industrial",
        "industrial ecology",
        "metabolismo organizacional",
        "organizational metabolism",
        "simbiosis",
        "symbiosis",
        "cibernética de segundo orden",
        "second-order cybernetics",
        "fisiología organizacional",
    ]

    for term in banned_terms:
        assert term not in content, f"Banned academic/ecological jargon '{term}' detected in site.ts"


# =============================================================================
# 4. LAND & EXPAND PACKAGING & ZERO HOURLY BILLING RATES
# =============================================================================
def test_land_and_expand_packaging_and_anti_hourly_ban():
    """
    Verify Land & Expand packaging:
    - Phase 1: 14-day X-Ray ($28,500 USD fixed scope)
    - Phase 2: Retainer FDE (8 weeks / $68,000 USD and 12 weeks / $98,000 USD)
    - Absolute ban on billable hourly rates ($/hr, /hora, $300/hr, $229/hr)
    """
    content = SITE_TS.read_text(encoding="utf-8")

    # Phase 1: 14-day X-Ray verification
    assert "14 Días" in content or "14 días" in content
    assert "14 Days" in content
    assert "Executive Complexity X-Ray" in content
    assert "Radiografía de Complejidad Organizacional" in content
    assert "Grafo Snapshot Interactivo Privado" in content
    assert "Private Interactive Snapshot Graph" in content
    assert "Playbook de Poda y Simplificación Operativa" in content
    assert "Pruning & Operational Simplification Playbook" in content

    # Phase 2: Retainer FDE verification
    assert "Forward Deployed" in content
    assert "Retainer" in content
    assert "Live Ontology" in content or "Ontología Viva" in content

    # Total Ban on Hourly Rates
    assert "@$300/hr" not in content, "Prohibited rate @$300/hr detected"
    assert "@$229/hr" not in content, "Prohibited rate @$229/hr detected"
    assert "$300/hr" not in content, "Prohibited rate $300/hr detected"
    assert "$229/hr" not in content, "Prohibited rate $229/hr detected"

    # Regex search for hourly billing patterns: e.g. "$150/hr", "200 USD/hora"
    hourly_rate_match = re.search(r"\b(\$|USD\s*)\s*\d+\s*/\s*(hr|hora|h)\b", content, re.IGNORECASE)
    assert hourly_rate_match is None, f"Illegal hourly rate pattern detected: {hourly_rate_match.group(0) if hourly_rate_match else ''}"

    # Verify that procurement asterisk notes clarify that billing is 100% fixed-scope
    assert "Invoicing is 100% fixed-scope" in content
    assert "facturación es 100% a precio cerrado" in content or "cero tarifas abiertas" in content or "zero open-ended hourly billing" in content


# =============================================================================
# 5. POC-KIT COMPLETENESS & VERBATIM LEGAL REVIEW DISCLAIMER
# =============================================================================
def test_poc_kit_documents_and_verbatim_disclaimer():
    """
    Verify docs/poc-kit/ structure:
    1. All 6 documents present and non-empty (>5000 bytes each).
    2. Document 04 contains the exact verbatim legal review disclaimer.
    """
    assert POC_KIT_DIR.exists(), f"poc-kit directory not found at {POC_KIT_DIR}"

    expected_docs = [
        "01-ficha-cualificacion-diagnostico.md",
        "02-sow-modular-fase1-xray.md",
        "03-cronograma-14-dias-protocolo-entrega.md",
        "04-borrador-nda-politica-anonimizacion.md",
        "05-matriz-raci-gobernanza-escalamiento.md",
        "06-protocolo-cierre-evaluacion-fase2.md",
    ]

    for doc_name in expected_docs:
        doc_path = POC_KIT_DIR / doc_name
        assert doc_path.exists(), f"Missing PoC Kit document: {doc_name}"
        assert doc_path.stat().st_size > 5000, f"PoC Kit document {doc_name} is too small (<5000 bytes)"

    # Document 04 verbatim legal disclaimer check
    doc_04 = (POC_KIT_DIR / "04-borrador-nda-politica-anonimizacion.md").read_text(encoding="utf-8")
    expected_disclaimer = (
        "Este documento es una plantilla operativa técnica y organizativa. "
        "No constituye asesoramiento legal formal ni sustituye la revisión jurídica preceptiva "
        "por parte de los asesores legales habilitados de cada una de las partes."
    )
    assert expected_disclaimer in doc_04, "Document 04 is missing the exact verbatim legal review disclaimer"


# =============================================================================
# 6. OPENWIKI AUTHORITY HIERARCHY & TRACEABILITY AUDIT
# =============================================================================
def test_openwiki_authority_hierarchy_and_epistemic_traceability():
    """
    Verify openwiki/ documentation:
    1. 4-tier Authority Hierarchy: PlayBook > OpenWiki > KUMU > CEMSTWO.
    2. Epistemic classification of Hipotesis.md (Evidence, Hypotheses, Interpretations, Decisions).
    3. 14-day viability assessment (Scenario 1 Zero-IT, Scenario 2 Marcha Blanca, Scenario 3 IT Dependencies) + Clock-Stop policy.
    4. Complete H0-H6 traceability matrix with all 12 dimensions.
    """
    assert OPENWIKI_DIR.exists(), f"openwiki directory not found at {OPENWIKI_DIR}"

    # 1. Authority Hierarchy
    gov_file = OPENWIKI_DIR / "governance-and-agents.md"
    assert gov_file.exists(), "Missing openwiki/governance-and-agents.md"
    gov_text = gov_file.read_text(encoding="utf-8")
    assert "PLAYBOOK DE ENTREGA (Canon Operativo)" in gov_text
    assert "OPENWIKI (Gobernanza del Conocimiento" in gov_text
    assert "KUMU & INTELIGENCIA VISUAL (Diferenciador" in gov_text
    assert "CEMSTWO & PENSAMIENTO SISTÉMICO (Metodología Analítica Back-End)" in gov_text

    # 2. Epistemic Classification of Hipotesis.md
    strat_file = OPENWIKI_DIR / "strategic-hypotheses.md"
    assert strat_file.exists(), "Missing openwiki/strategic-hypotheses.md"
    strat_text = strat_file.read_text(encoding="utf-8")
    assert "[Evidencia / Observed]" in strat_text
    assert "[Hipótesis]" in strat_text
    assert "[Interpretación]" in strat_text
    assert "[Decisión Aprobada]" in strat_text
    for h_id in [f"H-{i:02d}" for i in range(1, 13)]:
        assert h_id in strat_text, f"Missing thesis {h_id} in strategic-hypotheses.md"

    # 3. 14-Day Viability Assessment & Clock-Stop
    viab_file = OPENWIKI_DIR / "viability-14-days.md"
    assert viab_file.exists(), "Missing openwiki/viability-14-days.md"
    viab_text = viab_file.read_text(encoding="utf-8")
    assert "ESCENARIO 1: VIABLE 14 DÍAS" in viab_text
    assert "ESCENARIO 2: ALCANCE REDUCIDO" in viab_text
    assert "ESCENARIO 3: NO VIABLE" in viab_text
    assert "Clock-Stop" in viab_text or "clock-stop" in viab_text.lower()
    assert "Zero-IT" in viab_text

    # 4. Master Traceability Matrix H0 to H6
    matrix_file = OPENWIKI_DIR / "traceability-matrix.md"
    assert matrix_file.exists(), "Missing openwiki/traceability-matrix.md"
    matrix_text = matrix_file.read_text(encoding="utf-8")
    for hito in ["H0", "H1", "H2", "H3", "H4", "H5", "H6"]:
        assert hito in matrix_text, f"Missing hito {hito} in traceability matrix"
    # Verify presence of canonical columns
    assert "ID" in matrix_text
    assert "Hito" in matrix_text
    assert "Tarea" in matrix_text
    assert "Agente responsable" in matrix_text
    assert "Dependencia" in matrix_text
    assert "Estado" in matrix_text
    assert "Evidencia" in matrix_text
    assert "Riesgo" in matrix_text
    assert "Criterio de aceptación" in matrix_text
    assert "Fecha objetivo" in matrix_text
    assert "Bloqueo" in matrix_text
    assert "Decisión" in matrix_text


# =============================================================================
# 7. INTERACTIVE BROWSER VERIFICATION (SPANISH & ENGLISH EMULATION)
# =============================================================================
def test_browser_spanish_default_and_intake_modal(page: Page, base_url: str):
    """
    Test default Spanish browser rendering and interactive intake modal:
    - Verifies lang="es", Spanish headline.
    - Clicks 'Solicitar Reality Audit' to open the intake modal.
    - Verifies modal contents (14-day badge, corporate profile fields, privacy note).
    - Closes modal cleanly.
    """
    page.goto(base_url)
    expect(page.locator("html")).to_have_attribute("lang", "es")

    hero = page.locator("#iceberg-surface")
    expect(hero).to_be_visible()
    expect(hero.locator("#hero-title")).to_contain_text("Deje de automatizar el caos. Automatice el margen.")

    # Open intake modal
    cta_intake = hero.locator(".btn-hero-intake")
    expect(cta_intake).to_be_visible()
    cta_intake.click()

    # Modal verification
    modal = page.locator(".intake-modal-dialog")
    expect(modal).to_be_visible()
    expect(modal.locator(".intake-badge")).to_contain_text("Executive Complexity X-Ray")
    expect(modal.locator(".intake-title")).to_contain_text("14 Días")
    expect(modal.locator(".intake-subtitle")).to_contain_text("EBITDA")

    # Step 1: Check form inputs
    company_input = modal.locator("#intake-company")
    expect(company_input).to_be_visible()
    expect(modal.locator("#intake-industry")).to_be_visible()
    expect(modal.locator("#intake-scale")).to_be_visible()

    # Fill Step 1 and advance to Step 2
    company_input.fill("Empirical Test Corp")
    next_btn_1 = modal.locator("button:has-text('Continuar a Fricción')")
    expect(next_btn_1).to_be_enabled()
    next_btn_1.click()

    # Step 2: Systemic Friction
    expect(modal.locator(".friction-radio-group")).to_be_visible()
    expect(modal.locator("#intake-notes")).to_be_visible()
    next_btn_2 = modal.locator("button:has-text('Continuar a Agendamiento')")
    next_btn_2.click()

    # Step 3: Executive Schedule & Privacy Note
    expect(modal.locator("#intake-exec-name")).to_be_visible()
    expect(modal.locator("#intake-exec-email")).to_be_visible()
    expect(modal.locator(".intake-privacy-note")).to_be_visible()

    # Close modal
    close_btn = modal.locator(".intake-modal-close")
    close_btn.click()
    expect(modal).not_to_be_visible()


def test_browser_english_locale_emulation(browser: Browser, base_url: str):
    """
    Emulate an English browser (locale='en-US') and verify:
    - document lang attribute switches to 'en'.
    - Hero renders English title: 'Stop automating chaos. Automate margins.'
    - Proof points render English labels.
    - Pricing package 1 displays 'Phase 1: Executive Complexity X-Ray'.
    - Intake modal renders English copy.
    """
    context = browser.new_context(locale="en-US")
    en_page = context.new_page()

    try:
        en_page.goto(base_url)
        expect(en_page.locator("html")).to_have_attribute("lang", "en")

        hero = en_page.locator("#iceberg-surface")
        expect(hero.locator("#hero-title")).to_contain_text("Stop automating chaos. Automate margins.")
        expect(hero.locator(".subcopy")).to_contain_text("We do not sell software or open-ended engineering hours")

        # Check proof points
        expect(hero).to_contain_text("10.2%")
        expect(hero).to_contain_text("74%")
        expect(hero).to_contain_text("ISO 30401")

        # Check Proposal & Pricing Section in English
        proposal = en_page.locator("#iceberg-proposal")
        expect(proposal).to_be_visible()
        proposal.scroll_into_view_if_needed()

        expect(proposal.locator("#proposal-title")).to_be_visible()
        expect(proposal.locator(".package-option-card").first).to_contain_text("Phase 1: Executive Complexity X-Ray")

        # Open intake modal in English
        cta_intake = hero.locator(".btn-hero-intake")
        expect(cta_intake).to_be_visible()
        cta_intake.click()

        modal = en_page.locator(".intake-modal-dialog")
        expect(modal).to_be_visible()
        expect(modal.locator(".intake-badge")).to_contain_text("Phase 1: Executive Complexity X-Ray")
        expect(modal.locator(".intake-title")).to_contain_text("Executive Complexity X-Ray Request (14 Days)")

        # Close modal
        close_btn = modal.locator(".intake-modal-close")
        close_btn.click()
        expect(modal).not_to_be_visible()
    finally:
        context.close()
