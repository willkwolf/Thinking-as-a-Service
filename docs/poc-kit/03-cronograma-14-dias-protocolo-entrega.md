# CRONOGRAMA OPERATIVO DE 14 DÍAS Y PROTOCOLO DE ENTREGA ZERO-IT
## Guía de Ejecución Rápida, Dependencias de Datos y Política Contractual de "Clock-Stop"

**Código de Documento:** `PK-03-TIMELINE`  
**Versión:** 2.0.0 (Canónica)  
**Alcance:** Sprint "Executive Complexity X-Ray" (Fase 1)  
**Horizonte Temporal:** 14 Días Calendario / 10 Días Hábiles de Trabajo Intensivo  
**Principio Operativo:** Zero-IT Reliance (Cero dependencia de infraestructura o autorizaciones informáticas internas)  

---

## 1. VISIÓN GENERAL DE LA ARQUITECTURA TEMPORAL

El sprint **"Executive Complexity X-Ray"** está diseñado para ejecutarse con cadencia industrial en **14 días calendario continuos**, organizados en cinco bloques operativos sincronizados entre el equipo del CLIENTE y la consultora:

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                           ARQUITECTURA DEL SPRINT DE 14 DÍAS                                     │
├─────────────────┬─────────────────┬──────────────────┬─────────────────┬─────────────────────────┤
│ DÍAS 1–2        │ DÍAS 3–5        │ DÍAS 6–7 (FIN DE)│ DÍAS 8–10       │ DÍAS 11–14              │
│ Kickoff & Datos │ Entrevistas C   │ Ingesta & Modelado│ Poda & EBITDA   │ Calidad, Briefing       │
│ Base Zero-IT    │ & Encuesta ONA  │ Algorítmico      │ Playbook Draft  │ & Sesión C-Suite (90m)  │
├─────────────────┼─────────────────┼──────────────────┼─────────────────┼─────────────────────────┤
│ • Kickoff 45m   │ • 3-5 Citas 1h  │ • Ingesta ONA    │ • Cruce de red  │ • D11-12: QA de Grafo   │
│ • Organigrama   │ • Cierre de ONA │ • Betweenness    │ • Top 3 Poda    │ • D13: Pre-Brief Sponsor│
│ • Enlace ONA web│   (Meta >80%)   │ • Silos / Kumu   │ • Cuantificación│ • D14: Lectura C-Suite  │
└─────────────────┴─────────────────┴──────────────────┴─────────────────┴─────────────────────────┘
```

---

## 2. CRONOGRAMA DÍA A DÍA: TAREAS, DEPENDENCIAS Y ENTREGABLES

| Día | Nombre de Fase / Hito | Responsable Principal | Obligación del CLIENTE | Entregable / Output del CONSULTOR | Puerta de Calidad / SLA |
|:---:|---|:---:|---|---|---|
| **Día 1** | **Kickoff Ejecutivo y Perímetro** | Sponsor & Lead Ontologist | • Asistir a Sesión de Kickoff (45 min).<br>• Proveer organigrama funcional y listado de participantes (15–25 personas con email corporativo).<br>• Entregar catálogo simple de iniciativas activas (hasta 30 proyectos). | • Acta formal de Kickoff y Perímetro convenido.<br>• Plantilla de recolección de iniciativas validada.<br>• Creación del espacio de trabajo seguro en Kumu. | Entrega de datos iniciales en menos de 24h. |
| **Día 2** | **Despliegue de Micro-Encuesta ONA** | SPOC & Equipo FDE | • Enviar correo de patrocinio interno anunciando el ejercicio a los 15-25 participantes.<br>• Confirmar agenda y enlaces para las 3-5 entrevistas ejecutivas. | • Lanzamiento del formulario web cifrado ONA (5 preguntas clave, 10 min de respuesta).<br>• Sistema de monitoreo de participación en tiempo real activado. | 100% de enlaces distribuidos con tracking. |
| **Día 3** | **Ronda de Entrevistas I & Monitoreo ONA** | Lead Ontologist & C-Suite | • Realización de 2 entrevistas ejecutivas en profundidad (45-60 min cada una).<br>• SPOC emite primer recordatorio de encuesta ONA. | • Grabación/transcripción sintética de entrevistas bajo protocolo de anonimización.<br>• Identificación preliminar de cuellos de botella directivos. | Tasa de respuesta ONA >= 40%. |
| **Día 4** | **Ronda de Entrevistas II & Barrido ONA** | Lead Ontologist & C-Suite | • Realización de 2 entrevistas ejecutivas en profundidad (45-60 min cada una).<br>• SPOC gestiona casos de no respuesta. | • Mapeo cualitativo de silos interdepartamentales y comités con baja tracción.<br>• Segunda actualización de telemetría de respuestas. | Tasa de respuesta ONA >= 65%. |
| **Día 5** | **Entrevista Final & Cierre de Campo ONA** | Lead Ontologist & SPOC | • Realización de 1 entrevista ejecutiva final de balance.<br>• **Cierre definitivo del formulario ONA a las 18:00 hrs.** | • Cierre de dataset y emisión de reporte de participación final.<br>• Matriz de adyacencia de red consolidada. | **Gate de Campo:** Participación >= 80% (si es <70% aplica Clock-Stop). |
| **Día 6** | **Fin de Semana I: Ingesta y Limpieza** | Equipo FDE / Modelador | *Sin requerimientos para el Cliente (Equipo Consultor en laboratorio).* | • Normalización de matrices relacionales y desambiguación de entidades.<br>• Codificación de identidades para anonimización (ej. `[MGR-FIN-01]`). | Dataset estructurado en JSON/CSV apto para Kumu. |
| **Día 7** | **Fin de Semana II: Topología y Algoritmos** | Equipo FDE & Lead Ontologist | *Sin requerimientos para el Cliente (Equipo Consultor en laboratorio).* | • Generación de primera versión del Grafo Interactivo Privado.<br>• Cálculo matemático de **centralidad de intermediación (*betweenness*)**, grado de entrada/salida (*in/out degree*) y **modularidad de comunidades (silos)**. | Grafo navegable interno con clusters identificados. |
| **Día 8** | **Diagnóstico de Silos y Cuellos de Botella** | Lead Ontologist | • Atender llamada rápida de aclaración técnica con el SPOC (15 min) si se detectan ambigüedades en nombres de iniciativas. | • Identificación de los 3 nodos de mayor sobrecarga y las 5 interfaces con desconexión crítica.<br>• Matriz de calor de iniciativas zombi vs. impacto real. | Correlación de red validada con entrevistas. |
| **Día 9** | **Redacción del Playbook de Poda (Borrador)** | Lead Ontologist | *Sin requerimientos para el Cliente.* | • Borrador completo del Playbook Ejecutivo de Poda y Simplificación.<br>• Modelo de estimación de EBITDA recuperable por horas directivas y proyectos detenidos. | Cuantificación de ahorro mínimo proyectado (>3x fee). |
| **Día 10** | **Revisión Metodológica CEMSTWO** | Lead Ontologist & FDE | *Sin requerimientos para el Cliente.* | • Control de calidad interno: contraste con las 7 dimensiones ontológicas (Clientes, Actores, Transformación, Cosmovisión, Dueños, Entorno).<br>• Calibración de visualizaciones interactivas en Kumu/D3. | Cero inconsistencias lógicas en el grafo. |
| **Día 11** | **Hardening y Control de Calidad del Grafo** | Equipo FDE | • Validar accesibilidad del entorno seguro desde la red del Cliente (comprobar que el dominio no esté bloqueado por proxy corporativo). | • Generación de credenciales seguras de acceso para la alta dirección.<br>• Exportación de vistas estáticas de alta resolución (SVG/PNG) para anexos del Playbook. | Renderizado del grafo sin latencia (<2 seg). |
| **Día 12** | **Integración Final de Artefactos** | Lead Ontologist | *Sin requerimientos para el Cliente.* | • Consolidación del paquete de entrega: Grafo Interactivo + Playbook de Poda final en PDF de diseño editorial. | Documentación final lista para presentación. |
| **Día 13** | **Pre-Briefing Ejecutivo con Sponsor** | Lead Ontologist & Sponsor | • **Sesión de Alineación Preliminar (30 min)** exclusiva entre Lead Ontologist y Sponsor Ejecutivo (CEO/COO). | • Presentación confidencial de los hallazgos más sensibles para evitar sorpresas políticas en la reunión plenaria.<br>• Envío formal del paquete ejecutivo digital. | Consenso de agenda para la sesión del Día 14. |
| **Día 14** | **Sesión Ejecutiva de Lectura y Cierre** | Sponsor, C-Suite & Lead Ontologist | • **Sesión Plenaria de Alta Dirección (90 min).** Asistencia obligatoria del Sponsor Ejecutivo y directores del dominio.<br>• Debate del Playbook de Poda.<br>• Firma del Acta de Recepción y Cierre. | • Presentación magistral de asimetría informativa en vivo sobre el Grafo Interactivo.<br>• Discusión de iniciativas zombi a detener de inmediato.<br>• Evaluación de criterios de activación para Fase 2 (Retainer FDE). | **Sign-off formal del servicio.** |

---

## 3. PROTOCOLO DE INGESTA DE DATOS "ZERO-IT"

### 3.1 Fundamento y Filosofía Operativa
La mayor causa de fracaso y retraso en diagnósticos corporativos tradicionales es la **dependencia de los departamentos de TI e InfoSec** (solicitudes de acceso a APIs, permisos de lectura en Slack, logs de Exchange o conexiones ODBC a bases de datos relacionales).

El **Protocolo Zero-IT** neutraliza esta fricción:
- **Cero integraciones técnicas:** No se instala software en los servidores del cliente.
- **Cero permisos administrativos:** No se solicita acceso a correos ni credenciales corporativas.
- **Datos declarativos y perceptuales directos:** Se recolecta la arquitectura real a través de quienes ejecutan el trabajo, mediante herramientas web seguras de alta usabilidad.

### 3.2 Insumos Obligatorios a Entregar en Día 1
El SPOC del CLIENTE debe suministrar en un plazo improrrogable de **24 horas hábiles** tras el Kickoff:
1. **Directorio de Participantes (Hoja de Cálculo Simple):** Nombres, cargos formales, correos corporativos y área de adscripción de 15 a 25 personas clave.
2. **Organigrama Oficial:** Estructura jerárquica formal vigente (en formato PDF o imagen).
3. **Catálogo de Iniciativas Estratégicas:** Listado simple de proyectos, comités de seguimiento o programas de transformación que se encuentren actualmente en curso en el dominio evaluado.

### 3.3 Especificaciones de la Micro-Encuesta ONA Activa
- **Plataforma:** Formulario web propietario cifrado con protocolo HTTPS / TLS 1.3.
- **Duración estimada:** 8 a 12 minutos por persona.
- **Batería de Preguntas Canónicas (5 Dimensiones):**
  1. *Flujo de Coordinación:* "¿Con qué 3 a 5 personas de este listado interactúa de manera indispensable cada semana para que su trabajo avance?"
  2. *Bloqueo de Decisión:* "¿A quién debe acudir obligatoriamente para destrabar una decisión crítica cuando un proyecto se detiene?"
  3. *Iniciativas Zombi:* "¿En cuáles de las iniciativas activas de la empresa considera usted que se invierte tiempo directivo sin que se observe un impacto tangible en el negocio?"
  4. *Silos Ocultos:* "¿Con qué departamento o equipo experimenta mayor fricción, retraso o falta de alineación en el día a día?"
  5. *Espejismo Tecnológico:* "¿Qué herramienta, software o reporte corporativo le exige más tiempo de llenado del beneficio operativo que realmente le aporta?"

---

## 4. POLÍTICA CONTRACTUAL DE "RELOJ CONGELADO" (CLOCK-STOP POLICY)

Para preservar la viabilidad del precio fijo cerrado y evitar que la desidia o agenda del cliente consuma el margen del proyecto, se establece la siguiente cláusula operativa vinculante:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CLÁUSULA DE RELOJ CONGELADO (CLOCK-STOP)                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ "El cómputo de los catorce (14) días calendario del Sprint se suspenderá               │
│ de pleno derecho y sin necesidad de requerimiento judicial previo en cualquiera         │
│ de los siguientes eventos imputables al CLIENTE:                                       │
│                                                                                        │
│ 1. Retraso superior a 24 horas hábiles en la entrega del organigrama, lista            │
│    de participantes o catálogo de iniciativas en el Día 1.                             │
│ 2. Tasa de respuesta de la micro-encuesta ONA inferior al setenta por ciento          │
│    (70%) de la muestra convenida al cierre formal del Día 5.                           │
│ 3. Cancelación o reprogramación de cualquiera de las entrevistas ejecutivas            │
│    agendadas con menos de 24 horas de antelación.                                      │
│ 4. Demora superior a 24 horas hábiles del Sponsor Ejecutivo en confirmar               │
│    la fecha u hora de la Sesión de Lectura Ejecutiva del Día 14.                       │
│                                                                                        │
│ Durante el periodo de suspensión (Clock-Stop), el cronograma permanecerá congelado     │
│ formalmente. El reloj se reanudará en el mismo día del cronograma en que fue pausado   │
│ una vez que el CLIENTE subsane fehacientemente la condición de bloqueo.                │
│ En ningún caso el CONSULTOR será pasible de sanciones, descuentos o penalidades        │
│ por la extensión de fechas calendario derivada de un evento de Clock-Stop."            │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Protocolo de Notificación de Clock-Stop:
1. Al configurarse la causal de demora, el Lead Ontologist remitirá un correo formal al Sponsor y al SPOC con el asunto:  
   `[AVISO DE CLOCK-STOP] Suspensión de Cronograma - Sprint Executive Complexity X-Ray`.
2. El mensaje detallará la causa exacta del bloqueo, la acción correctiva requerida y la nueva fecha proyectada de entrega sujeta a subsanación.
3. Si la suspensión excede de diez (10) días hábiles continuos sin subsanación por parte del CLIENTE, EL CONSULTOR tendrá la facultad de dar por concluido el sprint, facturar el 50% restante en concepto de honorarios devengados y entregar el análisis con el estado de avance disponible hasta la fecha del congelamiento.

---

## 5. PROTOCOLO DE REVISIÓN FINAL Y SIGN-OFF

El cierre del Sprint el **Día 14** sigue un protocolo riguroso:
1. **Entrega de Artefactos:** 24 horas antes de la reunión (Día 13), el Sponsor recibe el acceso exclusivo al Grafo Privado y el documento PDF del Playbook de Poda.
2. **Sesión Ejecutiva (90 min):** Se dedica el 40% del tiempo a la demostración visual interactiva, el 40% al análisis de las iniciativas a podar y el 20% a la decisión de gobernanza.
3. **Acta de Conformidad:** Al término de la sesión, se suscribe el documento `06-protocolo-cierre-evaluacion-fase2.md`, liberando el segundo pago del SOW y activando la ventana de 30 días para evaluar la suscripción al Retainer FDE de Fase 2.
