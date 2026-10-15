# MATRIZ RACI DE GOBERNANZA Y ÁRBOL DE ESCALAMIENTO DE BLOQUEOS
## Estructura de Roles, Responsabilidades Operativas y Resolución Rápida de Fricción

**Código de Documento:** `PK-05-RACI-ESCALATION`  
**Versión:** 2.0.0 (Canónica)  
**Alcance:** Sprint "Executive Complexity X-Ray" (Fase 1) y Gobernanza de Transición (Fase 2)  
**Objetivo:** Claridad total de mando, cero ambigüedad en la ejecución y resolución de bloqueos en <24 horas  

---

## 1. TAXONOMÍA DE ROLES DEL ECOSISTEMA PoC

Para garantizar una cadencia de ejecución implacable durante los 14 días del sprint, se definen cuatro (4) roles canónicos con atribuciones y fronteras de actuación inequívocas:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        MAPA DE ACTORES Y ROLES DEL PROYECTO                            │
├────────────────────────────────────────┬───────────────────────────────────────────────┤
│ LADO CLIENTE (Organización Contratante)│ LADO CONSULTOR (Thinking-as-a-Service)        │
├────────────────────────────────────────┼───────────────────────────────────────────────┤
│ 1. SPONSOR EJECUTIVO C-SUITE           │ 3. LEAD ONTOLOGIST (Consultor Principal)       │
│    (CEO, COO, CFO, VP Operaciones)     │    (Arquitecto Sistémico & Asesor C-Suite)    │
│    • Máxima autoridad y Accountable.   │    • Director metodológico y facilitador C.   │
├────────────────────────────────────────┼───────────────────────────────────────────────┤
│ 2. ENLACE DE DATOS (Data Liaison/SPOC) │ 4. EQUIPO FDE (Forward Deployed Engineers)    │
│    (Gerente de Operaciones / PMO)      │    (Ingeniería de Grafos & Modelado de Datos) │
│    • Responsable operativo interno.    │    • Procesamiento matemático y Kumu/D3.      │
└────────────────────────────────────────┴───────────────────────────────────────────────┘
```

### 1.1 Definición Granular de Funciones

#### A. Sponsor Ejecutivo C-Suite (Cliente)
- **Perfil:** CEO, COO, CFO o Vicepresidente de Operaciones/Transformación.
- **Autoridad:** Ejerce el mando formal sobre el perímetro evaluado, aprueba el presupuesto cerrado y convoca a la alta dirección a la Sesión Ejecutiva de Lectura (Día 14).
- **Atribución Única:** Único facultado para validar la suscripción del SOW, autorizar medidas del Playbook de Poda y activar la decisión hacia la Fase 2 (Retainer FDE).

#### B. Enlace de Datos Operativo / Data Liaison / SPOC (Cliente)
- **Perfil:** Gerente de Operaciones, Director de PMO o Business Partner de RRHH sénior con acceso transversal.
- **Misión:** Actuar como interlocutor diario con el equipo consultor. Provee los insumos base (organigrama, nómina de roles, catálogo de iniciativas), agenda las entrevistas ejecutivas y presiona internamente para alcanzar >80% de respuesta en la encuesta ONA en el Día 5.

#### C. Lead Ontologist / Consultor Principal (Thinking-as-a-Service)
- **Perfil:** Estratega de negocios sénior y especialista en pensamiento sistémico (marco CEMSTWO).
- **Misión:** Liderar la relación con el Sponsor, conducir las entrevistas ejecutivas, supervisar el modelado topológico, redactar el Playbook de Poda, formular las estimaciones financieras de recuperación de EBITDA y dirigir la Sesión de Lectura Ejecutiva de 90 minutos.

#### D. Equipo FDE / Forward Deployed Engineers (Thinking-as-a-Service)
- **Perfil:** Ingenieros de datos y analistas cuantitativos especializados en teoría de grafos y visualización interactiva.
- **Misión:** Administrar el formulario web seguro de la encuesta ONA, normalizar matrices relacionales, calcular algoritmos de centralidad de intermediación (*betweenness*) y modularidad de comunidades (silos), y renderizar la interfaz interactiva privada en Kumu/D3.

---

## 2. MATRIZ RACI DETALLADA POR FASE Y ACTIVIDAD

*Convención de Gobernanza:*  
- **R (Responsible):** El rol que ejecuta la tarea y produce el resultado.  
- **A (Accountable):** El rol con la autoridad final de aprobación; solo puede existir un "A" por actividad.  
- **C (Consulted):** El rol que aporta información crítica y retroalimentación bidireccional.  
- **I (Informed):** El rol que es notificado del progreso o resultado de forma unidireccional.

```
┌────────────────────────────────────────────────────────┬─────────┬──────┬────────────┬─────────┐
│ ACTIVIDAD / ENTREGABLE DEL SPRINT                      │ SPONSOR │ SPOC │ LEAD ONTO. │ EQUIPO  │
│                                                        │ C-SUITE │ DATA │ (CONSULTOR)│ FDE     │
├────────────────────────────────────────────────────────┼─────────┼──────┼────────────┼─────────┤
│ 1. Calificación de Idoneidad y Definición de Perímetro │    A    │  C   │     R      │    I    │
│ 2. Formalización de Contrato SOW y Acuerdo NDA Mutuo   │    A    │  I   │     R      │    I    │
│ 3. Sesión de Kickoff Ejecutivo (Día 1 - 45 min)        │    A    │  C   │     R      │    C    │
│ 4. Entrega de Organigrama Funcional y Lista de Roles   │    A    │  R   │     C      │    I    │
│ 5. Suministro del Catálogo de Iniciativas Estratégicas │    I    │  R   │     C      │    I    │
│ 6. Despliegue Técnico de Micro-Encuesta ONA Web        │    I    │  C   │     A      │    R    │
│ 7. Emisión de Correo Interno de Patrocinio a la Red    │    A    │  R   │     C      │    I    │
│ 8. Coordinación de Agenda de Entrevistas Ejecutivas    │    I    │  R   │     C      │    I    │
│ 9. Realización de Entrevistas C-Level en Profundidad   │    C    │  I   │     R      │    I    │
│ 10. Monitoreo de Tasa de Respuesta ONA y Recordatorios │    I    │  R   │     A      │    R    │
│ 11. Cierre de Base de Datos ONA (Día 5 - Gate 80%)     │    I    │  I   │     A      │    R    │
│ 12. Normalización de Matrices y Anonimización por Rol  │    I    │  I   │     A      │    R    │
│ 13. Cálculo Algorítmico (Betweenness, Silos, Grado)    │    I    │  I   │     A      │    R    │
│ 14. Renderizado del Grafo Interactivo Privado (Kumu/D3)│    I    │  I   │     A      │    R    │
│ 15. Formulación del Borrador del Playbook de Poda      │    I    │  C   │     R      │    C    │
│ 16. Estimación Financiera de EBITDA y Ahorro de Tiempo │    I    │  C   │     R      │    C    │
│ 17. Pre-Briefing Confidencial con Sponsor (Día 13)     │    A    │  I   │     R      │    I    │
│ 18. Sesión Ejecutiva de Lectura de Red (Día 14 - 90 m) │    A    │  I   │     R      │    C    │
│ 19. Evaluación de Criterios y Transición a Fase 2      │    A    │  I   │     R      │    I    │
│ 20. Suscripción del Acta Final de Entrega y Cierre     │    A    │  I   │     R      │    I    │
└────────────────────────────────────────────────────────┴─────────┴──────┴────────────┴─────────┘
```

---

## 3. ÁRBOL DE ESCALAMIENTO DE BLOQUEOS (ESCALATION TREE)

En un sprint de 14 días, **cualquier fricción no resuelta en 12 horas pone en peligro la fecha de entrega**. Se establece un mecanismo de escalamiento escalonado en 3 niveles de severidad con tiempos de respuesta (*SLA*) innegociables:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        ÁRBOL JERÁRQUICO DE ESCALAMIENTO                                │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│  [NIVEL 1: OPERATIVO / TÉCNICO]                                                        │
│  Actores: Data Liaison (SPOC)  ◄────────►  Equipo FDE (Modelador)                      │
│  Alcance: Errores en correos, enlaces rebotados, dudas de llenado en encuesta ONA.      │
│  SLA Máximo de Resolución: 4 horas hábiles.                                            │
│                                │                                                       │
│                                ▼ (Si no se resuelve en 4h)                             │
│                                                                                        │
│  [NIVEL 2: COORDINACIÓN Y AGENDA]                                                      │
│  Actores: Data Liaison (SPOC)  ◄────────►  Lead Ontologist (Consultor Líder)           │
│  Alcance: Entrevistas no confirmadas, respuesta ONA <50% al Día 4, ambigüedad en roles. │
│  SLA Máximo de Resolución: 12 horas hábiles.                                           │
│                                │                                                       │
│                                ▼ (Si no se resuelve en 12h)                            │
│                                                                                        │
│  [NIVEL 3: ESTRATÉGICO Y GOBERNANZA]                                                   │
│  Actores: Sponsor Ejecutivo C-Suite  ◄────────►  Lead Ontologist                       │
│  Alcance: Resistencia política interna, cancelación de entrevistas, bloqueo de datos.  │
│  SLA Máximo de Resolución: 24 horas hábiles.                                           │
│                                │                                                       │
│                                ▼ (Si excede 24h sin solución)                          │
│                                                                                        │
│  [ACTIVACIÓN INMEDIATA DE CLÁUSULA CLOCK-STOP]                                         │
│  Notificación formal de suspensión del cómputo de los 14 días sin penalidad.           │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. PROTOCOLO DE CONTINGENCIA POR TIPOLOGÍA DE BLOQUEO

| Tipología de Bloqueo | Síntoma Específico | Acción Inmediata de Mitigación | Responsable de Ejecutar |
|---|---|---|---|
| **Bloqueo Tipo A: Datos Iniciales Ausentes** | Al término del Día 1 no se ha recibido el organigrama o lista de correos. | SPOC y Lead Ontologist sostienen llamada de emergencia a las 09:00 hrs del Día 2. Si no se entregan antes de las 12:00 hrs, se emite aviso formal de Clock-Stop. | SPOC / Lead Ontologist |
| **Bloqueo Tipo B: Baja Participación ONA** | Al mediodía del Día 4 la respuesta en la encuesta ONA es inferior al 50%. | El Sponsor Ejecutivo C-Suite remite un recordatorio prioritario por canal oficial (Slack/Teams o correo interno) recordando la obligatoriedad del ejercicio. | Sponsor Ejecutivo C-Suite |
| **Bloqueo Tipo C: Cancelación de Entrevista** | Un director clave cancela su entrevista en la Semana 1 por conflicto de agenda. | El SPOC debe reubicarla dentro de las siguientes 24 horas hábiles o asignar al subdirector operativo con facultades equivalentes; de lo contrario, se activa Clock-Stop de 24h. | SPOC |
| **Bloqueo Tipo D: Resistencia Política / Boicot** | Un líder de área cuestiona la validez de la encuesta o instruye a su equipo a no responder. | El Lead Ontologist escala directamente con el Sponsor Ejecutivo. Se reitera que el ejercicio es de diseño sistémico y no punitivo, exigiendo respaldo formal del CEO/COO. | Lead Ontologist & Sponsor |
| **Bloqueo Tipo E: Acceso Técnico Bloqueado** | El proxy corporativo del cliente bloquea el enlace web de la encuesta o de Kumu. | El Equipo FDE provee enlace alternativo con dominio espejo cifrado o se habilita archivo CSV estructurado seguro con macro de carga local en menos de 2 horas. | Equipo FDE |

---

## 5. PROTOCOLO PARA LA GESTIÓN DE RESISTENCIA Y FRICCIÓN POLÍTICA

El análisis de redes organizacionales (ONA) y la identificación de cuellos de botella suelen despertar susceptibilidades defensivas en mandos intermedios que temen perder relevancia o ser exhibidos. El Lead Ontologist y el Sponsor deberán aplicar las siguientes tres (3) directrices de salvaguarda:

1. **Principio de Falla Estructural vs. Culpabilidad Individual:** Toda presentación de resultados debe enfatizar que los cuellos de botella son **víctimas de una arquitectura de red defectuosa** que los satura con excesivas aprobaciones, y no individuos negligentes. La meta es liberarlos de sobrecarga, no sancionarlos.
2. **Confidencialidad en la Sala Ejecutiva:** El Grafo se discute inicialmente solo a nivel de Sponsor Ejecutivo (Pre-Briefing Día 13) y posteriormente en el comité directivo bajo estricta regla de confidencialidad interna *Chatham House*.
3. **Anonimización Dinámica:** Si un área manifiesta tensión extrema, el Lead Ontologist activará la vista codificada del grafo (ej. `[LEAD-GTM-01]`), permitiendo discutir el patrón matemático sin personalizar el debate.
