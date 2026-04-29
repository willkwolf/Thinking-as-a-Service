# Frontend mínimo

## Principios

- Mobile first: todo componente debe funcionar desde 320 px antes de crecer a tablet o desktop.
- Lectura accesible: `Atkinson Hyperlegible` se usa para texto continuo y `Space Grotesk` solo para titulares.
- Alto contraste por defecto: el modo dia evita grises suaves sobre blanco; el modo descanso baja brillo sin perder contraste.
- Movimiento responsable: `prefers-reduced-motion` desactiva el video, la red D3 y las transiciones.

## Paleta

- Dia: fondo hueso `#f7f4ec`, texto profundo `#14201f`, teal estructural `#006f73`, oro sobrio `#8a5a00`, helecho `#486b4b`.
- Descanso: fondo `#101413`, texto calido `#f3efe4`, teal suave `#8fd8d2`, oro `#f0c46e`, verde `#a7c59a`.

Los colores viven como variables CSS en `css/styles.css`. No agregues colores sueltos salvo que sean de marca externa, como WhatsApp.

## Modos visuales

`js/main.js` aplica automáticamente:

- `day` entre las 06:00 y las 18:59.
- `rest` entre las 19:00 y las 05:59.

El selector de la esquina superior permite guardar una preferencia en `localStorage`.

## Video

El video de fondo no debe cargar el MP4 original de 44.9 MB. La seccion usa:

- `Assets/visual-mapping-loop.webm`
- `Assets/visual-mapping-loop.mp4`
- `Assets/visual-mapping-poster.jpg`

Para regenerarlos desde el original:

```bash
ffmpeg -y -ss 00:00:12 -t 00:00:22 -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -an -vf "scale=960:-2,fps=24" -c:v libx264 -preset slow -crf 28 -movflags +faststart Assets/visual-mapping-loop.mp4
ffmpeg -y -ss 00:00:12 -t 00:00:22 -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -an -vf "scale=960:-2,fps=24" -c:v libvpx-vp9 -b:v 0 -crf 38 -deadline good -row-mt 1 Assets/visual-mapping-loop.webm
ffmpeg -y -ss 00:00:14 -i Assets/El_Colapso_de_la_Incertidumbre.mp4 -frames:v 1 -vf "scale=960:-2" Assets/visual-mapping-poster.jpg
```

Mantener `preload="metadata"`, `muted`, `playsinline`, `poster` y fuentes `webm` antes de `mp4`.
