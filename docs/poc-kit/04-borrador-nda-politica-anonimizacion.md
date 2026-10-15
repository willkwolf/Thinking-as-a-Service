# ACUERDO DE CONFIDENCIALIDAD MUTUO (NDA) Y PROTOCOLO DE ANONIMIZACIÓN DE DATOS
## Marco Operativo de Seguridad, Privacidad por Diseño y Protección de Información

**Código de Documento:** `PK-04-NDA-ANON`  
**Versión:** 2.0.0 (Canónica)  
**Clasificación:** Plantilla Operativa Técnico-Contractual  
**Servicio Asociado:** Sprint "Executive Complexity X-Ray" (Fase 1) y Retainer FDE (Fase 2)  

---

> ### AVISO LEGAL OBLIGATORIO:
> **Este documento es una plantilla operativa técnica y organizativa. No constituye asesoramiento legal formal ni sustituye la revisión jurídica preceptiva por parte de los asesores legales habilitados de cada una de las partes.**

---

## 1. COMPARECIENTES Y OBJETO DEL ACUERDO BILATERAL

El presente Acuerdo de Confidencialidad Mutuo y Protección de Datos ("Acuerdo") se suscribe entre:

1. **PARTE REVELADORA / RECEPTORA (EL CONSULTOR):** `Thinking-as-a-Service` (Kumu-Service), con domicilio operativo en `[Ciudad, País]`, representada en este acto por su Consultor Líder (*Lead Ontologist*).
2. **PARTE REVELADORA / RECEPTORA (EL CLIENTE):** `[Razón Social del Cliente]`, constituida conforme a las leyes de `[País/Jurisdicción]`, con domicilio corporativo en `[Dirección Legal]`, representada por `[Nombre y Cargo del Representante Legal o Sponsor Ejecutivo]`.

En lo sucesivo, referidas individualmente como la "Parte" y conjuntamente como las "Partes".

### 1.1 Exposición de Motivos
Las Partes manifiestan su interés en colaborar en el marco del diagnóstico organizativo denominado **"Executive Complexity X-Ray"**, para lo cual resultará imprescindible el intercambio de información operativa, estratégica, organizativa y de gobernanza que reviste carácter confidencial y de secreto empresarial.

---

## 2. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL

A los efectos de este Acuerdo, tendrá la consideración de **"Información Confidencial"** toda información técnica, operativa, comercial, financiera, estratégica o metodológica divulgada por cualquiera de las Partes a la otra, ya sea de forma verbal, escrita, gráfica, electrónica o a través de artefactos digitales, incluyendo sin limitación:

1. **Por parte del CLIENTE:** Organigramas funcionales, nóminas de roles, catálogos de proyectos e iniciativas en curso, respuestas brutas y procesadas de encuestas organizacionales (ONA), registros de entrevistas ejecutivas, métricas estimadas de costos operativos y cualquier dato relativo a la estructura interna de la organización.
2. **Por parte del CONSULTOR:** Modelos de grafos relacionales, matrices ontológicas basadas en la metodología CEMSTWO, algoritmos de cálculo de intermediación y modularidad, código fuente de visualizaciones interactivas (D3/Kumu), plantillas del Playbook de Poda y cualquier método analítico propietario.

---

## 3. OBLIGACIONES DE SECRETO, CUSTODIA Y LIMITACIÓN DE USO

Las Partes se obligan de manera recíproca a:
1. **Destino Exclusivo:** Utilizar la Información Confidencial recibida única y exclusivamente con el fin de ejecutar y evaluar el servicio "Executive Complexity X-Ray" y los entregables derivados del SOW correspondiente.
2. **Deber de Custodia Diligente:** Proteger la Información Confidencial de la otra Parte empleando un grado de diligencia no inferior al que utiliza para custodiar su propia información de análoga importancia, y en ningún caso inferior al estándar de un diligente hombre de negocios (*reasonable degree of care*).
3. **Restricción de Acceso:** No divulgar, transferir, ceder ni comunicar la Información Confidencial a terceros sin la autorización previa, expresa y por escrito de la Parte reveladora. El acceso interno quedará estrictamente limitado a aquellos empleados, directores o ingenieros *Forward Deployed* (FDE) que tengan necesidad indispensable de conocerla para la ejecución del proyecto y que se encuentren sujetos a deberes de confidencialidad equiparables.
4. **No Ingeniería Inversa:** El CLIENTE se compromete a no someter a ingeniería inversa, descompilar ni replicar las librerías propietarias de análisis de redes, scripts o modelos algorítmicos suministrados por el CONSULTOR.

