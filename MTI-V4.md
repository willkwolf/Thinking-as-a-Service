```
# MTI-V4.1: Motor de Auditoría Ontológica Multi-Nivel con Orquestación de Agentes y Simulación Monte Carlo

## De la Rúbrica Estática al Workflow Epistémico Distribuido

**Versión:** 4.1 — Extensión Orquestada
**Tipo:** Paper metodológico + especificación operativa + arquitectura de workflow multi-agente
**Insumo para:** SKILL MTI-V4.1 — Motor de Auditoría Ontológica Orquestada
**Base:** MTI-V3 + Dataset de casos 3.1–3.10 + SKILL MTI-V4 + Orquestación de Agentes
**Integración:** CEMSTWO + Monte Carlo + Agent Pooling + Rondas Delphi
**Cambio de paradigma:** de *prompt evaluador* a *sistema distribuido de auditoría ontológica*

---

## Resumen ejecutivo

MTI-V3 clasificaba conceptos. MTI-V4 los auditaba por niveles. **MTI-V4.1 convierte esa auditoría en un workflow epistémico distribuido**, donde múltiples agentes simulados con perfiles filosóficos diferentes puntúan, se examinan mutuamente, convergen o divergen, y el resultado final no es una clasificación única sino una **distribución de clasificaciones con intervalos de confianza, análisis de sensibilidad y mapa de convergencia**.

El problema que resuelve V4.1 es doble:

1. **El problema de los pesos:** MTI-V4 declaraba que los pesos reflejan el marco epistemológico del evaluador, pero no ofrecía mecanismo para explorar esa dependencia. V4.1 lo resuelve mediante **agentes simulados con perfiles filosóficos explícitos** (platonista, formalista, nominalista, constructivista, empirista, pragmatista, etc.).

2. **El problema de la varianza:** MTI-V4 exigía triangulación, pero con dos evaluadores. V4.1 la escala a **N agentes en rondas de pooling**, con **Monte Carlo** sobre pesos, evidencia e incertidumbre.

**Resultado:** MTI-V4.1 no produce "X es INVENTADO". Produce:

> "Bajo 10.000 simulaciones Monte Carlo, con un pool de 12 agentes en 3 rondas, la probabilidad de que L2 sea INVENTADO es 0.68, HÍBRIDO 0.27, DESCUBIERTO 0.05. La clasificación modal es INVENTADO. La clasificación robusta (umbral 0.70) no se alcanza. Sensibilidad filosófica: bajo perfil platonista, L2 migra a HÍBRIDO (p=0.61). Bajo perfil formalista, L2 se consolida como INVENTADO (p=0.89)."

Eso es un cambio cualitativo: de **clasificación** a **distribución epistémica auditada**.

---

## 1. Introducción

### 1.1 Motivación

MTI-V3 y MTI-V4 compartían una limitación estructural: **eran prompts monolíticos**. Un solo evaluador, un solo marco de pesos, una sola pasada. Aunque V4 introdujo rúbricas ancladas, triangulación y auditoría de sesgos, seguía dependiendo de:

- Un evaluador con formación ontológica.
- Pesos declarados pero estáticos.
- Una clasificación puntual sin intervalos de confianza.
- Ausencia de exploración sistemática de la dependencia filosófica.

La madurez de la **orquestación de agentes** (LangGraph, AutoGen, CrewAI, OpenAI Agents SDK) y de las técnicas de **ensemble epistémico** (Delphi, wisdom of crowds, Monte Carlo sobre juicios expertos) abre una oportunidad: **convertir MTI-V4 en un workflow distribuido** donde la clasificación emerge de la interacción entre agentes heterogéneos, no de la decisión de uno solo.

### 1.2 Pregunta de investigación

¿Cómo diseñar un motor de auditoría ontológica que:

- preserve la disciplina multi-nivel y las rúbricas ancladas de MTI-V4,
- explore sistemáticamente la dependencia filosófica de los pesos,
- produzca distribuciones en lugar de clasificaciones puntuales,
- y detecte convergencia, divergencia y sesgos emergentes en un pool de agentes?

### 1.3 Aporte

MTI-V4.1 introduce cinco innovaciones sobre MTI-V4:

1. **Pool de agentes simulados con perfiles filosóficos explícitos** (10–12 arquetipos).
2. **Rondas de pooling tipo Delphi** (puntuación ciega → cross-examination → agregación).
3. **Capa Monte Carlo** sobre pesos, evidencia e incertidumbre inter-agente.
4. **Orquestador central** que gestiona rondas, detecta convergencia y produce el vector final.
5. **Salida distribucional:** probabilidades por clasificación, intervalos de confianza, análisis de sensibilidad por perfil.

### 1.4 Principio rector

MTI-V4.1 no pregunta "¿esto es inventado o descubierto?".

Pregunta: **"¿Cómo se distribuye la clasificación ontológica de este objeto a través de un pool de agentes heterogéneos, bajo incertidumbre de evidencia y dependencia de marco filosófico, y qué convergencias y divergencias emergen?"**

---

## 2. Crítica de MTI-V3 y MTI-V4

### 2.1 Fortalezas preservadas de V4

| Fortaleza V4 | Cómo se preserva en V4.1 |
|---|---|
| Análisis multi-nivel (L1, L2, L3) | Se mantiene como esqueleto obligatorio |
| Rúbricas ancladas | Se mantienen; cada agente las aplica |
| Umbral dinámico δ | Se conserva; ahora se calcula por agente y se agrega |
| Triangulación | Se expande a pooling multi-agente en rondas |
| Auditoría de sesgos | Se convierte en propiedad explícita de cada agente |
| Integración CEMSTWO | Se mantiene como capa sistémica |
| Reglas especiales (filosofía, matemáticas, lógicas no clásicas) | Se mantienen; los agentes especializados las aplican |
| Regla de no-sobreinterpretación | Se mantiene como restricción global |

### 2.2 Debilidades de V4 que V4.1 corrige

| Debilidad V4 | Corrección V4.1 |
|---|---|
| Pesos estáticos declarados por un evaluador | Pesos distribuidos en un pool de perfiles filosóficos |
| Triangulación limitada a dos evaluadores | Pooling de N agentes en rondas |
| Clasificación puntual sin intervalos | Distribución Monte Carlo con IC |
| Sensibilidad filosófica mencionada pero no explorada | Análisis de sensibilidad sistemático por perfil |
| Sesgos auditados post-hoc | Sesgos modelados como parámetros del agente |
| Sin detección de convergencia | Métricas de convergencia por ronda |
| Sin workflow operativo | Orquestador con máquina de estados |

### 2.3 Lo que V4.1 NO cambia

- **No relaja la disciplina multi-nivel.** L1, L2 y L3 siguen siendo obligatorios e irreducibles.
- **No sustituye rúbricas por opiniones.** Cada agente puntúa con las rúbricas ancladas.
- **No convierte el consenso en verdad.** La agregación es epistémica, no metafísica.
- **No elimina la dependencia filosófica.** La visibiliza y la cuantifica.

---

## 3. Fundamentos teóricos

### 3.1 Filosofía de la teleología (Mayr, 1998)

Se mantiene la distinción teleología / teleonomía / finalidad atribuida. Los agentes con perfil "biologicista" puntúan T1 con sensibilidad a teleonomía; los agentes con perfil "intencionalista" puntúan T1 con sensibilidad a diseño explícito.

### 3.2 Independencia y natural kinds (Love, 2023; Beni & Friston, 2024)

La independencia no es binaria. Los agentes con perfil "realista crítico" ponderan I1, I2, I3 de forma equilibrada; los "nominalistas" reducen I3; los "platonistas" elevan I1 e I2.

### 3.3 Modelo CESM de Bunge (2003, 2004)

Se mantiene como capa sistémica. Algunos agentes del pool son "sistémicos" y aplican CEMSTWO integrado; otros son "analíticos" y puntúan MTI puro.

### 3.4 Coherencia rescheriana (Rescher, 1979, 1992)

Criterio de validación. El orquestador evalúa coherencia interna, contextual y pragmática del resultado agregado.

### 3.5 Ensemble epistémico y sabiduría de las multitudes

La literatura sobre *wisdom of crowds* (Surowiecki, 2004), *Delphi method* (Dalkey & Helmer, 1963) y *ensemble methods* (Dietterich, 2000) muestra que la agregación de juicios independientes heterogéneos supera al juicio individual bajo condiciones de:

- **Diversidad:** los agentes deben diferir en marco.
- **Independencia:** las rondas iniciales deben ser ciegas.
- **Descentralización:** no hay autoridad única.
- **Agregación:** existe un mecanismo de pooling.

MTI-V4.1 implementa estas cuatro condiciones.

### 3.6 Monte Carlo sobre juicios expertos

La simulación Monte Carlo permite propagar incertidumbre a través de un modelo. En MTI-V4.1 se usa para:

- Muestrear pesos desde distribuciones centradas en cada perfil filosófico.
- Muestrear incertidumbre de evidencia (intervalos).
- Muestrear varianza inter-agente.
- Producir una distribución de clasificaciones.

### 3.7 Orquestación de agentes

Los frameworks de orquestación (LangGraph, AutoGen, CrewAI) permiten definir workflows con estados, rondas, condiciones de parada y agregación. MTI-V4.1 se especifica como una **máquina de estados orquestada**, no como un prompt único.

---

## 4. Arquitectura MTI-V4.1

### 4.1 Vista general
```

