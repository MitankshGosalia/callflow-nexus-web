
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';

export function AboutHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <FloatingElements 
        count={10} 
        speed="slow" 
        opacity="opacity-5" 
        minSize={30} 
        maxSize={200} 
        primary 
        secondary 
        accent
        className="absolute inset-0"
      />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t('title', 'aboutSection')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              {t('subtitle', 'aboutSection')}
            </p>
            
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center animate-pulse mb-12">
              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Curve divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="currentColor" 
            fillOpacity="0.04" 
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
