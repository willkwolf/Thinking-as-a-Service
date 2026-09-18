# Multi-Agent Skills Architecture & Taxonomy Specification
**Document ID:** SPEC-SKILL-TAX-001  
**Project:** Thinking-as-a-Service (`c:\Dev\Kumu-Service`)  
**Status:** Canonical / Approved  
**Version:** 1.0.0  
**Authors:** Web Design Architect Explorer (`explorer_design_0`) & Worker M2 (`worker_m2_1`)  
**Target Audience:** Autonomous Coding Agents, QA Auditors, Human Software Engineers  

---

## 1. Executive Summary & Architectural Vision

This specification defines the authoritative multi-agent skills architecture for the `Thinking-as-a-Service` platform. In contemporary agentic software engineering, autonomous agents frequently suffer from **skill collision**, **hallucinated overlap**, and the generation of **generic visual clichés ("AI slop")**. 

To permanently eradicate these failure modes, this specification establishes:
1. **Mathematical Orthogonality (Zero-Overlap Taxonomy):** An 8-domain taxonomy where each domain governs an exclusive slice of the software lifecycle with strictly defined inputs, outputs, boundaries, and veto criteria.
2. **Two-Tier Strict Separation:** A rigid barrier between **COMMON/REUSABLE** capabilities (portable across any web repository without code modification) and **PROJECT-SPECIFIC** contextual assets (quarantined strictly to `c:\Dev\Kumu-Service`).
3. **Deep Taste Skill Integration:** Full operationalization of the `Leonxlnx/taste-skill` standard, including the pre-generation **Brief Inference Protocol**, a 15-point **Anti-Slop Forbidden Inventory**, and the 3 quantitative design dials calibrated specifically for high-ticket executive consulting:
   - `DESIGN_VARIANCE: 4/10` (Disciplined editorial structure)
   - `MOTION_INTENSITY: 5/10` (Functional, dignified kinematics)
   - `VISUAL_DENSITY: 8/10` (Executive analytical density; Tufte data-ink ratio)
4. **Multi-Repo Portability Protocols:** Standardized packaging formats (Agent Skills Standard / YAML frontmatter), headless component patterns, and universal handoff contracts enabling flawless reuse across enterprise codebases.

---

## 2. Two-Tier Architecture: COMMON/REUSABLE vs. PROJECT-SPECIFIC

The fundamental failure of naive agent implementations is the coupling of portable engineering capabilities with local repository state. An agent tasked with "styling" often hardcodes local colors into reusable design rules, or an agent tasked with "testing" bakes repository copy directly into generic test drivers.

