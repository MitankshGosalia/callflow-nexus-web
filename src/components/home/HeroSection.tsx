import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { Button } from '@/components/ui/button';
import { ArrowRight, PhoneCall, MessageCircle, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background Elements */}
      <FloatingElements 
        count={15} 
        speed="slow" 
        type="mixed" 
        className="opacity-80"
        primary 
        secondary 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn delay={100}>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6 animate-pulse-glow">
              <span className="h-2 w-2 rounded-full bg-primary me-2"></span>
              Next Generation Call Management Platform
            </span>
          </FadeIn>
          
          <FadeIn delay={300}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gradient">
              Transform Your Business Communications
            </h1>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl">
              Experience seamless customer interactions with our AI-powered call management system. Automate responses, gather insights, and scale your business communications effortlessly.
            </p>
          </FadeIn>
          
          <FadeIn delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="text-lg group" asChild>
                <Link to="/register">
                  {t('getStarted')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link to="/features">
                  {t('learnMore')}
                </Link>
              </Button>
            </div>
          </FadeIn>
          
          {/* Animated Hero Graphic */}
          <FadeIn delay={1000} className="w-full">
            <div className="relative max-w-5xl mx-auto rounded-2xl bg-glass-dark p-1 shadow-xl border border-primary/10">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-primary shadow-lg flex items-center justify-center animate-float">
                  <PhoneCall className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8">
                <div className="w-16 h-16 rounded-full bg-accent shadow-lg flex items-center justify-center animate-float-slow">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6">
                <div className="w-16 h-16 rounded-full bg-secondary shadow-lg flex items-center justify-center animate-float-fast">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden bg-blue-dark/70 h-80 sm:h-96 md:h-[500px] flex items-center justify-center">
                <div className="text-center space-y-6 max-w-md px-6">
                  <div className={cn(
                    "h-16 w-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center",
                    "animate-pulse"
                  )}>
                    <div className="h-8 w-8 rounded-full bg-primary animate-pulse-glow"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 mx-auto bg-white/10 rounded"></div>
                    <div className="h-4 w-2/3 mx-auto bg-white/10 rounded"></div>
                    <div className="h-4 w-5/6 mx-auto bg-white/10 rounded"></div>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <div className="h-10 w-24 bg-primary/20 rounded-md"></div>
                    <div className="h-10 w-24 bg-white/10 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-muted/10">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,170.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
}
