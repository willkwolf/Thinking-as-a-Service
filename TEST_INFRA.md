# TEST_INFRA.md — Automated Testing Infrastructure & Architecture Specification
**Repository**: `Thinking-as-a-Service`  
**Version**: 2.0.0  
**Last Updated**: 2026-10-15  
**Owner**: QA & Test Engineering (`test_writer_m6`)  
**Scope**: Testing philosophy, dual-engine test runner architecture, 4-tier quality gates, feature inventory mapping, and coverage thresholds.

---

## 1. TESTING PHILOSOPHY

The testing architecture of `Thinking-as-a-Service` is grounded in **opaque-box (black-box), requirement-driven verification**:

1. **Behavioral Invariants Over Implementation Details**:
   - Tests assert observable user journeys, interface states, visual responsiveness, and commercial deliverables rather than internal React component state or private helper functions.
   - If a test fails, it must directly indicate that user-facing functionality or an architectural contract has broken.

2. **Strict Elimination of Facade & Tautological Tests**:
   - Zero facade tests: Every test executes against real hydrated DOM nodes, renders dynamic D3 geometry, clicks interactive chips, triggers real scroll calculations (`window.scrollY > window.innerHeight * 0.45`), or crawls real network asset responses.
   - Assertions verify explicit, derived authoritative values (e.g., `$28,500`, `$68,000`, `$98,000` USD pricing; `07:36` video duration; Dr. Andrés López Astudillo doctoral credentials; ISO 30401 knowledge artifact deliverables).

3. **Anti-Fragile Assertion Design**:
   - **Case-Insensitive & Text-Transform Normalization**: The design system employs CSS `text-transform: uppercase` on `.eyebrow` elements and editorial tags. Test assertions normalize text (e.g., `body_text.lower()` or case-insensitive regular expressions `re.compile(r"10[.,]2%")`) to avoid brittle failures against typographic styling.
   - **Polling Conditions (`wait_for_condition`)**: High-performance React 19 hydration and Framer Motion / CSS transitions are tested with bounded polling (default interval 100ms, timeout 3.5s–10.0s), preventing arbitrary `time.sleep` race conditions.

---

## 2. DUAL-ENGINE TEST RUNNER ARCHITECTURE