┌─────────────────────────────────────────────────────────────────┐
│ ORQUESTADOR MTI-V4.1 │
│ │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ Fase 0 │──▶│ Fase 1 │──▶│ Fase 2 │──▶│ Fase 3 │ │
│ │Pertinen. │ │Delimit. │ │Pool init │ │Ronda 1 │ │
│ └──────────┘ └──────────┘ └──────────┘ └────┬─────┘ │
│ │ │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────▼─────┐ │
│ │ Fase 6 │◀──│ Fase 5 │◀──│ Fase 4 │◀──│Ronda 2 │ │
│ │MonteCarlo│ │Pooling │ │Cross-exam│ │(ciega) │ │
│ └────┬─────┘ └──────────┘ └──────────┘ └──────────┘ │
│ │ │
│ ┌────▼─────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ Fase 7 │──▶│ Fase 8 │──▶│ Fase 9 │──▶│ Fase 10 │ │
│ │Distrib. │ │Sensibil. │ │Consecuen.│ │Salida │ │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────────────┘

text

```
### 4.2 Capas

| Capa | Función |
|---|---|
| **Capa de Delimitación** | Orquestador central: pertinencia, L1/L2/L3, evidencia |
| **Capa de Agentes** | Pool de N agentes simulados con perfiles filosóficos |
| **Capa de Rondas** | Ronda 1 ciega, Ronda 2 cross-exam, Ronda 3 pooling |
| **Capa Monte Carlo** | Muestreo sobre pesos, evidencia e incertidumbre |
| **Capa de Agregación** | Pooling ponderado, mediana robusta, trimmed mean |
| **Capa de Salida** | Distribución, IC, sensibilidad, convergencia, conclusión |

### 4.3 Máquina de estados del orquestador
```

