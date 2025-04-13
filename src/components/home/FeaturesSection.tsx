
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement'; 
import { cn } from '@/lib/utils';
import { 
  Mic, 
  Brain, 
  Workflow, 
  BarChart3, 
  Shield, 
  ChevronDown, 
  ChevronUp,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FloatingElements } from '../animations/FloatingElements';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  moreInfo: string;
  delay: number;
  gradient?: string;
}

function FeatureCard({ title, description, icon, moreInfo, delay, gradient = 'from-primary to-secondary' }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const { t } = useLanguage();
  
  return (
    <FadeIn delay={delay} className="w-full">
      <div className="h-full bg-card rounded-xl border p-6 hover-lift group relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"
          style={{ backgroundImage: `linear-gradient(to bottom right, var(--${gradient.split('-')[1]}), var(--${gradient.split('-')[3] || gradient.split('-')[1]}))` }}
        />
        
        {/* Icon with animation */}
        <div className="relative">
          <div className={cn(
            "w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110",
            `bg-gradient-to-br ${gradient}`
          )}>
            <ScaleIn delay={delay + 200}>
              <div className="animate-floating">
                {icon}
              </div>
            </ScaleIn>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {/* Learn more section */}
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            className="px-0 hover:bg-transparent hover:text-primary flex items-center gap-1 text-sm"
            onClick={() => setShowDialog(true)}
          >
            {t('learnMore')} <ChevronRight className="h-4 w-4 transition-transform duration-300" />
          </Button>
        </div>
      </div>
      
      {/* Feature Detail Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-md border border-primary/20">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                `bg-gradient-to-br ${gradient}`
              )}>
                {icon}
              </div>
              {title}
            </DialogTitle>
            <DialogDescription className="text-foreground/70">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p>{moreInfo}</p>
            </div>
          </div>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </FadeIn>
  );
}

// Simple arrow icon for the carousel
const ChevronRight = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export function FeaturesSection() {
  const { t, isRTL } = useLanguage();
  const [view, setView] = useState<'grid' | 'carousel'>('grid');
  
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-white" />,
      title: t('voiceRecognition', 'featuresSection'),
      description: t('voiceRecognitionDesc', 'featuresSection'),
      moreInfo: t('voiceRecognitionMore', 'featuresSection'),
      gradient: 'from-primary to-primary-400',
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: t('naturalLanguage', 'featuresSection'),
      description: t('naturalLanguageDesc', 'featuresSection'),
      moreInfo: t('naturalLanguageMore', 'featuresSection'),
      gradient: 'from-secondary to-secondary-400',
    },
    {
      icon: <Workflow className="h-8 w-8 text-white" />,
      title: t('automation', 'featuresSection'),
      description: t('automationDesc', 'featuresSection'),
      moreInfo: t('automationMore', 'featuresSection'),
      gradient: 'from-accent to-accent-400',
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: t('analytics', 'featuresSection'),
      description: t('analyticsDesc', 'featuresSection'),
      moreInfo: t('analyticsMore', 'featuresSection'),
      gradient: 'from-primary-600 to-blue-light',
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: t('security', 'featuresSection'),
      description: t('securityDesc', 'featuresSection'),
      moreInfo: t('securityMore', 'featuresSection'),
      gradient: 'from-purple-500 to-indigo-500',
    },
  ];
  
  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decorative elements */}
      <FloatingElements 
        count={8} 
        speed="slow" 
        opacity="opacity-5" 
        minSize={50} 
        maxSize={200} 
        primary 
        secondary 
        type="mixed"
      />
      
      <div className="container relative z-10">
        <FadeIn>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('title', 'featuresSection')}
            </h2>
            
            <div className="flex gap-2">
              <Button 
                variant={view === 'grid' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setView('grid')}
                className="hidden md:flex"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              </Button>
              <Button 
                variant={view === 'carousel' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setView('carousel')}
                className="hidden md:flex"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="m22 12-4-4v8l4-4Z"></path><path d="m2 12 4-4v8L2 12Z"></path></svg>
              </Button>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
            {t('subtitle', 'featuresSection') || "Our AI-powered call system brings unmatched capabilities to your business communications"}
          </p>
        </FadeIn>
        
        {/* Grid view - default on mobile, optional on desktop */}
        {view === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                moreInfo={feature.moreInfo}
                icon={feature.icon}
                gradient={feature.gradient}
                delay={100 * (index + 1)}
              />
            ))}
          </div>
        )}
        
        {/* Carousel view - optional on desktop */}
        {view === 'carousel' && (
          <div className="hidden md:block">
            <Carousel className="w-full">
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      moreInfo={feature.moreInfo}
                      icon={feature.icon}
                      gradient={feature.gradient}
                      delay={100 * (index + 1)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-center mt-8">
                <CarouselPrevious className="relative -left-0 top-0 translate-y-0 mr-2" />
                <CarouselNext className="relative -right-0 top-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
}
