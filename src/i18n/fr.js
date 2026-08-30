/**
 * French copy. Mirror every key in en.js — the two files are read side by side.
 * `**gras**` inside a string is rendered as <strong> by the Rich helper.
 */
const fr = {
  meta: {
    title: 'Françoise Lapetite — Portfolio',
    description:
      "Françoise Lapetite, product manager et ingénieure à Paris. Fondatrice de Fran's Guide, je conçois et publie des produits iOS de bout en bout.",
  },

  nav: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    experience: 'Expérience',
    interests: 'Intérêts',
    contact: 'Contact',
    homeAria: 'Françoise Lapetite, accueil',
    languageLabel: 'Langue',
    themeToDark: 'Passer en mode sombre',
    themeToLight: 'Passer en mode clair',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menuLabel: 'Menu principal',
  },

  home: {
    eyebrow: 'Paris, France',
    role: 'Product Manager & Ingénieure',
    bio:
      "Je conçois des produits de bout en bout : de la découverte client et du prototypage jusqu'à l'architecture, au lancement et aux analytics qui disent si tout cela a vraiment fonctionné. Ingénieure en informatique de formation, j'ai fait le lien entre la technique et le métier chez Accenture et à La Banque Postale, avant de fonder Fran's Guide et de publier ma propre application iOS sur l'App Store.",
    downloadCv: 'Télécharger le CV',
    viewWork: 'Voir mes projets',
    facts: [
      { label: 'Actuellement', value: "Fondatrice, Fran's Guide" },
      { label: 'Auparavant', value: 'La Banque Postale, Accenture' },
      { label: 'Langues', value: 'FR · PT · EN · ES' },
    ],
    elsewhereLabel: 'Ailleurs',
  },

  about: {
    eyebrow: 'Profil',
    title: 'À propos',
    statement:
      "Une ingénieure orientée produit, qui préfère résoudre le problème d'un client que défendre une spécification.",
    bio: [
      "Je conçois des produits de bout en bout. Cela veut dire passer du temps avec les personnes qui vont s'en servir avant d'écrire la moindre ligne de code, décider ce qu'il ne faut surtout pas construire, dessiner l'architecture, livrer, puis lire les analytics avec assez d'honnêteté pour changer de cap. En 2025, j'ai fondé Fran's Guide et mené seule une application iOS de l'idée jusqu'à l'App Store : découverte produit, design, monétisation et analytics.",
      "Avant cela, j'ai passé quatre ans dans de grandes organisations. Chez Accenture, j'ai accompagné des clients du Fortune 500 sur leurs projets de transformation digitale, en traduisant leurs irritants en solutions techniques et en faisant le pont entre les équipes d'ingénierie et les métiers. À La Banque Postale, je suis passée à la gouvernance cybersécurité, où le vrai sujet s'est avéré être l'adoption : comprendre pourquoi les outils n'étaient pas utilisés, et réécrire l'approche jusqu'à ce qu'ils le soient.",
      "Ma spécialisation de diplôme était la cybersécurité, et cette formation continue de structurer ma façon de penser. Si SéanceNote fonctionne en local-first, c'est précisément parce que je sais ce qu'il advient des données qui quittent un appareil. Mais c'est le produit que je veux continuer à construire : comprendre les utilisateurs, trancher sur ce qui compte, et livrer.",
    ],
    skillsTitle: 'Compétences',
    skillGroups: [
      {
        label: 'Produit & analytics',
        value:
          "Découverte client et entretiens utilisateurs, priorisation des fonctionnalités, roadmap et planification des versions, analyse de KPI, App Store Connect & Analytics, Figma",
      },
      {
        label: 'Ingénierie',
        value: 'Python, React, SwiftUI, SQL, Bash, C, C++, C#, Git, Terraform, Vim',
      },
      {
        label: 'Systèmes métier',
        value: 'Salesforce, SAP, plateformes CRM et SRM',
      },
      {
        label: 'Socle cybersécurité',
        value:
          "Cadres de gouvernance, rédaction de politiques, gestion du risque et architecture privacy-first",
      },
    ],
    educationTitle: 'Formation',
    educationYears: '2019 à 2024',
    schoolName: "EPITA, École d'ingénieurs en informatique, Paris",
    degree:
      "Diplôme d'ingénieure en informatique, spécialisation Cybersécurité, Systèmes et Génie logiciel.",
    strengthsTitle: 'Points forts',
    strengths: [
      'Empathie client et discovery',
      'Innovation produit',
      'Alignement des parties prenantes',
      'Architecture',
      'Coordination transverse',
      'Résolution de problèmes',
      'Vulgarisation technique',
      "Animation d'équipe",
      "Culture de collaboration",
      'Apprentissage rapide',
    ],
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'Langue maternelle' },
      { name: 'Portugais', level: 'Langue maternelle' },
      { name: 'Anglais', level: 'Courant' },
      { name: 'Espagnol', level: 'Courant' },
    ],
  },

  projects: {
    eyebrow: 'Portfolio',
    title: 'Projets',
    lede:
      "Produits iOS indépendants et travaux d'ingénierie en infrastructure cloud et en sécurité.",
    featuredTitle: 'Travaux sélectionnés',
    engineeringTitle: "Projets d'ingénierie",
    inDevelopment: 'En développement',
    viewProject: 'Voir le projet',
    featured: [
      {
        title: 'SéanceNote',
        description:
          "Une application iOS pour rédiger des comptes rendus de séances et de réunions, traités entièrement sur l'appareil pour préserver la confidentialité. Les modèles s'adaptent en longueur et en structure au métier de l'utilisateur : santé, droit, conseil et recherche.",
        linkLabel: 'App Store',
      },
      {
        title: 'Fox',
        description:
          "Un widget iOS d'écran d'accueil qui associe une liste de tâches à un compagnon illustré dont l'humeur suit l'avancement, pour encourager à aller au bout de ce qu'on a commencé.",
      },
      {
        title: 'Happello',
        description:
          "Une application iOS de rappels pour l'administratif personnel récurrent que l'on oublie facilement : bilans annuels, prises de sang, renouvellements de documents, avec un module dédié aux jeunes parents pour les vaccins, les rendez-vous et les papiers.",
      },
    ],
    engineering: [
      {
        title: 'Cloud-Outscale',
        description: "Déploiement d'infrastructure cloud avec Terraform et Outscale.",
      },
      {
        title: '3DExperience SIEM',
        description:
          "Gestion des informations et des événements de sécurité pour 3DExperience Cloud.",
      },
      {
        title: 'LMNTRIX',
        description: 'Labyrinthe multijoueur en 3D développé avec C#, Unity et Photon Engine.',
      },
      {
        title: 'WiFi Analyzer & Logger',
        description: "Outil d'analyse et de journalisation des environnements réseau sans fil.",
      },
    ],
  },

  experience: {
    eyebrow: 'Parcours',
    title: 'Expérience',
    lede:
      "Du conseil en entreprise à la gouvernance cybersécurité, et la conception et le lancement de mon propre produit.",
    entries: [
      {
        position: 'Fondatrice & Product Lead',
        location: 'Paris, France',
        duration: "2025 à aujourd'hui",
        points: [
          "Conception et lancement d'une application iOS offrant un accompagnement de voyage 24h/24 propulsé par l'IA, en portant tout le cycle de vie produit : découverte client, priorisation des fonctionnalités, architecture technique, distribution sur l'App Store et analytics utilisateurs.",
          "Validation du product-market fit par des entretiens clients directs et l'exploration de partenariats B2B, avec une instrumentation des métriques d'acquisition, d'engagement et de monétisation.",
          "Intégration d'un assistant IA dans l'expérience produit, en équilibrant capacité technique, besoins utilisateurs et viabilité économique.",
          "Extension du produit avec des visites guidées privées et des séances photo, en prenant en charge la marque, la présence web et les paiements via Stripe.",
        ],
      },
      {
        position: 'Gouvernance Cybersécurité & Customer Success',
        location: 'Paris, France',
        duration: '2024 à 2025',
        points: [
          "Accélération de l'adoption des outils de sécurité internes en partant des besoins utilisateurs et en traduisant les exigences techniques en langage métier, avec une adoption en hausse de 40 %.",
          "Coordination de l'alignement entre les équipes IT et métier sur la gouvernance sécurité, en facilitant la communication transverse autour d'objectifs communs.",
          "Contribution au reporting à destination du comité exécutif, en rendant les enseignements sécurité clairs, actionnables et exploitables pour des décisions de haut niveau.",
        ],
      },
      {
        position: 'Analyste Développement Applicatif',
        location: 'Paris, France',
        duration: '2022 à 2024',
        points: [
          "Accompagnement de clients du Fortune 500 sur leurs initiatives de transformation digitale, en traduisant leurs irritants en solutions techniques.",
          "Rôle de pont entre les équipes d'ingénierie et les métiers, en vulgarisant les concepts techniques auprès de publics non techniques et en alignant les priorités sur ce qui était réaliste.",
          "Identification des écarts de compétences techniques au sein des équipes de delivery et co-conception de solutions adaptées aux besoins métier.",
          "Appui à la conduite du changement et à la coordination d'équipes, pour aider des groupes transverses à travailler ensemble pendant les programmes de transformation.",
        ],
      },
      {
        position: 'Business Analyst, Achats & Ventes',
        location: 'Nanterre, France',
        duration: 'Juin à déc. 2021',
        points: [
          "Amélioration des processus CRM et SRM avec les équipes achats et ventes, augmentant la visibilité et la justesse des décisions sur les réseaux fournisseurs et clients.",
          "Utilisation du reporting KPI et de l'analyse de données pour éclairer les décisions stratégiques et faire émerger des pistes d'amélioration.",
          "Accompagnement de la migration de données et de la formation des utilisateurs, pour des transitions de systèmes fluides et bien adoptées.",
        ],
      },
    ],
  },

  hobbies: {
    eyebrow: 'Hors du travail',
    title: "Centres d'intérêt",
    lede:
      "Ce qui m'occupe loin d'un clavier — et dont plusieurs choses ont fini par façonner ma façon de regarder ce que je construis.",
    interests: [
      {
        title: 'Photographie',
        description:
          "Courir après la lumière et les instants qui passent. Ça m'a appris le cadrage, la patience, et que la photo qu'on garde est souvent celle devant laquelle on a failli passer.",
      },
      {
        title: 'Peinture',
        description:
          "Une pratique de longue date, d'où vient l'essentiel de mon sens de la composition et de la couleur.",
      },
      {
        title: 'Voyages',
        description:
          "Explorer des cultures, des paysages et des cuisines. Quatre langues plus tard, ça reste ma façon la plus rapide d'apprendre quoi que ce soit.",
      },
      {
        title: 'Cuisine',
        description:
          "Expérimenter les cuisines du monde et réunir les gens autour d'une table. Ce que j'ai de plus proche d'un bouton reset.",
      },
      {
        title: 'Football',
        description: "Rester active, et garder le goût du collectif en dehors du travail.",
      },
      {
        title: 'Musique',
        description:
          "Une écoute très large, tous genres confondus, compagne constante quand je construis.",
      },
      {
        title: 'Bénévolat',
        description: "Aux Restos du Cœur, pour contribuer là où ça compte vraiment.",
      },
    ],
  },

  contact: {
    eyebrow: 'Me contacter',
    title: 'Contact',
    lede:
      "Ouverte aux opportunités produit et ingénierie, aux collaborations, et à toute conversation autour du produit ou de la sécurité.",
    preferEmail: "Vous préférez l'email ?",
    nameLabel: 'Nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    consentBefore: "J'accepte la ",
    consentLink: 'Politique de confidentialité',
    consentAfter: '.',
    submit: 'Envoyer le message',
    submitting: 'Envoi…',
    status: {
      needConsent: "Merci d'accepter la Politique de confidentialité avant d'envoyer.",
      sending: 'Envoi…',
      sent: 'Message envoyé. Je vous réponds très vite.',
      error: "L'envoi a échoué. Merci de réessayer.",
    },
  },

  privacy: {
    eyebrow: 'Mentions légales',
    title: 'Politique de confidentialité',
    effective: 'En vigueur depuis le 1er février 2025',
    intro:
      "Bienvenue sur **francoiselapetite.com**. Votre vie privée compte pour moi. Cette politique explique comment les données personnelles sont collectées, utilisées et protégées, conformément au Règlement général sur la protection des données (RGPD).",
    collectedTitle: '1. Données collectées',
    collected: [
      'Les informations que vous transmettez via le formulaire de contact (nom, email, message)',
      "Des données de mesure d'audience telles que cookies, adresses IP et navigation",
    ],
    usageTitle: '2. Utilisation de vos données',
    usage: [
      'Répondre à vos messages et à vos demandes',
      "Améliorer le fonctionnement du site et l'expérience utilisateur",
      "Analyser le trafic et optimiser les performances du site, lorsque la mesure d'audience est activée",
    ],
    retentionTitle: '3. Durée de conservation',
    retention:
      "Les données personnelles ne sont conservées que le temps nécessaire aux finalités décrites ci-dessus. Les données du formulaire de contact sont conservées **6 mois** au maximum. Les données de mesure d'audience peuvent l'être jusqu'à **12 mois**.",
    rightsTitle: '4. Vos droits au titre du RGPD',
    rights: [
      "**Accéder** à vos données personnelles et en demander une copie",
      '**Rectifier** toute information inexacte',
      "**Demander la suppression** de vos données personnelles",
      '**Retirer votre consentement** au traitement à tout moment',
      "**Limiter ou vous opposer** à certains types de traitement",
    ],
    rightsNote: "Pour exercer ces droits, utilisez les coordonnées ci-dessous.",
    cookiesTitle: '5. Cookies et traceurs',
    cookies:
      "Si des cookies ou des outils de suivi sont utilisés, votre consentement vous sera demandé lors de votre première visite. Vous pouvez également gérer vos préférences depuis les paramètres de votre navigateur.",
    contactTitle: '6. Contact',
    contactBefore: 'Pour toute question relative à la confidentialité, écrivez à ',
    contactAfter: '.',
  },

  fox: {
    eyebrow: 'Petit détour',
    title: 'La tanière du renard',
    lede:
      "Fox est le compagnon de mon widget de to-do list. Son expression suit votre progression. Cochez la liste ci-dessous et regardez.",
    items: ['Parcourir les projets', 'Lire la présentation de Fox', 'Me contacter'],
    story:
      "J'ai créé Fox parce qu'une liste de tâches qui reste muette, que vous alliez au bout ou non, ne m'a jamais beaucoup aidée. Celle-ci réagit — et c'est un rappel étonnamment efficace.",
    seeInProjects: 'Voir Fox dans les projets',
  },

  notFound: {
    eyebrow: 'Erreur 404',
    title: "Cette page s'est égarée",
    message: "L'adresse que vous avez suivie ne mène nulle part. Reprenons le bon chemin.",
    back: "Retour à l'accueil",
  },

  footer: {
    privacy: 'Confidentialité',
    foxDen: 'La tanière',
  },
};

export default fr;