S0: INIT
↓
S1: PERTINENCIA (¿aplica MTI-V4.1?)
↓ sí
S2: DELIMITACIÓN (L1, L2, L3, controversia, consecuencia)
↓
S3: EVIDENCIA (recopilar, marcar N/D)
↓
S4: POOL INIT (seleccionar agentes, perfiles, pesos)
↓
S5: RONDA 1 — Puntuación ciega independiente
↓
S6: RONDA 2 — Cross-examination
↓
S7: RONDA 3 — Pooling agregado
↓
S8: CONVERGENCIA (¿std < umbral? ¿estabilización?)
↓ si no converge y rondas < max: volver a S6
↓ sí converge o max rondas
S9: MONTE CARLO (S simulaciones)
↓
S10: SENSIBILIDAD FILOSÓFICA
↓
S11: CONSECUENCIAS
↓
S12: SALIDA FINAL

text

```
---

## 5. Pool de Agentes Simulados

### 5.1 Estructura de un agente

Cada agente `A_i` se define como tupla:
```

A\_i = (φ\_i, δ\_i, ε\_i, κ\_i, β\_i, ρ\_i)

text

```
| Componente | Descripción |
|---|---|
| **φ_i** | Perfil filosófico: pesos sobre (T1,T2,T3) y (I1,I2,I3) |
| **δ_i** | Dominio de expertise: científico, jurídico, matemático, social, artístico, técnico |
| **ε_i** | Humildad epistémica: cuánto defiere a la evidencia vs. a su marco |
| **κ_i** | Umbral de confianza: mínimo K para emitir clasificación |
| **β_i** | Perfil de sesgo declarado: institucional, disciplinar, comercial, cultural |
| **ρ_i** | Rol en el workflow: evaluador, cross-examinador, sintetizador, auditor |

### 5.2 Arquetipos filosóficos

Pool mínimo recomendado: **8–12 agentes**. Pool extendido: **20+**.

| Arquetipo | Pesos T | Pesos I | Sesgo esperado |
|---|---|---|---|
| **Platonista** | (0.25, 0.25, 0.25) | (0.40, 0.35, 0.35) | Favorece DESCUBIERTO |
| **Formalista** | (0.40, 0.30, 0.40) | (0.15, 0.30, 0.30) | Favorece INVENTADO |
| **Nominalista** | (0.30, 0.25, 0.50) | (0.20, 0.25, 0.15) | Favorece INVENTADO |
| **Constructivista** | (0.35, 0.35, 0.40) | (0.25, 0.30, 0.30) | Favorece HÍBRIDO |
| **Empirista** | (0.30, 0.35, 0.30) | (0.40, 0.35, 0.30) | Favorece DESCUBIERTO si hay datos |
| **Pragmatista** | (0.35, 0.35, 0.35) | (0.30, 0.30, 0.30) | Pondera por consecuencias |
| **Realista crítico** | (0.30, 0.30, 0.35) | (0.35, 0.40, 0.30) | Equilibrado |
| **Fenomenólogo** | (0.30, 0.25, 0.50) | (0.25, 0.25, 0.25) | Pondera experiencia |
| **Sistémico (CEMSTWO)** | (0.30, 0.30, 0.35) | (0.30, 0.30, 0.30) | Integra sistema |
| **Historiador (drift)** | (0.30, 0.35, 0.40) | (0.30, 0.30, 0.30) | Pondera evolución |
| **Intuicionista (matemáticas)** | (0.30, 0.30, 0.35) | (0.20, 0.40, 0.25) | Especial para lógicas |
| **Auditor de sesgos** | (0.30, 0.30, 0.30) | (0.30, 0.30, 0.30) | Meta-rol |

### 5.3 Distribuciones de pesos por agente

Cada agente no tiene pesos fijos, sino una **distribución**:
```

wT\_i ~ Dirichlet(α\_T\_i)
wI\_i ~ Dirichlet(α\_I\_i)

