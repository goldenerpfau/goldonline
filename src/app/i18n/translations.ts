// Goldener Pfau — site copy dictionary.
// Structural data (ids, slugs, images, order, numbers) stays in page.tsx.
// Only translatable text lives here. Add a new locale by adding a new key
// to `translations` with the same shape as `en`.

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ru';

export const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'ru', label: 'RU', name: 'Русский' },
];

export const DEFAULT_LOCALE: Locale = 'en';

type ServiceCopy = { title: string; description: string };

export type Dictionary = {
  nav: {
    services: string;
    platform: string;
    membership: string;
    contact: string;
    privateAccess: string;
    homeAriaLabel: string;
    backToTopAriaLabel: string;
  };
  hero: {
    taglineDescriptor: string;
    title: string;
    copy: string;
    ctaPrimary: string;
    ctaSecondary: string;
    signalLabel: string;
    signalStrong: string;
    signalCopy: string;
  };
  services: {
    eyebrow: string;
    title: string;
    copy: string;
    statusLive: string;
    statusSoon: string;
    items: Record<
      'real-estate' | 'private-cars' | 'yachts-boats' | 'private-jets' | 'hotels-stays' | 'concierge' | 'membership' | 'global-assistance',
      ServiceCopy
    >;
  };
  platform: {
    eyebrow: string;
    title: string;
    copy: string;
    features: string[];
  };
  reach: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    copy: string;
    markets: string[];
    capabilities: string[];
    signatureStrong: string;
    signatureCopy: string;
  };
  process: {
    eyebrow: string;
    title: string;
    copy: string;
    steps: { title: string; text: string }[];
  };
  membership: {
    eyebrow: string;
    badge: string;
    title: string;
    intro: string;
    disclaimer: string;
    sceneLabel: string;
    sceneStrong: string;
    sceneCopy: string;
    summaryLabel: string;
    summaryStrong: string;
    summaryCopy: string;
    principles: { title: string; text: string }[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    copy: string;
    metaLabel: string;
    metaCopy: string;
    items: { title: string; tag: string }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    copy: string;
    items: { title: string; text: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    copy: string;
    instagram: string;
    email: string;
  };
  footer: {
    taglineDescriptor: string;
    privacy: string;
    terms: string;
    support: string;
  };
  languageSwitcher: {
    ariaLabel: string;
  };
};

export const translations: Record<Locale, Dictionary> = {
  en: {
    nav: {
      services: 'Services',
      platform: 'Platform',
      membership: 'Membership',
      contact: 'Contact',
      privateAccess: 'Private Access',
      homeAriaLabel: 'Goldener Pfau home',
      backToTopAriaLabel: 'Back to top',
    },
    hero: {
      taglineDescriptor: 'Private luxury coordination',
      title: 'Exceptional access.',
      copy: 'Every detail, personally arranged.',
      ctaPrimary: 'Start a private request',
      ctaSecondary: 'Explore Goldener Pfau',
      signalLabel: 'Private desk',
      signalStrong: 'Assets · Travel · Stays · Membership',
      signalCopy: 'Selected access. Controlled coordination. Quiet execution.',
    },
    services: {
      eyebrow: 'Service universe',
      title: 'One private standard across premium categories.',
      copy: 'Each service is structured as an access layer: discreet intake, curated options, verified coordination and refined delivery.',
      statusLive: 'Available now',
      statusSoon: 'By request',
      items: {
        'real-estate': {
          title: 'Real Estate',
          description: 'Private villas, residences and investment-grade property opportunities handled with discretion.',
        },
        'private-cars': {
          title: 'Private Cars',
          description: 'Premium rentals, acquisitions and mobility coordination across selected destinations.',
        },
        'yachts-boats': {
          title: 'Yachts & Boats',
          description: 'Coastal access, yacht arrangements and nautical opportunities through a curated network.',
        },
        'private-jets': {
          title: 'Private Jets',
          description: 'Aviation requests coordinated through selected operators with controlled execution.',
        },
        'hotels-stays': {
          title: 'Hotels & Stays',
          description: 'Premium stays, private villas and hospitality arrangements for business and leisure.',
        },
        concierge: {
          title: 'Concierge',
          description: 'Bespoke reservations, experiences and personal assistance without operational noise.',
        },
        membership: {
          title: 'Membership',
          description: 'Priority access across every category, coordinated by a dedicated desk.',
        },
        'global-assistance': {
          title: 'Global Assistance',
          description: 'Cross-border coordination for clients moving between countries, assets and appointments.',
        },
      },
    },
    platform: {
      eyebrow: 'Private platform',
      title: 'Your private world, connected.',
      copy: 'Browse selected opportunities, manage requests and access your membership in one place.',
      features: ['Bookings', 'Private catalogue', 'Concierge requests', 'Membership area', 'Asset access', 'Request history'],
    },
    reach: {
      eyebrow: 'International reach',
      titleLine1: 'Private reach.',
      titleLine2: 'Global orchestration.',
      copy: 'Goldener Pfau connects selected markets, trusted relationships and premium access through one discreet international desk.',
      markets: ['Europe', 'Middle East', 'Americas', 'Private network'],
      capabilities: ['Residences', 'Aviation', 'Yachts', 'Hotels', 'Mobility', 'Concierge', 'Asset access', 'Private Events'],
      signatureStrong: 'Discretion · Access · Execution',
      signatureCopy: 'Selected markets · trusted relationships · premium coordination',
    },
    process: {
      eyebrow: 'Private access',
      title: 'Private protocol for exceptional arrangements.',
      copy: 'A controlled path for residences, mobility, aviation, stays, assets and concierge requests — handled with discretion from first brief to final confirmation.',
      steps: [
        { title: 'Private Request', text: 'A direct request is received with destination, asset category, timing, preferences and operational constraints.' },
        { title: 'Curated Selection', text: 'The request is filtered through selected partners, verified availability and a refined shortlist.' },
        { title: 'Discreet Coordination', text: 'Terms, logistics, schedules and local execution are coordinated privately before confirmation.' },
        { title: 'Confirmation & Delivery', text: 'The arrangement is confirmed with clear next steps, controlled communication and premium handling.' },
        { title: 'Ongoing Support', text: 'Support remains available for changes, additional requests and cross-category coordination.' },
      ],
    },
    membership: {
      eyebrow: 'Goldener Pfau Membership',
      badge: 'Membership · Available now',
      title: 'A private membership for exceptional access.',
      intro: 'Goldener Pfau Membership gives clients priority access to our private network — real estate, mobility, yachts, aviation, stays and concierge — coordinated by a dedicated desk, with the same discretion and verified standard applied across every category on the platform.',
      disclaimer: 'Membership is a private access and concierge service — not an investment or financial product.',
      sceneLabel: 'Goldener Pfau Membership',
      sceneStrong: 'Priority access, dedicated coordination',
      sceneCopy: 'Available now · A personal desk for every request',
      summaryLabel: 'Goldener Pfau Membership',
      summaryStrong: 'Available now',
      summaryCopy: 'Access & service · Every category, one dedicated desk.',
      principles: [
        { title: 'Priority access', text: 'Members are prioritized across every category — from first inquiry to final confirmation.' },
        { title: 'Dedicated desk', text: 'A single point of contact coordinates each request personally, from brief to delivery.' },
        { title: 'Cross-category service', text: 'Real estate, mobility, yachts, aviation, stays and concierge — handled under one private membership.' },
      ],
    },
    gallery: {
      eyebrow: 'Visual story',
      title: 'Mobility, architecture and private life — in motion.',
      copy: 'An editorial visual rhythm: frames that move, breathe and unfold as you scroll, from private residences to open water.',
      metaLabel: 'Goldener Pfau',
      metaCopy: 'Mobility · Architecture · Lifestyle · Concierge',
      items: [
        { title: 'Private mobility', tag: 'Mobility' },
        { title: 'Architectural living', tag: 'Architecture' },
        { title: 'Nautical horizon', tag: 'Yachts' },
        { title: 'Aviation access', tag: 'Aviation' },
        { title: 'Quiet hospitality', tag: 'Stays' },
        { title: 'Curated arrivals', tag: 'Lifestyle' },
        { title: 'Private perspective', tag: 'Residences' },
        { title: 'Coastal expression', tag: 'Concierge' },
      ],
    },
    trust: {
      eyebrow: 'Trust & positioning',
      title: 'Built for clients who value privacy, structure and credible execution.',
      copy: 'The brand is designed around formal company presence, professional handling, controlled communication and cross-category premium service.',
      items: [
        { title: 'Registered company structure', text: 'Goldener Pfau operates through a formal European company framework.' },
        { title: 'Professional handling', text: 'Requests are managed through structured communication, documented steps and clear coordination.' },
        { title: 'Tailored assistance', text: 'Each case is evaluated individually instead of being pushed into a generic package.' },
        { title: 'Private network', text: 'Access is developed through selected operators, property contacts and specialist partners.' },
        { title: 'Discreet communication', text: 'Client information, routes, preferences and transaction details are handled privately.' },
        { title: 'Cross-category service', text: 'Travel, mobility, property, stays, assets and concierge can be coordinated from one private desk.' },
      ],
    },
    contact: {
      eyebrow: 'Direct contact',
      title: 'Private access, discreetly arranged.',
      copy: 'Share your destination, service and dates. Our desk will confirm available options, partner terms and next steps before you commit.',
      instagram: 'Follow on Instagram',
      email: 'Contact by email',
    },
    footer: {
      taglineDescriptor: 'Private luxury concierge, assets and travel.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      support: 'Support',
    },
    languageSwitcher: { ariaLabel: 'Select language' },
  },

  es: {
    nav: {
      services: 'Servicios',
      platform: 'Plataforma',
      membership: 'Membresía',
      contact: 'Contacto',
      privateAccess: 'Acceso Privado',
      homeAriaLabel: 'Inicio de Goldener Pfau',
      backToTopAriaLabel: 'Volver arriba',
    },
    hero: {
      taglineDescriptor: 'Coordinación privada de lujo',
      title: 'Acceso excepcional.',
      copy: 'Cada detalle, organizado para ti.',
      ctaPrimary: 'Iniciar una solicitud privada',
      ctaSecondary: 'Explorar Goldener Pfau',
      signalLabel: 'Despacho privado',
      signalStrong: 'Activos · Viajes · Estancias · Membresía',
      signalCopy: 'Acceso seleccionado. Coordinación controlada. Ejecución discreta.',
    },
    services: {
      eyebrow: 'Universo de servicios',
      title: 'Un único estándar privado para categorías premium.',
      copy: 'Cada servicio está estructurado como una capa de acceso: recepción discreta, opciones curadas, coordinación verificada y entrega refinada.',
      statusLive: 'Disponible ahora',
      statusSoon: 'Bajo solicitud',
      items: {
        'real-estate': {
          title: 'Bienes Raíces',
          description: 'Villas privadas, residencias y oportunidades inmobiliarias de grado inversión gestionadas con discreción.',
        },
        'private-cars': {
          title: 'Vehículos Privados',
          description: 'Alquileres premium, adquisiciones y coordinación de movilidad en destinos seleccionados.',
        },
        'yachts-boats': {
          title: 'Yates y Embarcaciones',
          description: 'Acceso costero, arreglos de yates y oportunidades náuticas a través de una red curada.',
        },
        'private-jets': {
          title: 'Jets Privados',
          description: 'Solicitudes de aviación coordinadas con operadores seleccionados y ejecución controlada.',
        },
        'hotels-stays': {
          title: 'Hoteles y Estancias',
          description: 'Estancias premium, villas privadas y arreglos de hospitalidad para negocios y ocio.',
        },
        concierge: {
          title: 'Concierge',
          description: 'Reservas a medida, experiencias y asistencia personal sin ruido operativo.',
        },
        membership: {
          title: 'Membresía',
          description: 'Acceso prioritario a todas las categorías, coordinado por un despacho dedicado.',
        },
        'global-assistance': {
          title: 'Asistencia Global',
          description: 'Coordinación transfronteriza para clientes que se mueven entre países, activos y compromisos.',
        },
      },
    },
    platform: {
      eyebrow: 'Plataforma privada',
      title: 'Tu mundo privado, conectado.',
      copy: 'Explora oportunidades seleccionadas, gestiona solicitudes y accede a tu membresía en un solo lugar.',
      features: ['Reservas', 'Catálogo privado', 'Solicitudes de concierge', 'Área de Membership', 'Acceso a activos', 'Historial de solicitudes'],
    },
    reach: {
      eyebrow: 'Alcance internacional',
      titleLine1: 'Alcance privado.',
      titleLine2: 'Orquestación global.',
      copy: 'Goldener Pfau conecta mercados seleccionados, relaciones de confianza y acceso premium a través de un único despacho internacional discreto.',
      markets: ['Europa', 'Oriente Medio', 'América', 'Red privada'],
      capabilities: ['Residencias', 'Aviación', 'Yates', 'Hoteles', 'Movilidad', 'Concierge', 'Acceso a activos', 'Eventos privados'],
      signatureStrong: 'Discreción · Acceso · Ejecución',
      signatureCopy: 'Mercados seleccionados · relaciones de confianza · coordinación premium',
    },
    process: {
      eyebrow: 'Acceso privado',
      title: 'Protocolo privado para arreglos excepcionales.',
      copy: 'Un camino controlado para residencias, movilidad, aviación, estancias, activos y solicitudes de concierge — gestionado con discreción desde el primer contacto hasta la confirmación final.',
      steps: [
        { title: 'Solicitud Privada', text: 'Se recibe una solicitud directa con destino, categoría de activo, plazos, preferencias y restricciones operativas.' },
        { title: 'Selección Curada', text: 'La solicitud se filtra a través de socios seleccionados, disponibilidad verificada y una lista reducida y refinada.' },
        { title: 'Coordinación Discreta', text: 'Los términos, la logística, los horarios y la ejecución local se coordinan de forma privada antes de la confirmación.' },
        { title: 'Confirmación y Entrega', text: 'El arreglo se confirma con próximos pasos claros, comunicación controlada y trato premium.' },
        { title: 'Soporte Continuo', text: 'El soporte permanece disponible para cambios, solicitudes adicionales y coordinación entre categorías.' },
      ],
    },
    membership: {
      eyebrow: 'Goldener Pfau Membership',
      badge: 'Membresía · Disponible ahora',
      title: 'Una membresía privada para un acceso excepcional.',
      intro: 'Goldener Pfau Membership ofrece a los clientes acceso prioritario a nuestra red privada — bienes raíces, movilidad, yates, aviación, estancias y concierge — coordinado por un despacho dedicado, con la misma discreción y el mismo estándar verificado aplicado en cada categoría de la plataforma.',
      disclaimer: 'Membership es un servicio privado de acceso y concierge — no es un producto de inversión ni financiero.',
      sceneLabel: 'Goldener Pfau Membership',
      sceneStrong: 'Acceso prioritario, coordinación dedicada',
      sceneCopy: 'Disponible ahora · Un despacho personal para cada solicitud',
      summaryLabel: 'Goldener Pfau Membership',
      summaryStrong: 'Disponible ahora',
      summaryCopy: 'Acceso y servicio · Cada categoría, un único despacho dedicado.',
      principles: [
        { title: 'Acceso prioritario', text: 'Los miembros tienen prioridad en cada categoría — desde la primera consulta hasta la confirmación final.' },
        { title: 'Despacho dedicado', text: 'Un único punto de contacto coordina cada solicitud de forma personal, desde el brief hasta la entrega.' },
        { title: 'Servicio entre categorías', text: 'Bienes raíces, movilidad, yates, aviación, estancias y concierge — gestionados bajo una única membresía privada.' },
      ],
    },
    gallery: {
      eyebrow: 'Relato visual',
      title: 'Movilidad, arquitectura y vida privada — en movimiento.',
      copy: 'Un ritmo visual editorial: fotogramas que se mueven, respiran y se revelan mientras te desplazas, desde residencias privadas hasta mar abierto.',
      metaLabel: 'Goldener Pfau',
      metaCopy: 'Movilidad · Arquitectura · Estilo de vida · Concierge',
      items: [
        { title: 'Movilidad privada', tag: 'Movilidad' },
        { title: 'Vida arquitectónica', tag: 'Arquitectura' },
        { title: 'Horizonte náutico', tag: 'Yates' },
        { title: 'Acceso a aviación', tag: 'Aviación' },
        { title: 'Hospitalidad silenciosa', tag: 'Estancias' },
        { title: 'Llegadas curadas', tag: 'Estilo de vida' },
        { title: 'Perspectiva privada', tag: 'Residencias' },
        { title: 'Expresión costera', tag: 'Concierge' },
      ],
    },
    trust: {
      eyebrow: 'Confianza y posicionamiento',
      title: 'Diseñado para clientes que valoran la privacidad, la estructura y la ejecución creíble.',
      copy: 'La marca está diseñada en torno a una presencia empresarial formal, trato profesional, comunicación controlada y servicio premium entre categorías.',
      items: [
        { title: 'Estructura empresarial registrada', text: 'Goldener Pfau opera a través de un marco empresarial europeo formal.' },
        { title: 'Trato profesional', text: 'Las solicitudes se gestionan mediante comunicación estructurada, pasos documentados y coordinación clara.' },
        { title: 'Asistencia a medida', text: 'Cada caso se evalúa individualmente en lugar de encajarlo en un paquete genérico.' },
        { title: 'Red privada', text: 'El acceso se desarrolla a través de operadores seleccionados, contactos inmobiliarios y socios especializados.' },
        { title: 'Comunicación discreta', text: 'La información del cliente, rutas, preferencias y datos de transacciones se gestionan de forma privada.' },
        { title: 'Servicio entre categorías', text: 'Viajes, movilidad, propiedades, estancias, activos y concierge pueden coordinarse desde un único despacho privado.' },
      ],
    },
    contact: {
      eyebrow: 'Contacto directo',
      title: 'Acceso privado, gestionado con discreción.',
      copy: 'Indica destino, servicio y fechas. Confirmaremos las opciones disponibles, las condiciones del proveedor y los siguientes pasos antes de tu compromiso.',
      instagram: 'Síguenos en Instagram',
      email: 'Contactar por correo electrónico',
    },
    footer: {
      taglineDescriptor: 'Concierge de lujo privado, activos y viajes.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
      support: 'Soporte',
    },
    languageSwitcher: { ariaLabel: 'Seleccionar idioma' },
  },

  fr: {
    nav: {
      services: 'Services',
      platform: 'Plateforme',
      membership: 'Adhésion',
      contact: 'Contact',
      privateAccess: 'Accès Privé',
      homeAriaLabel: 'Accueil Goldener Pfau',
      backToTopAriaLabel: 'Retour en haut',
    },
    hero: {
      taglineDescriptor: 'Coordination privée de luxe',
      title: 'Un accès exceptionnel.',
      copy: 'Chaque détail, pensé pour vous.',
      ctaPrimary: 'Faire une demande privée',
      ctaSecondary: 'Découvrir Goldener Pfau',
      signalLabel: 'Bureau privé',
      signalStrong: 'Actifs · Voyages · Séjours · Adhésion',
      signalCopy: 'Accès sélectionné. Coordination maîtrisée. Exécution discrète.',
    },
    services: {
      eyebrow: 'Univers de services',
      title: 'Un standard privé unique pour des catégories haut de gamme.',
      copy: "Chaque service est structuré comme une couche d'accès : prise en charge discrète, options sélectionnées, coordination vérifiée et livraison raffinée.",
      statusLive: 'Disponible maintenant',
      statusSoon: 'Sur demande',
      items: {
        'real-estate': {
          title: 'Immobilier',
          description: "Villas privées, résidences et opportunités immobilières de qualité investissement, gérées avec discrétion.",
        },
        'private-cars': {
          title: 'Voitures Privées',
          description: 'Locations premium, acquisitions et coordination de mobilité dans des destinations sélectionnées.',
        },
        'yachts-boats': {
          title: 'Yachts & Bateaux',
          description: 'Accès côtier, arrangements de yachts et opportunités nautiques via un réseau sélectionné.',
        },
        'private-jets': {
          title: 'Jets Privés',
          description: 'Demandes aériennes coordonnées avec des opérateurs sélectionnés et une exécution maîtrisée.',
        },
        'hotels-stays': {
          title: 'Hôtels & Séjours',
          description: "Séjours haut de gamme, villas privées et arrangements d'accueil pour affaires et loisirs.",
        },
        concierge: {
          title: 'Conciergerie',
          description: 'Réservations sur mesure, expériences et assistance personnelle sans bruit opérationnel.',
        },
        membership: {
          title: 'Adhésion',
          description: "Accès prioritaire à chaque catégorie, coordonné par un bureau dédié.",
        },
        'global-assistance': {
          title: 'Assistance Mondiale',
          description: 'Coordination transfrontalière pour les clients se déplaçant entre pays, actifs et rendez-vous.',
        },
      },
    },
    platform: {
      eyebrow: 'Plateforme privée',
      title: 'Votre univers privé, connecté.',
      copy: 'Découvrez une sélection d’opportunités, gérez vos demandes et accédez à votre adhésion au même endroit.',
      features: ['Réservations', 'Catalogue privé', 'Demandes de conciergerie', 'Espace Membership', 'Accès aux actifs', 'Historique des demandes'],
    },
    reach: {
      eyebrow: 'Portée internationale',
      titleLine1: 'Portée privée.',
      titleLine2: 'Orchestration mondiale.',
      copy: "Goldener Pfau relie des marchés sélectionnés, des relations de confiance et un accès haut de gamme via un bureau international discret unique.",
      markets: ['Europe', 'Moyen-Orient', 'Amériques', 'Réseau privé'],
      capabilities: ['Résidences', 'Aviation', 'Yachts', 'Hôtels', 'Mobilité', 'Conciergerie', 'Accès aux actifs', 'Événements privés'],
      signatureStrong: 'Discrétion · Accès · Exécution',
      signatureCopy: 'Marchés sélectionnés · relations de confiance · coordination haut de gamme',
    },
    process: {
      eyebrow: 'Accès privé',
      title: 'Protocole privé pour des arrangements exceptionnels.',
      copy: "Un parcours maîtrisé pour les résidences, la mobilité, l'aviation, les séjours, les actifs et les demandes de conciergerie — géré avec discrétion, du premier brief à la confirmation finale.",
      steps: [
        { title: 'Demande Privée', text: 'Une demande directe est reçue avec la destination, la catégorie d\'actif, le calendrier, les préférences et les contraintes opérationnelles.' },
        { title: 'Sélection Ciblée', text: 'La demande est filtrée à travers des partenaires sélectionnés, une disponibilité vérifiée et une liste restreinte affinée.' },
        { title: 'Coordination Discrète', text: 'Les conditions, la logistique, les horaires et l\'exécution locale sont coordonnés en privé avant confirmation.' },
        { title: 'Confirmation & Livraison', text: 'L\'arrangement est confirmé avec des prochaines étapes claires, une communication maîtrisée et un traitement haut de gamme.' },
        { title: 'Accompagnement Continu', text: 'Un accompagnement reste disponible pour les modifications, les demandes supplémentaires et la coordination entre catégories.' },
      ],
    },
    membership: {
      eyebrow: 'Goldener Pfau Membership',
      badge: 'Adhésion · Disponible dès maintenant',
      title: 'Une adhésion privée pour un accès exceptionnel.',
      intro: "Goldener Pfau Membership donne aux clients un accès prioritaire à notre réseau privé — immobilier, mobilité, yachts, aviation, séjours et conciergerie — coordonné par un bureau dédié, avec la même discrétion et le même niveau d'exigence vérifié appliqués à chaque catégorie de la plateforme.",
      disclaimer: "Membership est un service privé d'accès et de conciergerie — pas un produit d'investissement ou financier.",
      sceneLabel: 'Goldener Pfau Membership',
      sceneStrong: 'Accès prioritaire, coordination dédiée',
      sceneCopy: "Disponible dès maintenant · Un bureau personnel pour chaque demande",
      summaryLabel: 'Goldener Pfau Membership',
      summaryStrong: 'Disponible dès maintenant',
      summaryCopy: 'Accès & service · Chaque catégorie, un seul bureau dédié.',
      principles: [
        { title: 'Accès prioritaire', text: "Les membres sont prioritaires dans chaque catégorie — de la première demande à la confirmation finale." },
        { title: 'Bureau dédié', text: "Un interlocuteur unique coordonne chaque demande personnellement, du brief à la livraison." },
        { title: 'Service transversal', text: "Immobilier, mobilité, yachts, aviation, séjours et conciergerie — gérés au sein d'une seule adhésion privée." },
      ],
    },
    gallery: {
      eyebrow: 'Récit visuel',
      title: 'Mobilité, architecture et vie privée — en mouvement.',
      copy: "Un rythme visuel éditorial : des images qui bougent, respirent et se révèlent au fil du défilement, des résidences privées jusqu'au grand large.",
      metaLabel: 'Goldener Pfau',
      metaCopy: 'Mobilité · Architecture · Style de vie · Conciergerie',
      items: [
        { title: 'Mobilité privée', tag: 'Mobilité' },
        { title: 'Vie architecturale', tag: 'Architecture' },
        { title: 'Horizon nautique', tag: 'Yachts' },
        { title: "Accès à l'aviation", tag: 'Aviation' },
        { title: 'Hospitalité discrète', tag: 'Séjours' },
        { title: 'Arrivées sélectionnées', tag: 'Style de vie' },
        { title: 'Perspective privée', tag: 'Résidences' },
        { title: 'Expression côtière', tag: 'Conciergerie' },
      ],
    },
    trust: {
      eyebrow: 'Confiance & positionnement',
      title: 'Conçu pour les clients qui valorisent la confidentialité, la structure et une exécution crédible.',
      copy: "La marque est conçue autour d'une présence d'entreprise formelle, d'un traitement professionnel, d'une communication maîtrisée et d'un service haut de gamme transcatégories.",
      items: [
        { title: "Structure d'entreprise enregistrée", text: 'Goldener Pfau opère à travers un cadre d\'entreprise européen formel.' },
        { title: 'Traitement professionnel', text: 'Les demandes sont gérées via une communication structurée, des étapes documentées et une coordination claire.' },
        { title: 'Assistance sur mesure', text: 'Chaque cas est évalué individuellement plutôt que forcé dans un forfait générique.' },
        { title: 'Réseau privé', text: "L'accès se développe via des opérateurs sélectionnés, des contacts immobiliers et des partenaires spécialisés." },
        { title: 'Communication discrète', text: 'Les informations client, itinéraires, préférences et données de transaction sont traitées en privé.' },
        { title: 'Service transcatégories', text: "Voyages, mobilité, propriété, séjours, actifs et conciergerie peuvent être coordonnés depuis un seul bureau privé." },
      ],
    },
    contact: {
      eyebrow: 'Contact direct',
      title: 'Accès privé, organisé avec discrétion.',
      copy: 'Indiquez votre destination, le service et les dates. Nous confirmerons les options disponibles, les conditions du prestataire et les prochaines étapes avant votre engagement.',
      instagram: 'Suivre sur Instagram',
      email: 'Contacter par e-mail',
    },
    footer: {
      taglineDescriptor: 'Conciergerie de luxe privée, actifs et voyages.',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
      support: 'Assistance',
    },
    languageSwitcher: { ariaLabel: 'Choisir la langue' },
  },

  de: {
    nav: {
      services: 'Leistungen',
      platform: 'Plattform',
      membership: 'Mitgliedschaft',
      contact: 'Kontakt',
      privateAccess: 'Privater Zugang',
      homeAriaLabel: 'Goldener Pfau Startseite',
      backToTopAriaLabel: 'Nach oben',
    },
    hero: {
      taglineDescriptor: 'Private Luxus-Koordination',
      title: 'Außergewöhnlicher Zugang.',
      copy: 'Jedes Detail, persönlich für Sie arrangiert.',
      ctaPrimary: 'Private Anfrage starten',
      ctaSecondary: 'Goldener Pfau entdecken',
      signalLabel: 'Privates Büro',
      signalStrong: 'Vermögenswerte · Reisen · Aufenthalte · Mitgliedschaft',
      signalCopy: 'Ausgewählter Zugang. Kontrollierte Koordination. Diskrete Umsetzung.',
    },
    services: {
      eyebrow: 'Leistungsuniversum',
      title: 'Ein einheitlicher privater Standard über Premium-Kategorien hinweg.',
      copy: 'Jede Leistung ist als Zugangsebene strukturiert: diskrete Aufnahme, kuratierte Optionen, verifizierte Koordination und erlesene Umsetzung.',
      statusLive: 'Jetzt verfügbar',
      statusSoon: 'Auf Anfrage',
      items: {
        'real-estate': {
          title: 'Immobilien',
          description: 'Private Villen, Residenzen und erstklassige Anlageimmobilien, diskret betreut.',
        },
        'private-cars': {
          title: 'Privatfahrzeuge',
          description: 'Premium-Vermietungen, Ankäufe und Mobilitätskoordination in ausgewählten Destinationen.',
        },
        'yachts-boats': {
          title: 'Yachten & Boote',
          description: 'Küstenzugang, Yacht-Arrangements und nautische Möglichkeiten über ein kuratiertes Netzwerk.',
        },
        'private-jets': {
          title: 'Privatjets',
          description: 'Luftfahrtanfragen, koordiniert über ausgewählte Betreiber mit kontrollierter Umsetzung.',
        },
        'hotels-stays': {
          title: 'Hotels & Aufenthalte',
          description: 'Premium-Aufenthalte, private Villen und Gastgewerbe-Arrangements für Geschäft und Freizeit.',
        },
        concierge: {
          title: 'Concierge',
          description: 'Maßgeschneiderte Reservierungen, Erlebnisse und persönliche Assistenz ohne operativen Aufwand.',
        },
        membership: {
          title: 'Mitgliedschaft',
          description: 'Priorisierter Zugang zu jeder Kategorie, koordiniert über ein dediziertes Desk.',
        },
        'global-assistance': {
          title: 'Globale Unterstützung',
          description: 'Grenzüberschreitende Koordination für Kunden zwischen Ländern, Vermögenswerten und Terminen.',
        },
      },
    },
    platform: {
      eyebrow: 'Private Plattform',
      title: 'Ihre private Welt, vernetzt.',
      copy: 'Entdecken Sie ausgewählte Angebote, verwalten Sie Anfragen und greifen Sie auf Ihre Mitgliedschaft zu.',
      features: ['Buchungen', 'Privater Katalog', 'Concierge-Anfragen', 'Membership-Bereich', 'Vermögenszugang', 'Anfrageverlauf'],
    },
    reach: {
      eyebrow: 'Internationale Reichweite',
      titleLine1: 'Private Reichweite.',
      titleLine2: 'Globale Orchestrierung.',
      copy: 'Goldener Pfau verbindet ausgewählte Märkte, vertrauensvolle Beziehungen und Premium-Zugang über ein diskretes internationales Büro.',
      markets: ['Europa', 'Naher Osten', 'Amerika', 'Privates Netzwerk'],
      capabilities: ['Residenzen', 'Luftfahrt', 'Yachten', 'Hotels', 'Mobilität', 'Concierge', 'Vermögenszugang', 'Private Veranstaltungen'],
      signatureStrong: 'Diskretion · Zugang · Umsetzung',
      signatureCopy: 'Ausgewählte Märkte · vertrauensvolle Beziehungen · Premium-Koordination',
    },
    process: {
      eyebrow: 'Privater Zugang',
      title: 'Privates Protokoll für außergewöhnliche Arrangements.',
      copy: 'Ein kontrollierter Weg für Residenzen, Mobilität, Luftfahrt, Aufenthalte, Vermögenswerte und Concierge-Anfragen — diskret betreut vom ersten Briefing bis zur endgültigen Bestätigung.',
      steps: [
        { title: 'Private Anfrage', text: 'Eine direkte Anfrage wird mit Zielort, Vermögenskategorie, Zeitplan, Präferenzen und operativen Rahmenbedingungen entgegengenommen.' },
        { title: 'Kuratierte Auswahl', text: 'Die Anfrage wird über ausgewählte Partner, verifizierte Verfügbarkeit und eine verfeinerte Shortlist gefiltert.' },
        { title: 'Diskrete Koordination', text: 'Konditionen, Logistik, Zeitpläne und lokale Umsetzung werden vor der Bestätigung privat koordiniert.' },
        { title: 'Bestätigung & Umsetzung', text: 'Das Arrangement wird mit klaren nächsten Schritten, kontrollierter Kommunikation und erstklassiger Betreuung bestätigt.' },
        { title: 'Laufende Unterstützung', text: 'Unterstützung bleibt für Änderungen, zusätzliche Anfragen und kategorieübergreifende Koordination verfügbar.' },
      ],
    },
    membership: {
      eyebrow: 'Goldener Pfau Membership',
      badge: 'Mitgliedschaft · Ab sofort verfügbar',
      title: 'Eine private Mitgliedschaft für außergewöhnlichen Zugang.',
      intro: 'Goldener Pfau Membership verschafft Kunden priorisierten Zugang zu unserem privaten Netzwerk — Immobilien, Mobilität, Yachten, Luftfahrt, Aufenthalte und Concierge —, koordiniert über ein dediziertes Desk, mit derselben Diskretion und demselben geprüften Standard, der in jeder Kategorie der Plattform gilt.',
      disclaimer: 'Membership ist ein privater Zugangs- und Concierge-Service — kein Investment- oder Finanzprodukt.',
      sceneLabel: 'Goldener Pfau Membership',
      sceneStrong: 'Priorisierter Zugang, dedizierte Koordination',
      sceneCopy: 'Ab sofort verfügbar · Ein persönliches Desk für jede Anfrage',
      summaryLabel: 'Goldener Pfau Membership',
      summaryStrong: 'Ab sofort verfügbar',
      summaryCopy: 'Zugang & Service · Jede Kategorie, ein persönlicher Ansprechpartner.',
      principles: [
        { title: 'Priorisierter Zugang', text: 'Mitglieder werden in jeder Kategorie priorisiert — von der ersten Anfrage bis zur finalen Bestätigung.' },
        { title: 'Dediziertes Desk', text: 'Ein einziger Ansprechpartner koordiniert jede Anfrage persönlich, vom Briefing bis zur Umsetzung.' },
        { title: 'Kategorieübergreifender Service', text: 'Immobilien, Mobilität, Yachten, Luftfahrt, Aufenthalte und Concierge — verwaltet unter einer privaten Mitgliedschaft.' },
      ],
    },
    gallery: {
      eyebrow: 'Visuelle Erzählung',
      title: 'Mobilität, Architektur und privates Leben — in Bewegung.',
      copy: 'Ein redaktioneller visueller Rhythmus: Bilder, die sich bewegen, atmen und sich beim Scrollen entfalten — von privaten Residenzen bis aufs offene Wasser.',
      metaLabel: 'Goldener Pfau',
      metaCopy: 'Mobilität · Architektur · Lebensstil · Concierge',
      items: [
        { title: 'Private Mobilität', tag: 'Mobilität' },
        { title: 'Architektonisches Leben', tag: 'Architektur' },
        { title: 'Nautischer Horizont', tag: 'Yachten' },
        { title: 'Luftfahrtzugang', tag: 'Luftfahrt' },
        { title: 'Stille Gastfreundschaft', tag: 'Aufenthalte' },
        { title: 'Kuratierte Ankünfte', tag: 'Lebensstil' },
        { title: 'Private Perspektive', tag: 'Residenzen' },
        { title: 'Küstenausdruck', tag: 'Concierge' },
      ],
    },
    trust: {
      eyebrow: 'Vertrauen & Positionierung',
      title: 'Konzipiert für Kunden, die Privatsphäre, Struktur und glaubwürdige Umsetzung schätzen.',
      copy: 'Die Marke ist um formelle Unternehmenspräsenz, professionelle Betreuung, kontrollierte Kommunikation und kategorieübergreifenden Premium-Service herum aufgebaut.',
      items: [
        { title: 'Registrierte Unternehmensstruktur', text: 'Goldener Pfau agiert über einen formellen europäischen Unternehmensrahmen.' },
        { title: 'Professionelle Betreuung', text: 'Anfragen werden über strukturierte Kommunikation, dokumentierte Schritte und klare Koordination verwaltet.' },
        { title: 'Maßgeschneiderte Betreuung', text: 'Jeder Fall wird individuell bewertet, anstatt in ein generisches Paket gedrängt zu werden.' },
        { title: 'Privates Netzwerk', text: 'Der Zugang wird über ausgewählte Betreiber, Immobilienkontakte und Fachpartner entwickelt.' },
        { title: 'Diskrete Kommunikation', text: 'Kundendaten, Routen, Präferenzen und Transaktionsdetails werden privat behandelt.' },
        { title: 'Kategorieübergreifender Service', text: 'Reisen, Mobilität, Immobilien, Aufenthalte, Vermögenswerte und Concierge können von einem privaten Büro aus koordiniert werden.' },
      ],
    },
    contact: {
      eyebrow: 'Direkter Kontakt',
      title: 'Privater Zugang, diskret organisiert.',
      copy: 'Nennen Sie Reiseziel, Leistung und Termine. Wir bestätigen verfügbare Optionen, Partnerbedingungen und nächste Schritte, bevor Sie sich entscheiden.',
      instagram: 'Auf Instagram folgen',
      email: 'Per E-Mail kontaktieren',
    },
    footer: {
      taglineDescriptor: 'Private Luxus-Concierge, Vermögenswerte und Reisen.',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      support: 'Support',
    },
    languageSwitcher: { ariaLabel: 'Sprache auswählen' },
  },

  ru: {
    nav: {
      services: 'Услуги',
      platform: 'Платформа',
      membership: 'Членство',
      contact: 'Контакты',
      privateAccess: 'Частный доступ',
      homeAriaLabel: 'Goldener Pfau — главная',
      backToTopAriaLabel: 'Наверх',
    },
    hero: {
      taglineDescriptor: 'Частная координация класса люкс',
      title: 'Исключительный доступ.',
      copy: 'Каждая деталь — лично для вас.',
      ctaPrimary: 'Оформить частный запрос',
      ctaSecondary: 'Открыть Goldener Pfau',
      signalLabel: 'Частное бюро',
      signalStrong: 'Активы · Путешествия · Проживание · Членство',
      signalCopy: 'Избранный доступ. Контролируемая координация. Тихое исполнение.',
    },
    services: {
      eyebrow: 'Вселенная услуг',
      title: 'Единый частный стандарт для премиальных категорий.',
      copy: 'Каждая услуга структурирована как уровень доступа: конфиденциальный приём заявки, отобранные варианты, проверенная координация и безупречное исполнение.',
      statusLive: 'Доступно сейчас',
      statusSoon: 'По запросу',
      items: {
        'real-estate': {
          title: 'Недвижимость',
          description: 'Частные виллы, резиденции и инвестиционная недвижимость — с полной конфиденциальностью.',
        },
        'private-cars': {
          title: 'Частные автомобили',
          description: 'Премиальная аренда, приобретение и координация мобильности в избранных направлениях.',
        },
        'yachts-boats': {
          title: 'Яхты и катера',
          description: 'Доступ к побережью, организация яхт и морские возможности через проверенную сеть партнёров.',
        },
        'private-jets': {
          title: 'Частные самолёты',
          description: 'Авиазапросы, координируемые через отобранных операторов с полным контролем исполнения.',
        },
        'hotels-stays': {
          title: 'Отели и проживание',
          description: 'Премиальное проживание, частные виллы и организация приёма для бизнеса и отдыха.',
        },
        concierge: {
          title: 'Консьерж',
          description: 'Индивидуальные бронирования, впечатления и личная помощь без операционного шума.',
        },
        membership: {
          title: 'Членство',
          description: 'Приоритетный доступ ко всем категориям, координируемый выделенным деском.',
        },
        'global-assistance': {
          title: 'Глобальная поддержка',
          description: 'Трансграничная координация для клиентов, перемещающихся между странами, активами и встречами.',
        },
      },
    },
    platform: {
      eyebrow: 'Частная платформа',
      title: 'Ваш частный мир — на связи.',
      copy: 'Выбирайте предложения, управляйте запросами и пользуйтесь привилегиями членства в одном месте.',
      features: ['Бронирования', 'Частный каталог', 'Консьерж-запросы', 'Раздел Membership', 'Доступ к активам', 'История запросов'],
    },
    reach: {
      eyebrow: 'Международное присутствие',
      titleLine1: 'Частный охват.',
      titleLine2: 'Глобальная координация.',
      copy: 'Goldener Pfau объединяет избранные рынки, доверенные отношения и премиальный доступ через единое дискретное международное бюро.',
      markets: ['Европа', 'Ближний Восток', 'Америка', 'Частная сеть'],
      capabilities: ['Резиденции', 'Авиация', 'Яхты', 'Отели', 'Мобильность', 'Консьерж', 'Доступ к активам', 'Частные мероприятия'],
      signatureStrong: 'Конфиденциальность · Доступ · Исполнение',
      signatureCopy: 'Избранные рынки · доверенные отношения · премиальная координация',
    },
    process: {
      eyebrow: 'Частный доступ',
      title: 'Частный протокол для исключительных организаций.',
      copy: 'Контролируемый путь для резиденций, мобильности, авиации, проживания, активов и консьерж-запросов — с полной конфиденциальностью от первого брифа до окончательного подтверждения.',
      steps: [
        { title: 'Частный запрос', text: 'Принимается прямой запрос с указанием направления, категории актива, сроков, предпочтений и операционных ограничений.' },
        { title: 'Отобранный вариант', text: 'Запрос фильтруется через отобранных партнёров, проверенную доступность и уточнённый короткий список.' },
        { title: 'Конфиденциальная координация', text: 'Условия, логистика, график и локальное исполнение согласовываются в частном порядке до подтверждения.' },
        { title: 'Подтверждение и исполнение', text: 'Договорённость подтверждается с чёткими следующими шагами, контролируемой коммуникацией и премиальным сервисом.' },
        { title: 'Постоянная поддержка', text: 'Поддержка остаётся доступной для изменений, дополнительных запросов и координации между категориями.' },
      ],
    },
    membership: {
      eyebrow: 'Goldener Pfau Membership',
      badge: 'Членство · Доступно уже сейчас',
      title: 'Частное членство для исключительного доступа.',
      intro: 'Goldener Pfau Membership даёт клиентам приоритетный доступ к нашей частной сети — недвижимость, мобильность, яхты, авиация, проживание и консьерж-сервис — координируемый выделенным деском, с той же конфиденциальностью и проверенным стандартом, что применяются во всех категориях платформы.',
      disclaimer: 'Membership — это частный сервис доступа и консьерж-услуг, а не инвестиционный или финансовый продукт.',
      sceneLabel: 'Goldener Pfau Membership',
      sceneStrong: 'Приоритетный доступ, выделенная координация',
      sceneCopy: 'Доступно уже сейчас · Персональный деск для каждого запроса',
      summaryLabel: 'Goldener Pfau Membership',
      summaryStrong: 'Доступно уже сейчас',
      summaryCopy: 'Доступ и сервис · Каждая категория — один персональный деск.',
      principles: [
        { title: 'Приоритетный доступ', text: 'Участники имеют приоритет в каждой категории — от первого запроса до финального подтверждения.' },
        { title: 'Выделенный деск', text: 'Единая точка контакта лично координирует каждый запрос, от брифа до исполнения.' },
        { title: 'Сервис между категориями', text: 'Недвижимость, мобильность, яхты, авиация, проживание и консьерж-сервис — в рамках единого частного членства.' },
      ],
    },
    gallery: {
      eyebrow: 'Визуальная история',
      title: 'Мобильность, архитектура и частная жизнь — в движении.',
      copy: 'Редакционный визуальный ритм: кадры, которые движутся, дышат и раскрываются по мере прокрутки — от частных резиденций до открытой воды.',
      metaLabel: 'Goldener Pfau',
      metaCopy: 'Мобильность · Архитектура · Стиль жизни · Консьерж',
      items: [
        { title: 'Частная мобильность', tag: 'Мобильность' },
        { title: 'Архитектурная жизнь', tag: 'Архитектура' },
        { title: 'Морской горизонт', tag: 'Яхты' },
        { title: 'Доступ к авиации', tag: 'Авиация' },
        { title: 'Тихое гостеприимство', tag: 'Проживание' },
        { title: 'Отобранные прибытия', tag: 'Стиль жизни' },
        { title: 'Частная перспектива', tag: 'Резиденции' },
        { title: 'Прибрежное выражение', tag: 'Консьерж' },
      ],
    },
    trust: {
      eyebrow: 'Доверие и позиционирование',
      title: 'Создано для клиентов, ценящих конфиденциальность, структуру и надёжное исполнение.',
      copy: 'Бренд построен вокруг формального корпоративного присутствия, профессионального сервиса, контролируемой коммуникации и премиального обслуживания по всем категориям.',
      items: [
        { title: 'Зарегистрированная корпоративная структура', text: 'Goldener Pfau действует в рамках официальной европейской корпоративной структуры.' },
        { title: 'Профессиональный сервис', text: 'Запросы обрабатываются через структурированную коммуникацию, документированные этапы и чёткую координацию.' },
        { title: 'Индивидуальный подход', text: 'Каждый случай оценивается индивидуально, а не подгоняется под общий пакет.' },
        { title: 'Частная сеть', text: 'Доступ развивается через отобранных операторов, контакты в сфере недвижимости и специализированных партнёров.' },
        { title: 'Конфиденциальная коммуникация', text: 'Информация о клиенте, маршруты, предпочтения и детали сделок обрабатываются приватно.' },
        { title: 'Межкатегорийный сервис', text: 'Путешествия, мобильность, недвижимость, проживание, активы и консьерж-услуги могут координироваться из единого частного бюро.' },
      ],
    },
    contact: {
      eyebrow: 'Прямой контакт',
      title: 'Частный доступ, организованный конфиденциально.',
      copy: 'Укажите направление, услугу и даты. Мы подтвердим доступные варианты, условия партнёра и дальнейшие шаги до принятия вами обязательств.',
      instagram: 'Подписаться в Instagram',
      email: 'Связаться по электронной почте',
    },
    footer: {
      taglineDescriptor: 'Частный консьерж класса люкс, активы и путешествия.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      support: 'Поддержка',
    },
    languageSwitcher: { ariaLabel: 'Выбрать язык' },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}
