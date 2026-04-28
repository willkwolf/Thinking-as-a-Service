# Visual Mapping - Thinking as a Service

Este proyecto contiene la **Landing Page Estratégica** de KUMU para sus servicios profesionales, centrada en la tesis operativa de **Visual Mapping** y modelado estructural de sistemas organizacionales. 

No se trata de una web comercial tradicional, sino de una **interfaz de revelación progresiva** diseñada para mostrar cómo la topología real de un sistema define sus resultados mucho más que las herramientas operativas.

## 🔗 Sitio Web en Producción
Visita el sitio en vivo a través de GitHub Pages:
**[https://willkwolf.github.io/Thinking-as-a-Service/](https://willkwolf.github.io/Thinking-as-a-Service/)**

## Estructura Técnica
- **Stack**: HTML5, CSS3 nativo (Vanilla), JavaScript.
- **Visualización**: Se utiliza `D3.js` para simular la complejidad sistémica en el fondo.
- **Pruebas**: Contiene un entorno de pruebas automatizadas E2E montado con `Playwright` y `pytest` (en la carpeta `tests/`).

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
