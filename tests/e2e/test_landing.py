import os
import re
from playwright.sync_api import Page, expect

BASE_URL = os.environ.get("BASE_URL", "http://localhost:4173/Thinking-as-a-Service/")


def test_landing_hero(page: Page):
    page.goto(BASE_URL)
    expect(page).to_have_title(re.compile("Thinking as a Service"))
    h1 = page.locator("h1")
    expect(h1).to_contain_text("caos")
    expect(h1).to_contain_text("margen")


def test_whatsapp_cta_visibility(page: Page):
    page.goto(BASE_URL)
    cta = page.locator("#floating-cta")
    page.wait_for_load_state("networkidle")
    expect(cta).not_to_have_class(re.compile(r"\bvisible\b"))
    page.evaluate("window.scrollBy(0, window.innerHeight)")
    expect(cta).to_have_class(re.compile(r"\bvisible\b"))
    expect(cta).to_have_attribute("href", re.compile("wa.me"))


def test_video_module_rendered(page: Page):
    page.goto(BASE_URL)
    video_module = page.locator(".video-module")
    expect(video_module).to_be_visible()
    video = video_module.locator("video")
    expect(video).to_have_attribute("controls", "")
    expect(video_module).to_contain_text("07:36")


def test_complexity_and_playbook_language(page: Page):
    page.goto(BASE_URL)
    body = page.locator("body")
    expect(body).to_contain_text(re.compile(r"10[.,]2%"))
    body_text = body.inner_text().lower()
    assert (
        "diagnóstico de complejidad" in body_text
        or "diagnostico de complejidad" in body_text
        or "complexity diagnosis" in body_text
    ), "Missing 'Complexity Diagnosis' or 'Diagnóstico de Complejidad' in body copy"
    assert (
        "matriz de simplicidad" in body_text
        or "simplicity matrix" in body_text
    ), "Missing 'Matriz de Simplicidad' or 'Simplicity Matrix' in body copy"
    expect(body).to_contain_text("Andrés López Astudillo")


def test_team_section_rendered(page: Page):
    page.goto(BASE_URL)
    equipo = page.locator("#equipo")
    equipo.scroll_into_view_if_needed()
    expect(equipo).to_be_visible()
    expect(equipo).to_have_class(re.compile(r"\bsignal-lead\b"))
    expect(equipo).to_contain_text("Andrés")


def test_kumu_embeds(page: Page):
    page.goto(BASE_URL)
    iframes = page.locator(".kumu-embed iframe")
    expect(iframes).to_have_count(2)


def test_cemstwo_graph_hover(page: Page):
    page.goto(BASE_URL)
    # Ensure graph is rendered
    graph_svg = page.locator(".cemstwo-graph__svg")
    expect(graph_svg).to_be_visible()
    graph_svg.scroll_into_view_if_needed()

    # Find the node group for E, C, and T using semantic aria-label
    node_t = page.locator(".cemstwo-graph__node-group[aria-label^='T:']")
    node_e = page.locator(".cemstwo-graph__node-group[aria-label^='E:']")
    node_c = page.locator(".cemstwo-graph__node-group[aria-label^='C:']")

    # The default selected node should be T (active class applied)
    expect(node_t).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))

    # Hover over 'E' node group via bounding box
    box_e = node_e.bounding_box()
    assert box_e is not None, "Failed to compute bounding box for node E"
    page.mouse.move(box_e["x"] + box_e["width"] / 2, box_e["y"] + box_e["height"] / 2)
    page.wait_for_timeout(350)  # Wait for transition duration (0.25s) to complete

    # 'E' should now be active, and 'T' should lose active class
    expect(node_e).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(node_t).not_to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))

    # Verify detail panel displays E details
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("E")

    # Hover over 'C' node group via bounding box
    box_c = node_c.bounding_box()
    assert box_c is not None, "Failed to compute bounding box for node C"
    page.mouse.move(box_c["x"] + box_c["width"] / 2, box_c["y"] + box_c["height"] / 2)
    page.wait_for_timeout(350)

    # 'C' should now be active, 'E' inactive
    expect(node_c).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(node_e).not_to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))

    # Verify detail panel displays C details
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("C")


