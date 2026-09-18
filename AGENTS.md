# AGENTS.md — Autonomous Agent & Contributor Governance Manual
**Repository**: `Thinking-as-a-Service`  
**Version**: 2.0.0  
**Last Updated**: 2026-09-17  
**Scope**: Governance, baseline matrix, modification boundaries, canonical workflows, and Definition of Done.

---

## 1. PURPOSE & APPLICABILITY

This document establishes the mandatory architectural governance framework for **all autonomous agents and human engineers** contributing to the `Thinking-as-a-Service` codebase. 

Every agent operating within this repository must adhere to the rules, boundaries, and verification protocols defined herein. **Zero implicit knowledge is assumed**: any behavior not explicitly documented here or in `ARCHITECTURE.md` is considered non-canonical.

---

## 2. REPOSITORY BASELINE MATRIX

The technical foundation of this repository is strictly versioned and constrained as follows:

| Dimension | Specification | Reference / Source |
|---|---|---|
| **Core Framework** | React 19.1.0 (`react`, `react-dom`) | `package.json` |
| **Language / Type Engine** | TypeScript ~5.8.2 (`strict: true`, ES2022 target, `react-jsx`) | `tsconfig.json`, `tsconfig.app.json` |
| **Build Bundler** | Vite ^6.2.3 via `@vitejs/plugin-react` ^4.3.4 | `vite.config.ts` |
| **Styling Architecture** | 100% Native CSS Custom Variables (BEM naming convention) | `src/styles/tokens.css`, `src/styles/global.css` |
| **Design Language** | "Crema Editorial / Industrial Luxury" (Warm cream palette) | `src/styles/tokens.css` (`--bg: #f7f6f2`, `--ink: #121614`) |
| **Typography Hierarchy** | Display: `'Fraunces'` \| Body: `'Sora'`, `'Plus Jakarta Sans'` \| Telemetry: `'IBM Plex Mono'` | `src/styles/tokens.css:20-22` |
| **Prohibited Dependencies** | **Zero Tailwind CSS** (do not install utility classes) \| **Zero Lucide Icons** (use inline SVG) | Baseline Audit |
| **Data Visualization** | D3.js ^7.9.0 (`useD3Background.ts`, `CemstwoGraph.tsx`) | `src/components/ui/CemstwoGraph.tsx` |
| **Animation Library** | Framer Motion ^12.6.3 (`Reveal.tsx`) | `src/components/ui/Reveal.tsx` |
| **Asset Pipeline** | `sync-assets.mjs` mirrors `Assets/` into `public/Assets/` before dev/build | `scripts/sync-assets.mjs` |
| **Hosting Target** | GitHub Pages SPA under sub-path `/Thinking-as-a-Service/` | `vite.config.ts`, `.github/workflows/deploy-pages.yml` |
| **Testing Architecture** | **Vibium** (Primary BiDi W3C WebDriver) + Isolated Playwright (Fallback) | `tests/e2e/`, `pyproject.toml` |
| **Python Runtime (Tests)** | Python >= 3.13 via `.venv` / `uv` | `pyproject.toml`, `.python-version` |

---

## 3. CANONICAL COMMAND MATRIX

Agents must execute tasks using only these canonical scripts. No ad-hoc, untracked commands are permitted in automation pipelines.

| Canonical Command | Execution Target | Purpose / Expected Output |
|---|---|---|
| `npm run sync-assets` | `node scripts/sync-assets.mjs` | Synchronizes raw media from `Assets/` to `public/Assets/`. Automatically executed prior to `dev` and `build`. |
| `npm run dev` | `npm run sync-assets && vite` | Launches local development server at `http://localhost:5173/Thinking-as-a-Service/` with Fast Refresh enabled. |
| `npm run build` | `npm run sync-assets && tsc -p tsconfig.app.json --noEmit && vite build` | Full production compilation: syncs assets, executes strict TypeScript typecheck, and bundles SPA into `dist/`. **Must exit with code 0**. |
| `npm run lint` | `tsc --noEmit` | Strict typecheck across all project files including tests and configs. **Must exit with code 0 and 0 errors**. |
| `npm run preview` | `vite preview` | Serves compiled production bundle from `dist/` on `http://localhost:4173/Thinking-as-a-Service/`. |
| `npm test` | `npm run test:vibium` | Executes the primary deterministic E2E test suite via Vibium. |
| `npm run test:vibium` | `.venv\Scripts\pytest.exe tests/e2e/test_landing_vibium.py` | Runs primary UI and behavioral regression tests using Vibium (W3C BiDi protocol). |
| `npm run test:playwright` | `.venv\Scripts\pytest.exe tests/e2e/test_landing_fallback.py` | Runs isolated Playwright fallback tests for explicitly justified browser engine edge cases. |
| `npm run test:gate` | `npm run lint && npm run build && npm test` | Mandatory 3-tier regression gate. All three stages must pass sequentially with exit code 0 before code merge. |

---

## 4. SINGLE SOURCE OF TRUTH (SSOT) & CONTENT GOVERNANCE

