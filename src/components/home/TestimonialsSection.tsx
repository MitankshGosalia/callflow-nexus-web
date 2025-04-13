
import React, { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Customer Support Director",
    company: "TechVision Inc.",
    quote: "Implementing this AI call bot transformed our customer service operations. Our response times improved by 87% and customer satisfaction scores are at an all-time high.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO",
    company: "GlobalCommerce",
    quote: "The AI call bot's ability to understand context and customer intent is remarkable. We've automated 65% of routine inquiries while maintaining a personal touch that our customers appreciate.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Jessica Williams",
    title: "Operations Manager",
    company: "SecureTech Solutions",
    quote: "The multilingual support has helped us expand to new markets without hiring additional staff. Our call center efficiency has increased dramatically while reducing operational costs.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Hear what our customers are saying about their experience with our AI-driven call technology
          </p>
        </FadeIn>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card border shadow-sm rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <p className="text-lg md:text-xl italic mb-6">"{testimonial.quote}"</p>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-muted-foreground">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm shadow-sm border hidden md:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm shadow-sm border hidden md:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
