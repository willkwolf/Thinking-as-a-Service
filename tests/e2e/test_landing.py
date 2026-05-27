import os
import re
from playwright.sync_api import Page, expect

BASE_URL = os.environ.get("BASE_URL", "http://localhost:4173/Thinking-as-a-Service/")


def test_landing_hero(page: Page):
    page.goto(BASE_URL)
    expect(page).to_have_title(re.compile("Thinking as a Service"))
    h1 = page.locator("h1")
    expect(h1).to_contain_text("ruido")
    expect(h1).to_contain_text("complejidad")


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
    expect(body).to_contain_text("Complexity Diagnosis")
    expect(body).to_contain_text("Matriz de Simplicidad")
    expect(body).to_contain_text("Andrés López Astudillo")


def test_team_section_rendered(page: Page):
    page.goto(BASE_URL)
    page.locator("#equipo").scroll_into_view_if_needed()
    team_members = page.locator(".team-member")
    expect(team_members).to_have_count(3)
    expect(team_members.first.locator("h3")).to_contain_text("Andrés")


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

