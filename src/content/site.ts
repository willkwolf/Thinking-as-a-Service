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
      eyebrow: '',
      title: 'Deje de automatizar el caos. Automatice el margen.',
      subcopy:
        'No vendemos software ni bolsas de horas de ingeniería. Asumimos la complejidad de su organización mediante un enfoque sistémico para activar la Simplicidad de la Estrategia en Procesos, Personas, Productos y Diseño Organizacional. Mapeamos la red real de nodos y sus dinámicas para que la tecnología corra sobre un sistema limpio.',
      ctaPrimary: { label: 'Ver Propuesta y Pricing', href: '#iceberg-proposal' },
      ctaSecondary: { label: 'Bajar a la complejidad', href: '#iceberg-diagnosis' },
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
      lead: 'Pensamiento sistémico aplicado al diseño organizacional: asuma la complejidad a través de la simplicidad de procesos, personas, productos y dinámicas de red.',
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
              summary: 'Le entregamos la arquitectura exacta de qué automatizar, con qué tecnología y cuál es el retorno financiero esperado.'
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
      title: 'Inversión basada en valor y horas reales del equipo',
      lead: 'Estructura comercial remote-first y transparente. Sin bolsas de horas infinitas ni desperdicio tecnológico.',
      regionLabel: 'Seleccione su región:',
      packageLabel: 'Seleccione un paquete comercial:',
      customTitle: 'Simulador de Equipo Personalizado',
      customLead: 'Ajuste las horas estimadas para estructurar una propuesta a su medida.',
      partnerLabel: 'Socio Principal / Reality Auditor ($300 USD / hr)',
      analystLabel: 'Delivery Team / Network Analyst & Designer ($229 USD / hr)',
      summaryTitle: 'Resumen de la Propuesta Comercial',
      summaryTotal: 'Inversión Total Estimada:',
      summaryNote: 'Tarifas calculadas sobre tarifas BATNA mínimas garantizadas.',
      ctaSend: 'Generar Propuesta y Enviar por WhatsApp',
      copySuccess: '¡Propuesta copiada al portapapeles!',
      copyButton: 'Copiar Propuesta al Portapapeles',
      regions: {
        usa: {
          name: 'USA',
          focusTitle: 'Foco en Sostenibilidad Operativa y EBITDA',
          focusText: 'Optimización de márgenes operativos y gobernanza de IA para empresas medianas ($10M-$100M USD/año). Mitigación del AI Mirage y eliminación de burnout.',
        },
        canada: {
          name: 'Canadá',
          focusTitle: 'Gobernanza de IA y Productividad Responsable',
          focusText: 'Diseño de casos de uso de IA complementarios a infraestructura existente (data, cloud, R&D). Foco en change management y compliance ético.',
        },
        latam: {
          name: 'LATAM',
          focusTitle: 'Eficiencia Estructural y Cumplimiento ESG',
          focusText: 'Reducción de burocracia informal, eliminación de cuellos de botella de decisión y optimización de flujos de cadena de suministro / circularidad.',
        },
      },
      packages: [
        {
          id: 'sondeo',
          name: 'Sondeo Anti-Desperdicio',
          phase: 'Fases 1 y 2 (Semanas 1-2)',
          desc: 'Auditoría express de ruido, micro-entrevistas remotas, 3 hipótesis de ROI en IA y Decision Memo (Go/Abort).',
          partnerHours: 15,
          analystHours: 25,
          basePrice: 9800,
          targetBuyer: 'CFOs que buscan evitar el gasto en software antes de validar procesos.',
        },
        {
          id: 'standard',
          name: 'Standard Remoto',
          phase: 'Fases 1, 2 y 3 (Semanas 1-4)',
          desc: 'Sondeo, mapa interactivo Kumu completo, 3 System Personas, Tablero de Decisiones Simples y Roadmap de 90 días.',
          partnerHours: 30,
          analystHours: 100,
          basePrice: 29500,
          targetBuyer: 'CEOs que necesitan visibilidad de la estructura real antes de adquirir tecnología.',
        },
        {
          id: 'enterprise',
          name: 'Enterprise Virtual',
          phase: 'Standard + Soporte (3 Meses)',
          desc: 'Todo el Standard Remoto + Transferencia de playbooks, licencia anual de gemelo digital y retainer de soporte por 3 meses (20 hrs/mes).',
          partnerHours: 60,
          analystHours: 160,
          basePrice: 35000,
          hasRetainer: true,
          retainerPrice: 4500,
          targetBuyer: 'CTOs liderando transformación y gobernanza de IA responsable.',
        },
      ]
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
      eyebrow: '',
      title: 'Stop automating chaos. Automate margins.',
      subcopy:
        'We do not sell software or engineering hours. We address your organizational complexity using a systemic approach to activate Simplicity of Strategy across Processes, People, Products, and Organizational Design. We map the real network of nodes and dynamics so that technology runs on a clean system.',
      ctaPrimary: { label: 'View Proposal & Pricing', href: '#iceberg-proposal' },
      ctaSecondary: { label: 'Dive into Complexity', href: '#iceberg-diagnosis' },
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
      lead: 'Systemic thinking applied to organizational design: address complexity through simplicity of processes, people, products, and network dynamics.',
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
              summary: 'We deliver the exact architecture of what to automate, with what technology, and the expected financial return.'
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
      eyebrow: 'COMMERCIAL PROPOSAL',
      title: 'Value-based investment and real team hours',
      lead: 'Transparent, remote-first commercial structure. No endless hourly pools, no tech waste.',
      regionLabel: 'Select your region:',
      packageLabel: 'Select a commercial package:',
      customTitle: 'Custom Team Simulator',
      customLead: 'Adjust estimated hours to structure a tailored proposal.',
      partnerLabel: 'Senior Partner / Reality Auditor ($300 USD / hr)',
      analystLabel: 'Delivery Team / Network Analyst & Designer ($229 USD / hr)',
      summaryTitle: 'Commercial Proposal Summary',
      summaryTotal: 'Estimated Total Investment:',
      summaryNote: 'Rates based on guaranteed minimum BATNA.',
      ctaSend: 'Generate & Send Proposal via WhatsApp',
      copySuccess: 'Proposal copied to clipboard!',
      copyButton: 'Copy Proposal to Clipboard',
      regions: {
        usa: {
          name: 'USA',
          focusTitle: 'Operational Sustainability & EBITDA Focus',
          focusText: 'Operating margin optimization and AI governance for mid-sized enterprises ($10M-$100M USD/year). AI Mirage mitigation and burnout elimination.',
        },
        canada: {
          name: 'Canada',
          focusTitle: 'AI Governance & Responsible Productivity',
          focusText: 'Design of AI use cases complementary to existing infrastructure (data, cloud, R&D). Focus on change management and ethical compliance.',
        },
        latam: {
          name: 'LATAM',
          focusTitle: 'Structural Efficiency & ESG Compliance',
          focusText: 'Reduction of informal bureaucracy, elimination of decision bottlenecks, and optimization of supply chain flows / circularity.',
        },
      },
      packages: [
        {
          id: 'sondeo',
          name: 'Anti-Waste Survey',
          phase: 'Phases 1 and 2 (Weeks 1-2)',
          desc: 'Express noise audit, remote micro-interviews, 3 validated AI ROI hypotheses, and Decision Memo (Go/Abort).',
          partnerHours: 15,
          analystHours: 25,
          basePrice: 9800,
          targetBuyer: 'CFOs looking to stop software spending before processes are validated.',
        },
        {
          id: 'standard',
          name: 'Standard Remote',
          phase: 'Phases 1, 2, and 3 (Weeks 1-4)',
          desc: 'Survey, complete Kumu interactive map, 3 System Personas, Simple Decision Dashboard, and 90-day Roadmap.',
          partnerHours: 30,
          analystHours: 100,
          basePrice: 29500,
          targetBuyer: 'CEOs needing visibility of the real structure before purchasing technology.',
        },
        {
          id: 'enterprise',
          name: 'Enterprise Virtual',
          phase: 'Standard + Support (3 Months)',
          desc: 'All Standard Remote + playbook transfer, annual digital twin license, and 3-month support retainer (20 hrs/month).',
          partnerHours: 60,
          analystHours: 160,
          basePrice: 35000,
          hasRetainer: true,
          retainerPrice: 4500,
          targetBuyer: 'CTOs leading transformation and responsible AI governance.',
        },
      ]
    },
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];

export function resolveLocale(language = navigator.language): Locale {
  return language.toLowerCase().startsWith('en') ? 'en' : 'es';
}
