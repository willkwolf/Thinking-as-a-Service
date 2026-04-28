import re
from playwright.sync_api import Page, expect

def test_landing_hero(page: Page):
    """Test that the hero section loads properly"""
    page.goto("http://localhost:8000")
    
    # Check Title
    expect(page).to_have_title(re.compile("Visual Mapping | Kumu"))
    
    # Check Hero H1
    h1 = page.locator("h1")
    expect(h1).to_contain_text("No diseñamos estrategias.")
    expect(h1).to_contain_text("Describimos sistemas.")

def test_whatsapp_cta_visibility(page: Page):
    """Test the floating WhatsApp CTA appears after scrolling"""
    page.goto("http://localhost:8000")
    
    cta = page.locator("#floating-cta")
    
    # Wait for the page to be ready
    page.wait_for_load_state("networkidle")
    
    # Should be hidden initially (or visually hidden via CSS 'bottom: -100px')
    expect(cta).not_to_have_class(re.compile(r"\bvisible\b"))
    
    # Scroll down past 50vh
    page.evaluate("window.scrollBy(0, window.innerHeight)")
    
    # Should become visible
    expect(cta).to_have_class(re.compile(r"\bvisible\b"))
    
    # Verify the href
    expect(cta).to_have_attribute("href", re.compile("wa.me"))

def test_team_section_rendered(page: Page):
    """Test that the data.js dynamically renders the team section"""
    page.goto("http://localhost:8000")
    
    # Scroll to team section to ensure lazy loads or visibility
    page.locator("#equipo").scroll_into_view_if_needed()
    
    # Check for team members
    team_members = page.locator(".team-member")
    expect(team_members).to_have_count(3)
    
    # Check one specific member
    expect(team_members.nth(0).locator("h3")).to_have_text("El Mago")
