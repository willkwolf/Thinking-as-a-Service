# Informe de Ingeniería Inversa: Navigamo.co
**Objetivo:** Decodificar el "taste" de diseño, comunicación y poder de marca para aplicarlo a un sitio de consultoría de alto ticket.

---

## 1. Stack Tecnológico

- **Plataforma:** Wix (confirmado por URLs `static.wixstatic.com` en todos los assets de imagen)
- **AI Chatbot:** AgentX (Captain Nemo — avatar personalizado con identidad de marca)
- **Cookies/Consent:** CookieYes
- **Hosting de imágenes:** Wix CDN con parámetros de optimización automática (`enc_avif`, `quality_auto`, `usm_0.66_1.00_0.01`)
- **Fuentes:** No identificadas explícitamente (Wix gestiona tipografía internamente)
- **Formularios:** Wix Forms nativo

**Implicación para tu sitio:** Wix es una plataforma de bajo control técnico. Tu stack actual (HTML/CSS/JS vanilla + GitHub Pages) tiene más control, rendimiento y credibilidad técnica. Eso es una ventaja diferencial que debes explotar visualmente.

---

## 2. Arquitectura de Información (IA)

### Estructura de navegación
```
Home (/)
├── Strategic Consulting (/strategic-consulting)
├── Training & Development (/training-development)
├── Digital Strategy (/digital-strategy)
├── Innovation Lab (/innovation-lab)
├── Contact (/contact)
├── Blog (/post/...)
├── Client Access (área privada)
└── Footer
    ├── Privacy Policy
    ├── It's an AI World, are you ready? (QR/landing)
    └── AIO for global companies
```

### Patrón de página de servicio (repetido en todas las páginas internas)
Cada página de servicio sigue este esquema:
1. **Headline de posicionamiento** (H2 grande, sin verbo imperativo)
2. **Subheadline de contexto** (problema del cliente)
3. **Lista de síntomas o beneficios** (bullets cortos)
4. **Sección de profundización** (metodología o proceso)
5. **CTA único** → siempre apunta a `/contact`
6. **"Your next step:"** → enlace a la siguiente página de servicio (flujo lineal guiado)

**Patrón de flujo lineal:** Strategic Consulting → Training → Digital Strategy → Innovation Lab → Contact. Es un funnel de educación progresiva, no un menú de opciones.

---

## 3. Lenguaje de Diseño Visual

### Paleta de color (inferida del contenido y assets)
- **Fondo:** Blanco/crema claro (alta legibilidad, profesional)
- **Acentos decorativos:** Multicolor (formas orgánicas — ondas, semicírculos, barcos) usados como elementos de "calidez" y diferenciación visual
- **Tipografía:** Sans-serif limpia, jerarquía clara H1 > H2 > body
- **Imágenes decorativas:** Formas abstractas geométricas (origami de vela blanca, semicírculos de colores, barco morado) — metáfora náutica consistente

### Sistema de metáforas visuales
La identidad visual de Navigamo está construida sobre **una metáfora náutica coherente**:
- Nombre: "Navigamo" (navegar)
- Chatbot: "Captain Nemo"
- Origami de vela blanca como hero image
- Barco morado como ícono de servicio
- Ciudad/tránsito como imagen de proceso
- Lenguaje: "set sail", "crew", "journey", "explore the vast seas"

**Esta coherencia metafórica es el principal activo de marca.** Todo el sistema visual y verbal refuerza una sola idea: navegación estratégica en aguas inciertas.

### Elementos decorativos flotantes
Usan imágenes PNG pequeñas (75-147px) con `blur_2` o `blur_3` como elementos decorativos flotantes alrededor del contenido. Esto crea:
- Profundidad visual sin complejidad técnica
- Sensación de movimiento y dinamismo
- Diferenciación respecto a sitios de consultoría genéricos

---

## 4. Copywriting y Tono de Voz

### Fórmula de headline
- **Patrón:** Verbo de acción + beneficio directo + contexto de urgencia
- Ejemplos:
  - "Optimize Your Digital Presence."
  - "Move Forward With Confidence"
  - "Make an impact in the Era of AI"
  - "Challenge Accepted"
  - "Getting Started is Easy"

