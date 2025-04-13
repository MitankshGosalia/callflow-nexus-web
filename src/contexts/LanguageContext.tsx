
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'fr' | 'hi' | 'ar';

// Define translations interface with nested structures
interface TranslationFeatures {
  title: string;
  subtitle: string;
  voiceRecognition: string;
  voiceRecognitionDesc: string;
  voiceRecognitionMore: string;
  naturalLanguage: string;
  naturalLanguageDesc: string;
  naturalLanguageMore: string;
  automation: string;
  automationDesc: string;
  automationMore: string;
  analytics: string;
  analyticsDesc: string;
  analyticsMore: string;
  security: string;
  securityDesc: string;
  securityMore: string;
}

interface TranslationDemo {
  title: string;
  subtitle: string;
  aiAssistant: string;
  online: string;
  welcomeMessage: string;
  askQuestion: string;
  requestInfo: string;
  accountHelp: string;
  howCanAssist: string;
  businessHours: string;
  accountSettings: string;
  assistResponse: string;
  hoursResponse: string;
  accountResponse: string;
  defaultResponse: string;
  voiceQuery: string;
  textMessage: string;
  instantResponses: string;
  instantResponsesDesc: string;
  voiceEnabled: string;
  voiceEnabledDesc: string;
  personalizedExperience: string;
  personalizedExperienceDesc: string;
  startFreeTrial: string;
}

interface TranslationHero {
  heading: string;
  subheading: string;
}

interface TranslationAbout {
  title: string;
  subtitle: string;
  ourStory: string;
  ourStoryContent: string;
  mission: string;
  missionContent: string;
  vision: string;
  visionContent: string;
  values: string;
  valuesContent: string;
  team: string;
  teamMembers: {
    [key: string]: {
      name: string;
      role: string;
      bio: string;
    };
  };
}

interface LanguageTranslation {
  title: string;
  subtitle: string;
  getStarted: string;
  learnMore: string;
  features: string;
  solutions: string;
  pricing: string;
  contact: string;
  about: string;
  howItWorks: string;
  integrations: string;
  useCases: string;
  blog: string;
  hero: TranslationHero;
  featuresSection: TranslationFeatures;
  demoSection: TranslationDemo;
  aboutSection: TranslationAbout;
}

// Define translations interface
interface Translations {
  [key: string]: LanguageTranslation;
}

