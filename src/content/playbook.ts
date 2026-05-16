export const playbook = {
  eyebrow: 'Playbook de entrega',
  title: 'De la complejidad medida a la simplicidad operativa',
  lead: 'Modelo de consultoría de alto ticket: diagnóstico riguroso y reducción estructurada del ruido que destruye margen.',
  whatsappBase: 'https://wa.me/573108437004',
  ctaMessage:
    'Quiero explorar el Playbook de Complejidad — diagnóstico y estrategia de reducción para mi organización.',
};

export interface PlaybookItem {
  id: string;
  title: string;
  summary: string;
  children?: { title: string; summary: string }[];
}

export const playbookItems: PlaybookItem[] = [
  {
    id: 'diagnosis',
    title: 'Complexity Diagnosis',
    summary:
      'Mapeo ejecutivo de componentes, relaciones y ritmo de cambio. Identifica complejidad buena vs. mala antes de cualquier iniciativa de IA.',
  },
  {
    id: 'reduction',
    title: 'Complexity Reduction Strategy',
    summary: 'Intervención en tres frentes de apalancamiento — no recortes cosméticos.',
    children: [
      {
        title: 'People',
        summary:
          'Aborda la complejidad en comportamientos de liderazgo y gestión: reuniones, decisiones y capas que reintroducen ruido.',
      },
      {
        title: 'Major Simplification Projects',
        summary:
          'Ataca las mayores formas de complejidad dañina: portafolios, estructuras y procesos que drenan margen.',
      },
      {
        title: 'Everyday Complexity',
        summary:
          'Reporting, reuniones y decision-making cotidianos: el ruido que nadie ve en el P&L hasta que es tarde.',
      },
    ],
  },
];

export const signalLead = {
  eyebrow: 'La señal',
  title: 'Simplicidad con Playbook',
  name: 'PhD Andrés López Astudillo',
  role: 'Auditor de Realidad · Estrategia y Organizaciones',
  photo: `${import.meta.env.BASE_URL}Assets/equipo/espada.png`,
  quote:
    'Reduce ambigüedad donde otros solo ven caos. Contrasta narrativa ejecutiva contra estructura observable antes de acelerar con IA.',
};

export const teamMembers = [
  {
    nombre: 'Andrés López Astudillo',
    rol: 'Auditor de Realidad',
    foto: `${import.meta.env.BASE_URL}Assets/equipo/espada.png`,
    descripcion:
      'Ph.D. (c) en Estrategia de Negocios y Organizaciones. Reduce ambigüedad donde otros solo ven caos.',
    featured: true,
  },
  {
    nombre: 'Andrés Calderón',
    rol: 'Arquitecto de Escenarios',
    foto: `${import.meta.env.BASE_URL}Assets/equipo/ermitano.png`,
    descripcion:
      'Modela causalidad, dependencias y escenarios de ruptura antes de que el cuello de botella sea visible en caja.',
    featured: false,
  },
  {
    nombre: 'William Camilo Artunduaga',
    rol: 'Ingeniero de Ejecución',
    foto: `${import.meta.env.BASE_URL}Assets/equipo/mago.png`,
    descripcion:
      'Convierte el mapa estructural en secuencia de intervención: rediseño, automatización y gobernanza de IA.',
    featured: false,
  },
];

export const caseStudy = {
  eyebrow: 'Caso de uso',
  title: 'Mapa de organización BPO',
  lead: '1.866 nodos conectados por relaciones jefe-empleado: centralidad, intermediación y tipos de liderazgo en red.',
  description:
    'Métricas de red (centralidad, intermediación, grado, cercanía), mapas de género, edad y salario, y clasificación de liderazgo: Influenciadores, Puentes, Extrovertidos y Seguidores.',
  embedUrl: 'https://embed.kumu.io/5947f71e13542aa11dca864b1453d778',
};

export const megatrends = {
  eyebrow: 'Mapa de señales',
  title: 'Megatendencias y tecnologías',
  lead: 'Organice ruido y señales en un mapa visual: marcos de entorno vs. playbooks de simplicidad operativa.',
  embedUrl: 'https://embed.kumu.io/617b678e390c4370872cda91f74ffdbe',
};

export const footer = {
  eyebrow: 'Pregunta de cierre',
  title: '¿Dónde está su organización en la matriz de simplicidad?',
  lead: 'Si no puede ver el sistema, no puede gobernarlo — y la IA solo amplificará lo que ya está roto.',
  ctaLabel: 'Solicitar diagnóstico de complejidad',
  ctaMessage:
    'Quiero identificar cuellos de botella sistémicos y complejidad mala antes de automatizar con IA.',
};
