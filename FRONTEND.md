# Frontend — Thinking as a Service (v2)

## Narrativa iceberg

1. **Superficie** (`#iceberg-surface`) — Ruido (VUCA, BANI, TUNA, IA sin mapa, RiskPanel)
2. **Diagnóstico** (`#iceberg-diagnosis`) — Falla estructural, complejidad interna vs externa, drenaje de EBITDA
3. **Evidencia** (`#iceberg-evidence`) — Video Visual Mapping (07:36)
4. **Fórmula** (`#iceberg-formula`) — Métricas de estructura, tipping point, matriz de simplicidad
5. **CEMSTWO** (`#iceberg-cemstwo`) — Ciencia de redes, rueda interactiva SVG/D3 y panel de detalle
6. **Señal** (`#iceberg-signal`) — Pilares de simplicidad, ficha ejecutiva PhD Andrés López Astudillo, playbook
7. **Propuesta** (`#iceberg-proposal`) — Calculadora de pricing interactiva (USA/Canadá/LATAM)
8. **Profundidad** (`#iceberg-depth`) — Megatendencias Kumu (iframe interactivo con fallback responsive), footer y CTA

## Macronarrativa

- **Economía Circular** (marco estructural)
- **Complejidad + Industria + IA** (narrativa de consultoría ejecutiva)
- **Ruido vs Señal** (reducción de entropía antes de automatizar con IA)

## Tipografías (Tokens de Diseño)

- **Display**: `'Fraunces'`, `'Playfair Display'`, `'Instrument Serif'`, Georgia, serif (`--font-display`)
- **Body**: `'Sora'`, `'Plus Jakarta Sans'`, system-ui, sans-serif (`--font-body`)
- **Telemetría / Mono**: `'IBM Plex Mono'`, `'JetBrains Mono'`, monospace (`--font-mono`)

## Modo de Color / Tema

- Definido en `src/styles/tokens.css` y gestionado mediante `src/hooks/useThemeMode.ts`.
- Paleta activa: Paleta editorial "Crema Editorial / Lujo Industrial" (`--bg: #f7f6f2`, `--ink: #121614`).
- El modo actual está establecido en `'day'` de manera consistente.

## Almacén de Contenido (Single Source of Truth)

### Activo (Producción / Runtime):
- `src/content/site.ts`: **Única fuente de verdad** para todos los textos, metadatos, copys bilingües (`es` y `en`), capas del iceberg, opciones de pricing y microcopys de interfaz. Cualquier cambio de contenido debe realizarse exclusivamente aquí.

### Archivos Inactivos / Legados (NO MODIFICAR):
- `src/content/complexity.ts`: Archivo legado con 0 importaciones en la aplicación. No modificar.
- `src/content/playbook.ts`: Archivo legado con 0 importaciones en la aplicación. No modificar.
- `src/content/iceberg.ts`: Mantenido parcialmente como referencia de tipos/capas para `useIcebergDepth.ts`.

## Arquitectura de Componentes CRO (Conversion Rate Optimization)

Para maximizar la conversión ejecutiva y eliminar la fricción técnica y cognitiva, los componentes se articulan en el siguiente orden canónico:

1. **Header de Navegación** (`DesktopNavbar.tsx`): Telemetría de capa + Acceso directo a Reality Audit.
2. **Superficie / Hero** (`HeroSurface.tsx`):
   - Pill de disponibilidad en tiempo real (`.hero-status-pill` con animación `pulse-dot`).
   - Título de valor: "Deje de automatizar el caos. Automatice el margen."
   - Matriz de 4 Badges de Confianza (`.hero-trust-matrix`: Duración, Enfoque, Exclusividad, Entregable).
   - Franja de pruebas empíricas (`.hero-proof-strip`: 10.2%, 74%, ISO 30401).
   - Vector del héroe (Ruido vs Simplicidad) + `RiskPanel`.
3. **Isla de Autoridad y Stack Técnico** (`AuthorityBar.tsx`): 5 tarjetas de rigor (ISO 30401, CEMSTWO, Kumu & D3.js, PhD Research, W3C BiDi Protocol).
4. **Filtro de Audiencia Cualificada** (`AudienceFilter.tsx`): Tarjetas comparativas ("✔ Para usted si:" vs "✕ NO es para usted si:").
5. **Diagnóstico** (`DiagnosisLayer.tsx` con `ComplexityExposureExplorer.tsx`).
6. **Evidencia Visual** (`EvidenceLayer.tsx` con video 07:36).
7. **Métricas de Estructura** (`FormulaLayer.tsx` con `SimplicityMatrix.tsx`).
8. **Ciencia de Redes CEMSTWO** (`CemstwoLayer.tsx` con grafo SVG/D3 interactivo).
9. **Estrategia y Ficha Directiva** (`SignalLayer.tsx` con Dr. Andrés López Astudillo, PhD y `PlaybookCards.tsx`).
10. **Propuesta y Pricing** (`ProposalLayer.tsx`):
    - Selector regional interactivo (USA / Canadá / LATAM).
    - Cinta de Garantía de Certeza Ontológica y Derecho de Retracto (`.proposal-guarantee-ribbon`).
    - Distintivo de entrada recomendada (`.pack-recommended-tag`) en Fase 1.
    - Generación dinámica de brief para WhatsApp y portapapeles.
11. **Preguntas Frecuentes Interactivas** (`FaqAccordion.tsx`): Acordeón accesible derribando objeciones de compras, NDA y retorno.
12. **Banner de Cierre de Alta Urgencia** (`FinalCtaBanner.tsx`): Cauterización de embudo con doble CTA y garantía ISO 30401.
13. **Casos de Estudio y Gobernanza Legal** (`DepthLayer.tsx`): Kumu embeds responsive + footer institucional completo.
14. **Pill de Conversión Flotante** (`FloatingCta.tsx`): `#floating-cta` permanente con punto verde de estado activo (`.floating-cta__dot`).

