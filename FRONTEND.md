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
