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
        'No vendemos software ni bolsas de horas de ingeniería. Entregamos artefactos de conocimiento estandarizados (ISO 30401) para mapear la red real de decisiones y desacoplar interfaces críticas. Asumimos la complejidad de su organización mediante un enfoque sistémico para que la dirección enfoque y movilice sus propios recursos, garantizando que la tecnología corra sobre un sistema limpio.',
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
        lead: 'La complejidad no es un estado; es una dinámica destructiva de valor en organizaciones globales.',
        external: {
          label: 'Complejidad Externa (Entorno E)',
          text: 'Dinámicas regulatorias cambiantes, fluctuaciones del mercado global y flujos de información asimétricos.',
        },
        internal: {
          label: 'Complejidad Interna: La Falla Estructural (S)',
          text: 'Acoplamiento estrecho de procesos lineales, sobre-especificación de interfaces de decisión y proliferación de capas de gestión que canibalizan el margen operativo.',
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
        lead: 'Evalúe cómo la latencia en decisiones, los silos departamentales y las iniciativas de IA sin mapa amplifican la deuda estructural y el costo de inacción.',
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
            recommendation: 'Priorice un Reality Audit enfocado en delimitar interfaces críticas antes de autorizar nuevos presupuestos de software.',
          },
          severe: {
            title: 'Exposición Severa · Drenaje Activo de Margen',
            description: 'La latencia de decisión y la fricción interdepartamental están activando la destrucción del 10.2% de EBITDA. Desplegar herramientas de IA en este estado automatizará la incoherencia operacional.',
            recommendation: 'Se requiere una intervención de desacoplamiento de interfaces y un mapa de flujos de decisión para blindar el margen.',
          },
          critical: {
            title: 'Exposición Crítica · Ruptura Sistémica Inminente',
            description: 'Múltiples silos operando con comités paralizantes y proyectos acelerados de IA sin gobernanza están canibalizando recursos y destruyendo la confianza de la red.',
            recommendation: 'Detenga la inversión ciega en herramientas y active un rediseño urgente de arquitectura operativa.',
          },
        },
        ctaButton: 'Auditar mi Organización con un Reality Audit',
      },
      formula: {
        eyebrow: 'La fórmula',
        title: 'Para asumirla, primero hay que definirla',
        expression: 'Complejidad = componentes + variedad de relaciones + ritmo de cambio',
        complicated: { label: 'Sistemas complicados', example: 'Un avión: predecible, diseñable.' },
        complex: { label: 'Sistemas complejos', example: 'Factor humano: ambiguo, adaptativo e impredecible.' },
      },
      tippingPoint: {
        eyebrow: 'Punto de inflexión',
        title: 'Complejidad buena vs. complejidad mala',
        lead: 'El éxito no consiste en eliminar toda la complejidad, sino en encontrar el punto de inflexión.',
        good: {
          label: 'Complejidad buena',
          text: 'Iniciativas estratégicas que añaden valor: nuevos mercados o productos que el cliente valora.',
        },
        bad: {
          label: 'Complejidad mala y costosa',
          text: 'Añade costos desproporcionados al valor que genera, destruye margen y mata el negocio.',
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
        lead: 'CEMSTWO completa CATWOE para contextos donde lo material importa tanto como lo interpretativo: primero describe qué hay y cómo opera; luego evalúa propósito, cosmovisión y poder.',
        nodes: [
          {
            id: 'C',
            label: 'Composición',
            shortLabel: 'Partes',
            summary: 'Actores humanos, artefactos técnicos, recursos naturales y capacidades que componen el sistema.',
            question: '¿De qué está hecho el sistema y qué partes faltan para entender su comportamiento?',
          },
          {
            id: 'E',
            label: 'Entorno activo',
            shortLabel: 'Co-productores',
            summary: 'Sistemas externos que interactúan con el sistema y también lo transforman.',
            question: '¿Qué actores, reglas, mercados o condiciones biofísicas co-producen el problema?',
          },
          {
            id: 'M',
            label: 'Mecanismo',
            shortLabel: 'Cómo funciona',
            summary: 'Procesos concretos que generan la transformación: físicos, decisionales, de aprendizaje o de control.',
            question: '¿Qué proceso generativo explica lo que ocurre y qué evidencia lo valida?',
          },
          {
            id: 'S',
            label: 'Estructura',
            shortLabel: 'Vínculos',
            summary: 'Relaciones internas y externas: jerarquías, flujos, exclusiones, dependencias y acoplamientos.',
            question: '¿Cómo se relacionan las partes y dónde la estructura bloquea aprendizaje o acción?',
          },
          {
            id: 'T',
            label: 'Transformación',
            shortLabel: 'Cambio central',
            summary: 'Paso de insumo a resultado que define el propósito operativo del sistema.',
            question: '¿Qué cambia exactamente, desde qué estado inicial hacia qué resultado deseado?',
          },
          {
            id: 'W',
            label: 'Weltanschauung',
            shortLabel: 'Cosmovisión',
            summary: 'Marco de sentido que hace deseable la transformación y revela ontologías en conflicto.',
            question: '¿Qué visión del mundo vuelve legítima esta transformación y qué visión alternativa la cuestiona?',
          },
          {
            id: 'O',
            label: 'Ownership',
            shortLabel: 'Poder',
            summary: 'Quiénes pueden detener, autorizar o reconfigurar C-E-M-S-T.',
            question: '¿Quién tiene poder real para cambiar el sistema y quién queda fuera de esa decisión?',
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
      lead: 'Pensamiento sistémico aplicado al diseño organizacional: entregamos artefactos de conocimiento estandarizados (ISO 30401) y mapas de decisión objetivos para que la dirección enfoque y active sus propios recursos humanos y tecnológicos sin dependencias externas eternas.',
      whatsappBase: 'https://wa.me/573108437004',
      ctaMessage:
        'Hola Dr. Andrés López Astudillo. Vengo de su plataforma https://willkwolf.github.io/Thinking-as-a-Service/ y quiero explorar su consultoría y propuestas comerciales. Me interesa conocer más sobre cómo reducir el ruido organizativo y optimizar el margen. ¿Podemos agendar una llamada?',
      items: [
        {
          id: 'filter',
          title: '1. El Filtro Anti-Desperdicio',
          summary: 'El 70% de los proyectos de IA fracasan porque intentan automatizar un desorden humano. Si automatizas un proceso ineficiente, obtienes ineficiencia acelerada. No gaste un solo dólar en desarrollo de software hasta saber exactamente qué proceso le va a devolver esa inversión.'
        },
        {
          id: 'radiography',
          title: '2. Radiografía de la Estructura Real',
          summary: 'Los organigramas mienten. Las decisiones reales, los cuellos de botella y las pérdidas de información ocurren en interacciones informales del día a día. Verá con evidencia matemática, no con opiniones, en qué nodos se traban sus proyectos de transformación digital.'
        },
        {
          id: 'simplification',
          title: '3. El Playbook de Simplificación Operativa',
          summary: 'Las empresas tradicionales solucionan los problemas creando más comités, reportes y reuniones, destruyendo el margen. Limpiamos la burocracia antes de meter tecnología para que, cuando implemente IA, corra sobre una pista eficiente.'
        },
        {
          id: 'methodology',
          title: 'Cierre Metodológico: Ejecución Ágil por Fases',
          summary: 'Secuencia ágil de corto plazo para evitar consultorías eternas de 6 meses:',
          children: [
            {
              title: 'Fase 1: Auditoría de Ruido (Semanas 1-2)',
              summary: 'Mapeamos visualmente sus flujos críticos y detectamos en qué porcentaje de su estructura se está perdiendo el margen operativo.'
            },
            {
              title: 'Fase 2: Simplificación de Procesos (Semanas 3-4)',
              summary: 'Eliminamos los cuellos de botella humanos, reportes innecesarios y burocracia que frenarían cualquier software.'
            },
            {
              title: 'Fase 3: Diseño del Roadmap de IA (Semana 5+)',
              summary: 'Le entregamos la arquitectura exacta de qué automatizar, qué interfaces desacoplar y transferimos los blueprints a sus equipos internos para que su dirección mantenga el control total de sus recursos.'
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
      title: 'Paquetes de Consultoría e Intervención Sistémica',
      lead: 'Estructura de consultoría técnica de alcance cerrado y entregables verificables bajo estándar ISO 30401. Posicionamiento independiente con rigor científico y modelado de redes CEMSTWO. Definimos hipótesis contrastables y arquitectura observable antes de comprometer infraestructura tecnológica.',
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
          phase: '4 Semanas',
          basePrice: 28500,
          referenceHours: '~115 hrs',
          procurementNote: '* Benchmark de homologación: ~115 hrs estimadas de equipo multidisciplinario.',
          artifactsObjective: 'Generar conocimiento estructural, mapear decisiones y transferir datos clave a la dirección.',
          deliverables: [
            'Mapa de Flujo de Decisiones y Complejidad Sistémica (CEMSTWO)',
            'Scorecard de Exposición y Deuda de Conocimiento (ISO 30401)',
            'Matriz de Retención de Conocimiento y Vulnerabilidad de IA',
            'Roadmap Estructural a 90 Días',
            'Sesión de Lectura Ejecutiva a Junta Directiva y C-Suite',
          ],
          usa: {
            name: 'Complexity Diagnostic (EBITDA & Margen)',
            desc: 'Auditoría de realidad en 4 semanas para mapear señales de destrucción de margen, desacoplar interfaces de decisión y delimitar el sistema antes de cualquier desarrollo tecnológico.',
            targetBuyer: 'Dirección Financiera (CFO) y Dirección de Operaciones (COO) buscando detener fugas de capital y blindar el margen operativo.'
          },
          canada: {
            name: 'Complexity Diagnostic (Gobernanza de Sistemas)',
            desc: 'Mapeo de interfaces, gobernanza de conocimiento y alineación de stakeholders. Evaluamos la madurez organizativa y ética antes de comprometer despliegues de IA.',
            targetBuyer: 'Dirección de Operaciones (COO) y Comités de Gobernanza enfocados en transparencia institucional.'
          },
          latam: {
            name: 'Complexity Diagnostic (Salud de Red)',
            desc: 'Mapeo integral de dinámicas relacionales, silos informales y cuellos de botella de decisión. Auditamos la salud de interfaces críticas para destrabar la ejecución.',
            targetBuyer: 'Dirección General (CEO) y Capital Humano buscando sanar la confianza e interfaces departamentales.'
          }
        },
        {
          id: 'modeling',
          phase: '8 Semanas',
          basePrice: 68000,
          referenceHours: '~310 hrs',
          procurementNote: '* Benchmark de homologación: ~310 hrs estimadas de equipo multidisciplinario.',
          artifactsObjective: 'Transferir blueprints, sondas de verificación y playbooks para que los equipos internos asuman la gobernanza.',
          deliverables: [
            'Arquitectura de Simplicidad en Procesos Core (P1-P4)',
            'Protocolos de Desacoplamiento de Decisiones Críticas',
            'Catálogo de Sondas de Verificación Operativa y Datos',
            'Gobernanza de Flujos de Conocimiento (ISO 30401)',
            'Playbook de Acompañamiento y Traspaso a Equipos Internos',
          ],
          usa: {
            name: 'Operating System Redesign (Margen Sostenible)',
            desc: 'Diseño y despliegue de sondas de verificación, tableros descriptivos ad-hoc y modelos experimentales para auditar interfaces de procesos core, reduciendo fricción y canibalización de margen.',
            targetBuyer: 'Dirección de Tecnología (CTO) y Transformación buscando optimizar costos de ingeniería y retornos de automatización.'
          },
          canada: {
            name: 'Operating System Redesign (Alineación de Procesos)',
            desc: 'Construcción de sondas participativas y paneles de gobernanza para asegurar la adopción ética y la inclusión del usuario en los flujos de decisión organizacionales.',
            targetBuyer: 'Dirección de Transformación Digital liderando cambio ético y adopción de usuarios clave.'
          },
          latam: {
            name: 'Operating System Redesign (Salud Operativa)',
            desc: 'Despliegue de sondas relacionales y tableros de señales para restaurar la fluidez operativa. Enfocado en la comunicación y desacoplamiento de interfaces críticas departamentales.',
            targetBuyer: 'Gerencias de Operaciones e Innovación que necesitan reducir fricciones humanas y asegurar continuidad.'
          }
        },
        {
          id: 'gestation',
          phase: '12 Semanas (Trimestral)',
          basePrice: 98000,
          referenceHours: '~470 hrs',
          procurementNote: '* Benchmark de homologación: ~470 hrs estimadas de equipo multidisciplinario.',
          artifactsObjective: 'Monitoreo continuo de señales, auditoría pre-IA y actas de inteligencia decisional para la dirección general.',
          deliverables: [
            'Comité Continuo de Inteligencia de Decisiones (Bi-semanal)',
            'Monitoreo y Calibración Permanente de Sondas Sistémicas',
            'Auditoría Preventiva de Nuevas Iniciativas Tecnológicas y de IA',
            'Actualización Continua del Mapa de Red y Deuda de Conocimiento',
            'Asesoría de Confianza para C-Suite en Decisiones Complejas',
          ],
          usa: {
            name: 'Continuous Systems Advisory (Blindaje de Margen)',
            desc: 'Acompañamiento directivo continuo para blindar las decisiones de escala y tecnología contra la re-introducción de complejidad destructiva, protegiendo el EBITDA operativo.',
            targetBuyer: 'Dirección Ejecutiva (CEO) y Junta Directiva liderando la rentabilidad global del margen.'
          },
          canada: {
            name: 'Continuous Systems Advisory (Gobernanza Integral)',
            desc: 'Ciclo integral de simplificación y gobernanza continua. Mantiene la alineación de stakeholders, la transparencia algorítmica y el cumplimiento normativo en toda la escala corporativa.',
            targetBuyer: 'Dirección General (CEO) y Relaciones Corporativas optimizando el valor a stakeholders y compliance.'
          },
          latam: {
            name: 'Continuous Systems Advisory (Salud Organizacional)',
            desc: 'Acompañamiento estratégico continuo para preservar la agilidad de la red, monitorear la salud relacional y guiar transiciones organizacionales críticas sin generar burocracia.',
            targetBuyer: 'Directores Generales (CEO) y VP de Personas comprometidos con la resiliencia estructural a largo plazo.'
          }
        }
      ]
    },
    intakeModal: {
      badge: 'ISO 30401 Reality Audit',
      title: 'Solicitud de Diagnóstico de Complejidad',
      subtitle: 'Evaluación ejecutiva confidencial para mapear cuellos de botella sistémicos, deuda de conocimiento y desacoplar interfaces antes de invertir en IA.',
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
        'We do not sell software or engineering hours. We deliver standardized knowledge artifacts (ISO 30401) to map the real decision network and decouple critical interfaces. We address organizational complexity through a systemic approach so leadership can focus and deploy their own resources, ensuring technology runs on a clean system.',
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
        lead: 'Complexity is not a static state; it is a dynamic force that actively destroys value in global organizations.',
        external: {
          label: 'External Complexity (Environment E)',
          text: 'Shifting regulatory demands, global market volatility, and asymmetric information flows.',
        },
        internal: {
          label: 'Internal Complexity: Structural Failure (S)',
          text: 'Tight coupling of linear processes, over-specification of decision interfaces, and a proliferation of management layers that cannibalize operating margins.',
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
        lead: 'Assess how decision latency, silo fragmentation, and ungoverned AI initiatives amplify structural knowledge debt and the cost of inaction.',
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
            recommendation: 'Prioritize a Reality Audit focused on interface boundaries before committing further software budgets.',
          },
          severe: {
            title: 'Severe Exposure · Active Margin Drain',
            description: 'Decision latency and interdepartmental friction are triggering the 10.2% EBITDA drain. Deploying AI tools in this state will automate operational incoherence.',
            recommendation: 'Requires an interface decoupling intervention and a decision flow map to safeguard operating margins.',
          },
          critical: {
            title: 'Critical Exposure · Imminent Systemic Breakdown',
            description: 'Multiple silos operating with sluggish committees alongside ungoverned AI projects are cannibalizing resources and shattering organizational trust.',
            recommendation: 'Halt blind tooling spend immediately and initiate an emergency operating architecture redesign.',
          },
        },
        ctaButton: 'Audit My Organization with a Reality Audit',
      },
      formula: {
        eyebrow: 'The Formula',
        title: 'To address it, you must first define it',
        expression: 'Complexity = Components + Diversity of Relationships + Velocity of Change',
        complicated: { label: 'Complicated Systems', example: 'An aircraft: predictable, engineerable, and linear.' },
        complex: { label: 'Complex Systems', example: 'The human factor: ambiguous, adaptive, and unpredictable.' },
      },
      tippingPoint: {
        eyebrow: 'Tipping Point',
        title: 'Good Complexity vs. Bad Complexity',
        lead: 'Success lies not in eliminating all complexity, but in identifying the inflection point.',
        good: {
          label: 'Good Complexity',
          text: 'Strategic initiatives that add value, such as entering new markets or launching products that customers value.',
        },
        bad: {
          label: 'Bad and Costly Complexity',
          text: 'It adds costs disproportionate to the value generated, erodes margins, and threatens business viability.',
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
        lead: 'CEMSTWO extends the CATWOE framework for environments where material realities matter as much as interpretations: first describing what exists and how it operates, then evaluating purpose, worldview, and power dynamics.',
        nodes: [
          {
            id: 'C',
            label: 'Composition',
            shortLabel: 'Components',
            summary: 'Human actors, technical artifacts, natural resources, and capabilities that comprise the system.',
            question: 'What is the system composed of, and which components are missing from the diagnosis?',
          },
          {
            id: 'E',
            label: 'Active Environment',
            shortLabel: 'Co-producers',
            summary: 'External systems that interact with and transform the target system.',
            question: 'Which actors, rules, markets, or biophysical conditions co-produce the problem?',
          },
          {
            id: 'M',
            label: 'Mechanism',
            shortLabel: 'How It Works',
            summary: 'Concrete processes that drive transformation, including physical, decision-making, learning, and control mechanisms.',
            question: 'Which generative process explains what is occurring, and what evidence validates it?',
          },
          {
            id: 'S',
            label: 'Structure',
            shortLabel: 'Links',
            summary: 'Internal and external relationships: hierarchies, flows, exclusions, dependencies, and couplings.',
            question: 'How are the components related, and where does the structure block learning or action?',
          },
          {
            id: 'T',
            label: 'Transformation',
            shortLabel: 'Core Change',
            summary: 'The input-to-output transition that defines the system\'s operational purpose.',
            question: 'What exactly changes, transitioning from what initial state to which desired outcome?',
          },
          {
            id: 'W',
            label: 'Weltanschauung',
            shortLabel: 'Worldview',
            summary: 'The sense-making framework that makes the transformation desirable and reveals conflicting ontologies.',
            question: 'Which worldview legitimizes this transformation, and what alternative view challenges it?',
          },
          {
            id: 'O',
            label: 'Ownership',
            shortLabel: 'Power',
            summary: 'The actors who can halt, authorize, or reconfigure the C-E-M-S-T components.',
            question: 'Who holds the real power to change the system, and who is excluded from that decision?',
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
      lead: 'Systemic thinking applied to organizational design: we deliver standardized knowledge artifacts (ISO 30401) and objective decision maps, empowering leadership to focus and mobilize internal talent and technology without endless external dependency.',
      whatsappBase: 'https://wa.me/573108437004',
      ctaMessage:
        'Hello Dr. Andrés López Astudillo, I visited your platform (https://willkwolf.github.io/Thinking-as-a-Service/) and would like to explore your consulting and commercial proposals. I am interested in learning more about how to reduce organizational noise and optimize margins. Could we schedule a brief call?',
      items: [
        {
          id: 'filter',
          title: '1. The Anti-Waste Filter',
          summary: '70% of AI projects fail because they attempt to automate human disorder. Automating an inefficient process only yields accelerated inefficiency. Do not spend a single dollar on software development until you know exactly which process will return that investment.'
        },
        {
          id: 'radiography',
          title: '2. Radiography of the Real Structure',
          summary: 'Org charts lie. Real decisions, bottlenecks, and information loss occur in informal day-to-day interactions. You will see with mathematical evidence, not opinions, at which nodes your digital transformation projects get stuck.'
        },
        {
          id: 'simplification',
          title: '3. The Operational Simplification Playbook',
          summary: 'Traditional companies solve problems by creating more committees, reports, and meetings, destroying margins. We clean up the bureaucracy before introducing technology so that when you deploy AI, it runs on an efficient runway.'
        },
        {
          id: 'methodology',
          title: 'Methodological Closure: Agile Phase Execution',
          summary: 'A short-term agile sequence to avoid endless 6-month consulting engagements:',
          children: [
            {
              title: 'Phase 1: Noise Audit (Weeks 1-2)',
              summary: 'We visually map your critical flows and detect where operating margins are being lost in your structure.'
            },
            {
              title: 'Phase 2: Process Simplification (Weeks 3-4)',
              summary: 'We eliminate human bottlenecks, redundant reports, and bureaucracy that would slow down any software.'
            },
            {
              title: 'Phase 3: AI Roadmap Design (Week 5+)',
              summary: 'We deliver the exact architecture of what to automate, which interfaces to decouple, and transfer blueprints to your internal teams so your leadership maintains full control over resource allocation.'
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
      title: 'Fixed-Scope Consulting Packages & Systems Intervention',
      lead: 'Fixed-scope technical consulting structure with verifiable deliverables under ISO 30401 standards. Independent positioning driven by network science and CEMSTWO modeling. We establish testable hypotheses and observable architecture before committing tech infrastructure.',
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
          phase: '4 Weeks',
          basePrice: 28500,
          referenceHours: '~115 hrs',
          procurementNote: '* Homologation benchmark: ~115 hrs estimated multidisciplinary team dedication.',
          artifactsObjective: 'Generate structural knowledge, map decision interfaces, and transfer data assets to executive leadership.',
          deliverables: [
            'Complexity & Decision Flow Map (CEMSTWO)',
            'Exposure & Knowledge Debt Scorecard (ISO 30401)',
            'Knowledge Retention & AI Vulnerability Matrix',
            '90-Day Structural Roadmap',
            'Executive Board / C-Suite Readout Session',
          ],
          usa: {
            name: 'Complexity Diagnostic (EBITDA & Margin)',
            desc: 'A 4-week reality audit mapping margin destruction signals, decoupling decision interfaces, and bounding the system before any technology commitments.',
            targetBuyer: 'Chief Financial Officers (CFO) and Chief Operating Officers (COO) seeking to halt capital leaks and protect operating margins.'
          },
          canada: {
            name: 'Complexity Diagnostic (Systems Governance)',
            desc: 'Interface mapping, knowledge governance, and stakeholder alignment hypotheses. We evaluate organizational maturity and ethical readiness before launching AI deployments.',
            targetBuyer: 'Chief Operating Officers (COO) and Governance Committees focused on institutional transparency and shared value.'
          },
          latam: {
            name: 'Complexity Diagnostic (Network Health)',
            desc: 'Comprehensive mapping of relational dynamics, informal silos, and decision bottlenecks. We audit critical interface health to unblock operational execution.',
            targetBuyer: 'Managing Directors (CEO) and Chief People Officers seeking to rebuild departmental trust and communication.'
          }
        },
        {
          id: 'modeling',
          phase: '8 Weeks',
          basePrice: 68000,
          referenceHours: '~310 hrs',
          procurementNote: '* Homologation benchmark: ~310 hrs estimated multidisciplinary team dedication.',
          artifactsObjective: 'Transfer architecture blueprints, verification probes, and playbooks for internal team empowerment.',
          deliverables: [
            'Simplicity Architecture for Core Processes (P1-P4)',
            'Critical Decision Decoupling Protocols',
            'Operational Verification Probes & Metrics Catalog',
            'Knowledge Flow Governance (ISO 30401)',
            'Implementation Playbook & Internal Team Transfer',
          ],
          usa: {
            name: 'Operating System Redesign (Sustainable Margin)',
            desc: 'Design and deployment of verification probes, ad-hoc descriptive dashboards, and experimental models to audit core process interfaces, reducing friction and margin erosion.',
            targetBuyer: 'Chief Technology Officers (CTO) and Transformation VPs looking to optimize engineering costs and automation returns.'
          },
          canada: {
            name: 'Operating System Redesign (Process Alignment)',
            desc: 'Design and deployment of participatory probes and governance dashboards to ensure ethical adoption and stakeholder inclusion across core decision flows.',
            targetBuyer: 'Digital Transformation Directors leading ethical transitions and user adoption.'
          },
          latam: {
            name: 'Operating System Redesign (Operational Health)',
            desc: 'Deployment of relational probes and signal dashboards to restore operational fluency. Focused on streamlining informal communication between departmental interfaces.',
            targetBuyer: 'Operations and Innovation Managers needing to reduce human friction and ensure organizational continuity.'
          }
        },
        {
          id: 'gestation',
          phase: '12 Weeks (Quarterly Retainer)',
          basePrice: 98000,
          referenceHours: '~470 hrs',
          procurementNote: '* Homologation benchmark: ~470 hrs estimated multidisciplinary team dedication.',
          artifactsObjective: 'Continuous signal calibration, pre-AI preventative audits, and decision intelligence readouts for C-Suite.',
          deliverables: [
            'Bi-Weekly Decision Intelligence Committee',
            'Continuous Monitoring & Calibration of Systemic Probes',
            'Preemptive Audit of New AI & Technology Initiatives',
            'Ongoing Network Map & Knowledge Debt Updates',
            'Executive Advisory for C-Suite on High-Stakes Decisions',
          ],
          usa: {
            name: 'Continuous Systems Advisory (Margin Shield)',
            desc: 'Ongoing executive advisory to shield scaling and technology decisions against re-accumulating destructive complexity, safeguarding operating EBITDA.',
            targetBuyer: 'Chief Executive Officers (CEO) and Board Members safeguarding overall company margin profitability.'
          },
          canada: {
            name: 'Continuous Systems Advisory (Comprehensive Governance)',
            desc: 'End-to-end simplification and continuous governance cycle. Maintains stakeholder alignment, algorithmic transparency, and compliance across enterprise scaling.',
            targetBuyer: 'Managing Directors (CEO) and Corporate Affairs VPs optimizing stakeholder value and compliance.'
          },
          latam: {
            name: 'Continuous Systems Advisory (Organizational Health)',
            desc: 'Continuous strategic advisory to sustain network agility, monitor relational health, and steer critical organizational transitions without generating bureaucracy.',
            targetBuyer: 'Managing Directors (CEO) and Chief People Officers committed to long-term structural resilience.'
          }
        }
      ]
    },
    intakeModal: {
      badge: 'ISO 30401 Reality Audit',
      title: 'Complexity Diagnostic Request',
      subtitle: 'Confidential executive evaluation to map systemic bottlenecks, assess knowledge debt, and decouple interfaces before investing in AI.',
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