text

```
Donde `α_T_i` y `α_I_i` son parámetros de concentración centrados en el arquetipo. Esto permite Monte Carlo: cada simulación muestrea pesos del agente.

### 5.4 Protocolo de inicialización del pool

1. **Selección de agentes:** mínimo 8, ideal 12, máximo 20.
2. **Asignación de perfiles:** garantizar diversidad (al menos 4 arquetipos distintos).
3. **Declaración de sesgos:** cada agente declara β_i antes de puntuar.
4. **Calibración:** si hay evaluadores humanos, calibrar contra sus puntuaciones.
5. **Registro:** guardar configuración del pool para reproducibilidad.

---

## 6. Rondas de Pooling

### 6.1 Ronda 1 — Puntuación ciega independiente

Cada agente `A_i`:

1. Recibe el objeto delimitado, L1/L2/L3 y evidencia.
2. Aplica rúbricas T1–T3, I1–I3 por nivel.
3. Calcula T, I, Δ, δ, C, K para cada nivel.
4. Emite clasificación por nivel.
5. Adjunta justificación trazable (evidencia / inferencia / supuesto).

**Regla:** ningún agente ve las puntuaciones de otros.

**Salida por agente:**
```

A\_i: {
L1: {T, I, Δ, δ, C, K, clasificación, justificación}
L2: {…}
L3: {…}
}

text

```
### 6.2 Ronda 2 — Cross-examination

El orquestador:

1. Calcula mediana y dispersión de T e I por nivel.
2. Detecta agentes outliers (|T_i − mediana| > 0.20).
3. Anonimiza y redistribuye puntuaciones.

Cada agente:

1. Ve la distribución anonimizada.
2. Identifica si su puntuación está en la mediana, por encima o por debajo.
3. Si difiere de la mediana en > 0.20, debe:
   - Mantener y justificar con evidencia, o
   - Ajustar y explicar por qué.
4. Registra si su ajuste es por evidencia nueva o por presión social epistémica.

**Regla:** los ajustes por presión social se registran como sesgo de conformidad.

**Salida por agente:**
```

A\_i (R2): {
puntuación R1,
posición relativa,
decisión (mantener/ajustar),
razón,
tipo de razón (evidencia / inferencia / conformidad)
}

text

```
### 6.3 Ronda 3 — Pooling agregado

El orquestador agrega las puntuaciones de R2 usando **múltiples métodos**:

| Método | Fórmula | Propósito |
|---|---|---|
| **Media simple** | `T̄ = (1/N) Σ T_i` | Referencia |
| **Media ponderada por K** | `T̄_K = Σ(K_i · T_i) / Σ K_i` | Pondera por confianza |
| **Media ponderada por expertise** | `T̄_δ = Σ(δ_i · T_i) / Σ δ_i` | Pondera por dominio |
| **Mediana robusta** | `mediana(T_i)` | Robusta a outliers |
| **Trimmed mean (10%)** | media sin extremos | Robusta y eficiente |
| **Media bayesiana jerárquica** | posterior con prior por perfil | Integra marco |

**Reportar todos los métodos.** Si divergen en clasificación, hay **inestabilidad de agregación**.

### 6.4 Criterio de convergencia

El orquestador detiene las rondas cuando:

- `std(T_i) < 0.15` y `std(I_i) < 0.15`, o
- La clasificación modal no cambia entre rondas, o
- Se alcanza el máximo de rondas (3 por defecto).

Si no converge, se reporta **divergencia persistente** y se pasa a Monte Carlo con la distribución observada.

### 6.5 Métricas de convergencia

| Métrica | Fórmula | Interpretación |
|---|---|---|
| **Convergencia de T** | `1 − std(T_i)/0.5` | 1 = total convergencia |
| **Convergencia de I** | `1 − std(I_i)/0.5` | 1 = total convergencia |
| **Convergencia de clasificación** | proporción en clasificación modal | 1 = unanimidad |
| **Estabilización entre rondas** | `1 − |T_R2 − T_R1|` | 1 = sin cambios |
| **Sesgo de conformidad** | proporción de ajustes por presión | 0 = sin conformidad |

---

## 7. Capa Monte Carlo

### 7.1 Propósito

Propagar incertidumbre a través del modelo MTI-V4.1 para producir una **distribución de clasificaciones**, no una clasificación puntual.

### 7.2 Fuentes de incertidumbre

| Fuente | Distribución | Parámetros |
|---|---|---|
| **Pesos del agente** | Dirichlet | Centrados en φ_i |
| **Evidencia** | Intervalo [a, b] | Por subcomponente |
| **Varianza inter-agente** | Normal | μ = T̄, σ = std(T_i) |
| **Confianza del agente** | Beta | Basada en K_i |
| **Sesgo de conformidad** | Bernoulli | Basado en R2 |

### 7.3 Algoritmo
```

Para s = 1..S (S = 10.000 por defecto):

