
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';

export function AboutTimeline() {
  const { t } = useLanguage();
  
  return (
    <section id="about-timeline" className="py-24 relative overflow-hidden">
      <FloatingElements 
        count={6} 
        speed="slow" 
        opacity="opacity-5" 
        minSize={30} 
        maxSize={100} 
        primary 
        type="circles"
        className="absolute inset-0"
      />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t('ourStory')}
            </h2>
          </FadeIn>
          
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            {/* Timeline items */}
            <div className="space-y-24">
              <TimelineItem 
                year="2021"
                title="Origins"
                content={t('ourStoryContent')}
                alignment="right"
                icon="🚀"
                delay={0}
              />
              
              <TimelineItem 
                year="2022"
                title="Growth"
                content={t('missionContent')}
                alignment="left"
                icon="📈"
                delay={200}
              />
              
              <TimelineItem 
                year="2023"
                title="Innovation"
                content={t('visionContent')}
                alignment="right"
                icon="💡"
                delay={400}
              />
              
              <TimelineItem 
                year="2024"
                title="Global Impact"
                content={t('valuesContent')}
                alignment="left"
                icon="🌍"
                delay={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  content: string;
  alignment: 'left' | 'right';
  icon: string;
  delay: number;
}

function TimelineItem({ year, title, content, alignment, icon, delay }: TimelineItemProps) {
  return (
    <FadeIn delay={delay}>
      <div className={`md:flex items-center ${alignment === 'left' ? 'flex-row-reverse' : ''}`}>
        {/* Content */}
        <div className="md:w-1/2 p-6">
          <div className="bg-card rounded-xl border p-6 hover-lift relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -z-10" />
            
            <div className="text-2xl font-bold mb-2 text-primary">{year}</div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground">{content}</p>
          </div>
        </div>
        
        {/* Icon */}
        <div className="relative flex items-center justify-center md:w-0">
          <div className="absolute md:relative md:left-auto left-0 transform translate-y-1/2 md:transform-none mb-12 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl shadow-glow">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Empty space for alignment */}
        <div className="md:w-1/2" />
      </div>
    </FadeIn>
  );
}
