
import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { FloatingElements } from '@/components/animations/FloatingElements';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <FloatingElements 
        count={8} 
        speed="slow" 
        className="opacity-10" 
        primary 
        accent 
      />
      
      <div className="container relative">
        <div className="relative bg-gradient-to-br from-primary-600 to-blue-dark rounded-2xl p-1 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M0,0 L100,0 L100,100 L0,100 Z" 
                fill="url(#grid-pattern)" 
                strokeWidth="0.5"
                stroke="rgba(255,255,255,0.2)" 
              />
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path 
                    d="M0,0 L10,0 L10,10 L0,10 Z" 
                    fill="none" 
                    strokeWidth="0.5" 
                    stroke="rgba(255,255,255,0.2)" 
                  />
                </pattern>
              </defs>
            </svg>
          </div>
          
          <div className="bg-primary-600/50 backdrop-blur-sm rounded-xl px-6 py-12 md:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  Ready to Transform Your Customer Interactions?
                </h2>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p className="text-lg md:text-xl text-white/80 mb-10">
                  Join thousands of businesses that have revolutionized their customer service with our AI-powered call technology. Get started today with a free 30-day trial.
                </p>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-white/90 text-lg group"
                    asChild
                  >
                    <Link to="/pricing">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 text-lg"
                    asChild
                  >
                    <Link to="/contact">Schedule Demo</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