1.  Para cada agente i:
    a. Muestrear wT\_i ~ Dirichlet(α\_T\_i)
    b. Muestrear wI\_i ~ Dirichlet(α\_I\_i)
    c. Muestrear evidencia e\_i desde intervalos
    d. Calcular T\_i^s, I\_i^s
    e. Calcular Δ\_i^s, δ\_i^s, clasificación\_i^s

2.  Agregar T^s, I^s (media ponderada por K)

3.  Calcular Δ^s, δ^s, clasificación^s

4.  Almacenar clasificación^s por nivel

Calcular:

-   P(INVENTADO), P(DESCUBIERTO), P(HÍBRIDO) por nivel

-   IC 95% de T, I, Δ

-   Clasificación modal

-   Clasificación robusta (si P > 0.70)

-   Entropía de la distribución

text

```
### 7.4 Salidas de Monte Carlo

| Salida | Descripción |
|---|---|
| **Distribución de clasificación** | P(INV), P(DESC), P(HÍB) por nivel |
| **Intervalos de confianza** | IC 95% de T, I, Δ |
| **Clasificación modal** | La más probable |
| **Clasificación robusta** | Si P > 0.70 |
| **Entropía** | Incertidumbre de la distribución |
| **Sensibilidad** | Cambio en P(INV) ante cambio en pesos |

### 7.5 Regla de reporte

**Siempre reportar la distribución, no solo la moda.** Si la entropía es alta (> 0.8), la clasificación es **inestable** y debe reportarse como rango.

---

## 8. Análisis de Sensibilidad Filosófica

### 8.1 Propósito

Cuantificar cuánto cambia la clasificación al cambiar el marco filosófico del pool.

### 8.2 Método

1. Definir escenarios de perfil:
   - **Escenario P (platonista):** pool con mayoría platonista.
   - **Escenario F (formalista):** pool con mayoría formalista.
   - **Escenario N (nominalista):** pool con mayoría nominalista.
   - **Escenario C (constructivista):** pool con mayoría constructivista.
   - **Escenario M (mixto):** pool balanceado.

2. Para cada escenario, ejecutar Monte Carlo (S = 5.000).

3. Comparar distribuciones.

### 8.3 Tabla de sensibilidad

| Escenario | P(INV) | P(DESC) | P(HÍB) | Clasificación modal |
|---|---|---|---|---|
| Platonista | | | | |
| Formalista | | | | |
| Nominalista | | | | |
| Constructivista | | | | |
| Mixto | | | | |

### 8.4 Interpretación

- Si la clasificación modal **cambia** entre escenarios: **dependencia filosófica fuerte**. Reportar como "clasificación condicionada por marco".
- Si la clasificación modal **se mantiene** pero las probabilidades cambian: **dependencia filosófica moderada**.
- Si la clasificación modal y las probabilidades son estables: **clasificación robusta**.

---

## 9. Capa de Agregación y Salida Distribucional

### 9.1 Agregación

El orquestador produce:

1. **Vector multi-nivel por agente:** `(L1_i, L2_i, L3_i)`.
2. **Matriz de puntuaciones:** N agentes × 6 subcomponentes × 3 niveles.
3. **Estadísticas por subcomponente:** media, mediana, std, IC.
4. **Clasificación agregada por método:** media, mediana, trimmed, bayesiana.
5. **Distribución Monte Carlo:** P(INV), P(DESC), P(HÍB) por nivel.

### 9.2 Salida final
```

MTI-V4.1 — \[OBJETO\]

1.  Delimitación

    -   Objeto, dominio, unidad, controversia, consecuencia

2.  Configuración del pool

    -   N agentes, perfiles, rondas, convergencia

3.  Resultados por ronda

    -   Ronda 1: matriz de puntuaciones

    -   Ronda 2: ajustes, conformidad

    -   Ronda 3: agregación múltiple

4.  Distribución Monte Carlo

    -   P(INV), P(DESC), P(HÍB) por nivel

    -   IC 95% de T, I, Δ

    -   Clasificación modal y robusta

    -   Entropía

5.  Análisis de sensibilidad filosófica

    -   Tabla por escenario

6.  Convergencia y divergencia

    -   Métricas por ronda

    -   Sesgo de conformidad

    -   Outliers persistentes

7.  Auditoría de sesgos del pool

    -   Institucional, disciplinar, comercial, cultural

8.  Consecuencias

    -   Jurídicas, económicas, políticas, éticas, epistémicas

9.  Drift histórico (si aplica)

10.  Integración CEMSTWO (si aplica)

11.  Conclusión distribuida

-   Vector multi-nivel

-   Clasificación modal

-   Clasificación robusta

-   Sensibilidad

-   Confianza global

text