### Tono
- **Directo pero empático:** No usa jerga técnica excesiva. Habla al líder de empresa mediana.
- **Urgencia sin alarmismo:** "In a world that shifts and transforms at a dizzying speed" — reconoce el dolor sin exagerar.
- **Confianza sin arrogancia:** "We don't just advise on what to do, we also show you how (or do it for you)."
- **Anti-contrato como diferenciador:** "No Contracts. We set our clients free." — esto es una propuesta de valor de alto riesgo convertida en ventaja.

### Estructura de copy por sección
```
Eyebrow (contexto/categoría) → H2 (promesa) → Lead (problema) → Bullets (síntomas) → CTA
```

### Palabras clave de posicionamiento
- "Strategy First, But Not Only" — diferencia de consultoras puras
- "Human-driven with a touch of field-tested AI" — posición anti-hype
- "In total transparency, of course" — construcción de confianza
- "Winning each client's trust" — relación sobre contrato

---

## 5. Interactividad y UX

### Elementos interactivos identificados
1. **AI Chatbot (Captain Nemo):** Widget flotante en esquina inferior. Personalizado con avatar y nombre de marca. Aparece en homepage, digital-strategy e innovation-lab (no en contact — inteligente).
2. **Formulario de contacto:** Multi-campo con selector de servicio de interés. Newsletter opt-in integrado.
3. **Navegación hamburger:** Menú colapsado en mobile (imagen de "Open Site Navigation").
4. **"Client access":** Área privada en la navegación — señal de exclusividad y relación continua con clientes.

### Lo que NO tiene (y es significativo)
- Sin precios visibles en ninguna página
- Sin testimonios o casos de estudio en homepage
- Sin contador de clientes o métricas de vanidad
- Sin blog prominente en navegación principal
- Sin demos o trials
- Sin chat en vivo (solo AI bot)

**Interpretación:** El modelo de negocio es conversación primero, precio después. Todo el sitio es un filtro de calificación, no un catálogo de servicios.

---

## 6. Estructura de Conversión

### Funnel de conversión
```
Awareness (Hero) 
→ Problema reconocido (Signs that change is needed)
→ Solución presentada (The Navigamo Way)
→ Credibilidad (Samsung case, Experience logos)
→ Proceso simplificado (3 pasos: Call → Process → No Contracts)
→ CTA: "Consult With Us" / "Schedule Your Strategy Session Now"
```

### CTAs identificados
- "Consult With US" (hero, footer)
- "Schedule Your Strategy Session Now" (mid-page)
- "Let's think big picture" (Business Strategy)
- "Close The Knowledge Gap" (Training)
- "Take the Next Step in Digital" (Digital Strategy)
- "Discuss Tailored Solutions" (Innovation Lab)
- "Strategize With Navigamo" (footer)

**Patrón:** Cada CTA es específico al contexto de la sección, no genérico. Esto aumenta la relevancia y la tasa de clic.

### Señales de credibilidad
- Logo Samsung (cliente de alto perfil)
- "Our Experience" con logos de clientes
- Presencia en USA (Florida) y Colombia (Bogotá, Cali) — mercado binacional
- LinkedIn como único canal social (B2B puro)

---

## 7. Análisis de Poder de Marca

### Posicionamiento
Navigamo se posiciona como **agencia de estrategia digital para líderes de empresas medianas** que necesitan modernizarse en la era de la IA. No es una consultora de management pura ni una agencia digital pura — ocupa el espacio intermedio.

### Diferenciadores de marca
1. **Metáfora náutica coherente** — identidad memorable y diferenciada
2. **"Strategy First, But Not Only"** — promesa de ejecución, no solo consejo
3. **Sin contratos** — reducción de fricción de entrada
4. **AI personalizada con identidad de marca** (Captain Nemo) — demostración de capacidad
5. **Presencia binacional** (USA + Colombia) — credibilidad internacional con costos latinoamericanos

### Debilidades identificadas
- Wix limita la experiencia técnica percibida
- Falta de casos de estudio detallados (solo logos)
- Sin precios orientativos (puede generar fricción en el primer contacto)
- Copywriting en inglés exclusivamente (limita mercado hispanohablante)
- Elementos decorativos flotantes pueden verse desorganizados en mobile

---

## 8. Comparación con Tu Sitio Actual

