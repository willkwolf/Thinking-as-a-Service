# AGENTS.md — Autonomous Agent & Contributor Governance Manual
**Repository**: `Thinking-as-a-Service`  
**Version**: 2.0.0  
**Last Updated**: 2026-09-17  
**Scope**: Governance, baseline matrix, modification boundaries, canonical workflows, and Definition of Done.

---

## 1. PURPOSE & APPLICABILITY

This document establishes the mandatory architectural governance framework for **all autonomous agents and human engineers** contributing to the `Thinking-as-a-Service` codebase. 

Every agent operating within this repository must adhere to the rules, boundaries, and verification protocols defined herein. **Zero implicit knowledge is assumed**: any behavior not explicitly documented here or in `ARCHITECTURE.md` is considered non-canonical.

<!-- OPENWIKI:START -->

## OpenWiki (Internal Knowledge Base)

This workspace contains an internal `openwiki/` evidence index for local agents and contributors (untracked in public git). It provides just-in-time context for domain methodology, architectural decisions, and product execution horizons:

- Architecture & Lifecycles: `openwiki/architecture.md`
- Design Tokens & Anti-Slop: `openwiki/frontend-design-system.md`
- Content SSOT & i18n: `openwiki/content-and-i18n.md`
- Systems Methodology & CEMSTWO: `openwiki/methodology-cemstwo.md`
- Strategic Audit & Defensibility: `openwiki/strategic-audit.md`
- 2026 Market Benchmarks: `openwiki/market-evidence-2026.md`
- Execution Horizon & Productization: `openwiki/execution-horizon-aligned.md`
- Deterministic Testing & Quality Gate: `openwiki/testing-and-qa.md`

Treat source code and tests as authoritative. The `openwiki/` directory is maintained locally for internal consultation.

<!-- OPENWIKI:END -->

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
│   ├── components/layout/        # Layout elements (IcebergProgressMobile, FloatingCta)
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
   - On screens `<= 768px`, `IcebergProgressMobile` activates for drawer wayfinding.
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
| **Q8** | **¿Cuál es la estrategia para responsive design y accesibilidad?** | Breakpoint en 768px. En pantallas pequeñas el menú móvil `IcebergProgressMobile` permite navegar entre capas, y los iframes de Kumu se reemplazan por `MobileKumuFallback` para evitar sobrecarga de memoria. Soporta `prefers-reduced-motion`. |
| **Q9** | **¿Cuál es la Definition of Done (DoD) y qué evidencia se requiere?** | Build limpio (`npm run build`), cero errores de tipos (`npm run lint`), suite de tests pasando (`npm test`), y evidencia verificable en handoff report. |
| **Q10** | **¿Cómo y dónde se despliega la aplicación y qué restricciones existen?** | GitHub Pages mediante `.github/workflows/deploy-pages.yml` en la ruta `/Thinking-as-a-Service/`. Todos los assets deben utilizar rutas relativas o `import.meta.env.BASE_URL`. |

---

## 8. SENIOR CRO CONVERSION GOVERNANCE: HEURÍSTICAS, ARQUITECTURA Y DO'S & DON'TS

Para toda iteración, componente o ajuste en la interfaz de conversión de `Thinking-as-a-Service`, los agentes y desarrolladores deben aplicar obligatoriamente los siguientes estándares metodológicos de optimización de tasa de conversión (CRO):

### 8.1 Heurística de Conversión MECLABS
Toda pantalla y flujo decisional se optimiza bajo la ecuación matemática de probabilidad de conversión:
$$C = 4m + 3v + 2(i - f) - 2a$$
- **m (Motivación):** Conexión inmediata con la intención del visitante ejecutivo en el Hero mediante indicadores de disponibilidad en tiempo real (`hero.liveStatus`).
- **v (Claridad de Propuesta de Valor):** Comunicación de qué hace el servicio, en qué plazo y sin qué dolor en < 3 segundos con titulares balanceados y viñetas atómicas.
- **i (Incentivo):** Precios transparentes de alcance cerrado ($28,500 – $98,000 USD), benchmark de procurement y Cinta de Garantía de Calidad Ontológica ISO 30401.
- **f (Fricción):** Erradicación de muros de texto, inclusión de Filtro de Audiencia Cualificada y Acordeón interactivo de FAQs para auto-resolver objeciones.
- **a (Ansiedad):** Desactivación explícita del riesgo mediante garantías de retracto legal, cero ingestión de credenciales de TI, y confidencialidad amparada bajo NDA bilateral.

