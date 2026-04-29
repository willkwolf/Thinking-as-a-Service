# Frontend mínimo

## Dirección narrativa

La página dejó de operar como "misticismo de consultoría" y ahora se posiciona como **Ingeniería de Sistemas y Visibilidad Estructural** para C-Suite.

El núcleo de marca es **descripción rigurosa sobre predicción compleja**: Kumu no se vende como simulador determinista, sino como **Mapa de Navegación de Hipótesis** para reducción de ambigüedad en un contexto 2026 saturado por Agentic Workflows, RAG, reingeniería, canibalización de roles, despidos, ruido y nuevas arquitecturas.

El hilo principal es:

1. Antes de tocar IA, describa el sistema que va a acelerar.
2. La arquitectura de flujo convierte especulación verbal en certidumbre visible.
3. Kumu funciona como motor de ciencia de redes: centralidad, grado, nodos de poder real, SPOF y puntos de apalancamiento.
4. El ROI infinito aparece cuando se detecta un nodo crítico antes de que colapse.
5. El mapa evoluciona hacia un Gemelo Digital de Gobernanza y una Constitución Agéntica.
6. Las System Personas permiten humanizar la complejidad y seguir a una persona a través del sistema.

## Principios UI

- Mobile first: todo componente debe funcionar desde 320 px.
- Alta legibilidad: `Atkinson Hyperlegible` para texto, `Space Grotesk` para titulares, `IBM Plex Mono` para señales de telemetría.
- Estética de instrumentación: paneles, matrices, comparaciones, módulos de evidencia y señales de ciencia de redes.
- Alto contraste por defecto, incluyendo modo descanso para navegación nocturna.
- Sin texto ornamental ni lenguaje esotérico en la interfaz.

## Paleta

- Día: fondo operativo `#f4f7fb`, tinta `#071421`, blueprint `#153a5b`, señal `#0f766e`, alerta `#a33131`, ámbar `#b86100`.
- Descanso: fondo `#080d12`, tinta `#f4f8fb`, blueprint `#8bbce6`, señal `#6ed6c4`, alerta `#ff9a9a`, ámbar `#f0b45f`.

Los colores viven como variables CSS en `css/styles.css`. Evitar colores sueltos salvo integraciones externas.

## Video

El video ya no debe usarse como fondo hero. Vive en la sección `#evidencia` dentro de `.video-module`, con controles nativos para que el usuario profundice en el Quid cuando esté listo.

Assets usados:

- `Assets/visual-mapping-loop.webm`
- `Assets/visual-mapping-loop.mp4`
- `Assets/visual-mapping-full.mp4`
- `Assets/visual-mapping-poster.jpg`

Regeneración:

```bash
ffmpeg -y -ss 00:00:12 -t 00:00:22 -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -an -vf "scale=960:-2,fps=24" -c:v libx264 -preset slow -crf 28 -movflags +faststart Assets/visual-mapping-loop.mp4
ffmpeg -y -ss 00:00:12 -t 00:00:22 -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -an -vf "scale=960:-2,fps=24" -c:v libvpx-vp9 -b:v 0 -crf 38 -deadline good -row-mt 1 Assets/visual-mapping-loop.webm
ffmpeg -y -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -vf "scale=960:-2" -c:v libx264 -preset slow -crf 30 -c:a aac -b:a 96k -movflags +faststart Assets/visual-mapping-full.mp4
ffmpeg -y -ss 00:00:14 -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -frames:v 1 -vf "scale=960:-2" Assets/visual-mapping-poster.jpg
```

Mantener `controls`, `playsinline`, `preload="metadata"` y `poster`. La sección de profundización debe usar `visual-mapping-full.mp4` para conservar duración completa y audio.

## Modos visuales

`js/main.js` aplica automáticamente:

- `day` entre las 06:00 y las 18:59.
- `rest` entre las 19:00 y las 05:59.

El selector permite guardar preferencia en `localStorage`.
