
import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  animation: string;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function AnimatedElement({
  children,
  animation,
  className,
  threshold = 0.1,
  delay = 0,
  duration,
  once = true
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animation,
        isVisible && 'opacity-100',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: duration ? `${duration}ms` : undefined,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export const FadeIn = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement {...props} animation="animate-fade-in" />
);

export const FadeInUp = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement {...props} animation="animate-fade-in" />
);

export const ScaleIn = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement {...props} animation="animate-scale-in" />
);

export const SlideInRight = (props: Omit<AnimatedElementProps, 'animation'>) => (
  <AnimatedElement {...props} animation="animate-slide-in-right" />
);