The repository implements a deliberate division of labor between two distinct automation engines:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        AUTOMATED E2E TEST RUNNERS                      │
├───────────────────────────────────┬────────────────────────────────────┤
│         PRIMARY RUNNER            │         FALLBACK RUNNER            │
│         Vibium (W3C BiDi)         │           Playwright               │
├───────────────────────────────────┼────────────────────────────────────┤
│ File: test_landing_vibium.py      │ File: test_landing_fallback.py     │
│ Protocol: WebDriver BiDi (WS)     │ Protocol: Chrome DevTools / Driver │
│ Command: npm run test:vibium      │ Command: npm run test:playwright   │
│ Target: Functional user journeys, │ Target: Deep CDP introspection,    │
│ reactive hydration, copy, D3 sync │ SVG bounding-boxes, offline mock,  │
│ and pricing assertions.           │ cross-engine layouts, screenshots. │
└───────────────────────────────────┴────────────────────────────────────┘
```

### 2.1 Primary Runner: Vibium (W3C WebDriver BiDi)
- **Protocol**: Standard W3C WebDriver BiDi (Bidirectional) protocol over WebSockets.
- **Engine**: Autonomous Chrome for Testing binary managed in headless mode.
- **Scope**: Primary functional gate executing 8 core user scenarios:
  1. `test_landing_hero`: Headline, subcopy, editorial branding, Pre-IA category tag, proof strip (10.2%, 74%).
  2. `test_whatsapp_floating_cta`: Hidden at top, visible past 45% viewport scroll, valid `wa.me` destination.
  3. `test_video_player_module`: HTML5 controls enabled, exact duration metadata `07:36`.
  4. `test_team_executive_advisor`: Card renders Dr. Andrés López Astudillo with doctoral credentials.
  5. `test_kumu_embeds`: Exactly 2 desktop Kumu embeds pointing to `embed.kumu.io`.
  6. `test_cemstwo_interactive_svg_graph`: D3 SVG wheel interactivity (default T active, hover E -> updates detail panel letter 'E', hover C -> updates detail panel letter 'C').
  7. `test_pricing_and_methodology_copy_integrity`: Core metrics, ISO 30401 knowledge artifacts, absence of prohibited hourly rates (`@$300/hr`, `@$229/hr`).
  8. `test_regional_currency_pricing_toggle`: Interactive region chips (`usa`, `canada`, `latam`), dynamic focus text update, package tier selection ($28.5k, $68k, $98k USD), and WhatsApp payload verification.

### 2.2 Fallback Runner: Isolated Playwright
- **Protocol**: Direct driver / Chrome DevTools Protocol (CDP).
- **Scope**: Quarantined suite covering 5 specialized browser automation domains where WebDriver BiDi has known limitations, plus deep responsive and media auditing:
  1. **Cross-Origin Iframe DOM Introspection** (`test_fallback_kumu_cross_origin_frame_inspection`): Inspects sandbox attributes and container styling of third-party `embed.kumu.io` embeds without security policy violations.
  2. **Low-Level SVG Dynamic Coordinate Transforms** (`test_fallback_cemstwo_svg_exact_bounding_box_hover`): Calculates `element.bounding_box()` and dispatches CDP pointer coordinates to tiny SVG `<g>` nodes in dynamic `viewBox="0 0 100 80"`, eliminating sub-pixel rounding misses.
  3. **Network Route Interception & Offline Simulation** (`test_fallback_network_route_mocking_and_offline_resilience`): Aborts non-critical external third-party network requests (analytics/tags) to prove the landing page is self-contained and resilient.
  4. **Multi-Engine Layout & Typography Invariants** (`test_fallback_cross_engine_font_and_layout_stability`): Asserts CSS custom property inheritance (`--bg`, `--ink`) on document root and ensures zero horizontal viewport overflow (`scrollWidth <= innerWidth + 2`).
  5. **Perceptual Visual Regression Buffers** (`test_fallback_visual_viewport_and_screenshot_capture`): Captures PNG byte buffers of dynamic components (`.cemstwo-graph__svg`, `.video-module`) to guard against blank canvas regressions.
  6. **Mobile Responsive Breakpoint Audit** (`test_fallback_mobile_responsive_kumu_unmount`): Emulates standard mobile viewport (`375x812`), asserts heavy Kumu iframes are completely unmounted (count == 0) to prevent mobile browser memory exhaustion, and verifies `MobileKumuFallback` cards and `IcebergProgressMobile` render cleanly.
  7. **Regional Pricing & Package Configurator** (`test_fallback_regional_pricing_selector`): Verifies interactive chip buttons, dynamic region text, package cards, and WhatsApp link formatting.
  8. **Comprehensive Media Asset Crawler** (`test_fallback_media_assets_http_200`): Validates `<video poster>`, `<source src>`, `<link rel="preload">`, and static image assets (`equipo/espada.png`, `visual-mapping-poster.jpg`) return HTTP 200 (or 206 partial content) with non-zero dimensions and proper `/Thinking-as-a-Service/` sub-path prefixes.

### 2.3 Multi-Runner Concurrency Architecture (`tests/conftest.py`)
To prevent the known Playwright Sync API hazard (`Error: It looks like you are using Playwright Sync API inside the asyncio loop`), `tests/conftest.py` seamlessly coordinates session state:
- When running `test:vibium` alone, `vibe` launches autonomous Chrome for Testing via `vibium.browser_sync.launch()`.
- When running `test:all` (all test files in one pytest session), `vibe` detects the shared pytest-playwright session instance and wraps it with `_NoOpPw` stop isolation, enabling all 23 tests across Vibium, Playwright fallback, and legacy suites to execute in a single process without loop collisions.

---

## 3. THE 4-TIER REGRESSION GATE ARCHITECTURE

The repository enforces a strict, progressive 4-tier regression gate:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        4-TIER REGRESSION GATE                          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
 TIER 1                          TIER 2                          TIER 3
Static Type Safety Gate         Production Build Gate           Primary Functional Gate
npm run lint                    npm run build                   npm test (Vibium BiDi)
- tsc --noEmit                  - sync-assets.mjs               - 8 core user journeys
- Strict TypeScript 5.8         - tsconfig.app.json             - Hero & copy integrity
- 0 compiler errors             - Vite production bundle        - Dynamic CTA scroll >45%
- 0 unused locals/params        - dist/ generated               - Video 07:36 & advisor
                                - Base URL prefixing            - CEMSTWO D3 hover sync
                                - assetsDir: 'app-assets'       - Kumu desktop iframes (2)
                                                                - Regional price chips
    │                               │                               │
    └───────────────────────────────┼───────────────────────────────┘
                                    │
                                    ▼
                                 TIER 4
                        Engine Fallback & Resilience Gate
                        npm run test:playwright
                        - Cross-origin Kumu iframe audit
                        - CDP SVG bounding-box hover
                        - Network route interception & offline resilience
                        - Multi-engine rendering & custom property audit
                        - Perceptual visual screenshot buffer assertions
                        - Mobile responsive breakpoint <=768px (iframe unmount)
                        - Regional price chip selector & package tiers
                        - HTTP 200 media asset link & dimensions crawler
```

