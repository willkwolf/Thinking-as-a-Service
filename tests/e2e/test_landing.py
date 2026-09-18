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
    expect(body).to_contain_text("10,2%")
    body_text = body.inner_text()
    assert (
        "Diagnóstico de Complejidad" in body_text
        or "Complexity Diagnosis" in body_text
    ), "Missing 'Complexity Diagnosis' or 'Diagnóstico de Complejidad' in body copy"
    assert (
        "Matriz de Simplicidad" in body_text
        or "Simplicity Matrix" in body_text
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

    # Find the node group for E, C, and T
    node_t = page.locator(".cemstwo-graph__node-group", has_text="T")
    node_e = page.locator(".cemstwo-graph__node-group", has_text="E")
    node_c = page.locator(".cemstwo-graph__node-group", has_text="C")

    # The default selected node should be T (active class applied)
    expect(node_t).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))

    # Hover over 'E' node group
    node_e.hover()
    page.wait_for_timeout(300)  # Wait for transition duration (0.25s) to complete

    # 'E' should now be active, and 'T' should lose active class
    expect(node_e).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(node_t).not_to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))

    # Verify detail panel displays E details
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("E")

    # Hover over 'C' node group
    node_c.hover()
    page.wait_for_timeout(300)

    # 'C' should now be active, 'E' inactive
    expect(node_c).to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))
    expect(node_e).not_to_have_class(re.compile(r"\bcemstwo-graph__node-group--active\b"))

    # Verify detail panel displays C details
    expect(page.locator(".cemstwo-detail__letter")).to_have_text("C")