```
---

## 10. Rúbricas ancladas (heredadas de V4, sin cambios)

Se mantienen íntegras las rúbricas de V4 para T1, T2, T3, I1, I2, I3, M y S. Cada agente las aplica individualmente. El orquestador no las modifica.

**Regla:** si un agente propone una modificación a las rúbricas, debe registrarse como "propuesta de recalibración" y no aplicarse hasta consenso del pool.

---

## 11. Análisis multi-nivel (heredado de V4, sin cambios)

Se mantiene la separación obligatoria L1 / L2 / L3.

**Regla V4.1:** el pool puede producir vectores multi-nivel diferentes por agente. El orquestador reporta:
- Distribución por nivel.
- Correlación entre niveles (¿los agentes que ven L1 como DESCUBIERTO tienden a ver L3 como INVENTADO?).
- Conflictos inter-nivel por agente.

---

## 12. Integración con CEMSTWO

### 12.1 Acoplamiento

MTI-V4.1 se acopla con CEMSTWO igual que V4, pero ahora con agentes especializados:

| CEMSTWO | Agente especializado |
|---|---|
| C — Composición | Agente composicional |
| E — Entorno activo | Agente ecológico |
| M — Mecanismo | Agente mecanicista |
| S — Estructura | Agente estructuralista |
| T — Transformación | Agente procesual |
| W — Weltanschauung | Agente ontológico |
| O — Ownership | Agente politológico |

### 12.2 Flujo integrado

1. **CEMSTWO:** descripción del sistema por agentes sistémicos.
2. **MTI-V4.1:** auditoría ontológica por pool.
3. **Diagnóstico:** conflictos inter-nivel, disonancias W.
4. **Intervención:** rediseño M y S.

---

## 13. Reglas especiales (heredadas de V4, ampliadas)

### 13.1 Conceptos filosóficos

Se mantiene la separación en 5 capas. Los agentes "historiador" y "fenomenólogo" lideran este análisis.

### 13.2 Matemáticas y lógica

Se mantiene la evaluación por marco. Los agentes "intuicionista", "formalista" y "platonista" producen resultados contrastables. El orquestador reporta `Resultado neutral` y `Resultados condicionados por marco`.

### 13.3 Lógicas no clásicas

Se mantiene la distinción L2 / I2. Los agentes especializados en lógicas no clásicas aplican la regla.

### 13.4 No-sobreinterpretación

Se mantiene. El orquestador nunca afirma "X existe realmente". Afirma "bajo el pool configurado y las S simulaciones, la distribución es…".

---

## 14. Casos de uso documentados (actualizados)

Los 10 casos de V4 se mantienen, pero ahora cada uno se ilustra con **configuración de pool sugerida**:

| Caso | Pool sugerido | Agentes clave |
|---|---|---|
| 10.1 Propiedad intelectual | 12 agentes | Jurídico, formalista, platonista, pragmatista |
| 10.2 Diagnóstico médico | 10 agentes | Empirista, constructivista, fenomenólogo |
| 10.3 Tecnologías emergentes | 12 agentes | Sistémico, formalista, pragmatista |
| 10.4 Métricas de gestión | 10 agentes | Pragmatista, constructivista, auditor |
| 10.5 Educación | 8 agentes | Constructivista, empirista, fenomenólogo |
| 10.6 Derecho | 10 agentes | Jurídico, historiador, nominalista |
| 10.7 Arte y autoría | 10 agentes | Fenomenólogo, formalista, historiador |
| 10.8 Ontologías software | 8 agentes | Sistémico, formalista, pragmatista |
| 10.9 Gestión conocimiento | 10 agentes | Historiador, jurídico, constructivista |
| 10.10 Filosofía de la ciencia | 12 agentes | Platonista, formalista, nominalista, realista crítico |

---

## 15. Protocolo de validación

### 15.1 Validación interna

- Coherencia entre T, I, M, S por agente.
- Consistencia entre niveles.
- Trazabilidad de cada puntuación.

### 15.2 Validación externa

- Comparación con evaluadores humanos expertos.
- Contraste con literatura del dominio.
- Verificación con actores relevantes.

### 15.3 Validación distribucional

- Estabilidad de la distribución Monte Carlo (S suficiente).
- Convergencia entre métodos de agregación.
- Sensibilidad a parámetros del pool.

### 15.4 Validación temporal

- Repetir workflow tras cambios en el objeto.
- Detectar drift conceptual.

---

## 16. Limitaciones y salvaguardas

### 16.1 Limitaciones

1. **Costo computacional:** S simulaciones × N agentes × R rondas.
2. **Dependencia del pool:** un pool mal configurado produce distribuciones sesgadas.
3. **Riesgo de falsa objetividad:** la distribución no es la verdad.
4. **Complejidad operativa:** requiere orquestador, no solo prompt.
5. **Dependencia de calibración:** sin evaluadores humanos, los agentes son simulados.
6. **Sesgo del diseñador del pool:** quien elige los arquetipos sesga el resultado.

### 16.2 Salvaguardas

1. **Reportar siempre la distribución, no solo la moda.**
2. **Reportar entropía y robustez.**
3. **Auditar sesgos del pool explícitamente.**
4. **Permitir reconfiguración del pool.**
5. **No usar MTI-V4.1 donde no es pertinente.**
6. **No confundir consenso del pool con verdad.**
7. **No confundir distribución con demostración metafísica.**

---

## 17. Formato de salida obligatorio (V4.1)
```

# MTI-V4.1 — \[OBJETO\]