### Canonical Gate Commands
| Tier | Gate Name | Canonical Command | Target Files | Verification Purpose |
|---|---|---|---|---|
| **Tier 1** | Static Type Safety | `npm run lint` | Whole project (`tsconfig.json`) | Enforces strict typing with 0 errors. |
| **Tier 2** | Production Build | `npm run build` | `src/`, `public/`, `dist/` | Syncs assets, validates `tsconfig.app.json`, bundles Vite SPA. |
| **Tier 3** | Primary Functional | `npm run test:vibium` (or `npm test`) | `tests/e2e/test_landing_vibium.py` | 8 functional scenarios via W3C BiDi protocol. |
| **Tier 4** | Engine Fallback | `npm run test:playwright` | `tests/e2e/test_landing_fallback.py` | 8 resilience, CDP, mobile, and media scenarios. |
| **Full Gate** | 3-Tier Pre-Merge Gate | `npm run test:gate` | Sequential: Tier 1 + Tier 2 + Tier 3 | Mandatory CI/CD pre-merge quality gate. |
| **Full Suite** | Complete Test Suite | `npm run test:all` | All files in `tests/e2e/` (23 tests) | Comprehensive multi-runner regression sweep. |

---

## 4. FEATURE INVENTORY TEST MAPPING

Every feature declared in `PROJECT.md` and `SCOPE.md` maps to concrete automated tests:

| Feature ID | Feature Name | Primary Test | Fallback / Secondary Test | Invariant Assertion |
|---|---|---|---|---|
| **F-07 / F-08** | Hero Narrative & Anti-Hourly Pricing | `test_landing_hero`, `test_pricing_and_methodology_copy_integrity` | `test_fallback_network_route_mocking_and_offline_resilience` | Headline `"Deje de automatizar el caos. Automatice el margen."`, zero `@$300/hr` or `@$229/hr`. |
| **F-11** | Floating WhatsApp CTA (>45% scroll) | `test_whatsapp_floating_cta` | `test_landing.py::test_whatsapp_cta_visibility` | `#floating-cta` has no `.visible` initially; gains `.visible` on scroll; valid `wa.me` href. |
| **F-11** | Video Player Module & Timing | `test_video_player_module` | `test_fallback_visual_viewport_and_screenshot_capture` | `.video-module video` has `controls`; duration text displays `"07:36"`; non-empty screenshot buffer. |
| **F-05** | Executive Leadership Advisor Card | `test_team_executive_advisor` | `test_fallback_cross_engine_font_and_layout_stability` | `#equipo` has `.signal-lead`, mentions `"Andrés López Astudillo"` and `"PhD"` / `"Dr."`. |
| **F-10** | Desktop Kumu Systems Embeds | `test_kumu_embeds` | `test_fallback_kumu_cross_origin_frame_inspection` | Exactly 2 desktop iframes targeting `https://embed.kumu.io/`. |
| **F-10** | CEMSTWO Interactive D3 SVG Wheel | `test_cemstwo_interactive_svg_graph` | `test_fallback_cemstwo_svg_exact_bounding_box_hover` | Node T active by default; hover E activates E and updates detail letter to 'E'; hover C updates to 'C'. |
| **F-06 / F-11**| Regional Currency Chips & Pricing Tiers | `test_regional_currency_pricing_toggle` | `test_fallback_regional_pricing_selector` | Chips `usa`, `canada`, `latam` update active state and focus copy; package cards toggle `$28,500`, `$68,000`, `$98,000` USD. |
| **F-11** | Mobile Responsive Fallback (<=768px) | Covered via Playwright engine viewport | `test_fallback_mobile_responsive_kumu_unmount` | Viewport 375x812: 0 Kumu iframes, 2 `MobileKumuFallback` cards, `IcebergProgressMobile` header visible. |
| **F-13 / F-14**| Sub-Path Hosting & Media Assets HTTP 200 | Built-in production asset sync verification | `test_fallback_media_assets_http_200` | Poster, MP4 video source, preload link, and static PNGs return HTTP 200/206 with sub-path prefix `/Thinking-as-a-Service/`. |

---

## 5. COVERAGE THRESHOLDS & QUALITY BARRIERS

| Dimension | Threshold Required | Verified Actual | Status |
|---|---|---|---|
| **TypeScript Static Errors** | 0 errors | 0 errors (`npm run lint`) | **100% PASS** |
| **Production Build Bundling** | Code 0, clean `dist/` | Code 0, clean `dist/` (`npm run build`) | **100% PASS** |
| **Vibium BiDi Tests** | 8/8 passing | 8/8 passing in ~36s (`npm run test:vibium`) | **100% PASS** |
| **Playwright Fallback Tests** | 8/8 passing | 8/8 passing in ~7s (`npm run test:playwright`) | **100% PASS** |
| **Consolidated Legacy Suite** | 7/7 passing | 7/7 passing in ~6s (`tests/e2e/test_landing.py`) | **100% PASS** |
| **Full Regression Suite** | 23/23 passing | 23/23 passing in ~41s (`npm run test:all`) | **100% PASS** |
| **Canonical Pre-Merge Gate** | Code 0 across all 3 tiers | Code 0 (`npm run test:gate`) | **100% PASS** |

---

*This document is authoritative for all test engineering within `Thinking-as-a-Service`. Any modifications to test suites or quality gates must maintain or increase these coverage thresholds.*
