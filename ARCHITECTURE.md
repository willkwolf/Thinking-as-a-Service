# ARCHITECTURE.md — System Architecture & Transformation Manual
**Repository**: `Thinking-as-a-Service` (`c:\Dev\Kumu-Service`)  
**Version**: 2.0.0  
**Status**: Canonical / Approved Architecture Reference  
**Last Updated**: 2026-09-17  
**Scope**: Full System Architecture, Baseline Post-Mortem (ANTES), Transformed State (AHORA), Empirical Justification, Residual Technical Debt, and Fundamental Onboarding Q&As.

---

## 1. EXECUTIVE OVERVIEW & ARCHITECTURAL MISSION

### 1.1 Core Business Mission & Value Proposition
`Thinking-as-a-Service` is an executive-tier, high-ticket strategic consulting platform designed to convert enterprise C-Suite decision-makers (CEOs, COOs, VPs of Transformation) into advisory engagements ranging from strategic consulting packages (**$28,500 to $98,000 USD**) to entry diagnostic and playbook audits (**$7,500 to $37,000 USD**). 

The fundamental business thesis of the firm is:
> **"Deje de automatizar el caos. Automatice el margen."** (`src/content/site.ts:79`)

Modern enterprises consistently make the multi-million-dollar mistake of deploying artificial intelligence, robotic process automation (RPA), and complex SaaS stacks directly on top of disordered, undocumented, and politically tangled organizational processes. `Thinking-as-a-Service` provides the antidote: rigorous, scientific systemic diagnosis based on Network Science, Organizational Cybernetics, and the proprietary **CEMSTWO** framework. We map the real network of organizational nodes, isolate systemic friction, and engineer operational simplicity *before* technology investment takes place.

### 1.2 The 8-Layer Narrative "Iceberg" Architecture
The landing page rejects the conventional SaaS marketing pattern (generic 3-column cards, purple blur gradients, floating emoji blobs). Instead, it guides the executive user through a vertical cognitive journey modeled as an **Iceberg** with 8 descending layers:

```
[SEA LEVEL / SURFACE: 0m]
       │
       ▼
 0. Visión Ejecutiva (El Ruido)       --> #iceberg-surface  (Hero, Macro problem, Value proposition, Vector journey)
 1. Diagnóstico de Complejidad        --> #iceberg-diagnosis (Anti-Waste Filter, Entropy tax, Complexity matrix)
 2. Evidencia Visual & Mapeo          --> #iceberg-evidence  (Keynote video breakdown 07:36, Visual telemetry)
 3. Métricas de Estructura            --> #iceberg-formula   (Empirical mathematical ratios of organization)
 4. Ciencia de Redes (CEMSTWO)        --> #iceberg-cemstwo   (Interactive 7-node dynamic SVG wheel & detail panel)
 5. Estrategia y Liderazgo            --> #iceberg-signal    (Dr. Andrés López Astudillo, PhD advisor card & sword)
 6. Propuesta y Pricing               --> #iceberg-proposal  (High-ticket dynamic tiers: USA, Canada, LATAM)
 7. Casos de Estudio & Megatendencias --> #iceberg-depth     (Embedded Kumu live systems maps & study archives)
       │
       ▼
[ABYSSAL DEPTH: 800m+]
```

### 1.3 High-Ticket Aesthetic & Technical Philosophy: "Crema Editorial / Industrial Luxury"
The platform's frontend follows the **"Crema Editorial / Industrial Luxury"** design standard (`src/styles/tokens.css`):
- **Chromatic Foundation**: Editorial warm cream palette (`--bg: #f7f6f2`, `--ink: #121614`, `--panel: rgba(253, 252, 249, 0.76)`). High-contrast signal accents: deep forest signal (`--signal: #163c26`), architectural blueprint gold (`--blueprint: #b08d3e`), and entropy danger terracotta (`--danger: #b04322`).
- **Typographic Hierarchy**:
  - **Display / Editorial**: `'Fraunces'` serif (`src/styles/tokens.css:21`), conveying boardroom gravitas and academic depth.
  - **Body / Technical**: `'Sora'` & `'Plus Jakarta Sans'` (`src/styles/tokens.css:20`), delivering crisp legibility for complex analytical copy.
  - **Telemetry / Systemic**: `'IBM Plex Mono'` (`src/styles/tokens.css:22`), used for coordinates, ratios, metrics, and network node identifiers.
- **Strict Anti-Slop Discipline**:
  - **Zero Tailwind CSS**: 100% native CSS Custom Properties with BEM-scoped components. No unreadable utility class spaghetti.
  - **Zero Lucide / Font Icons**: Visual weight is achieved through bespoke inline SVGs (the Hero Journey vector, the Sacred Geometry Sword of Reality, the CEMSTWO network wheel) and pure Unicode glyphs.
  - **Tufte Data-Ink Ratio**: Every visual mark carries analytical weight. Gratuitous drop shadows, floating blur orbs, and decorative gradients are strictly forbidden.

### 1.4 Runtime Architecture & Data Flow
The application is structured as a client-side Single Page Application (SPA) built with **React 19.1.0**, **TypeScript ~5.8.2**, and **Vite ^6.2.3**, hosted statically on GitHub Pages.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                         App.tsx (Root)                                           │
│  - useThemeMode()       : Locks active theme mode ('day')                                         │
│  - useIcebergDepth()    : Tracks window scroll via IntersectionObserver -> activeLayer           │
│  - useI18n()            : Injects localized content from src/content/site.ts                     │
│  - useD3Background()    : Imperative canvas physics background with prefers-reduced-motion bypass│
└────────┬──────────────────────┬──────────────────────┬──────────────────────┬────────────────────┘
         │                      │                      │                      │
         ▼                      ▼                      ▼                      ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────────────────────────┐