We mandate a strict two-tier separation:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               TIER 1: COMMON / REUSABLE SKILLS                                   │
│            (Completely portable across any repository; zero project hardcoding)                  │
├──────────────────────────┬──────────────────────────┬──────────────────────────┬─────────────────┤
│ 1. VISUAL DESIGN SYSTEM  │ 2. UX & INTERACTION      │ 3. WEB INTERFACE GUIDES  │ 4. ACCESSIBILITY│
│ - Taste Skill Protocol   │ - Abstract State Machines│ - Vercel Web Guidelines  │ - axe-core API  │
│ - Anti-Slop Checklists   │ - Scroll Trigger Logic   │ - Semantic DOM Standards │ - WCAG 2.1/2.2  │
│ - Quantitative Dials     │ - Kinematic Timing Math  │ - Spacing Scale Hygiene  │ - A11y Tree     │
├──────────────────────────┼──────────────────────────┼──────────────────────────┼─────────────────┤
│ 5. RESPONSIVE DESIGN     │ 6. COMPONENT ARCHITECTURE│ 7. TESTING & QA HARNESS  │ 8. GOVERNANCE   │
│ - Fluid clamp() Math     │ - Atomic Design Rules    │ - Vibium W3C BiDi Driver │ - 5-Part Handoff│
│ - Touch Target Norms     │ - Typed Props Contracts  │ - Playwright Isolation   │ - DoD Checklist │
│ - Breakpoint Logic       │ - Pure Functions & Hooks │ - Regression Gate Triad  │ - Truth Gates   │
└──────────────────────────┴──────────────────────────┴──────────────────────────┴─────────────────┘
                                           ▲
                                           │ Consumes, Implements & Verifies
                                           ▼
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                             TIER 2: PROJECT-SPECIFIC CONTEXT                                     │
│               (Lives exclusively inside c:\Dev\Kumu-Service\; quarantined from skills)           │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ • Design Tokens: src/styles/tokens.css (--bg: #f7f6f2, --signal: #163c26, --blueprint: #b08d3e) │
│ • Typography Assets: Google Fonts CDN & tokens.css (Fraunces Display, Sora Body, IBM Plex Mono) │
│ • Systems Framework: CEMSTWO.md & src/content/site.ts (7-node systemic wheel: C-E-M-S-T-W-O)    │
│ • Business Personas: PhD Andrés López Astudillo (Founding Partner & Reality Auditor)             │
│ • Runtime Content: src/content/site.ts (Single Source of Truth for copy, pricing, metadata)      │
│ • External Embeds: Kumu live-stream iframes (Megatrends & BPO case studies, MobileKumuFallback)  │
│ • Canonical Governance: AGENTS.md, ARCHITECTURE.md, package.json scripts                         │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Boundary Matrix & Leakage Prevention Rules

To guarantee clean separation, agents must adhere to the following negative boundary rules:

| Tier 1: COMMON / REUSABLE Skill | Prohibited Context Leakage (MUST NOT CONTAIN) | Allowed Abstract Capability |
| :--- | :--- | :--- |
| **Visual Design** | Hex colors (`#f7f6f2`), font family names (`Fraunces`), company branding ("Thinking as a Service"). | CSS variable names (`--bg`, `--signal`), token theory, typographic scale math, contrast ratio formulas. |
| **UX & Interaction** | Section anchors (`#iceberg-proposal`), layer depths (`450m`), specific copy triggers. | Relative scroll math (`scrollY > vh * threshold`), transition bezier curves, decoupled DOM update loops. |
| **Web Guidelines** | Specific component names (`CemstwoGraph`), repository file paths. | DOM nesting depth checks, semantic tag validation, layout shift (CLS) linting rules. |
| **WCAG Accessibility** | Hardcoded node text ("Transformación"), specific element IDs. | axe-core rule definitions, ARIA attribute mapping, color contrast calculators (`L1/L2 >= 4.5:1`). |
| **Responsive Design** | Fixed asset pixel sizes (`440px`), repo-specific container widths. | Fluid `clamp(min, preferred, max)` algorithms, minimum touch target standards (44×44px). |
| **Component Architecture** | CEMSTWO node interfaces, pricing calculator algorithms. | Atomic design stratification, TypeScript prop type conventions, hook lifecycle isolation. |
| **Testing & QA** | Absolute local URLs (`http://localhost:5173`), hardcoded copy strings. | Environment-injected base URLs (`process.env.BASE_URL`), W3C BiDi session wrappers, fallback runners. |
| **Governance Protocol** | Individual developer names, transient milestone notes. | Definition of Done templates, 5-component handoff schema, evidence-gathering procedures. |

---

## 3. Formal 8-Domain Taxonomy (Mathematical Orthogonality)

The 8 domains form a complete, mutually exclusive system covering the entire software construction and delivery lifecycle. Zero overlap means that no task, review comment, or lint check can belong to more than one domain.

```
       [INCEPTION]
            │
            ├─► Domain 1: Visual Design & Design System (Tokens, Anti-Slop, Dials)
            │        │
            ├─► Domain 2: UX & Interaction Design (State Machines, Flow, Kinematics)
            │        │
            ▼        ▼
       [AUTHORING]
            │
            ├─► Domain 6: Component Architecture (React 19, TypeScript, Clean Hooks)
            │        │
            ├─► Domain 5: Responsive Design (Fluid Typography, Breakpoints, Touch)
            │        │
            ▼        ▼
       [VERIFICATION & HYGIENE]
            │
            ├─► Domain 3: Web Interface Guidelines (DOM Hygiene, Spacing, Semantics)
            │        │
            ├─► Domain 4: WCAG Accessibility (axe-core, Screen Readers, Keyboard)
            │        │
            ▼        ▼
       [VALIDATION & DELIVERY]
            │
            ├─► Domain 7: Testing & QA (Vibium Primary, Playwright Fallback, Gates)
            │        │
            └─► Domain 8: Governance Protocol (Source of Truth, DoD, Teamwork Handoff)
```

---

### Domain 1: Visual Design & Design System
* **Scope & Responsibility:** Formulates aesthetic intent, establishes token-based design systems, dictates typographic hierarchy, contrast semantics, and enforces anti-slop visual defenses.
* **Primary Skills & Tools:** `Leonxlnx/taste-skill`, `immersive-web-design`, CSS custom property architectures.
* **Upstream Inputs:** Brand archetype, target audience profile, conceptual briefs.
* **Downstream Outputs:** Semantic tokens (`tokens.css`), typography scale definitions (`--step-0` to `--step-5`), color semantics, visual dials calibration.
* **Strict Boundary (Negative Rule):** Does **NOT** write React JSX, does **NOT** wire DOM event handlers, does **NOT** write test assertions.

---

### Domain 2: UX & Interaction Design
* **Scope & Responsibility:** Designs user flows, state transition machines, interactive affordances, micro-interactions, scroll triggers, animation timing curves, and high-density information architecture (Tufte principles).
* **Primary Skills & Tools:** `tufte-viz`, state machine theory (XState / declarative transitions), cubic-bezier kinematics, scroll observers (`IntersectionObserver`).
* **Upstream Inputs:** Visual system tokens (Domain 1), content structure and narrative sequence.
* **Downstream Outputs:** Interaction state models, scroll trigger thresholds (e.g. `scrollY > innerHeight * 0.45`), transition timing specs (`0.25s cubic-bezier(0.16, 1, 0.3, 1)`), data-ink ratio specifications for visual models.
* **Strict Boundary (Negative Rule):** Does **NOT** declare raw CSS color variables (defers to Domain 1), does **NOT** define TypeScript interfaces (defers to Domain 6).

---

### Domain 3: Web Interface Guidelines
* **Scope & Responsibility:** Enforces algorithmic and human interface hygiene on the web platform: semantic DOM structure, spacing scale rigor, layout stability (zero CLS), asset loading efficiency, and focus ring visibility.
* **Primary Skills & Tools:** `vercel-labs/agent-skills/web-design-guidelines`, HTML5 living standards, Core Web Vitals audit patterns.
* **Upstream Inputs:** Component JSX/HTML and stylesheets.
* **Downstream Outputs:** Terse diagnostic audit reports formatted as `file:line:col - [rule-id] message`.
* **Strict Boundary (Negative Rule):** Does **NOT** dictate artistic style or visual theme (defers to Domain 1), does **NOT** run browser automation tests (defers to Domain 7).

---

### Domain 4: WCAG Accessibility (A11y)
* **Scope & Responsibility:** Programmatic and structural compliance with WCAG 2.1 and WCAG 2.2 Level AA standards. Validates accessibility trees, ARIA roles/states/properties, keyboard focus traps, screen-reader live regions, and color contrast luminosity.
* **Primary Skills & Tools:** `axe-accessibility` (`@axe-core/playwright`, `@axe-core/cli`), W3C ARIA Authoring Practices Guide (APG).
* **Upstream Inputs:** Rendered DOM tree, color contrast pairs from tokens.
* **Downstream Outputs:** Automated accessibility scan reports, categorized severity tickets (Critical P1, Serious P2, Moderate P3, Minor P4), remediation PRs for ARIA attributes and focus management.
* **Strict Boundary (Negative Rule):** Does **NOT** test business logic or user flows (defers to Domain 7), does **NOT** alter visual layout without an a11y defect rationale.

---

### Domain 5: Responsive & Adaptive Systems
* **Scope & Responsibility:** Multi-device layout orchestration across viewports (mobile, tablet, desktop, ultrawide). Implements fluid typography math (`clamp()`), touch target minimums (44×44px), device capability fallbacks (e.g. replacing heavy WebGL/iframes on mobile).
* **Primary Skills & Tools:** Modern CSS (`clamp()`, `@container`, CSS Grid, `@media`), viewport simulation profiles.
* **Upstream Inputs:** Layout designs and component specifications.
* **Downstream Outputs:** Fluid calculation scales, CSS media query breakpoints (`700px`, `768px`, `980px`), adaptive fallback components (`MobileKumuFallback`).
* **Strict Boundary (Negative Rule):** Does **NOT** manage component application state (defers to Domain 6), does **NOT** author automated E2E tests (defers to Domain 7).

---

### Domain 6: Component Architecture & State
* **Scope & Responsibility:** Engineering modular, maintainable, and type-safe frontend components. Enforces Atomic Design (Atoms, Molecules, Organisms, Templates), strict TypeScript prop interfaces, pure functional rendering, custom hook encapsulation, and DOM stability (decoupled update loops).
* **Primary Skills & Tools:** React 19, TypeScript 5.x, custom hook composition, modern Vite bundler patterns.
* **Upstream Inputs:** Design tokens (Domain 1), interaction specs (Domain 2), responsive specs (Domain 5).
* **Downstream Outputs:** `.tsx` components, `.ts` hooks, typed prop contracts (`interface CemstwoGraphProps`), pure utility functions.
* **Strict Boundary (Negative Rule):** Does **NOT** invent brand styles ad-hoc (must consume `tokens.css`), does **NOT** sign off on pull requests (defers to Domain 8).

---

### Domain 7: Testing & Quality Assurance
* **Scope & Responsibility:** Deterministic behavioral verification of the application. Integrates and manages the dual testing architecture: **Vibium** as the primary framework (W3C WebDriver BiDi) and **Playwright** as the strictly quarantined fallback for documented edge cases. Enforces the 3-tier regression gate (`lint` → `build` → `test`).
* **Primary Skills & Tools:** Vibium (`vibium` Python client), Playwright (fallback), `pytest`, Vite preview server fixtures.
* **Upstream Inputs:** Deployed or preview web application, component selectors, acceptance criteria.
* **Downstream Outputs:** Test suites (`test_landing_vibium.py`, `test_landing_fallback.py`), execution logs, pass/fail regression attestations.
* **Strict Boundary (Negative Rule):** Does **NOT** modify application source code to satisfy tests (must report defects to Domain 6), does **NOT** hardcode fake test passes.

---

### Domain 8: Multi-Agent Governance & Delivery Protocol
* **Scope & Responsibility:** Coordinates multi-agent collaboration, preserves the single source of truth, enforces Definition of Done (DoD), manages change discipline, and mandates structured handoff reports.
* **Primary Skills & Tools:** Teamwork Agent Protocol, 5-Component Handoff Reports (`handoff.md`), Canonical Agent Guides (`AGENTS.md`, `ARCHITECTURE.md`).
* **Upstream Inputs:** Agent execution logs, test results, code diffs.
* **Downstream Outputs:** Handoff reports, milestone transitions, verification approvals or rejection notices.
* **Strict Boundary (Negative Rule):** Does **NOT** write application features directly; acts as judge, auditor, and orchestrator.

---

### 3.2 Zero-Overlap Cross-Reference Matrix

To ensure absolute clarity between agents, the following matrix defines the exact boundary line separating any two adjacent domains:

| Domain Pair | Boundary Line / Conflict Resolution Rule |
| :--- | :--- |
| **1 (Visual) vs 2 (UX/Interaction)** | Domain 1 decides *how an element looks* (colors, typography, elevation). Domain 2 decides *how an element behaves over time* (trigger conditions, state changes, easing curves). |
| **1 (Visual) vs 3 (Web Guidelines)** | Domain 1 defines aesthetic tokens and brand feeling. Domain 3 verifies that the resulting DOM obeys web hygiene (e.g. proper heading nesting `h1`->`h2`, 4px spacing grid). |
| **1 (Visual) vs 6 (Component Arch)** | Domain 1 specifies the CSS design tokens (`tokens.css`). Domain 6 implements the React component that references those tokens via CSS variables. |
| **2 (UX) vs 5 (Responsive)** | Domain 2 specifies interactive gestures and transition states. Domain 5 specifies how layout and touch affordances adapt when viewport changes from 1440px to 375px. |
| **3 (Web Guidelines) vs 4 (WCAG A11y)** | Domain 3 enforces general web best practices (valid HTML, no empty tags, clean CSS). Domain 4 enforces accessibility criteria (screen reader semantics, ARIA attributes, contrast). |
| **4 (WCAG A11y) vs 7 (Testing & QA)** | Domain 4 runs axe-core audits for a11y compliance. Domain 7 executes functional E2E tests for user workflows and UI behavior using Vibium. |
| **6 (Component Arch) vs 7 (Testing)** | Domain 6 authors components with stable selectors and semantic tags. Domain 7 consumes those selectors to verify behavior without mutating source files. |
| **7 (Testing) vs 8 (Governance)** | Domain 7 runs the test scripts and outputs pass/fail telemetry. Domain 8 reviews the evidence, verifies DoD compliance, and signs off on the handoff. |

---

## 4. Deep Integration of Taste Skill (`Leonxlnx/taste-skill`)

The integration of `taste-skill` provides a formal defense against **AI slop**: the sterile, generic, template-driven output characteristic of standard LLMs generating frontend code.

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               TASTE SKILL OPERATIONAL PIPELINE                                   │
├───────────────────────────────┬──────────────────────────────────┬───────────────────────────────┤
│    PHASE 0: BRIEF INFERENCE   │     PHASE 1: ANTI-SLOP AUDIT     │   PHASE 2: DIALS ENFORCEMENT  │
│ - Intent Extraction           │ - Filter against 15 AI Tells     │ - DESIGN_VARIANCE: 4/10       │
│ - Archetype Identification    │ - Purge boilerplate templates    │ - MOTION_INTENSITY: 5/10      │
│ - Audience & Tone Calibration │ - Enforce typography personality │ - VISUAL_DENSITY: 8/10        │
└───────────────────────────────┴──────────────────────────────────┴───────────────────────────────┘
```

### 4.1 The 15-Point Anti-Slop Forbidden Inventory

Every autonomous agent authoring or modifying UI code in this repository must verify that their output contains **zero** instances of the following 15 AI tells:

| # | Forbidden AI Slop Pattern | Why It Is Banned | Approved Alternative in Thinking-as-a-Service |
|---|:---|:---|:---|
| 1 | **Purple/Indigo SaaS Gradients** | Generic 2022 AI boilerplate; screams "unvetted LLM template". | Bespoke "Crema Editorial": warm ivory (`#f7f6f2`), British racing green (`#163c26`), antique brass (`#b08d3e`). |
| 2 | **Floating Blur Blobs** | Non-functional decorative circles with `filter: blur(80px)` drifting randomly. | Purposeful D3 canvas background (`useD3Background.ts`) with mathematical particle clustering. |
| 3 | **Em-Dash (—) Overuse in Copy** | Classic stylistic tell of ChatGPT-generated marketing copy. | Clean, punchy executive sentences; semicolons or periods; direct consulting clarity. |
| 4 | **Centered 3-Column Card Grids** | The universal default layout for lazy web generators. | Disciplined asymmetric grids: split hero with vector diagnostic graphic; 2x2 Simplicity Matrix; 7-node wheel. |
| 5 | **Meaningless Button Arrows (`→`)** | Added mechanically to every button without functional trajectory. | Plain semantic button labels ("Descargar Playbook", "Auditar con CEMSTWO") or icon indicating actual external action. |
| 6 | **Generic Buzzword Copy** | Slogans like "Supercharge your workflow with next-gen AI power". | Rigorous, falsifiable consulting copy: "Diagnostique el ruido que destruye valor antes de intentar automatizar con IA". |
| 7 | **Stock Human Illustrations** | Flat corporate vector humans with oversized limbs (Undraw style). | Hand-crafted SVG diagrams (Hero's Journey sword, CEMSTWO wheel, Tarot sword of reality). |
| 8 | **Universal `border-radius: 9999px`** | Pill buttons applied thoughtlessly to every card and element. | Architectural radius: sharp, disciplined `--radius: 0.15rem` on cards; pill radius reserved exclusively for floating action buttons. |
| 9 | **Default System Font Fallbacks** | Defaulting to unconfigured `Inter`, `Roboto`, or `Arial`. | Curated editorial typography: `Fraunces` (serif display), `Sora` (refined body sans), `IBM Plex Mono` (telemetry). |
| 10 | **Unstyled Focus Rings (`outline: none`)** | Stripping focus outlines for aesthetics, destroying a11y. | High-visibility focus indicators using `--blueprint` (`box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--blueprint)`). |
| 11 | **Bouncy Spring Animations on Hover** | Distracting physics simulations that undermine executive gravitas. | Crisp, authoritative easing: `cubic-bezier(0.16, 1, 0.3, 1)` with durations between 200ms and 300ms. |
| 12 | **Low-Contrast Gray-on-White Text** | `#9ca3af` text failing WCAG contrast (< 4.5:1). | Deep ink foreground `--ink: #121614` on ivory `--bg: #f7f6f2` (Contrast ratio > 14:1; AAA compliant). |
| 13 | **Fake Metric Counters** | Animated JavaScript counters counting from 0 to 100 on scroll. | Static, authoritative empirical metrics with context: "85% de fracaso en proyectos de IA", "4,2x fricción de decisión". |
| 14 | **Lucide / Feather Icon Defaulting** | Scattering generic icons in colored rounded squares inside cards. | Bespoke SVG symbols and mathematical diagrams embedded directly in the component. |
| 15 | **Unjustified "AI Powered" Badges** | Tacking glittering stars or "Powered by AI" tags on headers. | Methodological labels: "UMBRAL (CEMSTWO)", "EVIDENCIA METODOLÓGICA (07:36)". |

---

### 4.2 The Brief Inference Protocol

Before generating any frontend component, the agent must perform the following 5-step Brief Inference:

1. **Step 1 — Intent Analysis:** What is the fundamental organizational purpose of this screen?  
   *Target Answer for Thinking-as-a-Service:* High-impact C-Suite diagnostic consulting. The goal is not consumer self-service, but establishing intellectual authority, diagnosing systemic complexity, and driving scheduled executive engagements.
2. **Step 2 — Visual Archetype Selection:** Which curated design archetype governs the layout?  
   *Target Answer:* **"Crema Editorial" / "Industrial Luxury"** (from `immersive-web-design`). Background: warm alabaster parchment (`#f7f6f2`); accents: deep forest racing green (`#163c26`) and antique champagne brass (`#b08d3e`).
3. **Step 3 — Audience Calibration:** Who is the reader?  
   *Target Answer:* CEOs, CIOs, Board Directors, and Transformation Leaders. They possess high skepticism, zero patience for fluff, and demand rigorous systems thinking.
4. **Step 4 — Tone of Voice:**  
   *Target Answer:* Scholarly, forensic, pragmatic, uncompromising. Informed by Peter Checkland, Mario Bunge, and Nicholas Rescher.
5. **Step 5 — Structural Constraints:**  
   *Target Answer:* Zero Tailwind CSS; pure CSS custom properties (`src/styles/tokens.css`); inline responsive SVG; W3C BiDi automation readiness; strict `prefers-reduced-motion` compliance.

---

### 4.3 The 3 Quantitative Taste Dials Calibrated for Thinking-as-a-Service

`Leonxlnx/taste-skill` introduces 3 quantitative dials (scale 1 to 10) that parameterize UI generation. For `Thinking-as-a-Service`, these dials are strictly calibrated as follows:

```
                  1        2        3        4        5        6        7        8        9        10
DESIGN_VARIANCE   [--------|--------|--------|---●----|--------|--------|--------|--------|--------|]  (4/10)
MOTION_INTENSITY  [--------|--------|--------|--------|---●----|--------|--------|--------|--------|]  (5/10)
VISUAL_DENSITY    [--------|--------|--------|--------|--------|--------|--------|---●----|--------|]  (8/10)
```

#### Dial 1: `DESIGN_VARIANCE = 4/10` (Controlled Editorial Discipline)
* **Definition:** The degree of structural layout experimentation and departure from standard grids.
  - *1/10:* Rigid, predictable corporate SaaS dashboard (Bootstrap/Material-style).
  - *10/10:* Avant-garde, experimental brutalist web art (breaking layouts, non-linear reading).
* **Calibration Rationale for Kumu-Service (4/10):**  
  Executive consulting demands absolute visual stability and gravitas. The layout breaks monotony through **structured asymmetry** (e.g. split hero with custom vector narrative, lateral vertical iceberg depth gauge, and 2x2 matrix), but strictly avoids chaotic, disorienting layout experiments. Reading order is clean, linear, and hierarchical.

#### Dial 2: `MOTION_INTENSITY = 5/10` (Functional Kinematics)
* **Definition:** The volume, speed, and prominence of animations and micro-interactions.
  - *1/10:* Static web document; zero transitions.
  - *10/10:* Continuous 3D camera sweeps, kinetic typography, constant ambient motion.
* **Calibration Rationale for Kumu-Service (5/10):**  
  Motion must convey intelligence, not entertainment.
  - *Ambient:* The autonomous D3 particle background drifts gently at low opacity (`0.22`), symbolizing systemic network connectivity.
  - *Stateful:* The CEMSTWO SVG nodes expand smoothly on hover/selection (`r: 5 -> 6.5`, `0.25s cubic-bezier`), with active edges illuminating in gold.
  - *Conditional:* The WhatsApp floating CTA reveals itself only after the user crosses the deliberate 45% viewport scroll threshold.
  - *Accessibility:* If `prefers-reduced-motion: reduce` is detected, all continuous loops and transitions are immediately disabled.

#### Dial 3: `VISUAL_DENSITY = 8/10` (Executive Analytical Density)
* **Definition:** The ratio of data and structural information to empty whitespace (Edward Tufte data-ink ratio).
  - *1/10:* Consumer B2C landing page; giant single-word slogans, enormous empty margins.
  - *10/10:* Bloomberg Terminal, CAD workstation, flight control console.
* **Calibration Rationale for Kumu-Service (8/10):**  
  C-Suite leaders process dense information quickly. Every viewport unit delivers high analytical value:
  - Precise metrics with empirical backing (85% failure rate, 4,2x decision drag).
  - The 7-node CEMSTWO wheel integrating 7 diagnostic questions with instant detail panel synchronization.
  - Interactive regional fee configurator with partner/analyst hourly formulas.
  - Multi-tier methodology video with exact runtime telemetry (`07:36`).
  - Iceberg depth indicators (0m to 1200m) contextualizing every screen.

---

## 5. Project-Specific Context Catalog (Repository Quarantine)

All assets, variables, and data models documented in this section belong **exclusively to Tier 2**. They must never be abstracted into generic skills, and external generic skills must consume them via well-defined interfaces.

### 5.1 Design Tokens (`src/styles/tokens.css`)
* **Color Palette:**
  - `--bg: #f7f6f2` (Primary alabaster ivory)
  - `--bg-strong: #ebe9e0` (Elevated panel background)
  - `--panel: rgba(253, 252, 249, 0.76)` (Translucent frosted surface with `backdrop-filter: blur(16px)`)
  - `--panel-solid: #fcfbf9` (Opaque card surface)
  - `--ink: #121614` (Deep forest charcoal text)
  - `--muted: #525c56` (Secondary metadata text)
  - `--signal: #163c26` (British racing green brand accent)
  - `--blueprint: #b08d3e` (Antique champagne brass accent)
  - `--danger: #b04322` (Terracotta alert)
  - `--good: #1e5e3a` (Sage emerald validation)
* **Typography Token Definitions:**
  - `--font-display: 'Fraunces', 'Playfair Display', 'Instrument Serif', Georgia, serif;`
  - `--font-body: 'Sora', 'Plus Jakarta Sans', system-ui, sans-serif;`
  - `--font-mono: 'IBM Plex Mono', 'JetBrains Mono', monospace;`
* **Fluid Modular Scale:**
  - Mobile baseline: `--step-0: 1.0625rem` to `--step-5: 3.4rem`.
  - Desktop baseline (>= 980px): `--step-0: 1.125rem` to `--step-5: 5.2rem`.
  - Border radius standard: `--radius: 0.15rem` (architectural, crisp).

### 5.2 The CEMSTWO Systems Wheel Model (`src/components/ui/CemstwoGraph.tsx`, `CEMSTWO.md`)
The CEMSTWO model is a 7-element systemic framework synthesizing Peter Checkland (Soft Systems Methodology), Mario Bunge (CESM model), Fritjof Capra (living networks), and Nicholas Rescher (systemic coherence).

```
                      [C] Context (Entorno)
                          (50, 12)
                             ▲
                            / \
      [O] Outputs (25.75, 26)     [E] Expectations (74.25, 26)
                  \         /     \         /
                   \       /       \       /
                    ▼     ▼         ▼     ▼
                  [T] Transformation (50, 40)  <-- Core Telos
                    ▲     ▲         ▲     ▲
                   /       \       /       \
                  /         \     /         \
     [W] Worldview (25.75, 54)     [M] Mechanisms (74.25, 54)
                            \     /
                             ▼   ▼
                      [S] Structure (Estructura)
                          (50, 68)
```

* **Geometry & SVG Coordinates (ViewBox `0 0 100 80`):**
  - **T (Transformation):** `(50.00, 40.00)` — Geometric center. Telos of the system.
  - **C (Context):** `(50.00, 12.00)` — Top apex. External systemic forces.
  - **E (Expectations):** `(74.25, 26.00)` — Upper right chord. Stakeholder demands.
  - **M (Mechanisms):** `(74.25, 54.00)` — Lower right chord. Operational processes.
  - **S (Structure):** `(50.00, 68.00)` — Bottom apex. Power and decision distribution.
  - **W (Worldview):** `(25.75, 54.00)` — Lower left chord. Implicit cultural beliefs.
  - **O (Outputs):** `(25.75, 26.00)` — Upper left chord. Observable systemic outputs.
* **Edge Topology (12 lines):**
  - 6 Radial Spokes connecting perimeter nodes to center `T`: `[C,T]`, `[E,T]`, `[M,T]`, `[S,T]`, `[W,T]`, `[O,T]`.
  - 6 Perimeter Chords forming outer hexagon: `[C,E]`, `[E,M]`, `[M,S]`, `[S,W]`, `[W,O]`, `[O,C]`.
* **State Decoupling Contract:**
  - Structural DOM mounting is executed once.
  - State updates (`selectedId`) mutate SVG node attributes and classes directly via D3 without re-mounting DOM elements, preserving keyboard focus and eliminating cursor flicker.

### 5.3 Executive Persona & Leadership Asset
* **Lead Persona:** PhD Andrés López Astudillo.
* **Role:** Founding Partner & Reality Auditor (`SignalLayer.tsx`).
* **Attributes:** 15+ years systems consulting, 40+ academic publications, 100% rigor index.
* **Graphic Symbol:** The Tarot Sword of Reality (Inline vector sword slicing through chaos to reveal simplicity).

### 5.4 External Integrations & Embeds (`src/components/ui/KumuEmbed.tsx`)
* **Live System Maps:**
  - Megatrends Map: `https://embed.kumu.io/e9fc0a597a7d4fe22f281e59e3557e03`
  - BPO Case Study: `https://embed.kumu.io/a2a95c967675eec4e47087fdb6e44b99`
* **Adaptive Mobile Fallback:**
  - On screens `<= 768px`, iframes are unmounted and replaced with `<MobileKumuFallback />`. This eliminates mobile scroll-locking and prevents mobile browser memory exhaustion.

### 5.5 Single Source of Truth for Content (`src/content/site.ts`)
* All copy, section definitions, pricing formulas, and metadata reside in `src/content/site.ts`.
* Legacy content files (`complexity.ts`, `playbook.ts`) are deprecated references. Agents must never split or duplicate content sources.

---

## 6. Multi-Repo Portability Guidelines

To allow UI components, test harnesses, and agent skills created in this repository to be exported to other projects, follow these structural rules:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                             MULTI-REPO PORTABILITY ARCHITECTURE                                  │
├────────────────────────────────┬────────────────────────────────┬────────────────────────────────┤
│      PORTABLE AGENT SKILLS     │   HEADLESS UI COMPONENTS       │   ISOLATED TEST HARNESS        │
│ • Agent Skills Standard format │ • Token-injected CSS vars      │ • Environment-agnostic URLs    │
│ • YAML frontmatter metadata    │ • Zero hardcoded business copy │ • Parameterized selectors      │
│ • Zero repo-specific paths     │ • Props-driven data contracts  │ • Plug-and-play W3C BiDi client│
└────────────────────────────────┴────────────────────────────────┴────────────────────────────────┘
```

### 6.1 Packaging Portable Agent Skills
Any skill intended for multi-repo distribution must adhere to the **Agent Skills Standard**:
1. **Directory Structure:**
   ```
   skills/
   └── my-portable-skill/
       ├── SKILL.md              # Entry point with YAML frontmatter
       ├── references/           # Detailed markdown guidelines
       └── scripts/              # Helper scripts (Python / Node)
   ```
2. **YAML Frontmatter Specification:**
   ```yaml
   ---
   name: my-portable-skill
   description: Comprehensive description of capability and activation triggers.
   allowed-tools: Read Write Edit Glob Grep
   metadata:
     version: "1.0.0"
     category: frontend-architecture
     portability: universal
   ---
   ```
3. **Environment Neutrality:**
   - Skills must **never** reference hardcoded local paths (e.g. `c:\Dev\Kumu-Service`).
   - Skills must refer to project configurations via relative lookups or environment variables.

### 6.2 Designing Portable UI Components
To extract components (e.g. the CEMSTWO SVG graph, the D3 Background Canvas, or the Iceberg Depth Gauge) into external repositories:
1. **Token Inversion of Control:**
   - Components must never import concrete color constants.
   - Components must read entirely from CSS variables (`var(--bg)`, `var(--signal)`, `var(--blueprint)`). If ported to a project without these variables, provide fallback values: `var(--signal, #163c26)`.
2. **Content Decoupling via Typed Props:**
   - Component logic must be 100% separated from textual data.
   - For example, `CemstwoGraph` accepts:
     ```typescript
     export interface CemstwoGraphProps {
       nodes: CemstwoNode[];
       selectedId: string;
       onSelectNode: (id: string) => void;
       className?: string;
     }
     ```
   - This allows the graph engine to visualize any 7-node network in another company or domain without code modification.

### 6.3 Universal Testing Portability
1. **Base URL Parameterization:**
   - Test suites must read target URLs from the environment:
     ```python
     BASE_URL = os.getenv("TEST_BASE_URL", "http://localhost:5173")
     ```
2. **Semantic Selector Contracts:**
   - Tests must bind to stable ARIA roles, test IDs, or standard semantic tags (`role="button"`, `aria-label`, `data-testid`), avoiding fragile CSS selector chains (`div > div:nth-child(3)`).

---

## 7. Verification, Compliance & Quality Gates

Every agent contributing code to this repository must validate their work against the three-tier quality gate prior to submission:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                 CANONICAL 3-TIER REGRESSION GATE                                 │
├────────────────────────────────┬────────────────────────────────┬────────────────────────────────┤
│       TIER 1: STATIC GATE      │       TIER 2: BUILD GATE       │      TIER 3: BEHAVIOR GATE     │
├────────────────────────────────┼────────────────────────────────┼────────────────────────────────┤
│ npm run lint                   │ npm run build                  │ npm test (npm run test:vibium) │
│ - ESLint checks pass           │ - Vite bundle compilation      │ - 7 Core E2E scenarios pass    │
│ - TypeScript typecheck pass    │ - Zero TS errors (tsc --noEmit)│ - CEMSTWO SVG interaction pass │
│ - Zero unused variables        │ - Output generated in dist/    │ - WhatsApp CTA visibility pass │
└────────────────────────────────┴────────────────────────────────┴────────────────────────────────┘
```

### 7.1 Pre-Commit Agent Compliance Checklist

Before declaring any task complete, the acting agent must verify:
- [ ] **Taste Skill Adherence:** Zero violations of the 15 Anti-Slop rules (no purple gradients, no em-dashes, no fake metrics).
- [ ] **Dial Calibration:** Layout reflects `DESIGN_VARIANCE: 4`, motion reflects `MOTION_INTENSITY: 5`, density reflects `VISUAL_DENSITY: 8`.
- [ ] **WCAG 2.1 AA Standards:** Text contrast >= 4.5:1, interactive elements have focus indicators, SVGs have accessible labels.
- [ ] **Responsive Integrity:** Viewport simulation tested at 375px (mobile), 768px (tablet), and 1440px (desktop); touch targets >= 44×44px.
- [ ] **Single Source of Truth:** All copy modifications made in `src/content/site.ts`; no hardcoded strings in `.tsx` files.
- [ ] **Regression Gate:** `npm run lint`, `npm run build`, and `npm test` execute with exit code 0.
- [ ] **Self-Contained Handoff:** Report authored in agent folder adhering to the 5-component schema.
