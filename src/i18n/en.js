/**
 * English copy. Mirror every key in fr.js — the two files are read side by side.
 * `**bold**` inside a string is rendered as <strong> by the Rich helper.
 */
const en = {
  meta: {
    title: 'Françoise Lapetite Portfolio',
    description:
      "Françoise Lapetite, product manager and engineer in Paris. Founder of Fran's Guide, shipping iOS products end to end.",
  },

  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    interests: 'Interests',
    contact: 'Contact',
    homeAria: 'Françoise Lapetite, home',
    languageLabel: 'Language',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Main menu',
  },

  home: {
    eyebrow: 'Paris, France',
    role: 'Product Manager & Engineer',
    bio:
      'I build products end to end, from customer discovery and prototyping through architecture, launch, and the analytics that tell you whether any of it worked. Trained as a computer science engineer, I bridged engineering and business at Accenture and La Banque Postale before founding Fran’s Guide and shipping my own iOS product to the App Store.',
    downloadCv: 'Download CV',
    viewWork: 'View work',
    facts: [
      { label: 'Currently', value: "Founder, Fran's Guide" },
      { label: 'Previously', value: 'La Banque Postale, Accenture' },
      { label: 'Languages', value: 'FR · PT · EN · ES' },
    ],
    elsewhereLabel: 'Elsewhere',
  },

  about: {
    eyebrow: 'Profile',
    title: 'About',
    statement:
      "A product-focused engineer who would rather solve a customer's problem than defend a spec.",
    bio: [
      "I build products end to end. That means sitting with the people who will use something before writing a line of code, deciding what not to build, designing the architecture, shipping it, and then reading the analytics honestly enough to change course. In 2025 I founded Fran's Guide and took an iOS app from an idea to the App Store on my own, covering product discovery, design, monetization, and analytics.",
      'Before that I spent four years inside large organizations. At Accenture I worked with Fortune 500 clients on digital transformation, translating customer pain points into technical solutions and acting as the bridge between engineering teams and business stakeholders. At La Banque Postale I moved into cybersecurity governance, where the real work turned out to be adoption: understanding why people weren’t using the tools, and rewriting the approach until they did.',
      'My degree specialization was cybersecurity, and that training still shapes how I think. SéanceNote is local-first precisely because I know what happens to data that leaves a device. But it’s the product side I want to keep building on: understanding users, making the call on what matters, and shipping it.',
    ],
    skillsTitle: 'Skills',
    skillGroups: [
      {
        label: 'Product & analytics',
        value:
          'Customer discovery and interviews, feature prioritization, roadmap and release planning, KPI analysis, App Store Connect & Analytics, Figma',
      },
      {
        label: 'Engineering',
        value: 'Python, React, SwiftUI, SQL, Bash, C, C++, C#, Git, Terraform, Vim',
      },
      {
        label: 'Business systems',
        value: 'Salesforce, SAP, CRM and SRM platforms',
      },
      {
        label: 'Security background',
        value: 'Governance frameworks, policy design, risk and privacy-first architecture',
      },
    ],
    educationTitle: 'Education',
    educationYears: '2019 to 2024',
    schoolName: 'EPITA, School of Engineering and Computer Science, Paris',
    degree:
      'Master of Computer Science Engineering, specialized in Cybersecurity, Systems, and Software Engineering.',
    strengthsTitle: 'Core strengths',
    strengths: [
      'Customer empathy and discovery',
      'Product innovation',
      'Stakeholder alignment',
      'Architecture',
      'Cross-functional coordination',
      'Problem-solving',
      'Technical communication',
      'Team leadership',
      'Building collaborative culture',
      'Fast learner',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'French', level: 'Native' },
      { name: 'Portuguese', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'Spanish', level: 'Fluent' },
    ],
  },

  projects: {
    eyebrow: 'Portfolio',
    title: 'Projects',
    lede:
      'Independent iOS products and engineering work in cloud infrastructure and security.',
    featuredTitle: 'Selected work',
    engineeringTitle: 'Engineering projects',
    inDevelopment: 'In development',
    viewProject: 'View project',
    featured: [
      {
        title: 'SéanceNote',
        description:
          "An iOS application for writing session and meeting notes, processed entirely on-device for privacy. Templates adapt in length and structure to the user's profession, covering medical, legal, consulting, and research use cases.",
        linkLabel: 'App Store',
      },
      {
        title: 'Fox',
        description:
          'An iOS home-screen widget pairing a to-do list with an illustrated companion whose state reflects task completion, designed to encourage consistent follow-through.',
      },
      {
        title: 'Happello',
        description:
          'An iOS reminders application for recurring but easily forgotten personal administration such as annual checkups, blood tests, and document renewals, with a dedicated module for new parents covering vaccinations, appointments, and paperwork.',
      },
    ],
    engineering: [
      {
        title: 'Cloud-Outscale',
        description: 'Cloud infrastructure deployment using Terraform and Outscale.',
      },
      {
        title: '3DExperience SIEM',
        description: 'Security Information and Event Management for 3DExperience Cloud.',
      },
      {
        title: 'LMNTRIX',
        description: '3D multiplayer maze runner built with C#, Unity, and Photon Engine.',
      },
      {
        title: 'WiFi Analyzer & Logger',
        description: 'Network analysis and logging tool for wireless environments.',
      },
    ],
  },

  experience: {
    eyebrow: 'Career',
    title: 'Experience',
    lede:
      'From enterprise consulting to cybersecurity governance, and building and shipping my own product.',
    entries: [
      {
        position: 'Founder & Product Lead',
        location: 'Paris, France',
        duration: '2025 to Present',
        points: [
          'Designed and launched an iOS application delivering 24/7 AI-powered travel guidance, owning the full product lifecycle from customer discovery and feature prioritization through technical architecture, App Store distribution, and user analytics.',
          'Validated product-market fit through direct customer interviews and B2B partnership exploration, instrumenting acquisition, engagement, and monetization metrics.',
          'Integrated an AI assistant into the product experience, balancing technical capability against user needs and business viability.',
          'Extended the product with private guided tours and photography sessions, handling brand, web presence, and payment processing via Stripe.',
        ],
      },
      {
        position: 'Cybersecurity Governance & Customer Success',
        location: 'Paris, France',
        duration: '2024 to 2025',
        points: [
          'Accelerated adoption of internal security tooling by understanding user needs and translating technical requirements into business language, increasing adoption by 40%.',
          'Coordinated alignment between IT and business teams on security governance, facilitating cross-functional communication around shared objectives.',
          'Contributed to executive-level reporting, ensuring security insights were clear, actionable, and able to inform board-level decisions.',
        ],
      },
      {
        position: 'Application Development Analyst',
        location: 'Paris, France',
        duration: '2022 to 2024',
        points: [
          'Partnered with Fortune 500 clients on digital transformation initiatives, translating customer pain points into technical solutions.',
          'Bridged engineering and business stakeholders by communicating technical concepts to non-technical audiences and aligning on realistic priorities.',
          'Identified technical capability gaps within delivery teams and co-designed solutions matching business needs.',
          'Supported change management and team coordination, helping cross-functional groups work together through transformation programmes.',
        ],
      },
      {
        position: 'Business Analyst, Purchasing & Sales',
        location: 'Nanterre, France',
        duration: 'June to Dec. 2021',
        points: [
          'Improved CRM and SRM workflows alongside procurement and sales teams, increasing visibility and decision-making accuracy across supplier and client networks.',
          'Used KPI reporting and data analysis to inform strategic business decisions and surface improvement opportunities.',
          'Supported data migration and user training to ensure smooth system transitions and stakeholder adoption.',
        ],
      },
    ],
  },

  hobbies: {
    eyebrow: 'Outside work',
    title: 'Interests',
    lede:
      'The things that occupy me away from a keyboard, several of which ended up shaping how I look at the things I build.',
    interests: [
      {
        title: 'Photography',
        description:
          'Chasing light and fleeting moments. It taught me framing, patience, and that the shot worth keeping is usually the one you almost walked past.',
      },
      {
        title: 'Painting',
        description:
          'A long-standing practice, and where most of my sense of composition and colour comes from.',
      },
      {
        title: 'Travel',
        description:
          'Exploring cultures, landscapes, and cuisines. Four languages later, it is still the fastest way I learn anything.',
      },
      {
        title: 'Cooking',
        description:
          'Experimenting with international cuisines and getting people around a table. The closest thing I have to a reset button.',
      },
      {
        title: 'Football',
        description: 'Staying active, and keeping a taste for team dynamics outside of work.',
      },
      {
        title: 'Music',
        description: 'Listening widely across genres, a constant companion while building things.',
      },
      {
        title: 'Volunteering',
        description: 'Supporting Restos du Cœur, contributing where it actually counts.',
      },
    ],
  },

  contact: {
    eyebrow: 'Get in touch',
    title: 'Contact',
    lede:
      'Open to engineering roles, collaborations, and conversations about product or security work.',
    preferEmail: 'Prefer email?',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    consentBefore: 'I agree to the ',
    consentLink: 'Privacy Policy',
    consentAfter: '.',
    submit: 'Send message',
    submitting: 'Sending…',
    status: {
      needConsent: 'Please agree to the Privacy Policy before submitting.',
      sending: 'Sending…',
      sent: 'Message sent. I will get back to you shortly.',
      error: 'Failed to send message. Please try again.',
    },
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    effective: 'Effective 1 February 2025',
    intro:
      'Welcome to **francoiselapetite.com**. Your privacy is important to me. This policy explains how personal data is collected, used, and protected, in compliance with the General Data Protection Regulation (GDPR).',
    collectedTitle: '1. Data collected',
    collected: [
      'Information you provide via the contact form (name, email, message)',
      'Analytics data such as cookies, IP addresses, and browsing behaviour',
    ],
    usageTitle: '2. How your data is used',
    usage: [
      'To respond to your messages and enquiries',
      'To improve website functionality and user experience',
      'To analyse traffic and optimise website performance, where analytics is used',
    ],
    retentionTitle: '3. Data retention',
    retention:
      'Personal data is retained only as long as necessary for the purposes described above. Contact form data is stored for a maximum of **6 months**. Analytics data may be retained for up to **12 months**.',
    rightsTitle: '4. Your rights under GDPR',
    rights: [
      '**Access** your personal data and request a copy',
      '**Correct** any inaccurate information',
      '**Request deletion** of your personal data',
      '**Withdraw consent** for data processing at any time',
      '**Restrict or object** to certain types of processing',
    ],
    rightsNote: 'To exercise these rights, please use the contact details below.',
    cookiesTitle: '5. Cookies and tracking',
    cookies:
      'If cookies or tracking tools are used, you will be asked for consent on your first visit. You can also manage cookie preferences through your browser settings.',
    contactTitle: '6. Contact',
    contactBefore: 'For any privacy-related question, write to ',
    contactAfter: '.',
  },

  fox: {
    eyebrow: 'A small detour',
    title: 'Fox Den',
    lede:
      'Fox is the companion from my to-do widget app. Its expression follows your progress. Tick the list below and watch.',
    items: ['Browse the projects', 'Read about Fox', 'Get in touch'],
    story:
      'I built Fox because a to-do list that stays silent whether or not you follow through never helped me much. This one reacts, which turns out to be a surprisingly effective nudge.',
    seeInProjects: 'See Fox in Projects',
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'This page wandered off',
    message: "The address you followed doesn't lead anywhere. Let's get you back on track.",
    back: 'Back to home',
  },

  footer: {
    privacy: 'Privacy',
    foxDen: 'Fox Den',
  },
};

export default en;
