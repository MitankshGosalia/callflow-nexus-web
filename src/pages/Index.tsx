
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { DemoSection } from '@/components/home/DemoSection';
import { CTASection } from '@/components/home/CTASection';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  console.log("Rendering Index page");
  
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
