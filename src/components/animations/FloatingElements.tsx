
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  className?: string;
  count?: number;
  speed?: 'slow' | 'medium' | 'fast';
  type?: 'circles' | 'squares' | 'triangles' | 'mixed';
  opacity?: string;
  minSize?: number;
  maxSize?: number;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
}

export function FloatingElements({
  className,
  count = 10,
  speed = 'medium',
  type = 'circles',
  opacity = 'opacity-10',
  minSize = 10,
  maxSize = 50,
  primary = true,
  secondary = false,
  accent = false
}: FloatingElementsProps) {
  const elements = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const animationDelay = Math.random() * 5;
    const animationDuration = 
      speed === 'slow' ? 15 + Math.random() * 10 : 
      speed === 'fast' ? 4 + Math.random() * 6 : 
      8 + Math.random() * 7;
    
    const getColors = () => {
      const colors = [];
      if (primary) colors.push('bg-primary');
      if (secondary) colors.push('bg-secondary');
      if (accent) colors.push('bg-accent');
      if (colors.length === 0) return 'bg-primary';
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const color = getColors();
    
    const getShape = () => {
      if (type === 'mixed') {
        const shapes = ['rounded-full', 'rounded-none', 'rounded-triangle'];
        return shapes[Math.floor(Math.random() * shapes.length)];
      }
      
      if (type === 'circles') return 'rounded-full';
      if (type === 'squares') return 'rounded-none';
      return 'rounded-triangle'; // triangles (using CSS)
    };
    
    const shape = getShape();
    
    return (
      <div
        key={i}
        className={cn(
          'absolute inline-block blur-[1px]',
          shape,
          color,
          opacity
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${xPos}%`,
          top: `${yPos}%`,
          animation: `float ${animationDuration}s ease-in-out infinite`,
          animationDelay: `${animationDelay}s`
        }}
      />
    );
  });

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {elements}
    </div>
  );
}