## 1\. Delimitación

-   Objeto:

-   Dominio:

-   Unidad de análisis:

-   Controversia:

-   Consecuencia:

## 2\. Configuración del pool

-   N agentes:

-   Perfiles:

-   Rondas:

-   Criterio de convergencia:

## 3\. Resultados por ronda

### Ronda 1 — Puntuación ciega

| Agente | Perfil | L1 T | L1 I | L1 Clas | L2 T | L2 I | L2 Clas | L3 T | L3 I | L3 Clas | K |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

### Ronda 2 — Cross-examination

-   Ajustes totales:

-   Ajustes por evidencia:

-   Ajustes por conformidad:

-   Outliers persistentes:

### Ronda 3 — Agregación

| Método | T\_L1 | I\_L1 | Clas L1 | T\_L2 | I\_L2 | Clas L2 | T\_L3 | I\_L3 | Clas L3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## 4\. Distribución Monte Carlo (S = \[N\])

| Nivel | P(INVENTADO) | P(DESCUBIERTO) | P(HÍBRIDO) | Entropía |
| --- | --- | --- | --- | --- |
| L1 |  |  |  |  |
| L2 |  |  |  |  |
| L3 |  |  |  |  |

-   IC 95% de Δ por nivel:

    -   L1: \[a, b\]

    -   L2: \[a, b\]

    -   L3: \[a, b\]

-   Clasificación modal:

-   Clasificación robusta (P > 0.70):

## 5\. Análisis de sensibilidad filosófica

| Escenario | P(INV) | P(DESC) | P(HÍB) | Clas modal |
| --- | --- | --- | --- | --- |
| Platonista |  |  |  |  |
| Formalista |  |  |  |  |
| Nominalista |  |  |  |  |
| Constructivista |  |  |  |  |
| Mixto |  |  |  |  |

## 6\. Convergencia y divergencia

-   Convergencia T:

-   Convergencia I:

-   Convergencia clasificación:

-   Sesgo de conformidad:

-   Divergencia persistente:

## 7\. Auditoría de sesgos del pool

-   Institucional:

-   Disciplinar:

-   Comercial:

-   Cultural:

-   Confirmación:

-   Anclaje:

-   Ontológico:

## 8\. Consecuencias

-   Jurídicas:

-   Económicas:

-   Políticas:

-   Éticas:

-   Epistémicas:

-   Institucionales:

## 9\. Drift histórico (si aplica)

| Época | L1 | L2 | L3 |
| --- | --- | --- | --- |

## 10\. Integración CEMSTWO (si aplica)

| CEMSTWO | L1 | L2 | L3 |
| --- | --- | --- | --- |

## 11\. Conclusión distribuida

-   Vector multi-nivel modal:

-   Clasificación robusta:

-   Sensibilidad filosófica:

-   Confianza global:

-   Advertencia de no-sobreinterpretación:

text

