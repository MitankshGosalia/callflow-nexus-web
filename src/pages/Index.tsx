
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { VideoShowcase } from '@/components/home/VideoShowcase';
import { DemoSection } from '@/components/home/DemoSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  console.log("Rendering Index page");
  const { isRTL } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <VideoShowcase />
        <DemoSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