// Sample translations for demonstration
const translations: Translations = {
  en: {
    title: "AI-Driven Call Bot",
    subtitle: "Intelligent Company Telephony and Customer Interaction",
    getStarted: "Get Started",
    learnMore: "Learn More",
    features: "Features",
    solutions: "Solutions",
    pricing: "Pricing",
    contact: "Contact Us",
    about: "About",
    howItWorks: "How It Works",
    integrations: "Integrations",
    useCases: "Use Cases",
    blog: "Blog",
    hero: {
      heading: "Transform Your Customer Experience",
      subheading: "Powerful AI-driven telephony that understands, responds, and learns."
    },
    featuresSection: {
      title: "Revolutionary Features",
      subtitle: "Our AI-powered call system brings unmatched capabilities to your business communications",
      voiceRecognition: "Advanced Voice Recognition",
      voiceRecognitionDesc: "Accurately transcribe and understand customer requests with 98% accuracy.",
      voiceRecognitionMore: "Our advanced voice recognition technology uses state-of-the-art neural networks to analyze speech patterns, detect emotions, and understand context. It works across accents, dialects, and even in noisy environments, ensuring your customers are always understood correctly. The system continually improves with each interaction, becoming more accurate over time.",
      naturalLanguage: "Natural Language Processing",
      naturalLanguageDesc: "Engage customers in natural conversations with context awareness.",
      naturalLanguageMore: "Our Natural Language Processing engine doesn't just understand words—it comprehends meaning, intent, and context. The AI can follow complex conversations, remember previous interactions, understand implicit references, and handle multi-part questions. It's designed to make interactions feel human, responding with appropriate tone and language style based on the customer's own communication patterns.",
      automation: "Workflow Automation",
      automationDesc: "Automate routine inquiries and tasks to free up human agents.",
      automationMore: "Transform your customer service operations by automating up to 70% of routine inquiries. Our workflow automation integrates seamlessly with your existing CRM and business tools to handle appointment scheduling, order tracking, account updates, and more. The system knows when to solve problems itself and when to escalate to human agents, ensuring efficient resolution paths for every customer need.",
      analytics: "Insightful Analytics",
      analyticsDesc: "Gain valuable insights from every customer interaction.",
      analyticsMore: "Turn every conversation into actionable business intelligence. Our comprehensive analytics platform provides detailed reports on call volumes, resolution rates, common issues, customer satisfaction, and emerging trends. Identify opportunities for service improvement, track performance metrics in real-time, and make data-driven decisions that enhance your customer experience strategy.",
      security: "Enterprise-Grade Security",
      securityDesc: "Protect sensitive customer data with military-grade encryption.",
      securityMore: "Security is foundational to our platform. All communications are protected with end-to-end encryption, and we comply with global standards including GDPR, HIPAA, and PCI DSS. Our system includes voice biometrics for authentication, fraud detection algorithms, and comprehensive audit trails. Your customers' data remains private and secure, while still allowing you to leverage valuable insights from conversations.",
    },
    demoSection: {
      title: "See the AI in Action",
      subtitle: "Experience how our AI call bot transforms customer interactions",
      aiAssistant: "AI Assistant",
      online: "Online and ready to help",
      welcomeMessage: "Hello! I'm your AI assistant. How can I help you today?",
      askQuestion: "Ask a question",
      requestInfo: "Request information",
      accountHelp: "Account help",
      howCanAssist: "How can you assist my business?",
      businessHours: "What are your business hours?",
      accountSettings: "How do I change my account settings?",
      assistResponse: "I can handle customer inquiries, schedule appointments, process orders, provide technical support, and much more - all while learning from each interaction to serve your customers better.",
      hoursResponse: "Our customer support team is available 24/7. The AI system never sleeps and can assist your customers at any time, while human agents are available Monday-Friday from 8am to 8pm in your local time zone.",
      accountResponse: "You can change your account settings through your admin dashboard. Just log in, go to 'Settings', and update your preferences. If you need assistance, I can guide you through the process step by step.",
      defaultResponse: "Thank you for your message. I'd be happy to help with that. Could you provide a bit more information so I can assist you better?",
      voiceQuery: "Tell me about your pricing plans",
      textMessage: "I'm interested in your service",
      instantResponses: "Instant Responses",
      instantResponsesDesc: "No waiting on hold. Our AI provides immediate assistance for your customers, 24/7.",
      voiceEnabled: "Voice-Enabled Interface",
      voiceEnabledDesc: "Natural speech recognition and synthesis creates conversations that feel human.",
      personalizedExperience: "Personalized Experience",
      personalizedExperienceDesc: "The AI remembers preferences and history to provide tailored service to each customer.",
      startFreeTrial: "Start Free Trial",
    },
    aboutSection: {
      title: "About Us",
      subtitle: "Pioneering the future of customer communication",
      ourStory: "Our Story",
      ourStoryContent: "Founded in 2021, our company emerged from a simple vision: to transform how businesses communicate with their customers. What began as a small team of AI enthusiasts and customer experience experts has grown into a global leader in AI-driven communication solutions. Our journey has been defined by continuous innovation and a relentless focus on creating technology that feels remarkably human.",
      mission: "Our Mission",
      missionContent: "We exist to bridge the gap between technological efficiency and human connection. Our mission is to empower businesses with AI solutions that don't just automate conversations but enhance them, creating meaningful interactions that build stronger relationships between companies and their customers.",
      vision: "Our Vision",
      visionContent: "We envision a future where every customer interaction is an opportunity for businesses to showcase their best qualities: responsiveness, understanding, and genuine care. Through our AI technology, we're making this future accessible to companies of all sizes across the globe.",
      values: "Our Values",
      valuesContent: "Innovation, integrity, and impact guide everything we do. We believe in pushing boundaries while maintaining the highest ethical standards. We measure our success not just by our technological achievements but by the tangible improvements we bring to businesses and their customers.",
      team: "Our Team",
      teamMembers: {
        ceo: {
          name: "Sarah Johnson",
          role: "Founder & CEO",
          bio: "With a background in computational linguistics and 15 years in tech leadership, Sarah drives our company vision and innovation strategy."
        },
        cto: {
          name: "Marcus Chen",
          role: "Chief Technology Officer",
          bio: "A pioneer in machine learning and natural language processing, Marcus leads our research and development initiatives."
        },
        cpo: {
          name: "Priya Sharma",
          role: "Chief Product Officer",
          bio: "Combining expertise in UX design and customer experience, Priya ensures our products solve real business challenges."
        },
        cso: {
          name: "James Wilson",
          role: "Chief Strategy Officer",
          bio: "With extensive experience in global markets, James guides our growth strategy and partnership development."
        }
      }
    }
  },
  
  es: {
    title: "Bot de Llamadas Impulsado por IA",
    subtitle: "Telefonía Empresarial Inteligente e Interacción con el Cliente",
    getStarted: "Comenzar",
    learnMore: "Saber Más",
    features: "Características",
    solutions: "Soluciones",
    pricing: "Precios",
    contact: "Contáctenos",
    about: "Acerca de",
    howItWorks: "Cómo Funciona",
    integrations: "Integraciones",
    useCases: "Casos de Uso",
    blog: "Blog",
    hero: {
      heading: "Transforme Su Experiencia de Cliente",
      subheading: "Telefonía potente impulsada por IA que entiende, responde y aprende."
    },
    featuresSection: {
      title: "Características Revolucionarias",
      subtitle: "Nuestro sistema de llamadas impulsado por IA aporta capacidades inigualables a las comunicaciones de su empresa",
      voiceRecognition: "Reconocimiento de Voz Avanzado",
      voiceRecognitionDesc: "Transcriba y comprenda con precisión las solicitudes de los clientes con un 98% de precisión.",
      voiceRecognitionMore: "Nuestra tecnología de reconocimiento de voz avanzada utiliza redes neuronales de vanguardia para analizar patrones de habla, detectar emociones y comprender el contexto. Funciona con diversos acentos, dialectos e incluso en entornos ruidosos, asegurando que sus clientes sean siempre entendidos correctamente. El sistema mejora continuamente con cada interacción, volviéndose más preciso con el tiempo.",
      naturalLanguage: "Procesamiento del Lenguaje Natural",
      naturalLanguageDesc: "Involucre a los clientes en conversaciones naturales con conciencia del contexto.",
      naturalLanguageMore: "Nuestro motor de Procesamiento de Lenguaje Natural no solo entiende palabras, comprende significado, intención y contexto. La IA puede seguir conversaciones complejas, recordar interacciones previas, entender referencias implícitas y manejar preguntas de múltiples partes. Está diseñado para hacer que las interacciones se sientan humanas, respondiendo con el tono y estilo de lenguaje apropiados basados en los patrones de comunicación del cliente.",
      automation: "Automatización de Flujo de Trabajo",
      automationDesc: "Automatice consultas y tareas rutinarias para liberar agentes humanos.",
      automationMore: "Transforme sus operaciones de servicio al cliente automatizando hasta el 70% de las consultas rutinarias. Nuestra automatización de flujo de trabajo se integra perfectamente con su CRM y herramientas de negocio existentes para manejar programación de citas, seguimiento de pedidos, actualizaciones de cuentas y más. El sistema sabe cuándo resolver problemas por sí mismo y cuándo escalar a agentes humanos, asegurando vías de resolución eficientes para cada necesidad del cliente.",
      analytics: "Análisis Perspicaz",
      analyticsDesc: "Obtenga información valiosa de cada interacción con el cliente.",
      analyticsMore: "Convierta cada conversación en inteligencia empresarial procesable. Nuestra plataforma de análisis integral proporciona informes detallados sobre volúmenes de llamadas, tasas de resolución, problemas comunes, satisfacción del cliente y tendencias emergentes. Identifique oportunidades para mejorar el servicio, realice un seguimiento de las métricas de rendimiento en tiempo real y tome decisiones basadas en datos que mejoren su estrategia de experiencia del cliente.",
      security: "Seguridad de Nivel Empresarial",
      securityDesc: "Proteja los datos sensibles de los clientes con cifrado de grado militar.",
      securityMore: "La seguridad es fundamental en nuestra plataforma. Todas las comunicaciones están protegidas con cifrado de extremo a extremo, y cumplimos con estándares globales como GDPR, HIPAA y PCI DSS. Nuestro sistema incluye biometría de voz para autenticación, algoritmos de detección de fraude y pistas de auditoría completas. Los datos de sus clientes permanecen privados y seguros, mientras le permiten aprovechar información valiosa de las conversaciones.",
    },
    demoSection: {
      title: "Vea la IA en Acción",
      subtitle: "Experimente cómo nuestro bot de llamadas con IA transforma las interacciones con los clientes",
      aiAssistant: "Asistente de IA",
      online: "En línea y listo para ayudar",
      welcomeMessage: "¡Hola! Soy su asistente de IA. ¿Cómo puedo ayudarle hoy?",
      askQuestion: "Hacer una pregunta",
      requestInfo: "Solicitar información",
      accountHelp: "Ayuda con la cuenta",
      howCanAssist: "¿Cómo pueden ayudar a mi negocio?",
      businessHours: "¿Cuáles son sus horarios de atención?",
      accountSettings: "¿Cómo cambio la configuración de mi cuenta?",
      assistResponse: "Puedo gestionar consultas de clientes, programar citas, procesar pedidos, proporcionar soporte técnico y mucho más, todo mientras aprendo de cada interacción para servir mejor a sus clientes.",
      hoursResponse: "Nuestro equipo de soporte al cliente está disponible 24/7. El sistema de IA nunca duerme y puede ayudar a sus clientes en cualquier momento, mientras que los agentes humanos están disponibles de lunes a viernes de 8am a 8pm en su zona horaria local.",
      accountResponse: "Puede cambiar la configuración de su cuenta a través de su panel de administración. Simplemente inicie sesión, vaya a 'Configuración' y actualice sus preferencias. Si necesita ayuda, puedo guiarle paso a paso en el proceso.",
      defaultResponse: "Gracias por su mensaje. Estaré encantado de ayudarle con eso. ¿Podría proporcionar un poco más de información para que pueda asistirle mejor?",
      voiceQuery: "Cuénteme sobre sus planes de precios",
      textMessage: "Estoy interesado en su servicio",
      instantResponses: "Respuestas Instantáneas",
      instantResponsesDesc: "Sin esperas en línea. Nuestra IA proporciona asistencia inmediata para sus clientes, 24/7.",
      voiceEnabled: "Interfaz Habilitada por Voz",
      voiceEnabledDesc: "El reconocimiento y síntesis de voz natural crea conversaciones que se sienten humanas.",
      personalizedExperience: "Experiencia Personalizada",
      personalizedExperienceDesc: "La IA recuerda preferencias e historial para proporcionar un servicio personalizado a cada cliente.",
      startFreeTrial: "Comenzar Prueba Gratuita",
    },
    aboutSection: {
      title: "Sobre Nosotros",
      subtitle: "Pioneros en el futuro de la comunicación con clientes",
      ourStory: "Nuestra Historia",
      ourStoryContent: "Fundada en 2021, nuestra empresa surgió de una visión simple: transformar la forma en que las empresas se comunican con sus clientes. Lo que comenzó como un pequeño equipo de entusiastas de la IA y expertos en experiencia del cliente se ha convertido en un líder global en soluciones de comunicación impulsadas por IA. Nuestro viaje se ha definido por la innovación continua y un enfoque implacable en crear tecnología que se sienta notablemente humana.",
      mission: "Nuestra Misión",
      missionContent: "Existimos para cerrar la brecha entre la eficiencia tecnológica y la conexión humana. Nuestra misión es potenciar a las empresas con soluciones de IA que no solo automatizan conversaciones sino que las mejoran, creando interacciones significativas que construyen relaciones más fuertes entre las empresas y sus clientes.",
      vision: "Nuestra Visión",
      visionContent: "Visualizamos un futuro donde cada interacción con el cliente es una oportunidad para que las empresas muestren sus mejores cualidades: capacidad de respuesta, comprensión y cuidado genuino. A través de nuestra tecnología de IA, estamos haciendo este futuro accesible a empresas de todos los tamaños en todo el mundo.",
      values: "Nuestros Valores",
      valuesContent: "Innovación, integridad e impacto guían todo lo que hacemos. Creemos en empujar los límites mientras mantenemos los más altos estándares éticos. Medimos nuestro éxito no solo por nuestros logros tecnológicos sino por las mejoras tangibles que aportamos a las empresas y sus clientes.",
      team: "Nuestro Equipo",
      teamMembers: {
        ceo: {
          name: "Sarah Johnson",
          role: "Fundadora y CEO",
          bio: "Con formación en lingüística computacional y 15 años en liderazgo tecnológico, Sarah impulsa nuestra visión de empresa y estrategia de innovación."
        },
        cto: {
          name: "Marcus Chen",
          role: "Director de Tecnología",
          bio: "Pionero en aprendizaje automático y procesamiento del lenguaje natural, Marcus lidera nuestras iniciativas de investigación y desarrollo."
        },
        cpo: {
          name: "Priya Sharma",
          role: "Directora de Producto",
          bio: "Combinando experiencia en diseño UX y experiencia del cliente, Priya asegura que nuestros productos resuelvan desafíos empresariales reales."
        },
        cso: {
          name: "James Wilson",
          role: "Director de Estrategia",
          bio: "Con amplia experiencia en mercados globales, James guía nuestra estrategia de crecimiento y desarrollo de asociaciones."
        }
      }
    }
  },
  
  fr: {
    title: "Robot d'Appel Basé sur l'IA",
    subtitle: "Téléphonie d'Entreprise Intelligente et Interaction Client",
    getStarted: "Commencer",
    learnMore: "En Savoir Plus",
    features: "Fonctionnalités",
    solutions: "Solutions",
    pricing: "Tarification",
    contact: "Contactez-nous",
    about: "À Propos",
    howItWorks: "Comment Ça Marche",
    integrations: "Intégrations",
    useCases: "Cas d'Utilisation",
    blog: "Blog",
    hero: {
      heading: "Transformez Votre Expérience Client",
      subheading: "Téléphonie puissante basée sur l'IA qui comprend, répond et apprend."
    },
    featuresSection: {
      title: "Fonctionnalités Révolutionnaires",
      subtitle: "Notre système d'appel alimenté par l'IA apporte des capacités inégalées à vos communications d'entreprise",
      voiceRecognition: "Reconnaissance Vocale Avancée",
      voiceRecognitionDesc: "Transcrivez et comprenez avec précision les demandes des clients avec une précision de 98%.",
      voiceRecognitionMore: "Notre technologie de reconnaissance vocale avancée utilise des réseaux neuronaux de pointe pour analyser les modèles de parole, détecter les émotions et comprendre le contexte. Elle fonctionne avec différents accents, dialectes et même dans des environnements bruyants, garantissant que vos clients sont toujours correctement compris. Le système s'améliore continuellement avec chaque interaction, devenant plus précis au fil du temps.",
      naturalLanguage: "Traitement du Langage Naturel",
      naturalLanguageDesc: "Engagez les clients dans des conversations naturelles avec une conscience du contexte.",
      naturalLanguageMore: "Notre moteur de Traitement du Langage Naturel ne comprend pas seulement les mots – il comprend le sens, l'intention et le contexte. L'IA peut suivre des conversations complexes, se souvenir des interactions précédentes, comprendre les références implicites et traiter des questions à plusieurs parties. Il est conçu pour rendre les interactions naturelles, en répondant avec le ton et le style de langage appropriés basés sur les propres modèles de communication du client.",
      automation: "Automatisation des Flux de Travail",
      automationDesc: "Automatisez les demandes et tâches routinières pour libérer les agents humains.",
      automationMore: "Transformez vos opérations de service client en automatisant jusqu'à 70% des demandes routinières. Notre automatisation de flux de travail s'intègre parfaitement avec votre CRM et vos outils métier existants pour gérer la planification de rendez-vous, le suivi des commandes, les mises à jour de compte, et plus encore. Le système sait quand résoudre les problèmes lui-même et quand les escalader aux agents humains, assurant des voies de résolution efficaces pour chaque besoin client.",
      analytics: "Analyses Perspicaces",
      analyticsDesc: "Obtenez des informations précieuses de chaque interaction client.",
      analyticsMore: "Transformez chaque conversation en intelligence d'affaires exploitable. Notre plateforme d'analyse complète fournit des rapports détaillés sur les volumes d'appels, les taux de résolution, les problèmes communs, la satisfaction client et les tendances émergentes. Identifiez les opportunités d'amélioration du service, suivez les métriques de performance en temps réel, et prenez des décisions basées sur les données qui améliorent votre stratégie d'expérience client.",
      security: "Sécurité de Niveau Entreprise",
      securityDesc: "Protégez les données sensibles des clients avec un cryptage de niveau militaire.",
      securityMore: "La sécurité est fondamentale pour notre plateforme. Toutes les communications sont protégées par un cryptage de bout en bout, et nous sommes conformes aux normes mondiales, notamment RGPD, HIPAA et PCI DSS. Notre système comprend la biométrie vocale pour l'authentification, des algorithmes de détection de fraude et des pistes d'audit complètes. Les données de vos clients restent privées et sécurisées, tout en vous permettant d'exploiter des informations précieuses des conversations.",
    },
    demoSection: {
      title: "Voir l'IA en Action",
      subtitle: "Découvrez comment notre robot d'appel IA transforme les interactions clients",
      aiAssistant: "Assistant IA",
      online: "En ligne et prêt à aider",
      welcomeMessage: "Bonjour ! Je suis votre assistant IA. Comment puis-je vous aider aujourd'hui ?",
      askQuestion: "Poser une question",
      requestInfo: "Demander des informations",
      accountHelp: "Aide avec le compte",
      howCanAssist: "Comment pouvez-vous aider mon entreprise ?",
      businessHours: "Quelles sont vos heures d'ouverture ?",
      accountSettings: "Comment modifier les paramètres de mon compte ?",
      assistResponse: "Je peux gérer les demandes des clients, planifier des rendez-vous, traiter des commandes, fournir un support technique et bien plus encore - tout en apprenant de chaque interaction pour mieux servir vos clients.",
      hoursResponse: "Notre équipe de support client est disponible 24/7. Le système IA ne dort jamais et peut assister vos clients à tout moment, tandis que des agents humains sont disponibles du lundi au vendredi de 8h à 20h dans votre fuseau horaire local.",
      accountResponse: "Vous pouvez modifier les paramètres de votre compte via votre tableau de bord d'administration. Connectez-vous simplement, allez dans 'Paramètres', et mettez à jour vos préférences. Si vous avez besoin d'aide, je peux vous guider étape par étape dans le processus.",
      defaultResponse: "Merci pour votre message. Je serais ravi de vous aider avec cela. Pourriez-vous fournir un peu plus d'informations pour que je puisse mieux vous assister ?",
      voiceQuery: "Parlez-moi de vos forfaits tarifaires",
      textMessage: "Je suis intéressé par votre service",
      instantResponses: "Réponses Instantanées",
      instantResponsesDesc: "Pas d'attente en ligne. Notre IA fournit une assistance immédiate à vos clients, 24/7.",
      voiceEnabled: "Interface Vocale",
      voiceEnabledDesc: "La reconnaissance et la synthèse vocale naturelles créent des conversations qui semblent humaines.",
      personalizedExperience: "Expérience Personnalisée",
      personalizedExperienceDesc: "L'IA se souvient des préférences et de l'historique pour fournir un service sur mesure à chaque client.",
      startFreeTrial: "Démarrer l'Essai Gratuit",
    },
    aboutSection: {
      title: "À Propos",
      subtitle: "Pionnier de l'avenir de la communication client",
      ourStory: "Notre Histoire",
      ourStoryContent: "Fondée en 2021, notre entreprise est née d'une vision simple : transformer la façon dont les entreprises communiquent avec leurs clients. Ce qui a commencé comme une petite équipe d'enthousiastes de l'IA et d'experts en expérience client est devenu un leader mondial dans les solutions de communication basées sur l'IA. Notre parcours a été défini par l'innovation continue et une concentration incessante sur la création de technologie qui semble remarquablement humaine.",
      mission: "Notre Mission",
      missionContent: "Nous existons pour combler le fossé entre l'efficacité technologique et la connexion humaine. Notre mission est de donner aux entreprises des solutions d'IA qui n'automatisent pas seulement les conversations mais les améliorent, créant des interactions significatives qui construisent des relations plus fortes entre les entreprises et leurs clients.",
      vision: "Notre Vision",
      visionContent: "Nous envisageons un futur où chaque interaction client est une opportunité pour les entreprises de montrer leurs meilleures qualités : la réactivité, la compréhension et l'attention sincère. Grâce à notre technologie IA, nous rendons cet avenir accessible aux entreprises de toutes tailles à travers le monde.",
      values: "Nos Valeurs",
      valuesContent: "L'innovation, l'intégrité et l'impact guident tout ce que nous faisons. Nous croyons à repousser les limites tout en maintenant les plus hauts standards éthiques. Nous mesurons notre succès non seulement par nos réalisations technologiques, mais par les améliorations tangibles que nous apportons aux entreprises et à leurs clients.",
      team: "Notre Équipe",
      teamMembers: {
        ceo: {
          name: "Sarah Johnson",
          role: "Fondatrice & PDG",
          bio: "Avec une formation en linguistique computationnelle et 15 ans de leadership technologique, Sarah dirige notre vision d'entreprise et notre stratégie d'innovation."
        },
        cto: {
          name: "Marcus Chen",
          role: "Directeur Technique",
          bio: "Pionnier dans l'apprentissage automatique et le traitement du langage naturel, Marcus dirige nos initiatives de recherche et développement."
        },
        cpo: {
          name: "Priya Sharma",
          role: "Directrice des Produits",
          bio: "Combinant expertise en conception UX et expérience client, Priya s'assure que nos produits résolvent de véritables défis commerciaux."
        },
        cso: {
          name: "James Wilson",
          role: "Directeur de la Stratégie",
          bio: "Avec une vaste expérience dans les marchés mondiaux, James guide notre stratégie de croissance et le développement de partenariats."
        }
      }
    }
  },
  
  hi: {
    title: "एआई-संचालित कॉल बॉट",
    subtitle: "बुद्धिमान कंपनी टेलीफोनी और ग्राहक इंटरैक्शन",
    getStarted: "शुरू करें",
    learnMore: "अधिक जानें",
    features: "विशेषताएं",
    solutions: "समाधान",
    pricing: "मूल्य निर्धारण",
    contact: "संपर्क करें",
    about: "हमारे बारे में",
    howItWorks: "यह कैसे काम करता है",
    integrations: "एकीकरण",
    useCases: "उपयोग के मामले",
    blog: "ब्लॉग",
    hero: {
      heading: "अपने ग्राहक अनुभव को बदलें",
      subheading: "शक्तिशाली एआई-संचालित टेलीफोनी जो समझती है, जवाब देती है और सीखती है।"
    },
    featuresSection: {
      title: "क्रांतिकारी विशेषताएं",
      subtitle: "हमारी AI-संचालित कॉल सिस्टम आपके व्यापार संचार के लिए अद्वितीय क्षमताएं लाता है",
      voiceRecognition: "उन्नत आवाज पहचान",
      voiceRecognitionDesc: "98% सटीकता के साथ ग्राहक अनुरोधों को सटीक रूप से प्रतिलिपि बनाएं और समझें।",
      voiceRecognitionMore: "हमारी उन्नत आवाज पहचान तकनीक बोली पैटर्न का विश्लेषण करने, भावनाओं का पता लगाने और संदर्भ को समझने के लिए अत्याधुनिक तंत्रिका नेटवर्क का उपयोग करती है। यह अलग-अलग उच्चारणों, बोलियों और यहां तक कि शोरगुल वाले वातावरण में भी काम करता है, यह सुनिश्चित करता है कि आपके ग्राहकों को हमेशा सही ढंग से समझा जाए। सिस्टम प्रत्येक इंटरैक्शन के साथ लगातार सुधार करता है, समय के साथ अधिक सटीक होता जाता है।",
      naturalLanguage: "प्राकृतिक भाषा प्रसंस्करण",
      naturalLanguageDesc: "संदर्भ जागरूकता के साथ प्राकृतिक वार्तालापों में ग्राहकों को शामिल करें।",
      naturalLanguageMore: "हमारा प्राकृतिक भाषा प्रसंस्करण इंजन केवल शब्दों को ही नहीं समझता—यह अर्थ, इरादा और संदर्भ को समझता है। AI जटिल बातचीत का पालन कर सकता है, पिछली बातचीतों को याद रख सकता है, अंतर्निहित संदर्भों को समझ सकता है, और बहु-भाग वाले प्रश्नों को संभाल सकता है। यह बातचीत को मानवीय बनाने के लिए डिज़ाइन किया गया है, ग्राहक के अपने संचार पैटर्न के आधार पर उचित टोन और भाषा शैली के साथ प्रतिक्रिया देता है।",
      automation: "कार्यप्रवाह स्वचालन",
      automationDesc: "मानव एजेंटों को मुक्त करने के लिए नियमित पूछताछ और कार्यों को स्वचालित करें।",
      automationMore: "70% तक की रूटीन पूछताछ को स्वचालित करके अपने ग्राहक सेवा परिचालन को बदलें। हमारा कार्यप्रवाह स्वचालन आपके मौजूदा CRM और व्यावसायिक उपकरणों के साथ सहजता से एकीकृत होता है ताकि अपॉइंटमेंट शेड्यूलिंग, ऑर्डर ट्रैकिंग, अकाउंट अपडेट, और अधिक संभाल सके। सिस्टम जानता है कि कब समस्याओं को स्वयं हल करना है और कब मानव एजेंटों को एस्केलेट करना है, जिससे प्रत्येक ग्राहक की आवश्यकता के लिए कुशल समाधान मार्ग सुनिश्चित होते हैं।",
      analytics: "अंतर्दृष्टिपूर्ण विश्लेषण",
      analyticsDesc: "हर ग्राहक इंटरैक्शन से मूल्यवान अंतर्दृष्टि प्राप्त करें।",
      analyticsMore: "प्रत्येक बातचीत को कार्रवाई योग्य व्यापार खुफिया में बदलें। हमारा व्यापक विश्लेषण प्लेटफ़ॉर्म कॉल वॉल्यूम, समाधान दरों, सामान्य समस्याओं, ग्राहक संतुष्टि, और उभरते रुझानों पर विस्तृत रिपोर्ट प्रदान करता है। सेवा में सुधार के अवसरों की पहचान करें, रियल-टाइम में प्रदर्शन मेट्रिक्स को ट्रैक करें, और डेटा-संचालित निर्णय लें जो आपकी ग्राहक अनुभव रणनीति को बढ़ाते हैं।",
      security: "एंटरप्राइज-ग्रेड सुरक्षा",
      securityDesc: "सैन्य-ग्रेड एन्क्रिप्शन के साथ संवेदनशील ग्राहक डेटा की रक्षा करें।",
      securityMore: "सुरक्षा हमारे प्लेटफॉर्म की नींव है। सभी संचार एंड-टू-एंड एन्क्रिप्शन के साथ सुरक्षित हैं, और हम GDPR, HIPAA और PCI DSS सहित वैश्विक मानकों का पालन करते हैं। हमारे सिस्टम में प्रमाणीकरण के लिए वॉयस बायोमेट्रिक्स, धोखाधड़ी पहचान एल्गोरिदम और व्यापक ऑडिट ट्रेल्स शामिल हैं। आपके ग्राहकों का डेटा निजी और सुरक्षित रहता है, जबकि आप अभी भी बातचीत से मूल्यवान अंतर्दृष्टि का लाभ उठा सकते हैं।",
    },
    demoSection: {
      title: "AI को कार्रवाई में देखें",
      subtitle: "अनुभव करें कि कैसे हमारा AI कॉल बॉट ग्राहक इंटरैक्शन को बदलता है",
      aiAssistant: "AI सहायक",
      online: "ऑनलाइन और मदद के लिए तैयार",
      welcomeMessage: "नमस्ते! मैं आपका AI सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
      askQuestion: "सवाल पूछें",
      requestInfo: "जानकारी अनुरोध करें",
      accountHelp: "अकाउंट सहायता",
      howCanAssist: "आप मेरे व्यवसाय की कैसे सहायता कर सकते हैं?",
      businessHours: "आपके व्यापार के घंटे क्या हैं?",
      accountSettings: "मैं अपने अकाउंट सेटिंग्स कैसे बदलूं?",
      assistResponse: "मैं ग्राहक पूछताछ संभाल सकता हूँ, अपॉइंटमेंट शेड्यूल कर सकता हूँ, ऑर्डर प्रोसेस कर सकता हूँ, तकनीकी सहायता प्रदान कर सकता हूँ, और बहुत कुछ - सभी प्रत्येक इंटरैक्शन से सीखते हुए आपके ग्राहकों को बेहतर सेवा देने के लिए।",
      hoursResponse: "हमारी ग्राहक सहायता टीम 24/7 उपलब्ध है। AI सिस्टम कभी नहीं सोता और किसी भी समय आपके ग्राहकों की सहायता कर सकता है, जबकि मानव एजेंट सोमवार से शुक्रवार तक आपके स्थानीय समय क्षेत्र में सुबह 8 बजे से शाम 8 बजे तक उपलब्ध हैं।",
      accountResponse: "आप अपने एडमिन डैशबोर्ड के माध्यम से अपने अकाउंट सेटिंग्स बदल सकते हैं। बस लॉग इन करें, 'सेटिंग्स' पर जाएं, और अपनी प्राथमिकताएं अपडेट करें। यदि आपको सहायता की आवश्यकता है, तो मैं आपको प्रक्रिया में चरण-दर-चरण मार्गदर्शन कर सकता हूँ।",
      defaultResponse: "आपके संदेश के लिए धन्यवाद। मैं उसमें आपकी सहायता करने में प्रसन्न होऊंगा। क्या आप थोड़ी और जानकारी प्रदान कर सकते हैं ताकि मैं आपकी बेहतर सहायता कर सकूं?",
      voiceQuery: "मुझे अपने मूल्य निर्धारण योजनाओं के बारे में बताएं",
      textMessage: "मैं आपकी सेवा में रुचि रखता हूँ",
      instantResponses: "तत्काल प्रतिक्रिया",
      instantResponsesDesc: "होल्ड पर प्रतीक्षा नहीं। हमारा AI आपके ग्राहकों को 24/7 तत्काल सहायता प्रदान करता है।",
      voiceEnabled: "वॉयस-सक्षम इंटरफेस",
      voiceEnabledDesc: "प्राकृतिक भाषण पहचान और संश्लेषण वार्तालाप बनाता है जो मानवीय महसूस होता है।",
      personalizedExperience: "व्यक्तिगत अनुभव",
      personalizedExperienceDesc: "AI प्रत्येक ग्राहक को अनुकूलित सेवा प्रदान करने के लिए प्राथमिकताओं और इतिहास को याद रखता है।",
      startFreeTrial: "निःशुल्क परीक्षण शुरू करें",
    },
    aboutSection: {
      title: "हमारे बारे में",
      subtitle: "ग्राहक संचार के भविष्य के अग्रदूत",
      ourStory: "हमारी कहानी",
      ourStoryContent: "2021 में स्थापित, हमारी कंपनी एक साधारण विजन से उभरी: व्यवसायों के ग्राहकों के साथ संवाद करने के तरीके को बदलना। जो एआई उत्साही और ग्राहक अनुभव विशेषज्ञों की एक छोटी टीम के रूप में शुरू हुआ, वह एआई-संचालित संचार समाधानों में एक वैश्विक नेता बन गया है। हमारी यात्रा निरंतर नवाचार और ऐसी प्रौद्योगिकी बनाने पर अटूट ध्यान से परिभाषित की गई है जो उल्लेखनीय रूप से मानवीय महसूस होती है।",
      mission: "हमारा मिशन",
      missionContent: "हम तकनीकी दक्षता और मानवीय संबंध के बीच के अंतर को पाटने के लिए मौजूद हैं। हमारा मिशन व्यवसायों को ऐसे एआई समाधानों के साथ सशक्त बनाना है जो केवल बातचीत को स्वचालित नहीं करते बल्कि उन्हें बढ़ाते हैं, जिससे कंपनियों और उनके ग्राहकों के बीच मजबूत संबंध बनाने वाली अर्थपूर्ण बातचीत होती है।",
      vision: "हमारा दृष्टिकोण",
      visionContent: "हम एक ऐसे भविष्य की कल्पना करते हैं जहां हर ग्राहक इंटरैक्शन व्यवसायों के लिए अपनी सर्वोत्तम गुणवत्ता दिखाने का अवसर है: प्रतिक्रियाशीलता, समझ और वास्तविक देखभाल। हमारी एआई तकनीक के माध्यम से, हम इस भविष्य को दुनिया भर में हर आकार की कंपनियों के लिए सुलभ बना रहे हैं।",
      values: "हमारे मूल्य",
      valuesContent: "नवाचार, अखंडता और प्रभाव हम जो कुछ भी करते हैं उसका मार्गदर्शन करते हैं। हम उच्चतम नैतिक मानकों को बनाए रखते हुए सीमाओं को धक्का देने में विश्वास करते हैं। हम अपनी सफलता को केवल अपनी तकनीकी उपलब्धियों से नहीं, बल्कि उन मूर्त सुधारों से मापते हैं जो हम व्यवसायों और उनके ग्राहकों को लाते हैं।",
      team: "हमारी टीम",
      teamMembers: {
        ceo: {
          name: "सारा जॉनसन",
          role: "संस्थापक और सीईओ",
          bio: "कम्प्यूटेशनल भाषाविज्ञान में पृष्ठभूमि और तकनीकी नेतृत्व में 15 वर्षों के साथ, सारा हमारी कंपनी के विज़न और नवाचार रणनीति को आगे बढ़ाती हैं।"
        },
        cto: {
          name: "मार्कस चेन",
          role: "मुख्य प्रौद्योगिकी अधिकारी",
          bio: "मशीन लर्निंग और प्राकृतिक भाषा प्रसंस्करण में अग्रणी, मार्कस हमारे अनुसंधान और विकास पहलों का नेतृत्व करते हैं।"
        },
        cpo: {
          name: "प्रिया शर्मा",
          role: "मुख्य उत्पाद अधिकारी",
          bio: "UX डिजाइन और ग्राहक अनुभव में विशेषज्ञता को जोड़ते हुए, प्रिया सुनिश्चित करती हैं कि हमारे उत्पाद वास्तविक व्यापार चुनौतियों को हल करें।"
        },
        cso: {
          name: "जेम्स विल्सन",
          role: "मुख्य रणनीति अधिकारी",
          bio: "वैश्विक बाजारों में व्यापक अनुभव के साथ, जेम्स हमारी विकास रणनीति और साझेदारी विकास का मार्गदर्शन करते हैं।"
        }
      }
    }
  },
  
  ar: {
    title: "روبوت اتصال مدعوم بالذكاء الاصطناعي",
    subtitle: "هاتف الشركة الذكي وتفاعل العملاء",
    getStarted: "البدء",
    learnMore: "معرفة المزيد",
    features: "الميزات",
    solutions: "الحلول",
    pricing: "التسعير",
    contact: "اتصل بنا",
    about: "حول",
    howItWorks: "كيف يعمل",
    integrations: "تكاملات",
    useCases: "حالات الاستخدام",
    blog: "المدونة",
    hero: {
      heading: "قم بتحويل تجربة العملاء لديك",
      subheading: "هاتف قوي مدعوم بالذكاء الاصطناعي يفهم ويستجيب ويتعلم."
    },
    featuresSection: {
      title: "ميزات ثورية",
      subtitle: "يجلب نظام الاتصال المدعوم بالذكاء الاصطناعي لدينا قدرات لا مثيل لها لاتصالات عملك",
      voiceRecognition: "التعرف المتقدم على الصوت",
      voiceRecognitionDesc: "نسخ وفهم طلبات العملاء بدقة تصل إلى 98٪.",
      voiceRecognitionMore: "تستخدم تقنية التعرف على الصوت المتقدمة لدينا شبكات عصبية متطورة لتحليل أنماط الكلام واكتشاف العواطف وفهم السياق. تعمل عبر اللهجات واللكنات وحتى في البيئات الصاخبة، مما يضمن فهم عملائك بشكل صحيح دائمًا. يتحسن النظام باستمرار مع كل تفاعل، ويصبح أكثر دقة بمرور الوقت.",
      naturalLanguage: "معالجة اللغة الطبيعية",
      naturalLanguageDesc: "إشراك العملاء في محادثات طبيعية مع وعي بالسياق.",
      naturalLanguageMore: "محرك معالجة اللغة الطبيعية لدينا لا يفهم الكلمات فقط - بل يفهم المعنى والقصد والسياق. يمكن للذكاء الاصطناعي متابعة المحادثات المعقدة وتذكر التفاعلات السابقة وفهم الإشارات الضمنية والتعامل مع الأسئلة متعددة الأجزاء. تم تصميمه لجعل التفاعلات تبدو بشرية، مع الاستجابة بنبرة وأسلوب لغة مناسبين بناءً على أنماط التواصل الخاصة بالعميل.",
      automation: "أتمتة سير العمل",
      automationDesc: "أتمتة الاستفسارات والمهام الروتينية لتحرير الوكلاء البشريين.",
      automationMore: "قم بتحويل عمليات خدمة العملاء الخاصة بك من خلال أتمتة ما يصل إلى 70٪ من الاستفسارات الروتينية. تتكامل أتمتة سير العمل لدينا بسلاسة مع نظام إدارة علاقات العملاء وأدوات الأعمال الحالية للتعامل مع جدولة المواعيد وتتبع الطلبات وتحديثات الحسابات والمزيد. يعرف النظام متى يحل المشكلات بنفسه ومتى يصعدها إلى الوكلاء البشريين، مما يضمن مسارات حل فعالة لكل احتياجات العملاء.",
      analytics: "تحليلات مفيدة",
      analyticsDesc: "الحصول على رؤى قيمة من كل تفاعل مع العملاء.",
      analyticsMore: "حول كل محادثة إلى معلومات تجارية قابلة للتنفيذ. توفر منصة التحليلات الشاملة لدينا تقارير مفصلة عن حجم المكالمات ومعدلات الحل والمشكلات الشائعة ورضا العملاء والاتجاهات الناشئة. حدد فرص تحسين الخدمة وتتبع مقاييس الأداء في الوقت الفعلي واتخذ قرارات مستندة إلى البيانات تعزز استراتيجية تجربة العملاء الخاصة بك.",
      security: "أمان على مستوى المؤسسات",
      securityDesc: "حماية بيانات العملاء الحساسة بتشفير من المستوى العسكري.",
      securityMore: "الأمان هو أساس منصتنا. جميع الاتصالات محمية بتشفير من طرف إلى طرف، ونمتثل للمعايير العالمية بما في ذلك GDPR وHIPAA وPCI DSS. يتضمن نظامنا المقاييس الحيوية الصوتية للمصادقة وخوارزميات كشف الاحتيال ومسارات تدقيق شاملة. تظل بيانات عملائك خاصة وآمنة، بينما لا تزال تسمح لك بالاستفادة من الرؤى القيمة من المحادثات.",
    },
    demoSection: {
      title: "شاهد الذكاء الاصطناعي قيد العمل",
      subtitle: "تجربة كيف يحول روبوت الاتصال بالذكاء الاصطناعي لدينا تفاعلات العملاء",
      aiAssistant: "مساعد الذكاء الاصطناعي",
      online: "متصل وجاهز للمساعدة",
      welcomeMessage: "مرحبا! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟",
      askQuestion: "اطرح سؤالاً",
      requestInfo: "طلب معلومات",
      accountHelp: "مساعدة في الحساب",
      howCanAssist: "كيف يمكنك مساعدة عملي؟",
      businessHours: "ما هي ساعات العمل الخاصة بك؟",
      accountSettings: "كيف أغير إعدادات حسابي؟",
      assistResponse: "يمكنني التعامل مع استفسارات العملاء وجدولة المواعيد ومعالجة الطلبات وتقديم الدعم الفني وأكثر من ذلك بكثير - كل ذلك أثناء التعلم من كل تفاعل لخدمة عملائك بشكل أفضل.",
      hoursResponse: "فريق دعم العملاء لدينا متاح على مدار الساعة طوال أيام الأسبوع. نظام الذكاء الاصطناعي لا ينام أبدًا ويمكنه مساعدة عملائك في أي وقت، بينما يتوفر الوكلاء البشريون من الاثنين إلى الجمعة من الساعة 8 صباحًا حتى 8 مساءً بالتوقيت المحلي.",
      accountResponse: "يمكنك تغيير إعدادات حسابك من خلال لوحة المسؤول. ما عليك سوى تسجيل الدخول والانتقال إلى 'الإعدادات' وتحديث تفضيلاتك. إذا كنت بحاجة إلى مساعدة، يمكنني توجيهك خطوة بخطوة خلال العملية.",
      defaultResponse: "شكرًا على رسالتك. سأكون سعيدًا بمساعدتك في ذلك. هل يمكنك تقديم مزيد من المعلومات حتى أتمكن من مساعدتك بشكل أفضل؟",
      voiceQuery: "أخبرني عن خطط التسعير الخاصة بك",
      textMessage: "أنا مهتم بخدمتك",
      instantResponses: "استجابات فورية",
      instantResponsesDesc: "لا انتظار على الخط. يوفر الذكاء الاصطناعي لدينا مساعدة فورية لعملائك، على مدار الساعة طوال أيام الأسبوع.",
      voiceEnabled: "واجهة ممكّنة صوتيًا",
      voiceEnabledDesc: "يخلق التعرف على الكلام الطبيعي والتوليف محادثات تبدو بشرية.",
      personalizedExperience: "تجربة مخصصة",
      personalizedExperienceDesc: "يتذكر الذكاء الاصطناعي التفضيلات والتاريخ لتقديم خدمة مخصصة لكل عميل.",
      startFreeTrial: "ابدأ الإصدار التجريبي المجاني",
    },
    aboutSection: {
      title: "معلومات عنا",
      subtitle: "رواد مستقبل تواصل العملاء",
      ourStory: "قصتنا",
      ourStoryContent: "تأسست شركتنا في عام 2021، وانبثقت من رؤية بسيطة: تحويل الطريقة التي تتواصل بها الشركات مع عملائها. ما بدأ كفريق صغير من المتحمسين للذكاء الاصطناعي وخبراء تجربة العملاء قد نما ليصبح رائداً عالمياً في حلول الاتصالات المدعومة بالذكاء الاصطناعي. تم تعريف رحلتنا بالابتكار المستمر والتركيز الدؤوب على إنشاء تكنولوجيا تبدو بشكل ملحوظ إنسانية.",
      mission: "مهمتنا",
      missionContent: "نحن موجودون لسد الفجوة بين الكفاءة التكنولوجية والاتصال البشري. مهمتنا هي تمكين الشركات بحلول الذكاء الاصطناعي التي لا تؤتمت المحادثات فحسب، بل تعززها، مما يخلق تفاعلات ذات مغزى تبني علاقات أقوى بين الشركات وعملائها.",
      vision: "رؤيتنا",
      visionContent: "نتصور مستقبلًا يكون فيه كل تفاعل مع العملاء فرصة للشركات لإظهار أفضل صفاتها: الاستجابة والتفهم والرعاية الحقيقية. من خلال تقنية الذكاء الاصطناعي لدينا، نجعل هذا المستقبل في متناول الشركات من جميع الأحجام في جميع أنحاء العالم.",
      values: "قيمنا",
      valuesContent: "الابتكار والنزاهة والتأثير يوجهون كل ما نقوم به. نحن نؤمن بدفع الحدود مع الحفاظ على أعلى المعايير الأخلاقية. نقيس نجاحنا ليس فقط من خلال إنجازاتنا التكنولوجية ولكن من خلال التحسينات الملموسة التي نجلبها للشركات وعملائها.",
      team: "فريقنا",
      teamMembers: {
        ceo: {
          name: "سارة جونسون",
          role: "المؤسس والرئيس التنفيذي",
          bio: "مع خلفية في اللغويات الحاسوبية و15 عاماً في قيادة التكنولوجيا، تقود سارة رؤية شركتنا واستراتيجية الابتكار."
        },
        cto: {
          name: "ماركوس تشن",
          role: "رئيس قسم التكنولوجيا",
          bio: "رائد في مجال تعلم الآلة ومعالجة اللغة الطبيعية، يقود ماركوس مبادرات البحث والتطوير لدينا."
        },
        cpo: {
          name: "بريا شارما",
          role: "رئيسة قسم المنتجات",
          bio: "بالجمع بين خبرتها في تصميم تجربة المستخدم وتجربة العملاء، تضمن بريا أن منتجاتنا تحل تحديات الأعمال الحقيقية."
        },
        cso: {
          name: "جيمس ويلسون",
          role: "رئيس قسم الاستراتيجية",
          bio: "مع خبرة واسعة في الأسواق العالمية، يوجه جيمس استراتيجية النمو وتطوير الشراكة لدينا."
        }
      }
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  t: (key: string, section?: string) => string;
  availableLanguages: Language[];
  languageNames: Record<Language, string>;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Language display names
  const languageNames: Record<Language, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    hi: 'हिंदी',
    ar: 'العربية'
  };

  // Available languages
  const availableLanguages: Language[] = ['en', 'es', 'fr', 'hi', 'ar'];

  // Is the current language RTL?
  const isRTL = language === 'ar';

  // Translation function
  const t = (key: string, section?: string): string => {
    try {
      if (section) {
        // Handle nested sections
        // @ts-ignore - Safe because we've defined structure
        return translations[language]?.[section]?.[key] || 
               translations.en[section]?.[key] || key;
      }
      
      // Handle top-level keys
      return translations[language]?.[key] || translations.en[key] || key;
    } catch (error) {
      console.error(`Translation error for key ${key} in section ${section}:`, error);
      return key; // Fallback to key itself
    }
  };

  // Set the document direction based on language
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        availableLanguages,
        languageNames,
        isRTL
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
