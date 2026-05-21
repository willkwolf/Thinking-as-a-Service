export type Locale = 'es' | 'en';
export type IcebergLayerId = 'surface' | 'complexity' | 'evidence' | 'signal' | 'depth';
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
        'Consultoría de alto impacto: diagnostique la complejidad que destruye valor, reduzca el ruido VUCA/BANI/TUNA y active simplicidad operativa antes de automatizar con IA.',
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
      { id: 'surface', label: 'Superficie - Ruido', shortLabel: 'Ruido', depth: 0 },
      { id: 'complexity', label: 'Complejidad organizacional', shortLabel: 'Complejidad', depth: 1 },
      { id: 'evidence', label: 'Evidencia visual', shortLabel: 'Evidencia', depth: 2 },
      { id: 'signal', label: 'Señal - Playbook', shortLabel: 'Playbook', depth: 3 },
      { id: 'depth', label: 'Profundidad - Casos', shortLabel: 'Casos', depth: 4 },
    ] satisfies IcebergLayer[],
    hero: {
      macro: 'Economía Circular',
      narrative: 'Complejidad + Industria + IA',
      eyebrow: 'Superficie del iceberg',
      title: 'El ruido de 2026 no es estrategia. Es complejidad sin mapa.',
      subcopy:
        'Sobran marcos de entorno, agentes y promesas de automatización. Antes de tocar IA, describa el sistema que va a acelerar y filtre el ruido que destruye margen.',
      ctaPrimary: { label: 'Ver el Playbook', href: '#iceberg-signal' },
      ctaSecondary: { label: 'Bajar a la complejidad', href: '#iceberg-complexity' },
    },
    complexity: {
      macroNarrative: 'Economía Circular',
      coreNarrative: 'Complejidad + Industria + IA',
      noiseFrameworks: ['VUCA', 'BANI', 'TUNA'],
      noiseTech: ['Flujos agénticos', 'RAG sin mapa', 'Reingeniería acelerada', 'Copilotos sin gobernanza'],
      diagnosis: {
        eyebrow: 'El diagnóstico',
        title: 'La complejidad es una barrera invisible',
        lead: 'No es solo un reto operativo: es uno de los mayores obstáculos al éxito en organizaciones globales.',
        external: {
          label: 'Complejidad externa',
          text: 'Globalización, cambios regulatorios, turbulencia económica y necesidades diversificadas de clientes.',
        },
        internal: {
          label: 'Complejidad interna: el verdadero enemigo',
          text: 'Proliferación de productos, capas de gestión, procesos, informes y correos que abruman a las personas y distraen del valor real.',
        },
        bullets: [
          'La complejidad interna no se ve en el organigrama; se cobra en el margen.',
          'Inyectar IA en un sistema que nadie puede gobernar acelera el caos, no el retorno.',
          'Antes de automatizar, describa el sistema: qué acelerar y qué eliminar.',
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
        impact: 'Las empresas pierden, en promedio, un 10,2% de su valor para accionistas por complejidad que destruye valor.',
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
        lead: 'Visual Mapping funciona como mapa de navegación de hipótesis: reduce ambigüedad antes de flujos agénticos, RAG o automatización.',
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
          note: 'Ver antes de decidir una implementación de IA, RAG o automatización de flujos.',
        },
      },
      riskPanel: {
        label: 'Riesgo operativo 2026',
        title: 'Ruido · IA · Reingeniería',
        metrics: [
          { label: 'Ruido automatizable', value: 'Alto', danger: true },
          { label: 'Marcos sin mapa', value: 'VUCA / BANI / TUNA', danger: false },
          { label: 'Valor en riesgo', value: '~10,2%', danger: true },
        ],
        footnote: 'El riesgo no es adoptar IA tarde. Es inyectarla en un sistema que nadie puede gobernar.',
      },
    },
    playbook: {
      eyebrow: 'Playbook de entrega',
      title: 'De la complejidad medida a la simplicidad operativa',
      lead: 'Modelo de consultoría ejecutiva: diagnóstico riguroso y reducción estructurada del ruido que destruye margen.',
      whatsappBase: 'https://wa.me/573108437004',
      ctaMessage:
        'Quiero explorar el Playbook de Complejidad: diagnóstico y estrategia de reducción para mi organización.',
      items: [
        {
          id: 'diagnosis',
          title: 'Diagnóstico de complejidad',
          summary:
            'Mapeo ejecutivo de componentes, relaciones y ritmo de cambio. Identifica complejidad buena vs. mala antes de cualquier iniciativa de IA.',
        },
        {
          id: 'reduction',
          title: 'Estrategia de reducción de complejidad',
          summary: 'Intervención en tres frentes de apalancamiento, sin recortes cosméticos.',
          children: [
            {
              title: 'Personas',
              summary:
                'Aborda comportamientos de liderazgo y gestión: reuniones, decisiones y capas que reintroducen ruido.',
            },
            {
              title: 'Proyectos mayores de simplificación',
              summary:
                'Ataca las mayores formas de complejidad dañina: portafolios, estructuras y procesos que drenan margen.',
            },
            {
              title: 'Complejidad cotidiana',
              summary:
                'Reportes, reuniones y toma de decisiones: el ruido que nadie ve en el P&L hasta que es tarde.',
            },
          ],
        },
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
        'Quiero identificar cuellos de botella sistémicos y complejidad mala antes de automatizar con IA.',
    },
  },
  en: {
    metadata: {
      title: 'Thinking as a Service | Complexity, Industry and AI',
      description:
        'Executive consulting: diagnose value-destroying complexity, reduce VUCA/BANI/TUNA noise and activate operational simplicity before automating with AI.',
    },
    ui: {
      visualMode: 'Visual mode',
      switchToRest: 'Turn on dark mode',
      switchToDay: 'Turn on light mode',
      graphInstruction: 'Explore each node with mouse, keyboard or touch to reveal its conceptual question.',
      currentNode: 'Selected node',
      recommendedUse: 'Recommended use:',
      action: 'Action:',
      floatingCta: 'System bottlenecks',
      noVideo: 'Your browser does not support HTML5 video.',
    },
    icebergLayers: [
      { id: 'surface', label: 'Surface - Noise', shortLabel: 'Noise', depth: 0 },
      { id: 'complexity', label: 'Organizational complexity', shortLabel: 'Complexity', depth: 1 },
      { id: 'evidence', label: 'Visual evidence', shortLabel: 'Evidence', depth: 2 },
      { id: 'signal', label: 'Signal - Playbook', shortLabel: 'Playbook', depth: 3 },
      { id: 'depth', label: 'Depth - Cases', shortLabel: 'Cases', depth: 4 },
    ] satisfies IcebergLayer[],
    hero: {
      macro: 'Circular Economy',
      narrative: 'Complexity + Industry + AI',
      eyebrow: 'Iceberg surface',
      title: 'The noise of 2026 is not strategy. It is complexity without a map.',
      subcopy:
        'There are too many environment frameworks, agents and automation promises. Before touching AI, describe the system you will accelerate and filter the noise that destroys margin.',
      ctaPrimary: { label: 'See the Playbook', href: '#iceberg-signal' },
      ctaSecondary: { label: 'Go to complexity', href: '#iceberg-complexity' },
    },
    complexity: {
      macroNarrative: 'Circular Economy',
      coreNarrative: 'Complexity + Industry + AI',
      noiseFrameworks: ['VUCA', 'BANI', 'TUNA'],
      noiseTech: ['Agentic flows', 'RAG without a map', 'Accelerated redesign', 'Ungoverned copilots'],
      diagnosis: {
        eyebrow: 'Diagnosis',
        title: 'Complexity is an invisible barrier',
        lead: 'It is not just an operational challenge: it is one of the largest obstacles to success in global organizations.',
        external: {
          label: 'External complexity',
          text: 'Globalization, regulatory changes, economic turbulence and diversified customer needs.',
        },
        internal: {
          label: 'Internal complexity: the real enemy',
          text: 'Product proliferation, management layers, processes, reports and emails that overwhelm people and distract from real value.',
        },
        bullets: [
          'Internal complexity does not appear in the org chart; it is paid for in margin.',
          'Injecting AI into an ungoverned system accelerates chaos, not return.',
          'Before automating, describe the system: what to accelerate and what to remove.',
        ],
      },
      formula: {
        eyebrow: 'Formula',
        title: 'To manage it, first define it',
        expression: 'Complexity = components + variety of relationships + rate of change',
        complicated: { label: 'Complicated systems', example: 'An aircraft: predictable and designable.' },
        complex: { label: 'Complex systems', example: 'The human factor: ambiguous, adaptive and unpredictable.' },
      },
      tippingPoint: {
        eyebrow: 'Tipping point',
        title: 'Good complexity vs. bad complexity',
        lead: 'Success is not eliminating all complexity, but finding the inflection point.',
        good: {
          label: 'Good complexity',
          text: 'Strategic initiatives that add value: new markets or products customers value.',
        },
        bad: {
          label: 'Bad and costly complexity',
          text: 'It adds costs disproportionate to the value it creates, destroys margin and can kill the business.',
        },
        impact: 'Companies lose, on average, 10.2% of shareholder value to complexity that destroys value.',
      },
      matrixHeading: { eyebrow: 'Simplicity matrix', title: 'Where is your organization?' },
      simplicityMatrix: [
        {
          id: 'performers',
          name: 'Performers',
          nameEs: 'Performers',
          profile: 'Strong performance without overcomplicating.',
          action: 'Prevent bad complexity from leaking in before it erodes margin.',
          tone: 'neutral',
        },
        {
          id: 'complicators',
          name: 'Complicators',
          nameEs: 'Complicators',
          profile: 'They perform despite high complexity, but lose benefits along the way.',
          action: 'Reduce bad complexity with executive urgency, not cosmetic cuts.',
          tone: 'warning',
        },
        {
          id: 'strugglers',
          name: 'Strugglers',
          nameEs: 'Strugglers',
          profile: 'High complexity and low performance.',
          action: 'Drive dramatic and structural complexity reduction, not patches.',
          tone: 'critical',
        },
        {
          id: 'simplifiers',
          name: 'Simplifiers',
          nameEs: 'Simplifiers',
          profile: 'Simple models with low benefits.',
          action: 'Use good complexity to grow without reintroducing noise.',
          tone: 'opportunity',
        },
      ] satisfies SimplicityArchetype[],
      cemstwo: {
        eyebrow: 'Network science',
        title: 'From org chart to CEMSTWO graph',
        lead: 'CEMSTWO extends CATWOE for contexts where material conditions matter as much as interpretation: first describe what exists and how it operates, then evaluate purpose, worldview and power.',
        nodes: [
          {
            id: 'C',
            label: 'Composition',
            shortLabel: 'Parts',
            summary: 'Human actors, technical artifacts, natural resources and capabilities that make up the system.',
            question: 'What is the system made of, and what parts are missing from the diagnosis?',
          },
          {
            id: 'E',
            label: 'Active environment',
            shortLabel: 'Co-producers',
            summary: 'External systems that interact with the system and also transform it.',
            question: 'Which actors, rules, markets or biophysical conditions co-produce the problem?',
          },
          {
            id: 'M',
            label: 'Mechanism',
            shortLabel: 'How it works',
            summary: 'Concrete processes that generate transformation: physical, decisional, learning or control processes.',
            question: 'Which generative process explains what happens, and what evidence validates it?',
          },
          {
            id: 'S',
            label: 'Structure',
            shortLabel: 'Links',
            summary: 'Internal and external relationships: hierarchies, flows, exclusions, dependencies and couplings.',
            question: 'How are the parts related, and where does structure block learning or action?',
          },
          {
            id: 'T',
            label: 'Transformation',
            shortLabel: 'Core change',
            summary: 'The input-to-output change that defines the system purpose.',
            question: 'What exactly changes, from which initial state to which desired outcome?',
          },
          {
            id: 'W',
            label: 'Weltanschauung',
            shortLabel: 'Worldview',
            summary: 'Sense-making frame that makes the transformation desirable and reveals conflicting ontologies.',
            question: 'Which worldview legitimizes this transformation, and which alternative challenges it?',
          },
          {
            id: 'O',
            label: 'Ownership',
            shortLabel: 'Power',
            summary: 'Those who can stop, authorize or reconfigure C-E-M-S-T.',
            question: 'Who has real power to change the system, and who is left out of that decision?',
          },
        ] satisfies CemstwoNode[],
      },
      simplicityStrategy: {
        eyebrow: 'Simplicity strategy',
        title: 'Exactly what is essential: no more, no less',
        definition: 'Simplicity means having the right number of essential components and connections for success.',
        pillars: [
          { title: 'Add value', text: 'A filter for every process, product or meeting.' },
          { title: 'Leverage points', text: 'Reduce complexity in strategy, structure and processes.' },
          { title: 'Everyday management', text: 'Prevent complexity from returning after an initial cleanup.' },
          { title: 'People focus', text: 'Commit to activities that add value and reduce noise.' },
        ],
      },
      evidence: {
        eyebrow: 'Evidence',
        title: 'Does your organization operate on visible structure or unmapped dynamics?',
        lead: 'Visual Mapping works as a hypothesis navigation map: it reduces ambiguity before agentic flows, RAG or automation.',
        bullets: [
          'Move from armchair speculation to visual evidence that defuses departmental disputes.',
          'Identify real power hubs and single points of failure before the crisis hits cash flow.',
          'AI as an engine, not as the architect, on already described territory.',
        ],
        video: {
          label: 'Visual Mapping / Full diagnosis',
          duration: '07:36 + audio',
          poster: `${import.meta.env.BASE_URL}Assets/visual-mapping-poster.jpg`,
          src: `${import.meta.env.BASE_URL}Assets/visual-mapping-full.mp4`,
          note: 'Watch before deciding an AI, RAG or workflow automation implementation.',
        },
      },
      riskPanel: {
        label: '2026 operating risk',
        title: 'Noise · AI · Redesign',
        metrics: [
          { label: 'Automatable noise', value: 'High', danger: true },
          { label: 'Frameworks without map', value: 'VUCA / BANI / TUNA', danger: false },
          { label: 'Value at risk', value: '~10.2%', danger: true },
        ],
        footnote: 'The risk is not adopting AI late. It is injecting it into a system nobody can govern.',
      },
    },
    playbook: {
      eyebrow: 'Delivery playbook',
      title: 'From measured complexity to operational simplicity',
      lead: 'Executive consulting model: rigorous diagnosis and structured reduction of the noise that destroys margin.',
      whatsappBase: 'https://wa.me/573108437004',
      ctaMessage: 'I want to explore the Complexity Playbook: diagnosis and reduction strategy for my organization.',
      items: [
        {
          id: 'diagnosis',
          title: 'Complexity diagnosis',
          summary:
            'Executive mapping of components, relationships and rate of change. It identifies good vs. bad complexity before any AI initiative.',
        },
        {
          id: 'reduction',
          title: 'Complexity reduction strategy',
          summary: 'Intervention across three leverage fronts, without cosmetic cuts.',
          children: [
            {
              title: 'People',
              summary: 'Addresses leadership and management behaviors: meetings, decisions and layers that reintroduce noise.',
            },
            {
              title: 'Major simplification projects',
              summary: 'Targets the largest forms of harmful complexity: portfolios, structures and processes that drain margin.',
            },
            {
              title: 'Everyday complexity',
              summary: 'Reports, meetings and decision-making: the noise nobody sees in the P&L until it is late.',
            },
          ],
        },
      ] satisfies PlaybookItem[],
      ctaLabel: 'Request the Playbook',
    },
    signalLead: {
      eyebrow: 'The signal',
      title: 'Simplicity with a Playbook',
      name: 'PhD Andres Lopez Astudillo',
      role: 'Reality auditor · Strategy and organizations',
      photo: `${import.meta.env.BASE_URL}Assets/equipo/espada.png`,
      quote:
        'Reduces ambiguity where others only see chaos. Tests executive narrative against observable structure before accelerating with AI.',
      metrics: [
        { value: '20+', label: 'Years of Experience', desc: 'In senior management consulting, organizational design, and complexity modeling.' },
        { value: '10+', label: 'Countries Served', desc: 'Operational audits and strategic interventions across Latin America and Europe.' },
        { value: '50+', label: 'Organizations', desc: 'Complex corporations, industrial entities, and SMEs guided towards simplicity.' }
      ],
    },
    caseStudy: {
      eyebrow: 'Use case',
      title: 'BPO organization map',
      lead: '1,866 nodes connected by manager-employee relationships: centrality, betweenness and network leadership types.',
      description:
        'Network metrics, gender, age and salary maps, and leadership classification: influencers, bridges, extroverts and followers.',
      embedTitle: 'BPO organization map',
      embedUrl: 'https://embed.kumu.io/5947f71e13542aa11dca864b1453d778',
    },
    megatrends: {
      eyebrow: 'Signal map',
      title: 'Megatrends and technologies',
      lead: 'Organize noise and signals in a visual map: environment frameworks vs. operational simplicity playbooks.',
      embedTitle: 'Megatrends and technologies map',
      embedUrl: 'https://embed.kumu.io/617b678e390c4370872cda91f74ffdbe',
    },
    footer: {
      eyebrow: 'Closing question',
      title: 'Where is your organization in the simplicity matrix?',
      lead: 'If you cannot see the system, you cannot govern it; and AI will only amplify what is already broken.',
      ctaLabel: 'Request complexity diagnosis',
      ctaMessage: 'I want to identify system bottlenecks and bad complexity before automating with AI.',
    },
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];

export function resolveLocale(language = navigator.language): Locale {
  return language.toLowerCase().startsWith('en') ? 'en' : 'es';
}