### 8.2 Los 7 Pilares de Conversion-Centered Design (CCD)
1. **Atención:** Proporción de enlaces a objetivos estrictamente 1:1 en los bloques de decisión clave.
2. **Contexto:** Mensajería adaptada al dolor operativo del comprador corporativo (drenaje de EBITDA, latencia en comités).
3. **Claridad:** Uso de viñetas de 1 línea, micro-tarjetas y chips semánticos sobre párrafos extensos.
4. **Congruencia:** Cada elemento gráfico (vector del héroe, grafos D3) y textual empuja hacia una única acción de valor.
5. **Credibilidad:** Métricas atómicas (10.2%, 74%), stack metodológico real (ISO 30401, CEMSTWO), y liderazgo doctoral (Dr. Andrés López Astudillo, PhD).
6. **Cierre:** Botones de contraste alto con micro-elevación (`translateY(-2px)`) y parámetros precargados en WhatsApp.
7. **Continuidad:** Cero callejones sin salida; experiencia fluida hacia el canal directo de intake o WhatsApp.

### 8.3 Arquitectura Canónica de Componentes (Orden Estricto)
1. **Header:** `DesktopNavbar` con identidad de marca, 8 capas del iceberg y CTA de `Reality Audit`.
2. **Hero Section (Above-the-Fold):** `HeroSurface` con indicador animado (`hero-status-pill`), título de valor, subcopy conciso, CTA dual y Matriz de 4 Badges de Confianza atómicos (Duración, Enfoque, Exclusividad, Entregable).
3. **Isla de Autoridad / Tech Stack:** `AuthorityBar` con 5 pilares metodológicos e ingenieriles (ISO 30401, CEMSTWO, Kumu & D3.js, PhD Research, W3C BiDi Protocol).
4. **Filtro de Audiencia Cualificada:** `AudienceFilter` con tarjetas comparativas ("✔ Para usted si:" vs "✕ NO es para usted si:").
5. **Diagnóstico & Solución Tangible:** `DiagnosisLayer` (con `ComplexityExposureExplorer`), `EvidenceLayer` (video 07:36), `FormulaLayer` (Matriz de Simplicidad), `CemstwoLayer` (Grafo interactivo D3) y `SignalLayer` (Ficha directiva Dr. Andrés López Astudillo + Playbook).
6. **Matriz de Inversión y Precios:** `ProposalLayer` con selector regional, paquetes de alcance cerrado, benchmark de horas (*), insignia recomendada y Cinta de Garantía de Certeza Ontológica.
7. **Preguntas Frecuentes Interactivas:** `FaqAccordion` con acordeón suave derribando objeciones de compras, NDA y retorno.
8. **Banner de Cierre de Alta Urgencia:** `FinalCtaBanner` entre FAQs y Footer para cauterizar el embudo y evitar el rebote frío.
9. **Footer & Gobernanza Legal:** `DepthLayer` con mapas de red Kumu, marco legal completo en GitHub y sello de Cero Cookies / Cero Rastreo.
10. **Floating / Sticky Conversion Pill:** `FloatingCta` permanente (`#floating-cta`) con punto de estado activo (`● En línea`), activación en scroll > 45% y optimización móvil.

### 8.4 Mandatos de Gobernanza: Do's y Don'ts
- **DO: Claridad en 3 Segundos:** Titulares balanceados que eliminan toda ambigüedad del entregable.
- **DO: Escaneabilidad Extrema:** Estructurar contenidos en chips, badges y listas de máximo 3-4 viñetas breves.
- **DO: Micro-animaciones CSS Nativas:** Elevación en hover (`translateY(-2px)`), pulso en puntos de estado y soporte para `prefers-reduced-motion`.
- **DO: Omnipresencia en Mobile:** El canal de conversión debe estar accesible a un solo tap en todo momento.
- **DO: Cero Rastreo Invasivo y Core Web Vitals < 1s:** Código limpio, CSS nativo, cero dependencias pesadas de terceros.
- **DON'T: Muros de Texto (Walls of Text):** Prohibido insertar párrafos densos de más de 3 líneas en secciones de escaneo.
- **DON'T: Ocultar CTAs en Mobile:** Jamás usar `display: none` en llamadas a la acción en vistas responsive.
- **DON'T: Caída Fría al Footer:** Nunca terminar el flujo tras las FAQs en un footer gris sin un banner resolutivo de cierre (`FinalCtaBanner`).
- **DON'T: Dark Patterns o Falsa Escasez:** Prohibidos contadores artificiales falsos o alertas engañosas de compra.
- **DON'T: Precios Ocultos:** Tarifas y condiciones deben ser visibles, auditables y transparentes.

---

*This document is authoritative. Any modifications to this governance standard require explicit approval and alignment with `ARCHITECTURE.md`.*

