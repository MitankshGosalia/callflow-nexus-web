
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'fr' | 'hi' | 'ar';

// Define translations interface with nested structures
interface TranslationFeatures {
  title: string;
  voiceRecognition: string;
  voiceRecognitionDesc: string;
  naturalLanguage: string;
  naturalLanguageDesc: string;
  automation: string;
  automationDesc: string;
  analytics: string;
  analyticsDesc: string;
}

interface TranslationHero {
  heading: string;
  subheading: string;
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
  hero: TranslationHero;
  featuresSection: TranslationFeatures;
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
    hero: {
      heading: "Transform Your Customer Experience",
      subheading: "Powerful AI-driven telephony that understands, responds, and learns."
    },
    featuresSection: {
      title: "Revolutionary Features",
      voiceRecognition: "Advanced Voice Recognition",
      voiceRecognitionDesc: "Accurately transcribe and understand customer requests with 98% accuracy.",
      naturalLanguage: "Natural Language Processing",
      naturalLanguageDesc: "Engage customers in natural conversations with context awareness.",
      automation: "Workflow Automation",
      automationDesc: "Automate routine inquiries and tasks to free up human agents.",
      analytics: "Insightful Analytics",
      analyticsDesc: "Gain valuable insights from every customer interaction."
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
    hero: {
      heading: "Transforme Su Experiencia de Cliente",
      subheading: "Telefonía potente impulsada por IA que entiende, responde y aprende."
    },
    featuresSection: {
      title: "Características Revolucionarias",
      voiceRecognition: "Reconocimiento de Voz Avanzado",
      voiceRecognitionDesc: "Transcriba y comprenda con precisión las solicitudes de los clientes con un 98% de precisión.",
      naturalLanguage: "Procesamiento del Lenguaje Natural",
      naturalLanguageDesc: "Involucre a los clientes en conversaciones naturales con conciencia del contexto.",
      automation: "Automatización de Flujo de Trabajo",
      automationDesc: "Automatice consultas y tareas rutinarias para liberar agentes humanos.",
      analytics: "Análisis Perspicaz",
      analyticsDesc: "Obtenga información valiosa de cada interacción con el cliente."
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
    hero: {
      heading: "Transformez Votre Expérience Client",
      subheading: "Téléphonie puissante basée sur l'IA qui comprend, répond et apprend."
    },
    featuresSection: {
      title: "Fonctionnalités Révolutionnaires",
      voiceRecognition: "Reconnaissance Vocale Avancée",
      voiceRecognitionDesc: "Transcrivez et comprenez avec précision les demandes des clients avec une précision de 98%.",
      naturalLanguage: "Traitement du Langage Naturel",
      naturalLanguageDesc: "Engagez les clients dans des conversations naturelles avec une conscience du contexte.",
      automation: "Automatisation des Flux de Travail",
      automationDesc: "Automatisez les demandes et tâches routinières pour libérer les agents humains.",
      analytics: "Analyses Perspicaces",
      analyticsDesc: "Obtenez des informations précieuses de chaque interaction client."
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
    hero: {
      heading: "अपने ग्राहक अनुभव को बदलें",
      subheading: "शक्तिशाली एआई-संचालित टेलीफोनी जो समझती है, जवाब देती है और सीखती है।"
    },
    featuresSection: {
      title: "क्रांतिकारी विशेषताएं",
      voiceRecognition: "उन्नत आवाज पहचान",
      voiceRecognitionDesc: "98% सटीकता के साथ ग्राहक अनुरोधों को सटीक रूप से प्रतिलिपि बनाएं और समझें।",
      naturalLanguage: "प्राकृतिक भाषा प्रसंस्करण",
      naturalLanguageDesc: "संदर्भ जागरूकता के साथ प्राकृतिक वार्तालापों में ग्राहकों को शामिल करें।",
      automation: "कार्यप्रवाह स्वचालन",
      automationDesc: "मानव एजेंटों को मुक्त करने के लिए नियमित पूछताछ और कार्यों को स्वचालित करें।",
      analytics: "अंतर्दृष्टिपूर्ण विश्लेषण",
      analyticsDesc: "हर ग्राहक इंटरैक्शन से मूल्यवान अंतर्दृष्टि प्राप्त करें।"
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
    hero: {
      heading: "قم بتحويل تجربة العملاء لديك",
      subheading: "هاتف قوي مدعوم بالذكاء الاصطناعي يفهم ويستجيب ويتعلم."
    },
    featuresSection: {
      title: "ميزات ثورية",
      voiceRecognition: "التعرف المتقدم على الصوت",
      voiceRecognitionDesc: "نسخ وفهم طلبات العملاء بدقة تصل إلى 98٪.",
      naturalLanguage: "معالجة اللغة الطبيعية",
      naturalLanguageDesc: "إشراك العملاء في محادثات طبيعية مع وعي بالسياق.",
      automation: "أتمتة سير العمل",
      automationDesc: "أتمتة الاستفسارات والمهام الروتينية لتحرير الوكلاء البشريين.",
      analytics: "تحليلات مفيدة",
      analyticsDesc: "الحصول على رؤى قيمة من كل تفاعل مع العملاء."
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

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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
        const sectionParts = section.split('.');
        
        if (sectionParts.length > 1) {
          // For deeply nested keys like "features.title"
          const mainSection = sectionParts[0];
          const subKey = sectionParts[1];
          
          // @ts-ignore - We'll handle this dynamically
          return translations[language]?.[mainSection]?.[subKey] || 
                translations.en[mainSection]?.[subKey] || key;
        }
        
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
  React.useEffect(() => {
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
