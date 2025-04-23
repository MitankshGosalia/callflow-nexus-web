
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
import Logo from '@/components/Logo';  // Changed from { Logo } to default import

const Index = () => {
  console.log("Rendering Index page");
  const { isRTL } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main>
        <section className="pt-24 pb-8 text-center bg-gradient-to-t from-primary/10 to-background relative z-10">
          <div className="mb-4 flex flex-col items-center">
            <Logo size={68} />
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-2">
              AI Call Bot
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Intelligent calls & virtual assistance for modern businesses—<br className="hidden sm:block" />
              seamless, automated, and AI-powered!
            </p>
          </div>
        </section>
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
