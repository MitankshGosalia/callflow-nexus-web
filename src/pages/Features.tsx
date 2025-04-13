
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Features = () => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover all the powerful capabilities of our AI-Driven Call Bot platform.
          </p>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