### 4.1 The Active Content Store: `src/content/site.ts`
All user-facing copy, section metadata, pricing tiers, and interactive element labels belong **exclusively** in:
```
src/content/site.ts
```
- **Bilingual Structure**: Contains `siteContent.es` (Spanish, default) and `siteContent.en` (English).
- **Consuming Hooks**: Subscribed to by `src/hooks/useI18n.ts`, which injects localized content throughout the React component tree.
- **Type Definitions**: Exports canonical interfaces: `Locale`, `IcebergLayerId`, `IcebergLayer`, `CemstwoNode`, `SimplicityArchetype`, `PlaybookItem`.
- **UI Copy**: Includes floating CTA text (`siteContent.es.ui.floatingCta`), hero headlines, video duration metadata (`07:36`), and pricing options.

### 4.2 Inactive & Dead Files Notice (STRICT PROHIBITION)
The following files are **dead legacy code** with zero active imports in the build graph:
- ❌ `src/content/complexity.ts` (168 lines, 0 incoming imports) — **DO NOT MODIFY**.
- ❌ `src/content/playbook.ts` (109 lines, 0 incoming imports) — **DO NOT MODIFY**.

> **CRITICAL WARNING FOR AGENTS**: Editing `complexity.ts` or `playbook.ts` will produce **ZERO changes** in the running application and in `dist/`. Any task instructing changes to site copy, frameworks, or playbooks must target `src/content/site.ts`.

### 4.3 Ancillary Content Files
- `src/content/iceberg.ts`: Referenced only by `useIcebergDepth.ts` for structural layer ID arrays. User-facing labels must remain in sync with `site.ts`.

---

## 5. MODIFICATION BOUNDARIES & IMPLICIT KNOWLEDGE ELIMINATION

### 5.1 Directory Ownership & Permissions Matrix

```
c:\Dev\Kumu-Service\
├── src/                          # [READ/WRITE] Core application source code
│   ├── components/layout/        # Layout elements (IcebergProgress, FloatingCta)
│   ├── components/sections/      # 8 Iceberg layers (HeroSurface, DiagnosisLayer, etc.)
│   ├── components/ui/            # UI components (CemstwoGraph, KumuEmbed, Reveal, etc.)
│   ├── content/site.ts           # [READ/WRITE] Sole content store
│   ├── hooks/                    # Custom React hooks (useI18n, useIcebergDepth, etc.)
│   └── styles/                   # Global tokens and CSS
├── tests/                        # [READ/WRITE] Vibium & Playwright test suites
├── docs/                         # [READ/WRITE] Architectural ADRs and taxonomy specifications
├── AGENTS.md                     # [GOVERNANCE] This document
├── ARCHITECTURE.md               # [ARCH] System architecture documentation
├── FRONTEND.md                   # [DESIGN] Frontend design tokens and layout guide
├── dist/                         # [READ-ONLY] Bundler build output. NEVER EDIT MANUALLY.
├── public/Assets/                # [READ-ONLY] Mirrored assets. Edit in root Assets/ only.
├── legacy/                       # [READ-ONLY] Dead v1 artifacts. Do not import.
├── css/                          # [READ-ONLY] Dead v1 CSS. Do not import.
├── js/                           # [READ-ONLY] Dead v1 JS. Do not import.
├── .github/                      # [RESTRICTED] CI/CD workflows. Requires human sign-off.
└── .agents/                      # [METADATA ONLY] Agent scratchpad. NEVER put source/tests here.
```

### 5.2 Elimination of Implicit Knowledge (Known Gotchas)

1. **Sub-path Hosting (`/Thinking-as-a-Service/`)**:
   - The Vite config uses `base: '/Thinking-as-a-Service/'`.
   - Never use absolute root paths (e.g., `<img src="/Assets/image.png">`).
   - Always use relative paths or `import.meta.env.BASE_URL` (e.g., `${import.meta.env.BASE_URL}Assets/image.png`).

2. **Floating CTA Mount (`FloatingCta.tsx`)**:
   - The WhatsApp floating button (`#floating-cta`) must always be mounted in `src/App.tsx`.
   - It activates dynamically when the user scrolls past 45% of the viewport height (`window.scrollY > window.innerHeight * 0.45`).

3. **React-D3 Boundary (`CemstwoGraph.tsx`)**:
   - React manages container refs and state (`selectedId`).
   - D3 imperatively manipulates SVG geometry inside `useEffect`.
   - Never allow React to reconcile inner DOM nodes created by D3, and never allow D3 to mutate React-managed DOM nodes.

4. **Responsive Strategy & Embed Protection (768px Breakpoint)**:
   - On screens `<= 768px`, desktop `IcebergProgress` ruler is hidden and `IcebergProgressMobile` activates.
   - Heavy Kumu iframes are unmounted and replaced with `MobileKumuFallback` cards to prevent mobile browser memory exhaustion.

5. **Color Mode Standard**:
   - The application is standardized on the "Crema Editorial" day palette (`--bg: #f7f6f2`, `--ink: #121614`).
   - `useThemeMode.ts` defaults to `'day'`.

---

## 6. DEFINITION OF DONE (DoD) & EVIDENCE EXPECTATIONS

