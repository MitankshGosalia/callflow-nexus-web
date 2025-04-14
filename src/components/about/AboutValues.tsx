
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Lightbulb, Target, Heart, Zap } from 'lucide-react';

export function AboutValues() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Innovation",
      description: "We push the boundaries of what's possible in AI and communication technology.",
      gradient: "from-primary to-purple-400"
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Excellence",
      description: "We're committed to delivering the highest quality solutions and experiences.",
      gradient: "from-secondary to-blue-300"
    },
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Empathy",
      description: "We design technology that understands and respects human needs and emotions.",
      gradient: "from-accent to-pink-400"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Impact",
      description: "We measure success by the meaningful differences we make for our customers.",
      gradient: "from-amber-500 to-yellow-300"
    }
  ];
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t('values')}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t('valuesContent')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              gradient={value.gradient}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

function ValueCard({ icon, title, description, gradient, delay }: ValueCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-card rounded-xl border p-6 hover-lift text-center relative overflow-hidden h-full">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10" />
        
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} mx-auto flex items-center justify-center mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </FadeIn>
  );
}