| Dimensión | Navigamo | Tu sitio (Visual Mapping) |
|---|---|---|
| **Stack** | Wix (bajo control) | HTML/CSS/JS vanilla (alto control) |
| **Metáfora central** | Náutica (navegar) | Cartografía/Ciencia de redes |
| **Tono** | Empático, accesible | Técnico, riguroso, C-Suite |
| **Precio visible** | No | Sí (USD 8K–35K+) |
| **CTA principal** | Conversación | WhatsApp directo |
| **Credibilidad** | Logos de clientes | Metodología + caso BPO |
| **Interactividad** | AI chatbot + formulario | D3 network + modo día/noche |
| **Diferenciador técnico** | "Human-driven AI" | Ciencia de redes + CEMSTWO |

---

## 9. Patrones Aplicables a Tu Sitio

### Lo que puedes tomar de Navigamo

1. **Flujo lineal guiado entre secciones:** El "Your next step:" al final de cada página de servicio es brillante. Guía al usuario sin que sienta que está siendo empujado. Puedes implementar esto entre tus secciones: Diagnóstico → Metodología → Paquetes → Contacto.

2. **CTAs contextuales específicos:** En lugar de "Contactar" genérico, cada sección tiene un CTA que refleja el valor de esa sección. Ejemplo: en tu sección de diagnóstico podría ser "Identificar mis SPOF" en lugar de "Solicitar".

3. **Señal de exclusividad:** El "Client access" en navegación es una señal poderosa de que hay una relación continua post-venta. Podrías agregar algo similar (acceso a tablero Kumu, por ejemplo).

4. **Proceso simplificado en 3 pasos:** Su "Getting Started is Easy" con 3 pasos reduce la fricción cognitiva. Tu metodología de 3 pasos (Sonda → Validación → Deep Dive) ya existe pero podría tener más prominencia visual.

5. **Anti-contrato como diferenciador:** Tu "abortabilidad" es equivalente a su "No Contracts". Ambos reducen el riesgo percibido. Navigamo lo pone en el hero del proceso; tú lo tienes enterrado en la metodología.

### Lo que NO debes copiar

1. **Wix:** Tu stack vanilla es superior en rendimiento y credibilidad técnica.
2. **Metáfora náutica:** Ya tienes una metáfora más poderosa (cartografía + ciencia de redes). No la abandones.
3. **Falta de precios:** Para alto ticket, mostrar rangos de precio filtra leads y posiciona el valor. Tu estructura de paquetes es un activo.
4. **Inglés exclusivo:** Tu mercado hispanohablante es una ventaja competitiva real.

### Oportunidades de diferenciación que Navigamo no tiene

1. **Demostración técnica en vivo:** Tu grafo D3 y el embed de Kumu son demostraciones del producto, no solo promesas. Navigamo solo tiene texto e imágenes decorativas.
2. **Rigor metodológico visible:** CEMSTWO, ciencia de redes, SPOF — esto es lenguaje de C-Suite técnico que Navigamo no alcanza.
3. **Video de diagnóstico real:** Tu video de 7:36 min es evidencia, no marketing. Navigamo no tiene nada equivalente.
4. **Modo día/noche:** Pequeño detalle que comunica cuidado técnico y atención al usuario.

---

## 10. Recomendaciones para el Spec

Cuando pases a construir el spec de tu sitio de alto ticket, estos son los vectores de diseño a resolver:

1. **Jerarquía de conversión:** ¿El objetivo es agendar una llamada, enviar un WhatsApp, o llenar un formulario? Define uno solo como CTA primario.
2. **Señal de precio:** ¿Mostrar rangos desde el inicio o después de calificar al lead? Navigamo oculta precios; tú los muestras. Ambas son estrategias válidas pero con implicaciones distintas.
3. **Identidad visual coherente:** Tu metáfora de cartografía/redes necesita un sistema visual tan coherente como la náutica de Navigamo. Actualmente tienes la paleta y tipografía, pero falta el elemento visual icónico recurrente.
4. **Prueba social:** Navigamo usa logos de clientes. Tú tienes el caso BPO (1866 nodos). ¿Cómo lo conviertes en credibilidad visible sin revelar el cliente?
5. **Chatbot con identidad:** Captain Nemo es una idea brillante. ¿Tienes un personaje equivalente para tu marca?

---

*Informe generado mediante exploración agéntica de navigamo.co — Mayo 2026*
