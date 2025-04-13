
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement'; 
import { cn } from '@/lib/utils';
import { Mic, Brain, Workflow, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  gradient?: string;
}

function FeatureCard({ title, description, icon, delay, gradient = 'from-primary to-secondary' }: FeatureCardProps) {
  return (
    <FadeIn delay={delay} className="w-full">
      <div className="h-full bg-card rounded-xl border p-6 hover-lift">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          `bg-gradient-to-br ${gradient}`
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </FadeIn>
  );
}

export function FeaturesSection() {
  const { t, isRTL } = useLanguage();
  
  const features = [
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: t('voiceRecognition', 'featuresSection'),
      description: t('voiceRecognitionDesc', 'featuresSection'),
      gradient: 'from-primary to-primary-400',
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: t('naturalLanguage', 'featuresSection'),
      description: t('naturalLanguageDesc', 'featuresSection'),
      gradient: 'from-secondary to-secondary-400',
    },
    {
      icon: <Workflow className="h-6 w-6 text-white" />,
      title: t('automation', 'featuresSection'),
      description: t('automationDesc', 'featuresSection'),
      gradient: 'from-accent to-accent-400',
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: t('analytics', 'featuresSection'),
      description: t('analyticsDesc', 'featuresSection'),
      gradient: 'from-primary-600 to-blue-light',
    },
  ];
  
  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('title', 'featuresSection')}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t('subtitle', 'featuresSection') || "Our AI-powered call system brings unmatched capabilities to your business communications"}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
