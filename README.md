# Visual Mapping - Thinking as a Service

Este proyecto contiene la landing page de KUMU para **Ingeniería de Sistemas y Visibilidad Estructural**, orientada a equipos ejecutivos que necesitan reducir ambigüedad antes de invertir en Agentic Workflows, RAG, automatización o rediseño operativo.

La propuesta comercial contrasta **descripción frente a predicción**: Kumu se presenta como un **Mapa de Navegación de Hipótesis** basado en ciencia de redes, arquitectura de flujo, centralidad, grado, nodos de poder real, puntos de falla únicos, deuda estructural, System Personas y Gemelo Digital de Gobernanza.

## 🔗 Sitio Web en Producción
Visita el sitio en vivo a través de GitHub Pages:
**[https://willkwolf.github.io/Thinking-as-a-Service/](https://willkwolf.github.io/Thinking-as-a-Service/)**

## Estructura Técnica
- **Stack**: HTML5, CSS3 nativo (Vanilla), JavaScript.
- **Visualización**: Se utiliza `D3.js` como textura de red no determinista en el fondo.
- **Frontend**: Mobile first, alto contraste, modo día/descanso automático y video completo con audio dentro de un módulo reproducible.
- **Pruebas**: Contiene un entorno de pruebas automatizadas E2E montado con `Playwright` y `pytest` (en la carpeta `tests/`).

## Documentación Frontend
La guía mínima de narrativa, diseño, accesibilidad, paleta, tipografías y pipeline de video está en [`FRONTEND.md`](FRONTEND.md).

## Desarrollo y Pruebas Locales
Para ejecutar las pruebas en tu máquina local:
1. Instala el gestor de paquetes Python `uv`.
2. Sincroniza las dependencias e instala los navegadores:
   ```bash
   uv sync
   uv run playwright install chromium
   ```
3. Levanta el servidor local (`python -m http.server 8000`) y en otra terminal ejecuta los tests:
   ```bash
   uv run pytest tests/e2e/
   ```