```
---

## 18. Protocolo de operación del orquestador

**Paso 1 — Delimitar.** Definir objeto, dominio, L1, L2, L3, controversia, consecuencia.

**Paso 2 — Configurar pool.** Seleccionar N agentes, perfiles, sesgos, rondas.

**Paso 3 — Recopilar evidencia.** Marcar N/D explícitamente.

**Paso 4 — Ronda 1.** Puntuación ciega independiente por agente.

**Paso 5 — Ronda 2.** Cross-examination con registro de conformidad.

**Paso 6 — Ronda 3.** Agregación múltiple (media, mediana, trimmed, bayesiana).

**Paso 7 — Verificar convergencia.** Si no converge y rondas < max, volver a Paso 5.

**Paso 8 — Monte Carlo.** S simulaciones sobre pesos, evidencia e incertidumbre.

**Paso 9 — Sensibilidad filosófica.** Repetir Monte Carlo por escenario.

**Paso 10 — Auditoría de sesgos del pool.**

**Paso 11 — Análisis de consecuencias.**

**Paso 12 — Drift histórico** (si aplica).

**Paso 13 — Integración CEMSTWO** (si aplica).

**Paso 14 — Salida distribuida.** Reportar vector, distribución, IC, sensibilidad, confianza.

**Paso 15 — Conclusión explícita.** Responder: ¿qué es inventado, qué descubierto, qué híbrido, por nivel, con qué probabilidad, bajo qué marco?

---

## 19. Reglas absolutas (V4.1)

1. **Nunca mezclar L1, L2 y L3.**
2. **Nunca inventar evidencia.**
3. **Nunca modificar la clasificación para que coincida con una intuición previa.**
4. **Nunca confundir utilidad con independencia ontológica.**
5. **Nunca confundir formalización con existencia.**
6. **Nunca confundir consenso del pool con verdad.**
7. **Nunca convertir una perspectiva filosófica en supuesto neutral.**
8. **Nunca utilizar M o S para alterar directamente T o I.**
9. **Nunca ocultar incertidumbre.**
10. **Nunca presentar el resultado como demostración metafísica.**
11. **Si existe desacuerdo entre agentes, reportarlo como distribución.**
12. **Si no hay datos, utilizar N/D.**
13. **Si el resultado cambia sustancialmente con los pesos, reportar sensibilidad.**
14. **Si L1, L2 y L3 producen resultados diferentes, conservar la diferencia.**
15. **La conclusión siempre debe responder explícitamente qué es inventado, qué descubierto y qué híbrido, con probabilidad, por nivel y bajo qué marco.**
16. **Nunca reportar solo la moda. Reportar siempre la distribución.**
17. **Nunca reportar solo un método de agregación. Reportar todos.**
18. **Nunca ocultar el sesgo del diseñador del pool.**
19. **Nunca confundir Monte Carlo con validación empírica.**
20. **Nunca usar MTI-V4.1 donde no hay controversia ni consecuencia.**

---

## 20. Principio final

MTI-V3 preguntaba: "¿esto es inventado o descubierto?"

MTI-V4 preguntaba: "¿qué parte de esto existe independientemente de nosotros, qué parte depende de nuestra construcción, y en qué nivel ocurre esa dependencia?"

**MTI-V4.1 pregunta:**

> **"¿Cómo se distribuye la respuesta a esa pregunta a través de un pool de agentes heterogéneos, bajo incertidumbre de evidencia y dependencia de marco filosófico, y qué convergencias, divergencias y sesgos emergen del proceso?"**

La clasificación INVENTADO / DESCUBIERTO / HÍBRIDO no es un punto. Es una **distribución epistémica auditada**.

El resultado no es "X es inventado". Es:

> **"Bajo el pool configurado, las S simulaciones y los escenarios de sensibilidad, X presenta una probabilidad p de ser clasificado como inventado en L2, con IC 95% [a, b], con dependencia filosófica fuerte/moderada/débil, y con sesgo de conformidad s."**

Eso es un cambio de paradigma: de **prompt evaluador** a **workflow epistémico distribuido**.

---

## 21. Referencias

1. Beni, M. D., & Friston, K. J. (2024). Temporal thickness in generative models. *Entropy*, 26(3), 245.
2. Bunge, M. (2003). *Emergence and Convergence*. University of Toronto Press.
3. Bunge, M. (2004). Mechanisms in the social sciences. *Philosophy of the Social Sciences*, 34(2), 182–210.
4. Capra, F. (1996). *The Web of Life*. Anchor Books.
5. Checkland, P. (1981). *Systems Thinking, Systems Practice*. Wiley.
6. Checkland, P., & Scholes, J. (1999). *Soft Systems Methodology in Action*. Wiley.
7. Dalkey, N., & Helmer, O. (1963). An experimental application of the Delphi method. *Management Science*, 9(3), 458–467.
8. Dietterich, T. G. (2000). Ensemble methods in machine learning. *MCS 2000*, 1–15.
9. Love, A. C. (2023). Mind independence and natural kinds. *Philosophy of Science*, 90(4), 789–807.
10. Mayr, E. (1998). *This Is Biology*. Harvard University Press.
11. Rescher, N. (1979). *Cognitive Systematization*. Blackwell.
12. Rescher, N. (1992). *A System of Pragmatic Idealism*. Princeton University Press.
13. Surowiecki, J. (2004). *The Wisdom of Crowds*. Doubleday.
14. Artunduaga Viana, W. C. (2026). *CEMSTWO: De CATWOE a CEMSTWO*. Manuscrito.
15. Ecarnot, F., et al. (2015). Writing a scientific article. *European Geriatric Medicine*, 6(6), 573–579.
16. LangGraph Documentation (2024). *Stateful multi-actor workflows*.
17. AutoGen (2024). *Multi-agent conversation framework*.
18. CrewAI (2024). *Orchestrating role-playing agents*.

---

## 22. Conclusión

MTI-V4.1 no es una mejora incremental de MTI-V4. Es un cambio de arquitectura epistémica:

- De **prompt monolítico** a **workflow orquestado**.
- De **evaluador único** a **pool de agentes heterogéneos**.
- De **pesos estáticos** a **distribuciones de pesos**.
- De **triangulación de dos** a **rondas Delphi de N**.
- De **clasificación puntual** a **distribución Monte Carlo**.
- De **sensibilidad filosófica mencionada** a **sensibilidad filosófica medida**.
- De **sesgos auditados post-hoc** a **sesgos modelados como parámetros**.
- De **una conclusión** a **una distribución de conclusiones con IC y robustez**.

Su máximo provecho está donde la ambigüedad ontológica tiene consecuencias prácticas y donde la dependencia filosófica es alta: patentes, diagnósticos, regulación, currículo, autoría, política científica, ética de IA, gestión ambiental.

No responde "¿qué es?". Responde: **"¿cómo se distribuye la clasificación ontológica de esto a través de un pool de agentes heterogéneos, bajo incertidumbre y dependencia de marco, y qué convergencias y divergencias emergen?"**

---

**Fin del paper MTI-V4.1 — Extensión Orquestada.**
**Insumo listo para la SKILL operativa MTI-V4.1 con orquestación multi-agente y Monte Carlo.**
```