│ IcebergProgress  │  │ IcebergProgress- │  │   FloatingCta    │  │       main.scroll-container     │
│ (Desktop Ruler,  │  │ Mobile (Drawer,  │  │ (WhatsApp CTA,   │  │   8 Sequential Section Layers   │
│  viewport >768px)│  │ viewport <=768px)│  │ scroll > 45% vh) │  │  (#iceberg-surface .. -depth)   │
└──────────────────┘  └──────────────────┘  └──────────────────┘  └─────────────────────────────────┘
```

The application avoids third-party state managers (Redux, Zustand, MobX). State synchronization is achieved through native React hooks and localized event observation:
- **`useI18n.ts`**: Subscribes to `src/content/site.ts`. Reads browser locale or user override, distributing content down the component tree.
- **`useIcebergDepth.ts`**: Mounts an `IntersectionObserver` across all 8 layer DOM IDs, updating `activeLayer` to synchronize `IcebergProgress` and `IcebergProgressMobile`.
- **`CemstwoGraph.tsx`**: Manages local selection (`selectedId: 'C' | 'E' | 'M' | 'S' | 'T' | 'W' | 'O'`), binding D3 DOM events to a reactive React detail card.

---

## 2. ANTES: BASELINE ARCHITECTURAL REALITY (PRE-TRANSFORMATION)

Prior to this architectural transformation, the repository exhibited severe structural fractures, desynchronized test suites, misleading documentation, and absent governance that collectively paralyzed automated agent contributions and degraded reliability.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     ANTES: ARCHITECTURAL DEFICITS                                │
├────────────────────────────────┬────────────────────────────────┬────────────────────────────────┤
│ 1. BROKEN CONVERSION LOOP      │ 2. DESYNCHRONIZED E2E TESTS    │ 3. COGNITIVE DISSONANCE        │
│ • FloatingCta.tsx existed but  │ • tests/e2e/test_landing.py    │ • complexity.ts (172 lines)    │
│   was UNMOUNTED in App.tsx.    │   expected 3 .team-member      │   and playbook.ts (109 lines)  │
│ • Floating WhatsApp button was │   elements (0 in v2 DOM).      │   were 100% dead code.         │
│   never rendered in the DOM.   │ • Expected outdated "ruido" h1 │ • FRONTEND.md directed agents  │
│ • High-ticket lead capture     │   headline; failed on v2 copy. │   to edit dead files.          │
│   completely absent.           │ • 0% test suite pass rate.     │ • False "Source Sans 3" docs.  │
├────────────────────────────────┴────────────────────────────────┴────────────────────────────────┤
│ 4. COMPLETE ABSENCE OF GOVERNANCE & CANONICAL TOOLING                                            │
│ • Zero AGENTS.md file; agents operated without boundaries, risking pollution of dist/ or legacy. │
│ • No test scripts in package.json (npm test did not exist; no npm run test:vibium or test:gate). │
│ • No Definition of Done (DoD); no empirical evidence standard for PRs or automated commits.     │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Unmounted Floating CTA Component (`src/components/layout/FloatingCta.tsx` vs `src/App.tsx`)
- **Baseline Observation**: `src/components/layout/FloatingCta.tsx` was fully implemented with a scroll listener toggling the `.visible` CSS class when `window.scrollY > window.innerHeight * 0.45` and formatting a direct WhatsApp consultation link (`wa.me`).
- **The Defect**: In `src/App.tsx`, lines 5–16 imported `IcebergProgress`, `IcebergProgressMobile`, and the 8 section layers. `FloatingCta` was **neither imported nor rendered anywhere in JSX**.
- **Architectural Consequence**: The primary high-ticket conversion element was completely absent from the live application. Furthermore, the automated test `test_whatsapp_cta_visibility` in `test_landing.py:16-24` failed consistently because `#floating-cta` never attached to the DOM.

### 2.2 Desynchronized E2E Test Suite (`tests/e2e/test_landing.py`)
The existing Playwright test suite (`tests/e2e/test_landing.py`) was a fossilized artifact from the static v1 prototype, asserting conditions that directly contradicted the React 19 v2 application:
1. **Headline Desynchronization (`test_landing.py:11-13`)**:
   - Test asserted: `h1` must contain `"ruido"` and `"complejidad"`.
   - Codebase reality: `src/components/sections/HeroSurface.tsx:15` renders `{hero.title}`, which in `src/content/site.ts:79` is `"Deje de automatizar el caos. Automatice el margen."`.
2. **Team Member DOM Desynchronization (`test_landing.py:44-50`)**:
   - Test asserted: `page.locator(".team-member")` must have a count of 3.
   - Codebase reality: The v2 redesign discarded the generic 3-person team card grid in favor of an authoritative executive advisor panel in `src/components/sections/SignalLayer.tsx:41-55` (`.signal-lead #equipo`), highlighting founding partner Dr. Andrés López Astudillo, PhD. Zero elements with class `.team-member` existed in the DOM.
3. **Locale & Methodology Desynchronization (`test_landing.py:39`)**:
   - Test asserted: `body` must contain `"Complexity Diagnosis"`.
   - Codebase reality: In the default Spanish locale (`es`), the section headers are `"1. El Filtro Anti-Desperdicio"` and `"Diagnóstico de Complejidad"`.

### 2.3 Dead Content Files & Misleading Documentation (`FRONTEND.md`)
- **Dead Code Traps**: `src/content/complexity.ts` (172 lines) and `src/content/playbook.ts` (109 lines) resided in the repository with **zero incoming imports** across the entire build graph.
- **Documentation Falsehoods**: `FRONTEND.md:27-32` explicitly instructed contributors:
  ```markdown
  ## Contenido editable
  - `src/content/complexity.ts`
  - `src/content/playbook.ts`
  - `src/content/iceberg.ts`
  ```
  Any human or autonomous agent following this documentation made edits that produced **zero visual or functional changes** in the running application and bundle. The true runtime content store was `src/content/site.ts`.
- **Typographic Misdirection**: `FRONTEND.md:17` claimed `Body: Source Sans 3`. In reality, `src/styles/tokens.css:20` defined `--font-body: 'Sora', 'Plus Jakarta Sans', system-ui, sans-serif;`.

### 2.4 Complete Absence of Agent Governance & Canonical Tooling
- **No Governance Manual**: No `AGENTS.md` existed. Autonomous agents lacked explicit modification boundaries, leading to potential contamination of build directories (`dist/`), static public folders (`public/Assets/`), or legacy folders (`legacy/`, `css/`, `js/`).
- **No Canonical Test Scripts**: `package.json:6-12` lacked any testing script (`"test"` was undefined). An agent running `npm test` received an exit code 1 (`Missing script: "test"`).
- **No Definition of Done**: No explicit regression gate existed. Agents had no criteria to verify if their changes broke type safety or visual behavior.

---

## 3. AHORA: TRANSFORMED ARCHITECTURAL STATE

The transformed architectural state resolves every historical defect, establishes deterministic agent governance, introduces a zero-overlap skills taxonomy, commits a formal Architecture Decision Record (ADR), and deploys **Vibium** as the primary W3C WebDriver BiDi E2E testing framework.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     AHORA: TRANSFORMED PILLARS                                   │
├────────────────────────────────┬────────────────────────────────┬────────────────────────────────┤
│ 1. RESTORED CONVERSION ENGINE  │ 2. CANONICAL AGENT GOVERNANCE  │ 3. ORTHOGONAL SKILLS TAXONOMY  │
│ • FloatingCta mounted in       │ • AGENTS.md (180 lines).       │ • docs/skills-taxonomy.md      │
│   App.tsx:7, 30.               │ • Canonical Command Matrix.    │   (483 lines, 8 domains).      │
│ • Scroll trigger (>45% vh)     │ • Single Source of Truth       │ • Two-Tier separation:         │
│   activates #floating-cta.     │   locked: src/content/site.ts. │   COMMON vs PROJECT-SPECIFIC.  │
│ • Direct WhatsApp lead capture │ • Rigid Directory Boundaries.  │ • Taste Skill anti-slop dials  │
│   operational and tested.      │ • 3-Tier Regression Gate.      │   calibrated: 4/10, 5/10, 8/10.│
├────────────────────────────────┴────────────────────────────────┴────────────────────────────────┤
│ 4. LONG-TERM ADR 001 COMMITTED           │ 5. VIBIUM PRIMARY TESTING & QUARANTINED FALLBACK      │
│ • docs/adr/001-tech-stack-decision.md.   │ • tests/e2e/test_landing_vibium.py (7 scenarios).     │
│ • Retains React 19 + TypeScript + Vite.  │ • W3C WebDriver BiDi protocol over WebSockets.        │
│ • Retains 100% Native CSS Custom Vars.   │ • tests/e2e/test_landing_fallback.py (5 edge cases).  │
│ • Incremental optimization roadmap:      │ • Canonical scripts: npm test, npm run test:vibium,   │
│   prune framer-motion, modularize D3.    │   npm run test:playwright, npm run test:gate.         │
└──────────────────────────────────────────┴───────────────────────────────────────────────────────┘
```

### 3.1 Functional Floating CTA Mounted in `App.tsx`
`FloatingCta` is now an active node in the root React component tree:
- **Import**: `src/App.tsx:7` — `import { FloatingCta } from './components/layout/FloatingCta';`
- **Mount**: `src/App.tsx:30` — Rendered alongside `IcebergProgress` and `IcebergProgressMobile` within the root fragment.
- **Behavior**: On page load, `#floating-cta` is rendered with class `floating-cta`. When the user scrolls past 45% of the viewport height (`window.scrollY > window.innerHeight * 0.45`), it acquires the `.visible` class (`opacity: 1`, `transform: translateY(0)`), providing persistent access to the C-suite consultation channel (`wa.me`).

### 3.2 Canonical Governance Framework (`AGENTS.md`)
The repository is governed by the authoritative manual `AGENTS.md`, establishing:
1. **Repository Baseline Matrix**: Strict enforcement of React 19.1.0, TypeScript ~5.8.2, Vite ^6.2.3, 100% Native CSS Custom Properties, and GitHub Pages static hosting under `/Thinking-as-a-Service/`.
2. **Canonical Command Matrix**:
   - `npm run sync-assets`: Mirrors raw assets from `Assets/` to `public/Assets/`.
   - `npm run dev`: Boots local development server on port 5173.
   - `npm run build`: Production bundle compilation with strict typechecking (`tsc -p tsconfig.app.json --noEmit && vite build`).
   - `npm run lint`: Typecheck across all files (`tsc --noEmit`).
   - `npm run preview`: Serves production bundle from `dist/` on port 4173.
   - `npm test`: Primary E2E test execution via Vibium (`npm run test:vibium`).
   - `npm run test:vibium`: Runs `test_landing_vibium.py` via pytest in `.venv`.
   - `npm run test:playwright`: Runs isolated Playwright fallback tests (`test_landing_fallback.py`).
   - `npm run test:gate`: The mandatory 3-tier gate (`npm run lint && npm run build && npm test`).
3. **Single Source of Truth (SSOT)**:
   - Declares `src/content/site.ts` as the **exclusive runtime store** for all UI copy, layer definitions, CEMSTWO descriptions, pricing tiers, and WhatsApp messages in both Spanish and English.
   - Formally forbids editing `src/content/complexity.ts` and `src/content/playbook.ts` (quarantined dead files).
4. **Directory Modification Boundaries**:
   - **Allowed Write Zones**: `src/`, `tests/`, `docs/`, documentation roots (`AGENTS.md`, `ARCHITECTURE.md`, `FRONTEND.md`).
   - **Strictly Read-Only**: `dist/` (bundler output), `public/Assets/` (mirrored output), `legacy/`, `css/`, `js/` (v1 residue), `.github/` (CI/CD pipeline).
5. **Definition of Done (DoD)**:
   - Mandatory zero compiler errors, clean build exit code 0, all 7 behavioral scenarios passing in Vibium, and empirical CLI evidence recorded in handoff reports.

### 3.3 Zero-Overlap 8-Domain Skills Taxonomy (`docs/skills-taxonomy.md`)
Authored under `SPEC-SKILL-TAX-001`, this architecture eliminates skill collisions across autonomous agents:
- **Two-Tier Architecture**:
  - **Tier 1 (COMMON / REUSABLE)**: Portable skills without project hardcoding (Visual Design System, UX & Interaction, Web Interface Guidelines, WCAG Accessibility, Responsive Design, Component Architecture, Testing & QA Harness, Multi-Agent Governance).
  - **Tier 2 (PROJECT-SPECIFIC CONTEXT)**: Quarantined contextual assets (`tokens.css`, `CEMSTWO.md`, `site.ts`, Dr. Andrés López Astudillo persona, Kumu iframe IDs).
- **Deep Taste Skill Integration (`Leonxlnx/taste-skill`)**:
  - 15-Point Anti-Slop Forbidden Inventory (bans purple gradients, floating blur orbs, unstyled utility wrappers, generic 3-card grids).
  - 5-Step Brief Inference Protocol (Context -> Persona -> Tension -> Geometry -> Aesthetic).
  - 3 Quantitative Design Dials calibrated for executive C-suite consulting:
    * `DESIGN_VARIANCE: 4/10` (Disciplined editorial structure; prevents random layout chaos).
    * `MOTION_INTENSITY: 5/10` (Functional, dignified kinematics; smooth reveals, zero cartoonish spring bounces).
    * `VISUAL_DENSITY: 8/10` (Executive analytical density; Tufte data-ink ratio, compact telemetry tables).

### 3.4 Technology Stack Decision Record (`docs/adr/001-tech-stack-decision.md`)
ADR 001 establishes the long-term technical direction after evaluating Next.js App Router, Astro Islands, Vanilla ES6, and Incremental React 19:
- **Authoritative Verdict**: RETAIN React 19.1.0 + TypeScript 5.8.2 + Vite 6.2.3 deployed to GitHub Pages.
- **Styling Verdict**: RETAIN 100% Native CSS Custom Properties; zero Tailwind, zero icon fonts.
- **Optimization Directive 1**: Phased removal of `framer-motion` v12.6.3 (replacing `Reveal.tsx` with native CSS keyframes and `useReveal` observer).
- **Optimization Directive 2**: Modularization of monolithic `d3` into discrete sub-packages (`d3-selection`, `d3-scale`, `d3-array`), resolving the 436.9 KB JavaScript bundle footprint.
- **Reversibility Framework**: Clear rollback triggers, criteria, and safety guardrails.

### 3.5 Primary Testing Architecture via Vibium + Quarantined Fallback
Testing is now standardized around modern, agent-friendly protocols:
- **Primary Framework: Vibium (`tests/e2e/test_landing_vibium.py`)**:
  - Built on W3C **WebDriver BiDi** over WebSockets with autonomous Chrome for Testing lifecycle management.
  - Implements all 7 canonical scenarios:
    1. `test_landing_hero`: Headline `"Deje de automatizar el caos. Automatice el margen."`, page title, and editorial journey vector.
    2. `test_whatsapp_floating_cta`: Dynamic scroll activation past 45% viewport height and `wa.me` href integrity.
    3. `test_video_player_module`: HTML5 video player attributes and `07:36` duration label.
    4. `test_team_executive_advisor`: Verification of `.signal-lead #equipo` and Dr. Andrés López Astudillo, PhD.
    5. `test_kumu_embeds`: Verification of 2 high-density desktop Kumu iframes (`embed.kumu.io`).
    6. `test_cemstwo_interactive_svg_graph`: Semantic attribute queries (`.cemstwo-graph__node-group[aria-label^='E:']`), hover actionability, and detail panel synchronization (`.cemstwo-detail__letter`).
    7. `test_pricing_and_methodology_copy_integrity`: Multi-currency tiers and systemic copy integrity.
  - Lifecycle Fixture (`tests/conftest.py`): Automatically detects active dev (port 5173) or preview (port 4173) servers, or launches `vite preview` dynamically.
- **Quarantined Playwright Fallback (`tests/e2e/test_landing_fallback.py`)**:
  - Strictly isolated to 5 documented technical edge cases:
    1. Deep Cross-Origin Iframe DOM & Canvas Introspection (`embed.kumu.io`).
    2. Low-Level SVG Dynamic Coordinate Transforms & Bounding-Box Mouse Dispatch.
    3. Advanced Network Route Interception, Mocking & Offline Resilience (`page.route()`).
    4. Multi-Engine Rendering Matrix (Apple WebKit Safari & Mozilla Gecko Firefox).
    5. Perceptual Pixel-by-Pixel Visual Regression Snapshotting (`to_have_screenshot()`).

---

## 4. JUSTIFICACIÓN & EVIDENCIAS EMPÍRICAS

### 4.1 Structured Comparison: ANTES vs. AHORA

| Evaluation Dimension | ANTES (Baseline Architectural Reality) | AHORA (Transformed Architectural Reality) | Architectural Rationale & Business Impact |
|---|---|---|---|
| **Primary Conversion Loop** | `FloatingCta.tsx` existed in isolation; never imported or mounted in `App.tsx`. Zero floating CTA rendered. | `FloatingCta` mounted in `App.tsx:7,30`. Activates dynamically on scroll >45% viewport height. | Restores primary high-ticket executive lead conversion path ($7,500–$98,000 USD deals via WhatsApp). |
| **E2E Test Pass Rate & Alignment** | 0% pass rate. `test_landing.py` looked for 3 `.team-member` elements and obsolete `"ruido"` `h1` copy. | 100% pass rate. `test_landing_vibium.py` validates actual React 19 v2 components (`.signal-lead #equipo`, exact `h1`). | Eliminates false-negative test failures; restores deterministic continuous integration. |
| **Content Source of Truth** | Ambiguous. `FRONTEND.md` directed edits to unreferenced dead files (`complexity.ts`, `playbook.ts`). | `src/content/site.ts` formally locked as sole active SSOT in `AGENTS.md` and `FRONTEND.md`. Dead files quarantined. | Eliminates developer cognitive fatigue and phantom edits that fail to reflect in production builds. |
| **Agent Governance & Boundaries** | Non-existent. No modification boundaries; high risk of polluting `dist/`, `legacy/`, or `public/Assets/`. | Comprehensive `AGENTS.md` specifying allowed vs prohibited zones, DoD, and 10 onboarding Q&As. | Provides bulletproof operational constraints for autonomous coding agents and human contributors. |
| **Testing Protocol & Tooling** | Untracked ad-hoc test execution. No `npm test` script. Heavy, monolithic Playwright dependency. | **Vibium** as primary W3C WebDriver BiDi driver (`npm test`), with Playwright strictly quarantined for 5 edge cases. | Standardizes on open W3C browser protocol, improves test execution speed, and reduces driver brittleness. |
| **Skills Architecture** | Undocumented; high risk of agent skill collision, role drift, and generic "AI slop" generation. | Formal 8-domain taxonomy in `docs/skills-taxonomy.md` with strict COMMON vs PROJECT-SPECIFIC separation. | Guarantees mathematically orthogonal responsibilities and enforces high-ticket editorial standards. |
| **Long-Term Stack Strategy** | Unclear future; lingering question of Next.js vs Astro migration. Bundle size unmonitored (437 KB JS). | Accepted ADR 001 (`docs/adr/001-tech-stack-decision.md`) committing to React 19 + incremental optimizations. | Provides clear 5-year platform stability with a concrete roadmap to prune Framer Motion and modularize D3. |
| **Reproducibility & Gating** | No regression gate. Contributors could merge breaking changes without automated verification. | 3-Tier Regression Gate: `npm run test:gate` (`lint` -> `build` -> `test`). | Guarantees that no code merges without passing TypeScript typecheck, production build, and E2E tests. |

### 4.2 Empirical Code Evidence & Citations

1. **Floating CTA Mount Verification**:
   - `src/App.tsx:7`: `import { FloatingCta } from './components/layout/FloatingCta';`
   - `src/App.tsx:30`: `<FloatingCta />` rendered directly inside the root component fragment.
   - `src/components/layout/FloatingCta.tsx:12-16`:
     ```tsx
     useEffect(() => {
       const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.45);
       onScroll();
       window.addEventListener('scroll', onScroll, { passive: true });
       return () => window.removeEventListener('scroll', onScroll);
     }, []);
     ```
2. **Single Source of Truth & Hero Headline**:
   - `src/content/site.ts:79`: `title: 'Deje de automatizar el caos. Automatice el margen.',`
   - `src/components/sections/HeroSurface.tsx:15`: `<h1 id="hero-title">{hero.title}</h1>`
3. **Executive Advisor Panel Verification**:
   - `src/components/sections/SignalLayer.tsx:41`: `<article className="signal-lead panel" id="equipo" style={{ marginTop: '1.5rem' }}>`
   - `src/components/sections/SignalLayer.tsx:53-54`:
     ```tsx
     <span className="signal-lead__role">{signalLead.role}</span>
     <h3>{signalLead.name}</h3>
     ```
   - Matches `siteContent.es.signalLead.name` = `"Dr. Andrés López Astudillo, PhD"`.
4. **Canonical Package Scripts & Testing Commands**:
   - `package.json:12-16`:
     ```json
     "test": "npm run test:vibium",
     "test:vibium": ".venv\\Scripts\\pytest.exe tests/e2e/test_landing_vibium.py",
     "test:playwright": ".venv\\Scripts\\pytest.exe tests/e2e/test_landing_fallback.py",
     "test:all": ".venv\\Scripts\\pytest.exe tests/e2e/",
     "test:gate": "npm run lint && npm run build && npm run test"
     ```
5. **Python Testing Dependencies**:
   - `pyproject.toml:7-12`:
     ```toml
     dependencies = [
         "playwright>=1.58.0",
         "pytest>=9.0.3",
         "pytest-playwright>=0.7.2",
         "vibium>=0.1.0",
     ]
     ```
6. **Production Bundle Verification (`dist/`)**:
   - Verified clean production compilation via `npm run build`:
     * `dist/Assets/index-oGYsMuq2.js` (436.9 KB uncompressed; 128.4 KB gzip).
     * `dist/Assets/index-C7z2_Vc7.css` (37.9 KB uncompressed; 7.8 KB gzip).
     * `dist/index.html` (1.1 KB).
     * Exit code 0, 0 TypeScript diagnostic errors.

---

## 5. DEUDA TÉCNICA RESTANTE & HOJA DE RUTA

While the architectural core, governance, and testing infrastructure are now fully modernized, a rigorous engineering audit identifies five residual technical debts scheduled for incremental resolution:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   RESIDUAL TECHNICAL DEBT ROADMAP                                │
├───────────────────────────────┬───────────────────────────────┬──────────────────────────────────┤
│ 1. FRAMER MOTION OVERHEAD     │ 2. MONOLITHIC D3 BUNDLE       │ 3. PHANTOM REST THEME MODE       │
│ • Reveal.tsx is the only user │ • Monolithic import * as d3   │ • useThemeMode.ts is hardcoded   │
│   of framer-motion (12.6.3).  │   in CemstwoGraph & bg hook.  │   to 'day'.                      │
│ • Adds ~38 KB gzip overhead.  │ • Pulls unused d3-geo/zoom/etc│ • tokens.css defines identical   │
│ • Target: Replace with pure   │ • Target: Modularize into     │   colors for [data-time-mode=    │
│   CSS transitions in Phase 1. │   d3-selection, d3-array, etc.│   'rest']. Target: Implement/Cut.│
├───────────────────────────────┴───────────────────────────────┴──────────────────────────────────┤
│ 4. HEAVY MEDIA DUPLICATION IN ASSET PIPELINE │ 5. CLIENT LOGO FALLBACK PLACEHOLDERS              │
│ • scripts/sync-assets.mjs duplicates 53.6 MB │ • LogoCarousel.tsx relies on typographical text   │
│   of raw videos from Assets/ to public/Assets│   badges due to missing SVG corporate marks.      │
│ • Inflates repository size and disk I/O.     │ • Target: Provision licensed monochrome vector    │
│ • Target: Stream via CDN or use symlinks.    │   SVGs for partner and client emblems.           │
└──────────────────────────────────────────────┴───────────────────────────────────────────────────┘
```

### 5.1 Phased Deprecation of `framer-motion` (Overhead: ~38 KB Gzipped)
- **Current Observation**: `package.json:20` includes `"framer-motion": "^12.6.3"`. Inspection of the entire codebase reveals it is imported in **exactly one file**: `src/components/ui/Reveal.tsx:1`.
- **The Issue**: It wraps child elements in a basic vertical slide-and-fade animation (`animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}`). Pulling a full physics and gesture engine for a 16px CSS transition adds ~38 KB gzipped (~65 KB minified) of unnecessary vendor overhead to `index-*.js`.
- **Actionable Roadmap (Phase 1)**:
  1. Refactor `src/components/ui/Reveal.tsx` to use native CSS transitions paired with the existing `useReveal` hook (which already leverages `IntersectionObserver`).
  2. Define a clean `.reveal-wrapper` class in `src/styles/global.css` with `opacity`, `transform: translateY(16px)`, and `transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)`.
  3. Execute `npm uninstall framer-motion @types/framer-motion` and verify with `npm run test:gate`.

### 5.2 Modularization of Monolithic `d3` Imports (Overhead: ~150 KB Uncompressed)
- **Current Observation**: `src/components/ui/CemstwoGraph.tsx:2` and `src/hooks/useD3Background.ts:1` import the entire D3 namespace via `import * as d3 from 'd3'`.
- **The Issue**: D3 v7 is a collection of 30+ independent sub-modules. Importing the root package prevents effective tree-shaking by Rollup/Vite, bundling unused modules such as `d3-geo`, `d3-zoom`, `d3-force`, `d3-chord`, `d3-contour`, `d3-dsv`, `d3-hierarchy`, `d3-random`, and `d3-time`. This single dependency accounts for over 35% of the total 436.9 KB JavaScript bundle.
- **Actionable Roadmap (Phase 2)**:
  1. Refactor imports in `CemstwoGraph.tsx` to target specific sub-packages: `import { select } from 'd3-selection';`.
  2. Refactor imports in `useD3Background.ts` to: `import { select } from 'd3-selection'; import { range } from 'd3-array';`.
  3. Replace `"d3": "^7.9.0"` in `package.json` with `"d3-selection": "^3.0.0"` and `"d3-array": "^3.2.4"`, alongside their respective `@types/*` devDependencies.
  4. Optionally configure dynamic `React.lazy()` loading for `CemstwoGraph` and `useD3Background` so that below-the-fold canvas code is loaded asynchronously after Initial Contentful Paint.

### 5.3 Resolution of Phantom Dark Mode ("Rest Mode")
- **Current Observation**:
  - `FRONTEND.md` previously claimed an automatic time-based dark mode (`06:00–18:59 día, 19:00–05:59 descanso`).
  - In `src/hooks/useThemeMode.ts`, `mode` is hardcoded to `'day'` (`setModeState('day')`), and `tokens.css:33-52` defines identical light color values under `:root[data-time-mode='rest']`.
- **The Issue**: The code maintains the illusion of a dual-theme engine without actual visual differentiation, introducing cognitive friction for developers and clutter in token files.
- **Actionable Roadmap (Phase 3)**:
  - *Option A (Implement True Rest Mode)*: Define a genuine high-contrast dark editorial palette in `tokens.css` (`--bg: #0d110f`, `--ink: #e8e6df`, `--panel: rgba(18, 22, 20, 0.85)`) and reactivate local time calculation in `useThemeMode.ts`.
  - *Option B (Formally Deprecate)*: Remove the unused `:root[data-time-mode='rest']` rules and simplify `useThemeMode.ts` to a static constant, honoring the "Crema Editorial" day palette as the firm's permanent corporate signature.

### 5.4 Asset Pipeline & Heavy Media Duplication
- **Current Observation**: `scripts/sync-assets.mjs` executes `cpSync('Assets', 'public/Assets', { recursive: true })`.
- **The Issue**: The root `Assets/` folder contains two large uncompressed MP4 videos:
  - `El_Colapso_de_la_Incertidumbre.mp4` (44.8 MB)
  - `visual-mapping-full.mp4` (8.8 MB)
  Synchronizing them duplicates over 53.6 MB into `public/Assets/`, swelling local repository footprint to over 110 MB and slowing git operations and build synchronization.
- **Actionable Roadmap (Phase 4)**:
  1. Offload primary video streaming to an enterprise video CDN (e.g., Cloudflare Stream, Vimeo OTT, or AWS CloudFront/S3 with HLS adaptive bitrate streaming).
  2. Retain only lightweight poster WebP/SVG images locally.
  3. In `sync-assets.mjs`, introduce file-type filtering or symbolic linking (`fs.symlinkSync`) during local development.

### 5.5 Logo Carousel Typographical Fallbacks
- **Current Observation**: In `src/components/ui/LogoCarousel.tsx`, corporate logos are rendered as clean typographical badges due to the absence of vector SVG assets in `public/logos/`.
- **Actionable Roadmap (Phase 5)**: Provision authorized monochrome vector marks for enterprise case-study partners, maintaining strict high-contrast editorial styling without introducing color pollution.

---

## 6. THE 10 FUNDAMENTAL ONBOARDING QUESTIONS (Q1 THROUGH Q10)

This section provides exhaustive, verified, and unambiguous answers to the 10 fundamental onboarding questions. Incoming autonomous agents and human software engineers must treat these answers as binding architectural truth.

---

### Q1: ¿Cuál es el propósito del repositorio y a qué usuario final sirve?
- **Verified Answer**: `Thinking-as-a-Service` es una landing page y plataforma de conversión para consultoría estratégica C-Suite de alto valor. Abarca paquetes estratégicos integrales (**engagements de $28,500 a $98,000 USD**) así como diagnósticos y playbooks de entrada (**$7,500 a $37,000 USD**). Su propósito es convencer a líderes empresariales (CEOs, COOs, VPs de Transformación y Directores de Operaciones) de diagnosticar, auditar y reducir la complejidad sistémica y el desorden en sus procesos, personas y estructuras organizacionales **antes** de realizar inversiones costosas en automatización o inteligencia artificial ("Deje de automatizar el caos. Automatice el margen.").
- **Authoritative References**:
  - `README.md:1-12`
  - `src/content/site.ts:46-52` (Metadata: `"Consultoría ejecutiva de alto impacto: diagnostique la complejidad que destruye valor y active simplicidad operativa antes de automatizar con IA"`)
  - `src/content/site.ts:79-84` (Hero copy and value proposition)
  - `src/content/site.ts:346-445` (ES) / `745-845` (EN) (Paquetes estratégicos: Exploración de Terreno $28,500 USD, Modelado y Sondas $68,000 USD, Estrategia Simplicity $98,000 USD) y capas de diagnóstico/auditoría ($7,500–$37,000 USD)

---

### Q2: ¿Cuál es el único Source of Truth para el contenido y los textos del sitio?
- **Verified Answer**: El **único Source of Truth (SSOT)** activo en tiempo de ejecución es:
  ```
  src/content/site.ts
  ```
  Contiene toda la estructura bilingüe (`siteContent.es` como idioma predeterminado y `siteContent.en`), consumida por el hook `src/hooks/useI18n.ts`. Define los textos del hero, las 8 capas del iceberg, las descripciones del modelo CEMSTWO, la información del asesor ejecutivo PhD Andrés López Astudillo, las opciones de pricing y los mensajes preconfigurados de WhatsApp (`siteContent.es.ui.floatingCta`).
- **Strict Prohibition on Dead Files**:
  - ❌ `src/content/complexity.ts` (172 líneas, 0 imports en el grafo de compilación).
  - ❌ `src/content/playbook.ts` (109 líneas, 0 imports en el grafo de compilación).
  *Editar `complexity.ts` o `playbook.ts` produce CERO cambios en la aplicación web y en el bundle `dist/`.*
- **Authoritative References**:
  - `AGENTS.md:50-70`
  - `src/hooks/useI18n.ts:1-35`
  - `src/content/site.ts:46-849`

---

### Q3: ¿Cuáles son los comandos canónicos para compilar, verificar tipos y ejecutar localmente?
- **Verified Answer**: Todo agente o ingeniero debe interactuar con el repositorio utilizando **exclusivamente** los comandos canónicos de `package.json`:
  1. **Sincronización de Assets**: `npm run sync-assets` (ejecuta `node scripts/sync-assets.mjs`, replicando `Assets/` en `public/Assets/`).
  2. **Servidor de Desarrollo**: `npm run dev` (ejecuta sincronización y levanta Vite en `http://localhost:5173/Thinking-as-a-Service/`).
  3. **Compilación de Producción**: `npm run build` (sincroniza assets, corre typecheck estricto de la app `tsc -p tsconfig.app.json --noEmit`, y compila el bundle estático en `dist/`). Debe retornar código de salida 0.
  4. **Verificación de Tipos (Lint)**: `npm run lint` (ejecuta `tsc --noEmit` en todo el proyecto). Debe retornar código de salida 0 con 0 errores.
  5. **Servidor de Preview**: `npm run preview` (sirve `dist/` en `http://localhost:4173/Thinking-as-a-Service/`).
  6. **Suite Primaria de Pruebas**: `npm test` o `npm run test:vibium` (ejecuta `tests/e2e/test_landing_vibium.py` vía pytest bajo el protocolo W3C WebDriver BiDi).
  7. **Suite de Fallback Aislada**: `npm run test:playwright` (ejecuta `tests/e2e/test_landing_fallback.py` para capacidades especiales).
  8. **Suite Completa de Pruebas**: `npm run test:all` (ejecuta todos los tests de `tests/e2e/`).
  9. **Compuerta de Regresión de 3 Niveles**: `npm run test:gate` (`npm run lint && npm run build && npm test`).
- **Authoritative References**:
  - `package.json:6-17`
  - `AGENTS.md:33-48`

---

### Q4: ¿Cuáles son las fronteras de modificación permitidas para agentes autónomos?
- **Verified Answer**: Las fronteras de modificación están estrictamente zonificadas para prevenir regresiones y contaminación de binarios:
  - **Zonas de Escritura Permitidas (`[READ/WRITE]`)**:
    - `src/` (componentes, hooks, estilos, y el SSOT `src/content/site.ts`).
    - `tests/` (suites E2E `test_landing_vibium.py`, `test_landing_fallback.py`, y fixtures en `conftest.py`).
    - `docs/` (ADRs, taxonomía de skills, especificaciones).
    - Raíz de documentación y gobernanza: `AGENTS.md`, `ARCHITECTURE.md`, `FRONTEND.md`, `README.md`.
    - Manifiestos de dependencias cuando se requieran: `package.json`, `pyproject.toml`.
  - **Zonas Estrictamente Prohibidas / Solo Lectura (`[READ-ONLY]`)**:
    - ❌ `dist/`: Salida generada por el bundler. NUNCA se edita manualmente.
    - ❌ `public/Assets/`: Destino de sincronización automática. Las adiciones se hacen en `Assets/` de la raíz.
    - ❌ `legacy/`, `css/`, `js/`: Artefactos fósiles de la v1 estática.
    - ❌ `.github/`: Flujos de despliegue en GitHub Actions (requieren autorización humana explícita).
    - ❌ `.agents/`: Scratchpad de agentes. NUNCA colocar código fuente, tests ejecutables ni datos del proyecto aquí.
- **Authoritative References**:
  - `AGENTS.md:73-105`

---

### Q5: ¿Cómo fluyen los datos y cómo se sincroniza el estado en la aplicación?
- **Verified Answer**: La aplicación implementa un flujo de datos unidireccional y reactivo en React 19 sin bibliotecas de estado global externas:
  1. **Contenido e Internacionalización**: `useI18n()` provee el objeto inmutable `content` (proveniente de `site.ts`) y la función de cambio de idioma. Los componentes leen directamente de este hook.
  2. **Telemetría de Profundidad (Scroll)**: `useIcebergDepth()` observa las 8 secciones mediante una instancia única de `IntersectionObserver`. Cuando una sección entra al viewport (>20% de visibilidad), actualiza `activeLayer` (`'surface'`, `'diagnosis'`, etc.), el cual se pasa como prop a `IcebergProgress` (desktop) y `IcebergProgressMobile` para sincronizar la aguja indicadora y la profundidad en metros (0m a 800m+).
  3. **Activación de CTA**: `FloatingCta.tsx` mantiene estado local (`visible`), evaluando `window.scrollY > window.innerHeight * 0.45` de forma pasiva.
  4. **Grafo CEMSTWO**: `CemstwoGraph.tsx` mantiene `selectedId` ('C', 'E', 'M', 'S', 'T', 'W', 'O'). Al interactuar con los nodos SVG de D3 (hover o click), React actualiza el estado y re-renderiza el panel de detalle (`.cemstwo-detail`), mientras D3 actualiza imperativamente las clases CSS de los nodos (`cemstwo-graph__node-group--active`).
- **Authoritative References**:
  - `src/App.tsx:19-43`
  - `src/hooks/useIcebergDepth.ts:1-60`
  - `src/components/layout/FloatingCta.tsx:1-30`
  - `src/components/ui/CemstwoGraph.tsx:34-150`

---

### Q6: ¿Por qué existen directorios `css/`, `js/` y archivos como `legacy/index.static.html`?
- **Verified Answer**: Son **residuos históricos** de la versión 1 estática original del sitio web previa a la migración a React 19.
  - `css/styles.css` (19.1 KB) contiene las reglas CSS monolíticas de la v1.
  - `js/main.js` (7.5 KB) y `js/data.js` (1 KB) contenían la lógica imperativa vanilla de la v1.
  - `legacy/index.static.html` (161 B) es el punto de entrada obsoleto.
  *Ninguno de estos archivos es importado por `index.html`, por Vite, ni por ningún componente de `src/`. No forman parte del bundle `dist/` y existen únicamente con fines de auditoría histórica. Ningún agente debe modificarlos ni depender de ellos.*
- **Authoritative References**:
  - `AGENTS.md:107-115`
  - `docs/adr/001-tech-stack-decision.md:8`

---

### Q7: ¿Cómo interactúan React y D3 en los componentes interactivos?
- **Verified Answer**: React y D3 interactúan mediante una estricta **frontera de aislamiento DOM**:
  1. **React como Propietario del Contenedor**: React crea el contenedor DOM mediante un `useRef<SVGSVGElement>` (o `HTMLDivElement`) y gestiona el ciclo de vida, la destrucción y el estado de la aplicación (`selectedId`, `locale`).
  2. **D3 como Manipulador Imperativo**: Dentro de un `useEffect`, D3 toma el control exclusivo del interior del SVG (`d3.select(svgRef.current)`). D3 calcula las posiciones trigonométricas de los nodos, dibuja las aristas de la red, adjunta atributos semánticos (`tabindex="0"`, `role="button"`, `aria-label`), y vincula los event listeners de puntero (`mouseenter`, `mouseleave`, `click`).
  3. **Cero Conflicto VDOM**: React **nunca** reconcilia ni renderiza nodos internos hijos creados por D3. Cuando el estado de React cambia (por ejemplo, al cambiar de idioma), el efecto de D3 reconstruye o actualiza el SVG. Cuando D3 detecta un evento de usuario, llama al setter de estado de React (`setSelectedId(d.id)`), disparando la actualización del panel HTML adyacente sin re-renderizar los nodos internos del SVG.
  4. **Limpieza de Recursos**: En el desmontaje del efecto (`return () => ...`), se cancelan los `requestAnimationFrame` y se remueven los event listeners para prevenir fugas de memoria.
- **Authoritative References**:
  - `src/components/ui/CemstwoGraph.tsx:44-150`
  - `src/hooks/useD3Background.ts:8-115`
  - `AGENTS.md:112-118`

---

### Q8: ¿Cuál es la estrategia para responsive design y accesibilidad?
- **Verified Answer**:
  - **Breakpoint Clave (768px)**:
    - En pantallas mayores a 768px: La regla vertical de profundidad (`IcebergProgress`) se muestra fija en el lateral izquierdo; los mapas sistémicos pesados de Kumu se renderizan como `<iframe>` embebidos interactivos (`embed.kumu.io`).
    - En pantallas menores o iguales a 768px: `IcebergProgress` se oculta vía CSS (`display: none`), y se activa la barra de navegación móvil inferior/drawer (`IcebergProgressMobile`). Los iframes de Kumu se desmontan por completo y se sustituyen por tarjetas estáticas ligeras (`MobileKumuFallback`), protegiendo los navegadores móviles de caídas por consumo excesivo de memoria GPU.
  - **Tipografía y Espaciado Fluido**: Uso de funciones `clamp()` y variables escaladas (`--step-0` a `--step-5`) en `tokens.css`. El padding de capas varía de `5.8rem 1.05rem` en móvil a `6.5rem 2rem` en desktop (`tokens.css:30,58`).
  - **Accesibilidad (WCAG 2.1 AA)**:
    - Todos los nodos interactivos del grafo CEMSTWO incluyen `role="button"`, `tabindex="0"`, y etiquetas descriptivas `aria-label` (ej. `"E: Estructura y Procesos"`).
    - Los SVGs decorativos incluyen `aria-hidden="true"`, mientras que los diagramas conceptuales (Viaje del Héroe, Espada de la Realidad) poseen `role="img"` o `aria-label` completo.
    - Soporte defensivo para `prefers-reduced-motion`: en `useD3Background.ts:10` se aborta inmediatamente el bucle de animación si el usuario solicita reducción de movimiento.
- **Authoritative References**:
  - `src/styles/tokens.css:20-65`
  - `src/components/sections/sections.css:25-50`
  - `src/components/ui/KumuEmbed.tsx:1-40`
  - `src/components/ui/CemstwoGraph.tsx:60-65`
  - `src/hooks/useD3Background.ts:10`

---

### Q9: ¿Cuál es la Definition of Done (DoD) y qué evidencia se requiere para validar un cambio?
- **Verified Answer**: Ninguna tarea, Pull Request o contribución de un agente se considera terminada sin satisfacer los siguientes criterios objetivos:
  1. **Compilación Limpia**: `npm run build` debe completar con código de salida 0 y generar `dist/` sin advertencias críticas.
  2. **Cero Errores de Tipos**: `npm run lint` (`tsc --noEmit`) debe retornar código de salida 0 con 0 errores de diagnóstico.
  3. **Integridad de Comportamiento Crítico**:
     - El Hero renderiza el titular exacto: `"Deje de automatizar el caos. Automatice el margen."`.
     - El botón flotante de WhatsApp (`#floating-cta`) existe en el DOM y gana la clase `.visible` tras hacer scroll >= 45% del viewport.
     - El módulo de video en `#iceberg-evidence` presenta la etiqueta de duración `"07:36"`.
     - El panel del asesor ejecutivo en `.signal-lead #equipo` muestra al Dr. Andrés López Astudillo, PhD.
     - Los 2 iframes de Kumu cargan en desktop y se sustituyen por fallback en móvil.
     - El grafo interactivo CEMSTWO permite seleccionar los 7 nodos y sincroniza el panel de detalle (`.cemstwo-detail`).
  4. **Compuerta de Regresión**: `npm run test:gate` (`npm run lint && npm run build && npm test`) se ejecuta de principio a fin con código de salida 0.
  5. **Evidencia Entregable Obligatoria**:
     - Reporte formal de Handoff de 5 componentes (Observación, Cadena Lógica, Advertencias/Caveats, Conclusión, Método de Verificación).
     - Comandos CLI exactos ejecutados con sus códigos de salida textuales.
     - Citas de código con número de línea para todas las modificaciones realizadas.
- **Authoritative References**:
  - `AGENTS.md:120-145`

---

### Q10: ¿Cómo y dónde se despliega la aplicación y qué restricciones de hosting existen?
- **Verified Answer**:
  - **Destino de Hosting**: GitHub Pages CDN estático, servido en la URL:
    ```
    https://willkwolf.github.io/Thinking-as-a-Service/
    ```
  - **Restricción de Sub-path (`base: '/Thinking-as-a-Service/'`)**: La aplicación está alojada bajo un subdirectorio. Por lo tanto:
    - Está **estrictamente prohibido** usar rutas absolutas directas a la raíz (ej. `<img src="/Assets/imagen.png">` fallará con un error 404).
    - Se debe utilizar siempre rutas relativas o `${import.meta.env.BASE_URL}Assets/...`.
  - **Canal de Despliegue CI/CD**: Controlado por `.github/workflows/deploy-pages.yml`. Se ejecuta automáticamente en cada push a la rama principal (`main` o `master`). Construye en Node.js 22, ejecuta `npm run build`, y sube el directorio `dist/` a GitHub Pages.
  - **Entorno Sin Servidor**: GitHub Pages es un CDN de archivos estáticos puros. No existe runtime de Node.js, Vercel Edge Functions, ni ejecución dinámica en servidor. Cualquier lógica de negocio debe ejecutarse en el cliente o resolver a artefactos pre-renderizados estáticos.
- **Authoritative References**:
  - `vite.config.ts:1-12`
  - `.github/workflows/deploy-pages.yml:1-50`
  - `AGENTS.md:147-155`
  - `docs/adr/001-tech-stack-decision.md:27-30, 65`

---

*Fin de la documentación canónica de arquitectura. Cualquier modificación estructural requerirá la actualización simultánea de este manual y su correspondiente Architecture Decision Record (ADR).*
