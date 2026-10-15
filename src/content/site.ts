export type Locale = 'es' | 'en';
export type IcebergLayerId =
  | 'surface'
  | 'diagnosis'
  | 'evidence'
  | 'formula'
  | 'cemstwo'
  | 'signal'
  | 'proposal'
  | 'depth';
export type ArchetypeTone = 'neutral' | 'warning' | 'critical' | 'opportunity';

export interface IcebergLayer {
  id: IcebergLayerId;
  label: string;
  shortLabel: string;
  depth: number;
}

export interface CemstwoNode {
  id: 'C' | 'E' | 'M' | 'S' | 'T' | 'W' | 'O';
  label: string;
  shortLabel: string;
  summary: string;
  question: string;
}

export interface SimplicityArchetype {
  id: string;
  name: string;
  nameEs: string;
  profile: string;
  action: string;
  tone: ArchetypeTone;
}

export interface PlaybookItem {
  id: string;
  title: string;
  summary: string;
  children?: { title: string; summary: string }[];
}

export const locales = ['es', 'en'] as const;

export const siteContent = {
  es: {
    metadata: {
      title: 'Thinking as a Service | Complejidad, Industria e IA',
      description:
        'Consultoría ejecutiva de alto impacto: diagnostique la complejidad que destruye valor y active simplicidad operativa antes de automatizar con IA.',
    },
    ui: {
      visualMode: 'Modo visual',
      switchToRest: 'Activar modo oscuro',
      switchToDay: 'Activar modo claro',
      graphInstruction:
        'Explore cada nodo con el mouse, el teclado o el tacto para ver su pregunta conceptual.',
      currentNode: 'Nodo seleccionado',
      recommendedUse: 'Uso recomendado:',
      action: 'Acción:',
      floatingCta: 'Cuellos de botella sistémicos',
      noVideo: 'Su navegador no soporta video HTML5.',
    },
    icebergLayers: [
      { id: 'surface', label: 'Visión Ejecutiva - El Ruido', shortLabel: 'Visión', depth: 0 },
      { id: 'diagnosis', label: 'Diagnóstico de Complejidad', shortLabel: 'Diagnóstico', depth: 1 },
      { id: 'evidence', label: 'Evidencia Visual & Mapeo', shortLabel: 'Evidencia', depth: 2 },
      { id: 'formula', label: 'Métricas de Estructura', shortLabel: 'Métricas', depth: 3 },
      { id: 'cemstwo', label: 'Ciencia de Redes (CEMSTWO)', shortLabel: 'Redes', depth: 4 },
      { id: 'signal', label: 'Estrategia y Liderazgo', shortLabel: 'Estrategia', depth: 5 },
      { id: 'proposal', label: 'Propuesta y Pricing', shortLabel: 'Pricing', depth: 6 },
      { id: 'depth', label: 'Casos de Estudio', shortLabel: 'Casos', depth: 7 },
    ] satisfies IcebergLayer[],
    hero: {
      macro: 'Diseño Organizacional',
      narrative: 'Ciencia de Redes & Simplificación',
      category: 'Consultoría Estratégica Pre-IA & Gobernanza de Sistemas',
      eyebrow: '',
      title: 'Deje de automatizar el caos. Automatice el margen.',
      subcopy:
        'No vendemos software ni bolsas de horas de ingeniería. Entregamos artefactos de conocimiento estandarizados (ISO 30401) mediante una Radiografía de Complejidad en 14 días para mapear la red real de decisiones, erradicar silos operacionales y detener la destrucción de EBITDA. Asumimos la complejidad de su organización mediante un enfoque sistémico para que la dirección elimine cuellos de botella antes de automatizar con IA, garantizando que la tecnología corra sobre un margen protegido y un sistema limpio.',
      proofPoints: [
        { metric: '10.2%', label: 'Drenaje de EBITDA anual por complejidad no resuelta (Warwick/GSI)' },
        { metric: '74%', label: 'Iniciativas de IA estancadas por fricción organizacional (MIT/BCG)' },
        { metric: 'ISO 30401', label: 'Marco ontológico de sistemas de conocimiento y auditoría de decisiones' },
      ],
      ctaPrimary: { label: 'Ver Propuesta y Pricing', href: '#iceberg-proposal' },
      ctaSecondary: { label: 'Bajar a la complejidad', href: '#iceberg-diagnosis' },
      ctaIntake: { label: 'Solicitar Reality Audit' },
    },
    complexity: {
      macroNarrative: 'Diseño Organizacional',
      coreNarrative: 'Ciencia de Redes & Simplificación',
      noiseFrameworks: ['VUCA', 'BANI', 'TUNA'],
      noiseTech: ['Flujos agénticos', 'Bases de conocimiento sin mapa', 'Reingeniería acelerada', 'Copilotos sin gobernanza'],
      diagnosis: {
        eyebrow: 'El diagnóstico',
        title: 'Falla Estructural: El Costo Invisible',
        lead: 'La complejidad no es un estado teórico; es una dinámica que destruye directamente el EBITDA y paraliza la velocidad de ejecución en organizaciones medianas y grandes.',
        external: {
          label: 'Complejidad Externa (Entorno E)',
          text: 'Mercados volátiles, fluctuaciones regulatorias y demandas asimétricas que presionan continuamente la rentabilidad operativa.',
        },
        internal: {
          label: 'Complejidad Interna: La Falla Estructural (S)',
          text: 'Silos operacionales herméticos, proliferación de comités improductivos y burocracia informal que canibalizan el margen y retrasan decisiones críticas.',
        },
        bullets: [
          { highlight: '1. El Impuesto de la Complejidad:', text: 'La complejidad destructiva drena un promedio del 10.2% de la rentabilidad anual (EBITDA) antes de iniciar cualquier automatización. [GSI • Warwick & Simplicity Partnership, 2011]' },
          { highlight: '2. El Espejismo de la IA:', text: 'Aunque el 88% de las empresas adopta IA, solo el 39% reporta un impacto real en su EBIT. Automatizar procesos complejos sin rediseñarlos solo acelera el caos. [McKinsey, 2024]' },
          { highlight: '3. La Ley del Retorno (70-20-10):', text: 'El 74% de las empresas no logra capturar valor de la IA. El 70% del éxito radica en simplificar y adaptar los procesos y la estructura humana, no en la tecnología. [MIT Sloan & BCG, 2023]' },
        ],
      },
      explorer: {
        eyebrow: 'Explorador de Exposición Sistémica',
        title: 'Calibre la vulnerabilidad de su organización ante la complejidad',
        lead: 'Evalúe cómo la latencia en decisiones, los silos departamentales y las iniciativas de IA sin mapa destruyen EBITDA y multiplican el costo de inacción.',
        scaleLabel: 'Escala de la Organización (Ingresos Anuales / Tamaño)',
        scaleOptions: [
          { label: 'Mid-Market ($10M - $50M USD / 100-500 personas)', value: 'mid' },
          { label: 'Upper Mid-Market ($50M - $200M USD / 500-2,000 personas)', value: 'upper' },
          { label: 'Enterprise ($200M+ USD / 2,000+ personas)', value: 'enterprise' },
        ],
        latencyLabel: 'Latencia Promedio en Decisiones Críticas Inter-área',
        latencyOptions: [
          { label: 'Baja: 1 a 2 semanas (flujo ágil)', value: 'low' },
          { label: 'Moderada: 3 a 5 semanas (fricción recurrente)', value: 'medium' },
          { label: 'Severa: 6 a 12+ semanas (parálisis por comités)', value: 'high' },
        ],
        silosLabel: 'Interfaces y Silos Organizacionales Aislados',
        silosOptions: [
          { label: '2 a 4 interfaces funcionales', value: 'few' },
          { label: '5 a 8 áreas con burocracia informal', value: 'some' },
          { label: '9+ feudos departamentales desconectados', value: 'many' },
        ],
        aiLabel: 'Iniciativas de IA / Automatización en Curso',
        aiOptions: [
          { label: '1 a 3 pilotos exploratorios aislados', value: 'pilot' },
          { label: '4 a 8 proyectos sin mapa de flujos de conocimiento', value: 'scaling' },
          { label: '9+ implementaciones aceleradas sobre procesos no mapeados', value: 'aggressive' },
        ],
        diagnosisTitle: 'Diagnóstico de Exposición Estructural',
        exposureLevelLabel: 'Nivel de Exposición:',
        latencyImpactLabel: 'Días de Inercia por Ciclo de Decisión:',
        knowledgeDebtLabel: 'Deuda de Conocimiento y Vulnerabilidad SPOF (ISO 30401):',
        costOfInactionLabel: 'Anclaje de Destrucción de Margen (EBITDA en Riesgo):',
        costOfInactionNote: 'Basado en el impuesto del 10.2% de EBITDA por complejidad no resuelta [GSI/Warwick].',
        levels: {
          moderate: {
            title: 'Exposición Moderada · Riesgo de Desaceleración',
            description: 'Su organización aún conserva capacidad de respuesta, pero la falta de mapas de conocimiento tácito genera puntos únicos de falla (SPOF) que encarecen la coordinación.',
            recommendation: 'Priorice un Executive Complexity X-Ray en 14 días para mapear la red real de decisiones y podar interfaces críticas antes de autorizar nuevos presupuestos de software o agentes IA.',
          },
          severe: {
            title: 'Exposición Severa · Drenaje Activo de Margen',
            description: 'La latencia de decisión y la fricción interdepartamental están activando la destrucción del 10.2% de EBITDA. Desplegar herramientas de IA en este estado automatizará la incoherencia operacional.',
            recommendation: 'Se requiere un Executive Complexity X-Ray en 14 días para desacoplar silos operacionales, identificar iniciativas zombis y blindar el EBITDA antes de cualquier despliegue de IA.',
          },
          critical: {
            title: 'Exposición Crítica · Ruptura Sistémica Inminente',
            description: 'Múltiples silos operando con comités paralizantes y proyectos acelerados de IA sin gobernanza están canibalizando recursos y destruyendo la confianza de la red.',
            recommendation: 'Detenga la inversión ciega en herramientas; active de inmediato una Radiografía de Complejidad en 14 días para cortar cuellos de botella y restaurar el margen operativo.',
          },
        },
        ctaButton: 'Solicitar Executive Complexity X-Ray (14 Días)',
      },
      formula: {
        eyebrow: 'La fórmula',
        title: 'Para asumirla, primero hay que definirla',
        expression: 'Complejidad = componentes + variedad de relaciones + ritmo de cambio',
        complicated: { label: 'Sistemas complicados', example: 'Proceso lineal de manufactura o pipeline tecnológico: predecible y parametrizable.' },
        complex: { label: 'Sistemas complejos', example: 'Red informal de personas, silos y decisiones: adaptativa, con cuellos de botella no mapeados.' },
      },
      tippingPoint: {
        eyebrow: 'Punto de inflexión',
        title: 'Complejidad buena vs. complejidad mala',
        lead: 'El éxito no consiste en eliminar toda la complejidad, sino en encontrar el punto de inflexión.',
        good: {
          label: 'Complejidad buena',
          text: 'Iniciativas estratégicas con retorno directo: productos y canales de distribución que el cliente remunera con margen positivo.',
        },
        bad: {
          label: 'Complejidad mala y costosa',
          text: 'Silos, comités redundantes e iniciativas zombis que consumen recursos, destruyen margen y canibalizan el EBITDA operativo.',
        },
        impact: 'Las empresas pierden, en promedio, un 10.2% de su rentabilidad anual (EBITDA) debido a complejidad organizativa que destruye valor. [GSI • Warwick Business School & Simplicity Partnership, 2011]',
      },
      matrixHeading: {
        eyebrow: 'Matriz de simplicidad',
        title: '¿Dónde está su organización?',
      },
      simplicityMatrix: [
        {
          id: 'performers',
          name: 'Performers',
          nameEs: 'Triunfadores',
          profile: 'Rinden fuerte sin sobrecomplicarse.',
          action: 'Evitar que la complejidad mala se filtre antes de que erosione el margen.',
          tone: 'neutral',
        },
        {
          id: 'complicators',
          name: 'Complicators',
          nameEs: 'Complicadores',
          profile: 'Rinden bien a pesar de la alta complejidad, pero pierden beneficios por el camino.',
          action: 'Reducir la complejidad mala con urgencia ejecutiva, no con recortes superficiales.',
          tone: 'warning',
        },
        {
          id: 'strugglers',
          name: 'Strugglers',
          nameEs: 'Luchadores',
          profile: 'Alta complejidad y bajo rendimiento.',
          action: 'Reducción dramática y estructural de la complejidad, no parches.',
          tone: 'critical',
        },
        {
          id: 'simplifiers',
          name: 'Simplifiers',
          nameEs: 'Simplificadores',
          profile: 'Modelos simples con beneficios bajos.',
          action: 'Aprovechar la complejidad buena para crecer sin reintroducir ruido.',
          tone: 'opportunity',
        },
      ] satisfies SimplicityArchetype[],
      cemstwo: {
        eyebrow: 'Ciencia de redes',
        title: 'Del organigrama al grafo CEMSTWO',
        lead: 'CEMSTWO diagnostica la realidad operacional donde los organigramas fallan: primero mapea qué actores e interfaces ejecutan el trabajo; luego revela dónde los silos, el poder informal y los supuestos de liderazgo frenan el margen.',
        nodes: [
          {
            id: 'C',
            label: 'Composición',
            shortLabel: 'Partes',
            summary: 'Líderes clave, equipos operativos, sistemas legados y capacidades reales que componen la organización.',
            question: '¿Qué partes y áreas componen realmente la operación y cuáles faltan en el mapa formal?',
          },
          {
            id: 'E',
            label: 'Entorno activo',
            shortLabel: 'Mercado',
            summary: 'Presiones comerciales, clientes clave, competidores y regulaciones que impactan el margen operativo.',
            question: '¿Qué presiones de mercado y entorno están forzando cuellos de botella en la operación?',
          },
          {
            id: 'M',
            label: 'Mecanismo',
            shortLabel: 'Flujo',
            summary: 'Procesos reales de decisión, flujos de trabajo e interfaces donde se genera retrabajo y fricción.',
            question: '¿Dónde se produce el retrabajo y qué procesos informales explican la pérdida recurrente de margen?',
          },
          {
            id: 'S',
            label: 'Estructura',
            shortLabel: 'Silos & Vínculos',
            summary: 'Topología real de dependencias, silos operacionales y puntos únicos de falla (SPOF) que traban la ejecución.',
            question: '¿Dónde se concentran los silos y cómo la estructura informal retrasa las decisiones críticas?',
          },
          {
            id: 'T',
            label: 'Transformación',
            shortLabel: 'Retorno',
            summary: 'Flujo de valor que convierte insumos y esfuerzo en EBITDA y resultados comerciales medibles.',
            question: '¿Qué transformación concreta genera valor y en qué interfaces se diluye el margen operativo?',
          },
          {
            id: 'W',
            label: 'Weltanschauung',
            shortLabel: 'Supuestos',
            summary: 'Supuestos de liderazgo y cultura de gestión que justifican la burocracia o bloquean la simplificación.',
            question: '¿Qué creencias de gestión sostienen iniciativas zombis o comités improductivos?',
          },
          {
            id: 'O',
            label: 'Ownership',
            shortLabel: 'Poder de Veto',
            summary: 'Quiénes concentran la autoridad real para autorizar presupuestos, vetar cambios o reconfigurar la red.',
            question: '¿Quién tiene poder real para podar procesos y quién bloquea la toma de decisiones?',
          },
        ] satisfies CemstwoNode[],
      },
      simplicityStrategy: {
        eyebrow: 'Estrategia de simplicidad',
        title: 'Exactamente lo esencial: ni más, ni menos',
        definition:
          'La simplicidad es tener el número correcto de componentes y conexiones esenciales para el éxito.',
        pillars: [
          { title: 'Añadir valor', text: 'Filtro para cada proceso, producto o reunión.' },
          { title: 'Puntos de apalancamiento', text: 'Reducir complejidad en estrategia, estructura y procesos.' },
          { title: 'Gestión cotidiana', text: 'Evitar que la complejidad vuelva después de una limpieza inicial.' },
          { title: 'Enfoque en personas', text: 'Compromiso con actividades que añaden valor y reducen ruido.' },
        ],
      },
      evidence: {
        eyebrow: 'Evidencia',
        title: '¿Su organización opera sobre estructura visible o sobre dinámicas no modeladas?',
        lead: 'Visual Mapping funciona como mapa de navegación de hipótesis: reduce ambigüedad antes de flujos agénticos, bases de conocimiento o automatización.',
        bullets: [
          'Pasar de la especulación de sillón a evidencia visual que desactiva disputas departamentales.',
          'Identificar centros de poder real y puntos únicos de falla antes de que la crisis aparezca en caja.',
          'La IA como motor, no como arquitecto, sobre un territorio ya descrito.',
        ],
        video: {
          label: 'Visual Mapping / Diagnóstico completo',
          duration: '07:36 + audio',
          poster: `${import.meta.env.BASE_URL}Assets/visual-mapping-poster.jpg`,
          src: `${import.meta.env.BASE_URL}Assets/visual-mapping-full.mp4`,
          note: 'Ver antes de decidir una implementación de IA, bases de conocimiento o automatización de flujos.',
        },
      },
      riskPanel: {
        label: 'Riesgo operativo 2026',
        title: 'Ruido · IA · Reingeniería',
        metrics: [
          { label: 'Ruido automatizable', value: 'Alto', danger: true },
          { label: 'Estructura real', value: 'No mapeada', danger: true },
          { label: 'Valor en riesgo', value: '~10,2%', danger: true },
        ],
        footnote: 'El riesgo no es adoptar IA tarde. Es inyectarla en un sistema que nadie puede gobernar.',
      },
    },
    playbook: {
      eyebrow: 'Playbook de entrega',
      title: 'De la complejidad medida a la simplicidad operativa',
      lead: 'Pensamiento sistémico aplicado al diseño organizacional: entregamos artefactos de conocimiento estandarizados (ISO 30401) y mapas de decisión objetivos para que la dirección elimine silos, proteja el EBITDA y active sus propios recursos humanos y tecnológicos sin dependencias externas eternas.',
      whatsappBase: 'https://wa.me/573108437004',
      ctaMessage:
        'Hola Dr. Andrés López Astudillo. Vengo de su plataforma https://willkwolf.github.io/Thinking-as-a-Service/ y quiero explorar su consultoría y propuestas comerciales. Me interesa conocer más sobre cómo reducir el ruido organizativo y optimizar el margen. ¿Podemos agendar una llamada?',
      items: [
        {
          id: 'filter',
          title: '1. El Filtro Anti-Desperdicio',
          summary: 'El 74% de las iniciativas de IA fracasan porque automatizan el desorden humano y silos desconectados. Si automatiza un proceso ineficiente, solo acelera la fuga de EBITDA. No gaste un solo dólar en licencias o desarrollo hasta auditar la red real de decisiones que debe devolver esa inversión.'
        },
        {
          id: 'radiography',
          title: '2. Radiografía de la Estructura Real',
          summary: 'Los organigramas en PDF mienten. Las decisiones críticas, los cuellos de botella y las fugas de margen ocurren en la red informal del día a día. Revelamos con topología matemática en qué nodos se traban sus proyectos y dónde se destruye valor.'
        },
        {
          id: 'simplification',
          title: '3. El Playbook de Poda y Simplificación Operativa',
          summary: 'Las empresas tradicionales intentan resolver la fricción creando comités redundantes y más capas burocráticas, quemando capital. Entregamos un plan matemático de poda: qué interfaces eliminar, qué procesos descongestionar y qué iniciativas zombis detener.'
        },
        {
          id: 'methodology',
          title: 'Cierre Metodológico: Modelo Land & Expand',
          summary: 'Arquitectura comercial de dos fases para garantizar resultados inmediatos sin fricción de compras ni consultorías eternas:',
          children: [
            {
              title: 'Fase 1: Executive Complexity X-Ray (14 Días / Precio Fijo)',
              summary: 'Sprint cerrado de 14 días con cero fricción de TI. Entregamos el Grafo Snapshot Interactivo Privado y el Playbook de Poda para erradicar silos, iniciativas zombis y cuellos de botella que destruyen EBITDA.'
            },
            {
              title: 'Fase 2: Forward Deployed Simplification & Live Ontology (Retainer FDE)',
              summary: 'Suscripción mensual/trimestral con ingenieros asignados (Forward Deployed Engineers) acotados estrictamente a los nodos críticos de Fase 1, manteniendo el grafo vivo y auditando nuevas contrataciones de software o agentes IA.'
            },
            {
              title: 'Fase 3: Autonomía Operativa y Blindaje de Margen (ISO 30401)',
              summary: 'Transferencia de capacidades, sondas de verificación y protocolos de gobernanza para que la dirección mantenga el control total de su margen sin dependencias externas eternas.'
            }
          ]
        }
      ] satisfies PlaybookItem[],
      ctaLabel: 'Solicitar el Playbook',
    },
    signalLead: {
      eyebrow: 'La señal',
      title: 'Simplicidad con Playbook',
      name: 'PhD Andrés López Astudillo',
      role: 'Auditor de Realidad · Estrategia y Organizaciones',
      photo: `${import.meta.env.BASE_URL}Assets/equipo/espada.png`,
      quote:
        'Reduce ambigüedad donde otros solo ven caos. Contrasta narrativa ejecutiva contra estructura observable antes de acelerar con IA.',
      metrics: [
        { value: '20+', label: 'Años de Experiencia', desc: 'En consultoría de alta dirección, diseño organizacional y modelado de complejidad.' },
        { value: '10+', label: 'Países Impactados', desc: 'Auditorías operativas e intervenciones estratégicas en América Latina y Europa.' },
        { value: '50+', label: 'Organizaciones', desc: 'Corporaciones complejas, entidades industriales y Pymes guiadas hacia la simplicidad.' }
      ],
    },
    caseStudy: {
      eyebrow: 'Caso de uso',
      title: 'Mapa de organización BPO',
      lead: '1.866 nodos conectados por relaciones jefe-empleado: centralidad, intermediación y tipos de liderazgo en red.',
      description:
        'Métricas de red, mapas de género, edad y salario, y clasificación de liderazgo: influenciadores, puentes, extrovertidos y seguidores.',
      embedTitle: 'Mapa de organización BPO',
      embedUrl: 'https://embed.kumu.io/5947f71e13542aa11dca864b1453d778',
    },
    megatrends: {
      eyebrow: 'Mapa de señales',
      title: 'Megatendencias y tecnologías',
      lead: 'Organice ruido y señales en un mapa visual: marcos de entorno vs. playbooks de simplicidad operativa.',
      embedTitle: 'Mapa de megatendencias y tecnologías',
      embedUrl: 'https://embed.kumu.io/617b678e390c4370872cda91f74ffdbe',
    },
    footer: {
      eyebrow: 'Pregunta de cierre',
      title: '¿Dónde está su organización en la matriz de simplicidad?',
      lead: 'Si no puede ver el sistema, no puede gobernarlo; y la IA solo amplificará lo que ya está roto.',
      ctaLabel: 'Solicitar diagnóstico de complejidad',
      ctaMessage:
        'Hola Dr. Andrés López Astudillo. He analizado la matriz de simplicidad en https://willkwolf.github.io/Thinking-as-a-Service/ y solicito un diagnóstico de complejidad para mi organización. Busco identificar cuellos de botella sistémicos y eliminar la complejidad dañina antes de automatizar con IA. ¿Cuáles son los siguientes pasos?',
    },
    pricing: {
      eyebrow: 'PROPUESTAS COMERCIALES',
      title: 'Propuestas Comerciales: Modelo Land & Expand',
      lead: 'Estructura de consultoría técnica de alcance cerrado y entregables verificables bajo estándar ISO 30401. Implementamos un modelo Land & Expand: comience con un Executive Complexity X-Ray en 14 días a precio cerrado y escale a Retainer FDE continuo sobre los nodos críticos identificados.',
      regionLabel: 'Seleccione su región:',
      packageLabel: 'Seleccione un paquete de intervención:',
      deliverablesLabel: 'Entregables Clave Incluidos (ISO 30401):',
      durationLabel: 'Duración Estimada del Ciclo:',
      summaryTitle: 'Resumen de la Propuesta Comercial',
      summaryTotal: 'Inversión Total Estimada:',
      summaryNote: 'Tarifas de alcance cerrado con entregables ejecutivos garantizados.',
      procurementBenchmarkLabel: 'Benchmark de Dedicación (*):',
      procurementAsteriskNote:
        '* Nota para Comités de Compras y Procurement: La facturación se rige 100% sobre artefactos de conocimiento y entregables verificables bajo estándar ISO 30401, sin bolsas de horas abiertas ni facturación por tiempo consumido. La estimación técnica de dedicación (~115h / ~310h / ~470h de equipo multidisciplinario) se provee exclusivamente como referencia métrica para procesos de homologación de proveedores y auditoría interna de compras.',
      ctaSend: 'Generar Propuesta y Enviar por WhatsApp',
      copySuccess: '¡Propuesta copiada al portapapeles!',
      copyButton: 'Copiar Propuesta al Portapapeles',
      regions: {
        usa: {
          name: 'USA',
          focusTitle: 'Foco en Sostenibilidad Operativa y Margen EBITDA',
          focusText: 'Blindaje de márgenes operativos y gobernanza pre-IA para empresas ($10M-$100M+ USD/año). Prevención de desperdicio de capital y mitigación del espejismo de la IA.',
        },
        canada: {
          name: 'Canadá',
          focusTitle: 'Gobernanza de IA y Productividad Responsable',
          focusText: 'Alineación de interfaces y diseño de sistemas complementarios a infraestructura existente. Foco en adopción responsable, gestión del cambio y compliance ético.',
        },
        latam: {
          name: 'LATAM',
          focusTitle: 'Eficiencia Estructural y Salud de Red',
          focusText: 'Reducción de burocracia informal, eliminación de feudos de decisión y desobstrucción de flujos operativos y de confianza entre áreas.',
        },
      },
      packages: [
        {
          id: 'exploration',
          phase: 'Fase 1 · 14 Días (Sprint de Entrada)',
          basePrice: 28500,
          referenceHours: '~115 hrs',
          procurementNote: '* Benchmark de homologación: ~115 hrs estimadas de equipo multidisciplinario.',
          artifactsObjective: 'Identificar iniciativas zombis, silos operacionales y cuellos de botella que destruyen EBITDA en 14 días con cero fricción de TI.',
          deliverables: [
            'Grafo Snapshot Interactivo Privado (Topología real de decisiones y silos)',
            'Playbook de Poda y Simplificación Operativa (Ranking matemático de qué eliminar)',
            'Scorecard de Exposición y Deuda Estructural (ISO 30401)',
            'Matriz de Vulnerabilidad Pre-IA y Fugas de Margen',
            'Sesión de Lectura Ejecutiva C-Suite (90 min con Sponsor Ejecutivo)',
          ],
          usa: {
            name: 'Fase 1: Executive Complexity X-Ray (14 Días / Fixed Scope)',
            desc: 'Sprint de 14 días a precio cerrado: radiografía matemática de la red real de decisiones para detectar iniciativas zombis y cuellos de botella que destruyen EBITDA antes de gastar en software o IA.',
            targetBuyer: 'Dirección de Operaciones (COO), Finanzas (CFO) y CEO buscando frenar la destrucción de EBITDA y acotar riesgos.'
          },
          canada: {
            name: 'Phase 1: Executive Complexity X-Ray (14-Day Reality Audit)',
            desc: 'Sprint de 14 días para mapear la red real de flujos de conocimiento, dependencias ocultas y gobernanza pre-IA, eliminando silos sin requerir accesos profundos de TI.',
            targetBuyer: 'Dirección de Operaciones (COO) y Comités de Transformación enfocados en eficiencia y compliance responsable.'
          },
          latam: {
            name: 'Fase 1: Radiografía de Complejidad Organizacional (14 Días)',
            desc: 'Diagnóstico ejecutivo en 14 días para visibilizar cuellos de botella informales, desarticular silos y detener el drenaje de margen operativo antes de implementar tecnología.',
            targetBuyer: 'Dirección General (CEO) y Gerencia de Operaciones comprometidas con desburocratizar la ejecución.'
          }
        },
        {
          id: 'modeling',
          phase: 'Fase 2 · 8 Semanas (Retainer Mensual FDE)',
          basePrice: 68000,
          referenceHours: '~310 hrs',
          procurementNote: '* Benchmark de homologación: ~310 hrs estimadas de equipo multidisciplinario.',
          artifactsObjective: 'Ejecutar el Playbook de Poda y mantener la Ontología Viva sobre los nodos críticos identificados en Fase 1.',
          deliverables: [
            'Asignación Técnica de Forward Deployed Engineer (FDE) en Nodos Críticos',
            'Ontología Viva y Mantenimiento Continuo del Grafo de Decisiones',
            'Protocolos de Poda Operativa y Desacoplamiento de Interfaces',
            'Vetting Técnico y Auditoría Pre-IA de Nuevas Herramientas / Agentes',
            'Monitoreo Continuo de Latencia Decisional y Blindaje de Margen (ISO 30401)',
          ],
          usa: {
            name: 'Fase 2: Forward Deployed Simplification & Live Ontology (Retainer FDE)',
            desc: 'Suscripción mensual de ingeniería desplegada (FDE) para ejecutar el Playbook de Poda, mantener la ontología viva del negocio y blindar el margen en los nodos críticos diagnosticados.',
            targetBuyer: 'Sponsor ejecutivo (COO / CTO) que requiere ejecución técnica continua sin contratar burocracia externa.'
          },
          canada: {
            name: 'Phase 2: Forward Deployed Simplification & Live Ontology',
            desc: 'Suscripción FDE enfocada en la gobernanza viva de interfaces, verificación de flujos de decisión y aseguramiento de adopción responsable sobre la arquitectura simplificada.',
            targetBuyer: 'Dirección de Transformación Digital y Operaciones liderando la gobernanza de sistemas vivos.'
          },
          latam: {
            name: 'Fase 2: Simplificación Desplegada y Ontología Viva (Retainer FDE)',
            desc: 'Capacidad técnica asignada para erradicar silos, disolver comités redundantes y mantener actualizado el mapa de red operativo sin dilatar la ejecución.',
            targetBuyer: 'Gerencias de Operaciones y Transformación que necesitan acompañamiento directo en la poda operativa.'
          }
        },
        {
          id: 'gestation',
          phase: 'Fase 2 · 12 Semanas (Retainer Trimestral Enterprise)',
          basePrice: 98000,
          referenceHours: '~470 hrs',
          procurementNote: '* Benchmark de homologación: ~470 hrs estimadas de equipo multidisciplinario.',
          artifactsObjective: 'Gobernanza ontológica integral de escala, comité de decisiones críticas y blindaje pre-IA multi-dominio.',
          deliverables: [
            'Célula FDE Dedicada para Rediseño Sistémico Continuo',
            'Gobernanza y Sincronización Multi-Grafo de la Red Organizacional',
            'Auditoría Pre-Adquisición de Software, Copilotos y Agentes de IA',
            'Comité Quincenal de Inteligencia Decisional con la Junta Directiva',
            'Protección Continua del EBITDA Operativo frente a la Re-acumulación de Complejidad',
          ],
          usa: {
            name: 'Fase 2: Forward Deployed Enterprise Shield (Quarterly FDE Retainer)',
            desc: 'Acompañamiento directivo y capacidad técnica FDE de escala trimestral para blindar decisiones de capital, tecnología y expansión contra la re-introducción de complejidad destructiva.',
            targetBuyer: 'CEO y Junta Directiva liderando la protección global del margen EBITDA y la disciplina pre-IA.'
          },
          canada: {
            name: 'Phase 2: Enterprise Systems Governance & Live Ontology (Quarterly Retainer)',
            desc: 'Gobernanza integral de ontologías vivas y arquitectura de decisiones a nivel corporativo, asegurando transparencia, cumplimiento normativo y preservación de valor.',
            targetBuyer: 'Dirección General (CEO) y Comités Ejecutivos optimizando el valor corporativo a largo plazo.'
          },
          latam: {
            name: 'Fase 2: Blindaje Sistémico Enterprise (Retainer Trimestral FDE)',
            desc: 'Retainer estratégico y operativo continuo para mantener la red organizacional ágil, prevenir la proliferación de feudos y garantizar retornos reales de automatización.',
            targetBuyer: 'Dirección General (CEO) y VP de Operaciones comprometidos con la resiliencia estructural.'
          }
        }
      ]
    },
    intakeModal: {
      badge: 'Fase 1: Executive Complexity X-Ray',
      title: 'Solicitud de Radiografía de Complejidad Organizacional (14 Días)',
      subtitle: 'Evaluación ejecutiva confidencial a precio cerrado para mapear la red real de decisiones, erradicar silos operacionales y blindar su EBITDA antes de gastar en IA.',
      steps: {
        profile: '1. Perfil Corporativo',
        friction: '2. Fricción Sistémica',
        schedule: '3. Agendamiento Directo',
      },
      fields: {
        companyName: 'Nombre de la Organización',
        companyPlaceholder: 'Ej. Grupo Industrial / FinTech Corp',
        industry: 'Sector / Industria',
        industryOptions: [
          'Servicios Financieros & FinTech',
          'Salud, Farma & Biotecnología',
          'Retail, E-commerce & Logística',
          'Manufactura & Cadena de Suministro',
          'Tecnología & SaaS Enterprise',
          'Energía, Minería & Recursos',
        ],
        scale: 'Escala de la Organización',
        scaleOptions: [
          'Mid-Market ($10M - $50M USD / 100-500 personas)',
          'Upper Mid-Market ($50M - $200M USD / 500-2,000 personas)',
          'Enterprise ($200M+ USD / 2,000+ personas)',
        ],
        region: 'Región Operativa Principal',
        primaryFriction: 'Principal Fricción Estructural (ISO 30401)',
        frictionOptions: [
          'Latencia excesiva en decisiones interdepartamentales (comités lentos)',
          'Silos aislados y pérdida de conocimiento crítico tácito',
          'Iniciativas de IA o software estancadas sin impacto en margen',
          'Burocracia informal y proliferación de interfaces redundantes',
        ],
        executiveName: 'Nombre del Líder Ejecutivo',
        executiveRole: 'Cargo / Rol (CEO, CFO, COO, VP)',
        executiveEmail: 'Correo Corporativo',
        whatsapp: 'WhatsApp Corporativo (opcional)',
      },
      submitWhatsApp: 'Enviar Solicitud Ejecutiva vía WhatsApp',
      submitDirect: 'Confirmar Solicitud de Diagnóstico',
      privacyNote: 'Información confidencial amparada bajo acuerdos de auditoría de realidad y gobernanza de sistemas.',
      close: 'Cerrar',
    },
  },
  en: {
    metadata: {
      title: 'Thinking as a Service | Complexity, Industry, and AI',
      description:
        'High-impact executive consulting: diagnose value-destroying complexity and drive operational simplicity before automating with AI.',
    },
    ui: {
      visualMode: 'Visual Mode',
      switchToRest: 'Activate Dark Mode',
      switchToDay: 'Activate Light Mode',
      graphInstruction: 'Explore each node via mouse, keyboard, or touch to view its conceptual question.',
      currentNode: 'Selected Node',
      recommendedUse: 'Recommended Use:',
      action: 'Action:',
      floatingCta: 'Systemic Bottlenecks',
      noVideo: 'Your browser does not support HTML5 video.',
    },
    icebergLayers: [
      { id: 'surface', label: 'Executive Vision – The Noise', shortLabel: 'Vision', depth: 0 },
      { id: 'diagnosis', label: 'Complexity Diagnosis', shortLabel: 'Diagnosis', depth: 1 },
      { id: 'evidence', label: 'Visual Evidence & Mapping', shortLabel: 'Evidence', depth: 2 },
      { id: 'formula', label: 'Structural Metrics', shortLabel: 'Metrics', depth: 3 },
      { id: 'cemstwo', label: 'Network Science (CEMSTWO)', shortLabel: 'Networks', depth: 4 },
      { id: 'signal', label: 'Strategy & Leadership', shortLabel: 'Strategy', depth: 5 },
      { id: 'proposal', label: 'Proposal & Pricing', shortLabel: 'Pricing', depth: 6 },
      { id: 'depth', label: 'Case Studies', shortLabel: 'Cases', depth: 7 },
    ] satisfies IcebergLayer[],
    hero: {
      macro: 'Organizational Design',
      narrative: 'Network Science & Simplification',
      category: 'Pre-AI Strategic Consulting & Systems Governance',
      eyebrow: '',
      title: 'Stop automating chaos. Automate margins.',
      subcopy:
        'We do not sell software or open-ended engineering hours. We deliver standardized knowledge artifacts (ISO 30401) through a 14-day Executive Complexity X-Ray to map real decision networks, dismantle operational silos, and stop EBITDA destruction. We tackle organizational complexity through a systemic approach so leadership can eliminate bottlenecks before automating with AI, ensuring technology runs on protected margins and a clean system.',
      proofPoints: [
        { metric: '10.2%', label: 'Annual EBITDA drained by unaddressed operational complexity (Warwick/GSI)' },
        { metric: '74%', label: 'AI initiatives stalled by structural human interface friction (MIT/BCG)' },
        { metric: 'ISO 30401', label: 'Knowledge management systems ontology & decision audit standard' },
      ],
      ctaPrimary: { label: 'View Proposal & Pricing', href: '#iceberg-proposal' },
      ctaSecondary: { label: 'Dive into Complexity', href: '#iceberg-diagnosis' },
      ctaIntake: { label: 'Request Reality Audit' },
    },
    complexity: {
      macroNarrative: 'Organizational Design',
      coreNarrative: 'Network Science & Simplification',
      noiseFrameworks: ['VUCA', 'BANI', 'TUNA'],
      noiseTech: ['Agentic workflows', 'Unmapped knowledge bases', 'Accelerated re-engineering', 'Ungoverned copilots'],
      diagnosis: {
        eyebrow: 'The Diagnosis',
        title: 'Structural Failure: The Invisible Cost',
        lead: 'Complexity is not an abstract concept; it is an active force that directly destroys EBITDA and paralyzes execution across mid-market and enterprise organizations.',
        external: {
          label: 'External Complexity (Environment E)',
          text: 'Volatile markets, shifting regulatory pressures, and asymmetric demands exerting continuous pressure on operating margins.',
        },
        internal: {
          label: 'Internal Complexity: Structural Failure (S)',
          text: 'Hermetic operational silos, proliferation of unproductive committees, and informal bureaucracy that delay critical decisions and cannibalize operating EBITDA.',
        },
        bullets: [
          { highlight: '1. The Complexity Tax:', text: 'Value-destroying complexity erodes an average of 10.2% of annual EBITDA before any automation is introduced. [GSI • Warwick & Simplicity Partnership, 2011]' },
          { highlight: '2. The AI Mirage:', text: 'While 88% of organizations adopt AI, only 39% report a tangible impact on EBIT. Automating complex processes without redesigning them simply accelerates chaos. [McKinsey, 2024]' },
          { highlight: '3. The Law of Return (70-20-10):', text: '74% of enterprises fail to capture value from AI. 70% of success depends on simplifying and adapting processes and human structures, not just the technology. [MIT Sloan & BCG, 2023]' },
        ],
      },
      explorer: {
        eyebrow: 'Systemic Exposure Explorer',
        title: 'Calibrate your organization’s vulnerability to complexity',
        lead: 'Assess how decision latency, operational silos, and unmapped AI initiatives destroy EBITDA and amplify the cost of inaction.',
        scaleLabel: 'Organization Scale (Annual Revenue / Headcount)',
        scaleOptions: [
          { label: 'Mid-Market ($10M - $50M USD / 100-500 employees)', value: 'mid' },
          { label: 'Upper Mid-Market ($50M - $200M USD / 500-2,000 employees)', value: 'upper' },
          { label: 'Enterprise ($200M+ USD / 2,000+ employees)', value: 'enterprise' },
        ],
        latencyLabel: 'Average Latency in Cross-Functional Decisions',
        latencyOptions: [
          { label: 'Low: 1 to 2 weeks (agile flow)', value: 'low' },
          { label: 'Moderate: 3 to 5 weeks (recurring friction)', value: 'medium' },
          { label: 'Severe: 6 to 12+ weeks (committee paralysis)', value: 'high' },
        ],
        silosLabel: 'Isolated Organizational Silos & Interfaces',
        silosOptions: [
          { label: '2 to 4 functional interfaces', value: 'few' },
          { label: '5 to 8 departments with informal bureaucracy', value: 'some' },
          { label: '9+ disconnected departmental fiefdoms', value: 'many' },
        ],
        aiLabel: 'Active AI / Automation Initiatives in Flight',
        aiOptions: [
          { label: '1 to 3 isolated exploratory pilots', value: 'pilot' },
          { label: '4 to 8 projects without knowledge flow architecture', value: 'scaling' },
          { label: '9+ accelerated deployments over unmapped processes', value: 'aggressive' },
        ],
        diagnosisTitle: 'Systemic Exposure Diagnosis',
        exposureLevelLabel: 'Exposure Level:',
        latencyImpactLabel: 'Inertia Days per Decision Cycle:',
        knowledgeDebtLabel: 'Knowledge Debt & SPOF Vulnerability (ISO 30401):',
        costOfInactionLabel: 'Margin Destruction Baseline (EBITDA at Risk):',
        costOfInactionNote: 'Anchored on the 10.2% annual EBITDA complexity drain [GSI/Warwick].',
        levels: {
          moderate: {
            title: 'Moderate Exposure · Deceleration Risk',
            description: 'Your organization retains operational response capability, but unmapped tacit knowledge flows create single points of failure (SPOF) that inflate coordination costs.',
            recommendation: 'Prioritize a 14-day Executive Complexity X-Ray to map real decision networks and prune critical interfaces before committing further software or AI budgets.',
          },
          severe: {
            title: 'Severe Exposure · Active Margin Drain',
            description: 'Decision latency and interdepartmental friction are triggering the 10.2% EBITDA drain. Deploying AI tools in this state will automate operational incoherence.',
            recommendation: 'A 14-day Executive Complexity X-Ray is required to decouple operational silos, identify zombie initiatives, and protect EBITDA before any AI deployment.',
          },
          critical: {
            title: 'Critical Exposure · Imminent Systemic Breakdown',
            description: 'Multiple silos operating with sluggish committees alongside ungoverned AI projects are cannibalizing resources and shattering organizational trust.',
            recommendation: 'Halt blind tooling spend immediately; deploy a 14-day Executive Complexity X-Ray to cut bottlenecks and restore operating margins.',
          },
        },
        ctaButton: 'Request Executive Complexity X-Ray (14 Days)',
      },
      formula: {
        eyebrow: 'The Formula',
        title: 'To address it, you must first define it',
        expression: 'Complexity = Components + Diversity of Relationships + Velocity of Change',
        complicated: { label: 'Complicated Systems', example: 'Linear manufacturing or IT pipeline: predictable, measurable, and programmable.' },
        complex: { label: 'Complex Systems', example: 'Informal network of people, silos, and decisions: adaptive, with unmapped bottlenecks.' },
      },
      tippingPoint: {
        eyebrow: 'Tipping Point',
        title: 'Good Complexity vs. Bad Complexity',
        lead: 'Success lies not in eliminating all complexity, but in identifying the inflection point.',
        good: {
          label: 'Good Complexity',
          text: 'Strategic initiatives generating direct return: products and commercial channels customers pay for with positive margin.',
        },
        bad: {
          label: 'Bad and Costly Complexity',
          text: 'Silos, redundant committees, and zombie initiatives consuming resources, destroying margin, and cannibalizing operating EBITDA.',
        },
        impact: 'Organizations lose, on average, 10.2% of their annual profitability (EBITDA) due to value-destroying organizational complexity. [GSI • Warwick Business School & Simplicity Partnership, 2011]',
      },
      matrixHeading: { eyebrow: 'Simplicity Matrix', title: 'Where does your organization stand?' },
      simplicityMatrix: [
        {
          id: 'performers',
          name: 'Performers',
          nameEs: 'Performers',
          profile: 'Delivering strong performance without overcomplicating.',
          action: 'Prevent bad complexity from creeping in and eroding margins.',
          tone: 'neutral',
        },
        {
          id: 'complicators',
          name: 'Complicators',
          nameEs: 'Complicators',
          profile: 'Delivering performance despite high complexity, but sacrificing profitability along the way.',
          action: 'Drive out bad complexity with executive urgency, not cosmetic cost-cutting.',
          tone: 'warning',
        },
        {
          id: 'strugglers',
          name: 'Strugglers',
          nameEs: 'Strugglers',
          profile: 'Plagued by high complexity and low performance.',
          action: 'Execute a dramatic, structural reduction of complexity rather than applying temporary patches.',
          tone: 'critical',
        },
        {
          id: 'simplifiers',
          name: 'Simplifiers',
          nameEs: 'Simplifiers',
          profile: 'Operating with simple models but yielding low returns.',
          action: 'Leverage good complexity to scale without reintroducing operational noise.',
          tone: 'opportunity',
        },
      ] satisfies SimplicityArchetype[],
      cemstwo: {
        eyebrow: 'Network Science',
        title: 'From Org Chart to the CEMSTWO Graph',
        lead: 'CEMSTWO diagnoses operational reality where traditional org charts fail: first mapping which actors and interfaces execute work; then revealing where silos, informal power, and leadership assumptions erode EBITDA.',
        nodes: [
          {
            id: 'C',
            label: 'Composition',
            shortLabel: 'Components',
            summary: 'Key leaders, operating teams, legacy systems, and actual capabilities comprising the organization.',
            question: 'Which teams and components genuinely execute operations, and which are omitted from the formal chart?',
          },
          {
            id: 'E',
            label: 'Active Environment',
            shortLabel: 'Market',
            summary: 'Commercial pressures, key customers, competitors, and regulatory shifts impacting operating margins.',
            question: 'Which external market forces and customer pressures are driving internal operational bottlenecks?',
          },
          {
            id: 'M',
            label: 'Mechanism',
            shortLabel: 'Workflow',
            summary: 'Real decision processes, workflows, and interfaces where rework, latency, and friction are generated.',
            question: 'Where does operational rework occur, and which informal handoffs explain recurrent margin loss?',
          },
          {
            id: 'S',
            label: 'Structure',
            shortLabel: 'Silos & Links',
            summary: 'Actual topology of cross-departmental dependencies, operational silos, and single points of failure (SPOF).',
            question: 'Where are operational silos concentrated, and how does informal network structure delay critical decisions?',
          },
          {
            id: 'T',
            label: 'Transformation',
            shortLabel: 'Value Flow',
            summary: 'Value-creation stream converting labor and capital into operating EBITDA and measurable market outcomes.',
            question: 'What core transformation delivers real margin, and at which interfaces is economic value leaking?',
          },
          {
            id: 'W',
            label: 'Weltanschauung',
            shortLabel: 'Assumptions',
            summary: 'Shared leadership assumptions and management orthodoxies legitimizing bureaucracy or stalling simplification.',
            question: 'Which management beliefs sustain zombie initiatives or preserve unproductive committees?',
          },
          {
            id: 'O',
            label: 'Ownership',
            shortLabel: 'Veto Power',
            summary: 'The executive stakeholders holding real authority to approve spend, veto changes, or unblock the network.',
            question: 'Who holds genuine veto power to prune processes, and who blocks critical decision velocity?',
          },
        ] satisfies CemstwoNode[],
      },
      simplicityStrategy: {
        eyebrow: 'Simplicity Strategy',
        title: 'Exactly What Is Essential: No More, No Less',
        definition: 'Simplicity means maintaining the precise number of essential components and connections required for success.',
        pillars: [
          { title: 'Add Value', text: 'Apply a value-add filter to every process, product, and meeting.' },
          { title: 'Leverage Points', text: 'Target and reduce complexity across strategy, structure, and processes.' },
          { title: 'Everyday Governance', text: 'Prevent complexity from creeping back in after the initial simplification.' },
          { title: 'People-First Focus', text: 'Commit resources to activities that drive value and eliminate noise.' },
        ],
      },
      evidence: {
        eyebrow: 'Evidence',
        title: 'Does Your Organization Operate on Visible Structure or Unmapped Dynamics?',
        lead: 'Visual Mapping serves as a strategic roadmap for navigating hypotheses, reducing ambiguity before deploying agentic workflows, knowledge bases, or automation.',
        bullets: [
          'Shift from speculative assumptions to visual evidence that defuses cross-departmental disputes.',
          'Identify informal power hubs and single points of failure before operational friction impacts cash flow.',
          'Position AI as an engine rather than an architect, deployed over a clearly mapped operational landscape.',
        ],
        video: {
          label: 'Visual Mapping / Full Diagnosis',
          duration: '07:36 + Audio',
          poster: `${import.meta.env.BASE_URL}Assets/visual-mapping-poster.jpg`,
          src: `${import.meta.env.BASE_URL}Assets/visual-mapping-full.mp4`,
          note: 'Watch before committing to AI deployments, knowledge bases, or workflow automation.',
        },
      },
      riskPanel: {
        label: '2026 Operational Risk',
        title: 'Noise · AI · Redesign',
        metrics: [
          { label: 'Automatable Noise', value: 'High', danger: true },
          { label: 'Real Structure', value: 'Unmapped', danger: true },
          { label: 'Value at Risk', value: '~10.2%', danger: true },
        ],
        footnote: 'The primary risk is not adopting AI too late. It is injecting it into a system that nobody can govern.',
      },
    },
    playbook: {
      eyebrow: 'Delivery Playbook',
      title: 'From Measured Complexity to Operational Simplicity',
      lead: 'Systemic thinking applied to organizational design: we deliver standardized knowledge artifacts (ISO 30401) and objective decision maps, empowering leadership to eliminate silos, protect EBITDA, and mobilize internal talent and technology without endless external dependency.',
      whatsappBase: 'https://wa.me/573108437004',
      ctaMessage:
        'Hello Dr. Andrés López Astudillo, I visited your platform (https://willkwolf.github.io/Thinking-as-a-Service/) and would like to explore your consulting and commercial proposals. I am interested in learning more about how to reduce organizational noise and optimize margins. Could we schedule a brief call?',
      items: [
        {
          id: 'filter',
          title: '1. The Anti-Waste Filter',
          summary: '74% of AI initiatives fail because they attempt to automate human disorder and disconnected silos. Automating an inefficient process only accelerates EBITDA loss. Do not spend a single dollar on software or licenses until you map the real decision network that must return that investment.'
        },
        {
          id: 'radiography',
          title: '2. Radiography of the Real Structure',
          summary: 'Org charts in PDF lie. Real decisions, bottlenecks, and margin leaks occur across informal day-to-day interactions. We reveal through mathematical network topology where your transformation projects stall and where economic value is destroyed.'
        },
        {
          id: 'simplification',
          title: '3. The Operational Simplification & Pruning Playbook',
          summary: 'Traditional enterprises attempt to address friction by creating redundant committees and bureaucratic overhead, burning capital. We deliver a mathematical pruning plan: which interfaces to eliminate, which handoffs to streamline, and which zombie initiatives to kill.'
        },
        {
          id: 'methodology',
          title: 'Methodological Closure: Land & Expand Model',
          summary: 'Two-phase commercial architecture delivering immediate results without procurement drag or endless 6-month consulting bloat:',
          children: [
            {
              title: 'Phase 1: Executive Complexity X-Ray (14 Days / Fixed Scope)',
              summary: '14-day fixed-price sprint with zero IT friction. We deliver the Private Interactive Snapshot Graph and Pruning Playbook to eliminate silos, zombie initiatives, and bottlenecks destroying EBITDA.'
            },
            {
              title: 'Phase 2: Forward Deployed Simplification & Live Ontology (FDE Retainer)',
              summary: 'Monthly/quarterly Forward Deployed Engineering subscription strictly scoped to Phase 1 critical nodes, maintaining the live ontology and vetting new software or AI deployments.'
            },
            {
              title: 'Phase 3: Operational Autonomy & Margin Shield (ISO 30401)',
              summary: 'Capability transfer, verification probes, and governance protocols enabling leadership to maintain permanent margin control without perpetual external dependency.'
            }
          ]
        }
      ] satisfies PlaybookItem[],
      ctaLabel: 'Request the Playbook',
    },
    signalLead: {
      eyebrow: 'The Signal',
      title: 'Simplicity with a Playbook',
      name: 'Andrés López Astudillo, PhD',
      role: 'Reality Auditor · Strategy & Organizations',
      photo: `${import.meta.env.BASE_URL}Assets/equipo/espada.png`,
      quote:
        'Reduces ambiguity where others only see chaos. Tests executive narratives against observable structures before accelerating with AI.',
      metrics: [
        { value: '20+', label: 'Years of Experience', desc: 'In senior executive consulting, organizational design, and complexity modeling.' },
        { value: '10+', label: 'Countries Served', desc: 'Operational audits and strategic interventions across Latin America and Europe.' },
        { value: '50+', label: 'Organizations', desc: 'Complex corporations, industrial enterprises, and SMEs guided toward operational simplicity.' }
      ],
    },
    caseStudy: {
      eyebrow: 'Use Case',
      title: 'BPO Organizational Map',
      lead: '1,866 nodes connected by reporting relationships: centrality, betweenness, and network leadership archetypes.',
      description:
        'Network metrics, gender, age, and salary maps, alongside leadership classifications (influencers, bridges, extroverts, and followers).',
      embedTitle: 'BPO Organizational Map',
      embedUrl: 'https://embed.kumu.io/5947f71e13542aa11dca864b1453d778',
    },
    megatrends: {
      eyebrow: 'Signal Map',
      title: 'Megatrends & Technologies',
      lead: 'Organize noise and signals in a visual map: macro-environmental frameworks vs. operational simplicity playbooks.',
      embedTitle: 'Megatrends & Technologies Map',
      embedUrl: 'https://embed.kumu.io/617b678e390c4370872cda91f74ffdbe',
    },
    footer: {
      eyebrow: 'Closing Question',
      title: 'Where does your organization stand on the simplicity matrix?',
      lead: 'If you cannot see the system, you cannot govern it—and AI will only amplify what is already broken.',
      ctaLabel: 'Request a Complexity Diagnosis',
      ctaMessage:
        'Hello Dr. Andrés López Astudillo, I have analyzed the simplicity matrix on https://willkwolf.github.io/Thinking-as-a-Service/ and would like to request a complexity diagnosis for my organization. I want to identify systemic bottlenecks and eliminate bad complexity before automating with AI. What are the next steps?',
    },
    pricing: {
      eyebrow: 'COMMERCIAL PROPOSALS',
      title: 'Commercial Proposals: Land & Expand Model',
      lead: 'Fixed-scope technical consulting structure with verifiable deliverables under ISO 30401 standards. We operate a Land & Expand model: start with a 14-day fixed-price Executive Complexity X-Ray and expand strictly into an ongoing FDE Retainer on diagnosed critical nodes.',
      regionLabel: 'Select your region:',
      packageLabel: 'Select an intervention package:',
      deliverablesLabel: 'Key Verifiable Deliverables (ISO 30401):',
      durationLabel: 'Estimated Cycle Duration:',
      summaryTitle: 'Commercial Proposal Summary',
      summaryTotal: 'Estimated Total Investment:',
      summaryNote: 'Fixed-scope rates backed by guaranteed executive deliverables.',
      procurementBenchmarkLabel: 'Technical Dedication Benchmark (*):',
      procurementAsteriskNote:
        '* Note for Purchasing & Procurement Committees: Invoicing is 100% fixed-scope based on knowledge artifacts and verifiable deliverables under ISO 30401, with zero open-ended hourly billing or time-and-materials consumption. Multidisciplinary effort estimates (~115h / ~310h / ~470h) are provided solely as an internal benchmark for enterprise procurement homologation checklists.',
      ctaSend: 'Generate & Send Proposal via WhatsApp',
      copySuccess: 'Proposal copied to clipboard!',
      copyButton: 'Copy Proposal to Clipboard',
      regions: {
        usa: {
          name: 'USA',
          focusTitle: 'Operational Sustainability & EBITDA Margin Focus',
          focusText: 'Operating margin preservation and pre-AI systems governance for mid-market to enterprise organizations ($10M-$100M+ USD/year). Capital waste prevention and AI mirage mitigation.',
        },
        canada: {
          name: 'Canada',
          focusTitle: 'AI Governance & Responsible Productivity',
          focusText: 'Systemic interface design complementary to existing infrastructure. Focus on responsible adoption, change management, and ethical compliance.',
        },
        latam: {
          name: 'LATAM',
          focusTitle: 'Structural Efficiency & Network Health',
          focusText: 'Reduction of informal bureaucracy, elimination of decision bottlenecks, and restoration of operational trust and communication across siloed departments.',
        },
      },
      packages: [
        {
          id: 'exploration',
          phase: 'Phase 1 · 14 Days (Entry Sprint)',
          basePrice: 28500,
          referenceHours: '~115 hrs',
          procurementNote: '* Homologation benchmark: ~115 hrs estimated multidisciplinary team dedication.',
          artifactsObjective: 'Identify zombie initiatives, operational silos, and bottlenecks destroying EBITDA in 14 days with zero IT friction.',
          deliverables: [
            'Private Interactive Snapshot Graph (Real decision topology & silo mapping)',
            'Pruning & Operational Simplification Playbook (Mathematical ranking of what to eliminate)',
            'Structural Exposure & Knowledge Debt Scorecard (ISO 30401)',
            'Pre-AI Vulnerability & Margin Drain Matrix',
            'C-Suite Executive Readout Session (90-min briefing with Executive Sponsor)',
          ],
          usa: {
            name: 'Phase 1: Executive Complexity X-Ray (14 Days / Fixed Scope)',
            desc: '14-day fixed-price sprint: mathematical x-ray of real decision networks detecting zombie initiatives and bottlenecks destroying EBITDA before committing software or AI capital.',
            targetBuyer: 'Chief Operating Officers (COO), Chief Financial Officers (CFO), and CEOs seeking to halt EBITDA destruction.'
          },
          canada: {
            name: 'Phase 1: Executive Complexity X-Ray (14-Day Reality Audit)',
            desc: '14-day sprint mapping real knowledge flows, hidden dependencies, and pre-AI governance, eliminating silos without demanding deep IT integrations.',
            targetBuyer: 'Chief Operating Officers (COO) and Governance Committees focused on responsible efficiency.'
          },
          latam: {
            name: 'Phase 1: Organizational Complexity X-Ray (14 Days)',
            desc: '14-day executive diagnostic mapping informal bottlenecks, breaking down silos, and halting operating margin drain before deploying technology.',
            targetBuyer: 'Managing Directors (CEO) and Operations Heads committed to cutting bureaucratic friction.'
          }
        },
        {
          id: 'modeling',
          phase: 'Phase 2 · 8 Weeks (Monthly FDE Retainer)',
          basePrice: 68000,
          referenceHours: '~310 hrs',
          procurementNote: '* Homologation benchmark: ~310 hrs estimated multidisciplinary team dedication.',
          artifactsObjective: 'Execute the Pruning Playbook and maintain the Live Ontology across critical nodes identified in Phase 1.',
          deliverables: [
            'Forward Deployed Engineer (FDE) Capacity Assigned to Critical Nodes',
            'Live Ontology & Continuous Decision Graph Maintenance',
            'Operational Pruning Protocols & Interface Decoupling',
            'Technical Vetting & Pre-AI Audit of New Software / Agents',
            'Continuous Decision Latency Monitoring & Margin Safeguarding (ISO 30401)',
          ],
          usa: {
            name: 'Phase 2: Forward Deployed Simplification & Live Ontology (FDE Retainer)',
            desc: 'Monthly Forward Deployed Engineering subscription to execute the Pruning Playbook, maintain the live ontology, and safeguard margins across diagnosed critical nodes.',
            targetBuyer: 'Executive Sponsors (COO / CTO) requiring technical execution without hiring external bureaucracy.'
          },
          canada: {
            name: 'Phase 2: Forward Deployed Simplification & Live Ontology',
            desc: 'Monthly FDE subscription focused on live interface governance, decision flow verification, and responsible adoption over the simplified architecture.',
            targetBuyer: 'Transformation and Operations Directors leading live systems governance.'
          },
          latam: {
            name: 'Phase 2: Forward Deployed Simplification & Live Ontology (FDE Retainer)',
            desc: 'Assigned engineering capacity to eradicate silos, dissolve redundant committees, and keep operational network maps continuously calibrated.',
            targetBuyer: 'Operations and Transformation Heads requiring hands-on operational pruning execution.'
          }
        },
        {
          id: 'gestation',
          phase: 'Phase 2 · 12 Weeks (Enterprise Quarterly Retainer)',
          basePrice: 98000,
          referenceHours: '~470 hrs',
          procurementNote: '* Homologation benchmark: ~470 hrs estimated multidisciplinary team dedication.',
          artifactsObjective: 'Comprehensive enterprise ontological governance, critical decision council, and multi-domain pre-AI shielding.',
          deliverables: [
            'Dedicated FDE Pod for Continuous Systems Redesign',
            'Multi-Graph Synchronization & Enterprise Organizational Mapping',
            'Pre-Acquisition Audit of Software, Copilots, and AI Agents',
            'Bi-Weekly Decision Intelligence Briefings with C-Suite & Board',
            'Continuous Operating EBITDA Protection Against Complexity Re-Accumulation',
          ],
          usa: {
            name: 'Phase 2: Forward Deployed Enterprise Shield (Quarterly FDE Retainer)',
            desc: 'Executive advisory and dedicated FDE capacity over a quarterly horizon to shield capital, technology, and expansion decisions against the re-accumulation of destructive complexity.',
            targetBuyer: 'CEOs and Board Members safeguarding total operating EBITDA and enforcing pre-AI discipline.'
          },
          canada: {
            name: 'Phase 2: Enterprise Systems Governance & Live Ontology (Quarterly Retainer)',
            desc: 'End-to-end live ontology governance and decision architecture across enterprise operations, ensuring transparency, compliance, and long-term value preservation.',
            targetBuyer: 'Managing Directors (CEO) and Executive Committees optimizing enterprise resilience.'
          },
          latam: {
            name: 'Phase 2: Enterprise Systems Shield (Quarterly FDE Retainer)',
            desc: 'Continuous strategic and operational retainer to maintain network agility, prevent silo proliferation, and guarantee measurable automation returns.',
            targetBuyer: 'Managing Directors (CEO) and Operations VPs committed to enterprise operational health.'
          }
        }
      ]
    },
    intakeModal: {
      badge: 'Phase 1: Executive Complexity X-Ray',
      title: 'Executive Complexity X-Ray Request (14 Days)',
      subtitle: 'Confidential fixed-price executive assessment to map real decision networks, eradicate operational silos, and protect EBITDA before investing in AI.',
      steps: {
        profile: '1. Corporate Profile',
        friction: '2. Systemic Friction',
        schedule: '3. Direct Scheduling',
      },
      fields: {
        companyName: 'Organization Name',
        companyPlaceholder: 'e.g. Global Industrial Corp / FinTech Group',
        industry: 'Industry / Sector',
        industryOptions: [
          'Financial Services & FinTech',
          'Healthcare, Pharma & Biotech',
          'Retail, E-commerce & Logistics',
          'Manufacturing & Supply Chain',
          'Enterprise Tech & B2B SaaS',
          'Energy, Mining & Resources',
        ],
        scale: 'Organization Scale',
        scaleOptions: [
          'Mid-Market ($10M - $50M USD / 100-500 employees)',
          'Upper Mid-Market ($50M - $200M USD / 500-2,000 employees)',
          'Enterprise ($200M+ USD / 2,000+ employees)',
        ],
        region: 'Primary Operating Region',
        primaryFriction: 'Primary Structural Friction (ISO 30401)',
        frictionOptions: [
          'Excessive cross-functional decision latency (sluggish committees)',
          'Isolated silos and loss of critical tacit knowledge',
          'Stalled AI or software pilots without measurable margin return',
          'Informal bureaucracy and proliferation of redundant interfaces',
        ],
        executiveName: 'Executive Leader Name',
        executiveRole: 'Title / Role (CEO, CFO, COO, VP)',
        executiveEmail: 'Corporate Email',
        whatsapp: 'Corporate WhatsApp (Optional)',
      },
      submitWhatsApp: 'Send Executive Brief via WhatsApp',
      submitDirect: 'Confirm Diagnostic Request',
      privacyNote: 'Strictly confidential under reality audit and systems governance frameworks.',
      close: 'Close',
    },
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];

export function resolveLocale(language = navigator.language): Locale {
  return language.toLowerCase().startsWith('en') ? 'en' : 'es';
}
