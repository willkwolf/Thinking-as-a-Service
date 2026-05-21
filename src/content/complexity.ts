export const macroNarrative = 'Diseño Organizacional';

export const coreNarrative = 'Ciencia de Redes & Simplificación';

export const noiseFrameworks = ['VUCA', 'BANI', 'TUNA'] as const;

export const noiseTech = [
  'Agentic Workflows',
  'RAG sin mapa',
  'Reingeniería acelerada',
  'Copilotos sin gobernanza',
] as const;

export const diagnosis = {
  eyebrow: 'El Diagnóstico',
  title: 'La complejidad es una barrera invisible',
  lead: 'No es solo un reto operativo: es uno de los mayores obstáculos al éxito en organizaciones globales.',
  external: {
    label: 'Complejidad externa',
    text: 'Globalización, cambios regulatorios, turbulencia económica y necesidades diversificadas de clientes.',
  },
  internal: {
    label: 'Complejidad interna — el verdadero enemigo',
    text: 'Proliferación de productos, capas de gestión, procesos, informes y correos que abruman a las personas y distraen del valor real.',
  },
  bullets: [
    'La complejidad interna no se ve en el organigrama; se cobra en el margen.',
    'Inyectar IA en un sistema que nadie puede gobernar acelera el caos, no el retorno.',
    'Antes de automatizar, describa el sistema: qué acelerar y qué eliminar.',
  ],
};

export const formula = {
  eyebrow: 'La Fórmula',
  title: 'Para asumirla, primero hay que definirla',
  expression: 'Complejidad = componentes + variedad de relaciones + ritmo de cambio',
  complicated: {
    label: 'Sistemas complicados',
    example: 'Un avión: predecible, diseñable.',
  },
  complex: {
    label: 'Sistemas complejos',
    example: 'Factor humano: ambiguos, impredecibles.',
  },
};

export const tippingPoint = {
  eyebrow: 'Tipping Point',
  title: 'Complejidad buena vs. complejidad mala',
  lead: 'El éxito no consiste en eliminar toda la complejidad, sino en encontrar el punto de inflexión.',
  good: {
    label: 'Complejidad buena',
    text: 'Iniciativas estratégicas que añaden valor: nuevos mercados o productos que el cliente valora.',
  },
  bad: {
    label: 'Complejidad mala (costosa)',
    text: 'Añade costos desproporcionados al valor que genera, destruye margen y mata el negocio.',
  },
  impact: 'Las empresas pierden, en promedio, un 10,2% de su valor para accionistas por complejidad que destruye valor.',
};

export type ArchetypeTone = 'neutral' | 'warning' | 'critical' | 'opportunity';

export interface SimplicityArchetype {
  id: string;
  name: string;
  nameEs: string;
  profile: string;
  action: string;
  tone: ArchetypeTone;
}

export const simplicityMatrix: SimplicityArchetype[] = [
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
    profile: 'Rinden bien a pesar de la alta complejidad — pero pierden beneficios por el camino.',
    action: 'Reducir la complejidad mala con urgencia ejecutiva, no con recortes superficiales.',
    tone: 'warning',
  },
  {
    id: 'strugglers',
    name: 'Strugglers',
    nameEs: 'Luchadores',
    profile: 'Alta complejidad y bajo rendimiento. Casos como RBS o Nokia.',
    action: 'Reducción dramática y estructural de la complejidad — no parches.',
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
];

export const simplicityStrategy = {
  eyebrow: 'Estrategia de Simplicidad',
  title: 'Exactamente lo esencial — ni más, ni menos',
  definition:
    'La simplicidad es tener el número correcto de componentes y conexiones esenciales para el éxito.',
  pillars: [
    {
      title: 'Simplemente añadir valor',
      text: 'Mantra para filtrar cada proceso, producto o reunión.',
    },
    {
      title: 'Puntos de apalancamiento',
      text: 'Reducir complejidad en estrategia, estructura y procesos — no solo costos superficiales.',
    },
    {
      title: 'Comportamientos de gestión',
      text: 'Evitar que la complejidad vuelva a arrastrarse tras una limpieza inicial.',
    },
    {
      title: 'Enfoque en las personas',
      text: 'El personal es fuente de imprevisibilidad: compromiso total con actividades que añaden valor.',
    },
  ],
};

export const cemstwo = {
  eyebrow: 'Ciencia de Redes',
  title: 'Del organigrama al grafo CEMSTWO',
  lead: 'La vista tradicional describe autoridad, no flujo. CEMSTWO mapea la arquitectura real: Composición, Entorno, Mecanismo, Estructura, Transformación, Weltanschauung y Ownership.',
  nodes: ['C', 'E', 'M', 'S', 'T', 'W', 'O'] as const,
};

export const evidence = {
  eyebrow: 'Evidencia',
  title: '¿Su organización opera sobre estructura visible o sobre dinámicas no modeladas?',
  lead: 'Visual Mapping funciona como Mapa de Navegación de Hipótesis: reduce ambigüedad antes de Agentic Workflows, RAG o automatización.',
  bullets: [
    'Pasar de la especulación de sillón a evidencia visual que destruye disputas departamentales.',
    'Identificar hubs de poder real y SPOF antes de que la crisis aparezca en caja.',
    'La IA como motor — no como arquitecto — sobre un territorio ya descrito.',
  ],
  video: {
    label: 'VISUAL MAPPING / DIAGNÓSTICO COMPLETO',
    duration: '07:36 + audio',
    poster: `${import.meta.env.BASE_URL}Assets/visual-mapping-poster.jpg`,
    src: `${import.meta.env.BASE_URL}Assets/visual-mapping-full.mp4`,
    note: 'Ver antes de decidir una implementación de IA, RAG o automatización de workflows.',
  },
};

export const riskPanel = {
  label: '2026 OPERATING RISK',
  title: 'Ruido · IA · Reingeniería',
  metrics: [
    { label: 'Ruido automatizable', value: 'Alto', danger: true },
    { label: 'Frameworks sin mapa', value: 'VUCA / BANI / TUNA', danger: false },
    { label: 'Valor en riesgo', value: '~10,2%', danger: true },
  ],
  footnote: 'El riesgo no es adoptar IA tarde. Es inyectarla en un sistema que nadie puede gobernar.',
};