An agent or contributor may mark a task or pull request as complete **only** when all of the following criteria are satisfied:

### 6.1 Objective Verification Criteria
1. **Compilation Check**: `npm run build` exits with code 0 and produces a clean `dist/` bundle without warnings or errors.
2. **Type Safety**: `npm run lint` (`tsc --noEmit`) passes with 0 diagnostics.
3. **Behavioral Integrity**:
   - Hero section renders headline: `"Deje de automatizar el caos. Automatice el margen."`
   - Floating CTA (`#floating-cta`) renders in DOM and gains `.visible` on scroll >= 45% viewport height.
   - Video player in `#iceberg-evidence` displays duration `07:36`.
   - CEMSTWO graph renders 7 interactive nodes; clicking or hovering updates the detail card.
   - Executive advisor card (`.signal-lead #equipo`) renders Dr. Andrés López Astudillo.
   - Pricing calculator toggles between USA, Canada, and LATAM tiers with correct dynamic pricing.
   - Kumu section displays iframes on desktop (>768px) and fallback cards on mobile (<=768px).
4. **Regression Gate**: `npm run test:gate` completes cleanly.
5. **No Pollution**: No files placed in `dist/`, `.agents/`, or legacy directories.

### 6.2 Evidence Delivery Requirements
All task completion reports must provide:
- Exact CLI command strings executed and verbatim exit codes.
- Line-numbered code citations for all changes.
- Logical rationale explaining why the change is minimal, correct, and non-breaking.

---

## 7. THE 10 ONBOARDING QUESTIONS — QUICK REFERENCE

Incoming agents can immediately understand repository structure using this quick reference:

| # | Question | Verified Answer & Key References |
|---|---|---|
| **Q1** | **¿Cuál es el propósito del repositorio y a qué usuario final sirve?** | Landing page de consultoría estratégica C-Suite de alto impacto. Cubre paquetes estratégicos integrales ($28,500–$98,000 USD en `site.ts:377-444`) y diagnósticos/playbooks de entrada ($7,500–$37,000 USD). Ayuda a líderes empresariales (CEOs, COOs, VPs) a diagnosticar y reducir la complejidad sistémica antes de automatizar con IA. (`README.md`, `src/content/site.ts:46-84, 377-444`). |
| **Q2** | **¿Cuál es el único Source of Truth para el contenido y textos del sitio?** | `src/content/site.ts`. Contiene todos los textos en español e inglés. Archivos como `complexity.ts` y `playbook.ts` son legados sin uso (0 imports). |
| **Q3** | **¿Cuáles son los comandos canónicos para compilar, verificar tipos y ejecutar?** | Dev: `npm run dev` \| Build: `npm run build` \| Lint: `npm run lint` \| Test: `npm test` (`npm run test:vibium`) \| Gate: `npm run test:gate`. |
| **Q4** | **¿Cuáles son las fronteras de modificación permitidas para agentes autónomos?** | Permitido: `src/`, `tests/`, `docs/`, `AGENTS.md`, `ARCHITECTURE.md`, `FRONTEND.md`. Prohibido: `dist/`, `public/Assets/`, `legacy/`, `css/`, `js/`, `.github/`. |
| **Q5** | **¿Cómo fluyen los datos y cómo se sincroniza el estado en la aplicación?** | Flujo unidireccional React sin librerías externas. `useI18n` provee copys; `useIcebergDepth` coordina navegación por IntersectionObserver; `CemstwoGraph` maneja estado local de nodos. |
| **Q6** | **¿Por qué existen directorios `css/`, `js/` y `legacy/index.static.html`?** | Residuos históricos de la versión estática v1 pre-migración a React 19. No están referenciados en ningún bundle y no deben modificarse. |
| **Q7** | **¿Cómo interactúan React y D3 en los componentes interactivos?** | React gestiona el ciclo de vida del contenedor SVG (`ref`) y estado; D3 ejecuta cálculos geométricos e interpolaciones de forma imperativa en `useEffect`. No hay reconciliación VDOM en los nodos D3. |
| **Q8** | **¿Cuál es la estrategia para responsive design y accesibilidad?** | Breakpoint en 768px. En pantallas pequeñas el menú móvil reemplaza la regla vertical, y los iframes de Kumu se reemplazan por `MobileKumuFallback` para evitar sobrecarga de memoria. Soporta `prefers-reduced-motion`. |
| **Q9** | **¿Cuál es la Definition of Done (DoD) y qué evidencia se requiere?** | Build limpio (`npm run build`), cero errores de tipos (`npm run lint`), suite de tests pasando (`npm test`), y evidencia verificable en handoff report. |
| **Q10** | **¿Cómo y dónde se despliega la aplicación y qué restricciones existen?** | GitHub Pages mediante `.github/workflows/deploy-pages.yml` en la ruta `/Thinking-as-a-Service/`. Todos los assets deben utilizar rutas relativas o `import.meta.env.BASE_URL`. |

---

*This document is authoritative. Any modifications to this governance standard require explicit approval and alignment with `ARCHITECTURE.md`.*