---

## 4. EXCLUSIONES DE LA CONFIDENCIALIDAD

Las obligaciones estipuladas en este Acuerdo no serán aplicables a aquella información que:
1. Fuera de dominio público o estuviera ampliamente disponible con anterioridad al momento de su divulgación, o deviniera pública posteriormente sin mediar incumplimiento del presente Acuerdo.
2. Se encontrara legítimamente en posesión de la Parte receptora antes de su divulgación por la Parte reveladora, libre de cualquier obligación de secreto previa.
3. Haya sido desarrollada de forma independiente por la Parte receptora sin acceso ni referencia a la Información Confidencial de la otra Parte.
4. Sea requerida legalmente por orden de autoridad judicial, regulatoria o administrativa competente; en tal supuesto, la Parte requerida notificará de inmediato y por escrito a la Parte reveladora (siempre que la legislación aplicable lo permita) a fin de que esta pueda ejercer los recursos o acciones de protección pertinentes.

---

## 5. PROTOCOLO DE PRIVACIDAD POR DISEÑO Y ANONIMIZACIÓN (PRIVACY BY DESIGN)

Para salvaguardar la intimidad de los trabajadores y erradicar cualquier resistencia política o persecución interna, el proyecto implementa un estricto protocolo técnico de anonimización:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        PROTOCOLO DE PRIVACIDAD Y ANONIMIZACIÓN                         │
├─────────────────────────────────────┬──────────────────────────────────────────────────┤
│ PRINCIPIO                           │ IMPLEMENTACIÓN TÉCNICA OBLIGATORIA               │
├─────────────────────────────────────┼──────────────────────────────────────────────────┤
│ 1. Cero PII Sensible                │ Prohibición absoluta de recolectar números de    │
│    (Zero Sensitive Data)            │ documento de identidad, domicilio personal,      │
│                                     │ datos bancarios, médicos o valoraciones discipl. │
├─────────────────────────────────────┼──────────────────────────────────────────────────┤
│ 2. Sustitución de Identidad por Rol │ En el Grafo Interactivo Privado, los nombres     │
│    (Role-Based Hash Identifier)     │ personales pueden reemplazarse por identificador │
│                                     │ alfanumérico funcional (ej. [DIR-OPS-01]).       │
├─────────────────────────────────────┼──────────────────────────────────────────────────┤
│ 3. Agregación de Costos de EBITDA   │ El cálculo financiero de fuga de margen emplea   │
│    (Banda Salarial Mediana)         │ bandas salariales medianas de mercado, jamás     │
│                                     │ salarios individuales nominales.                 │
├─────────────────────────────────────┼──────────────────────────────────────────────────┤
│ 4. Foco en Arquitectura Sistémica   │ La narrativa del informe evalúa la topología de  │
│    (Anti-Punitivo)                  │ la red y sus enlaces; jamás evalúa la idoneidad  │
│                                     │ psicológica o moral de las personas físicas.     │
└─────────────────────────────────────┴──────────────────────────────────────────────────┘
```

---

## 6. SEGURIDAD DE LA INFRAESTRUCTURA, ALMACENAMIENTO Y DESTRUCCIÓN DE DATOS

1. **Estándares Criptográficos:** Los datos en tránsito se protegen mediante protocolos TLS 1.3 con certificados de clave pública RSA/ECDSA de 2048 bits o superior. Los datos en reposo se almacenan cifrados con el estándar AES-256.
2. **Aislamiento de Espacios de Trabajo:** Los grafos interactivos se alojan en proyectos cerrados y privados de Kumu o entornos locales de D3 protegidos mediante autenticación robusta y control de acceso basado en roles (RBAC). No existen enlaces indexables por motores de búsqueda ni acceso público sin contraseña.
3. **Purga Segura y Destrucción de Insumos Brutos:**
   - Transcurridos treinta (30) días calendario desde la fecha del sign-off formal de la Fase 1, o a petición escrita del CLIENTE en cualquier momento, el CONSULTOR procederá al borrado seguro e irreversible de los archivos brutos de la micro-encuesta ONA y transcripciones directas de entrevistas.
   - El CONSULTOR conservará únicamente el Grafo Final consolidado y el Playbook de Poda para efectos de consulta del CLIENTE, así como el registro anonimizado de métricas estructurales abstractas para benchmarking sectorial.

---

## 7. PLAZO DE VIGENCIA DE LA CONFIDENCIALIDAD

Las obligaciones de confidencialidad y reserva asumidas en virtud del presente instrumento entrarán en vigor a partir de la fecha de su firma y se mantendrán vigentes durante un periodo de **cinco (5) años** contados a partir de la finalización del servicio o de la rescisión del SOW asociado.

No obstante lo anterior, las obligaciones respecto a secretos comerciales o industriales reconocidos por la legislación aplicable subsistirán mientras dicha información conserve legalmente tal naturaleza.

---

## 8. ANEXO: FORMULARIO DE CONSENTIMIENTO INFORMADO PARA PARTICIPANTES ONA

El siguiente texto figurará de forma obligatoria en la pantalla de bienvenida del formulario de micro-encuesta ONA enviado a los colaboradores del CLIENTE:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│             CONSENTIMIENTO INFORMADO PARA EL ANÁLISIS DE REDES (ONA)                   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ Estimado/a colega:                                                                     │
│                                                                                        │
│ Esta micro-encuesta (duración: 8–10 minutos) tiene como único objetivo mapear cómo     │
│ fluye la coordinación, las decisiones y las prioridades en nuestra organización.       │
│                                                                                        │
│ • PRIVACIDAD GARANTIZADA: Sus respuestas individuales serán tratadas con estricta      │
│   confidencialidad por el equipo metodológico externo (Thinking-as-a-Service).         │
│ • NO ES UNA EVALUACIÓN DE DESEMPEÑO: Este ejercicio no evalúa a las personas, sino a   │
│   la estructura y los procesos de la empresa para eliminar burocracia innecesaria.     │
│ • MODELADO AGREGADO: Los resultados se presentarán a la dirección en un mapa de        │
│   redes sistémico donde el foco está en destrabar cuellos de botella y proyectos       │
│   redundantes, protegiendo su tiempo y simplificando su jornada laboral.               │
│                                                                                        │
│ Al hacer clic en "Iniciar", usted otorga su consentimiento voluntario para que sus    │
│ respuestas sean procesadas bajo este protocolo de confidencialidad y anonimización.    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. FIRMA Y SUSCRIPCIÓN

En señal de conformidad con los términos técnicos y organizativos precedentes, y reiterando la advertencia de revisión jurídica previa obligatoria, las partes suscriben el presente Acuerdo en dos ejemplares originales:

| Por EL CLIENTE | Por EL CONSULTOR |
|---|---|
| **Firma:** __________________________________ | **Firma:** __________________________________ |
| **Nombre:** `[Nombre del Representante / Sponsor]` | **Nombre:** `[Lead Ontologist]` |
| **Cargo:** `[Cargo Oficial]` | **Cargo:** Socio Consultor Líder |
| **Razón Social:** `[Empresa del Cliente]` | **Razón Social:** `Thinking-as-a-Service` |
| **Fecha:** `[AAAA-MM-DD]` | **Fecha:** `[AAAA-MM-DD]` |
