
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutValues } from '@/components/about/AboutValues';
import { TeamSection } from '@/components/about/TeamSection';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main>
        <AboutHero />
        <AboutTimeline />
        <AboutValues />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
