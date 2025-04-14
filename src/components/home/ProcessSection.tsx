
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { Button } from '@/components/ui/button';
import { Phone, Check, PhoneCall, UserRound, Bot, PhoneOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/use-in-view';

export function ProcessSection() {
  const { t, isRTL } = useLanguage();
  
  // Set up step animation triggers with inView hooks
  const [stepOneRef, stepOneInView] = useInView<HTMLDivElement>({ threshold: 0.5, once: false });
  const [stepTwoRef, stepTwoInView] = useInView<HTMLDivElement>({ threshold: 0.5, once: false });
  const [stepThreeRef, stepThreeInView] = useInView<HTMLDivElement>({ threshold: 0.5, once: false });
  const [stepFourRef, stepFourInView] = useInView<HTMLDivElement>({ threshold: 0.5, once: false });
  
  return (
    <section 
      className="py-24 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background elements */}
      <FloatingElements 
        count={10} 
        speed="slow" 
        opacity="opacity-5" 
        minSize={20} 
        maxSize={100} 
        primary 
        secondary
      />
      
      <div className="container relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('howItWorks') || "How It Works"}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-20 max-w-2xl mx-auto">
            {t('howItWorksSubtitle') || "See our AI-driven call system in action with this interactive walkthrough"}
          </p>
        </FadeIn>
        
        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 rounded-full"></div>
          
          {/* Step 1: Incoming Call */}
          <div 
            ref={stepOneRef}
            className={`flex flex-col md:flex-row items-center mb-20 ${isRTL ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pl-10' : 'md:pr-10'} text-center md:text-right ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
              <FadeIn className={`transition-all duration-700 ${stepOneInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-3 text-gradient">{t('incomingCall') || "Incoming Call"}</h3>
                <p className="text-muted-foreground">
                  {t('incomingCallDesc') || "When a customer calls your business, our AI system immediately activates to handle the conversation professionally and efficiently."}
                </p>
              </FadeIn>
            </div>
            
            <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center z-10 my-6 md:my-0">
              <div className={`transition-all duration-700 ${stepOneInView ? 'animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20' : ''}`}></div>
              <PhoneCall className={`h-10 w-10 text-primary transition-all duration-700 ${stepOneInView ? 'animate-pulse' : ''}`} />
            </div>
            
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pr-10' : 'md:pl-10'}`}>
              <div className={`bg-card border p-6 rounded-xl shadow-lg transition-all duration-700 ${stepOneInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Phone className="h-16 w-16 text-white animate-pulse" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2: AI Answers */}
          <div 
            ref={stepTwoRef}
            className={`flex flex-col md:flex-row items-center mb-20 ${isRTL ? '' : 'md:flex-row-reverse'}`}
          >
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pr-10' : 'md:pl-10'} text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <FadeIn className={`transition-all duration-700 ${stepTwoInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-3 text-gradient">{t('aiAnswers') || "AI Answers"}</h3>
                <p className="text-muted-foreground">
                  {t('aiAnswersDesc') || "Our advanced AI responds naturally to the caller, understanding context and providing relevant information using a human-like voice."}
                </p>
              </FadeIn>
            </div>
            
            <div className="w-24 h-24 rounded-full bg-secondary/20 border-4 border-secondary flex items-center justify-center z-10 my-6 md:my-0">
              <Bot className={`h-10 w-10 text-secondary transition-all duration-700 ${stepTwoInView ? 'animate-bounce' : ''}`} />
            </div>
            
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pl-10' : 'md:pr-10'}`}>
              <div className={`bg-card border p-6 rounded-xl shadow-lg transition-all duration-700 ${stepTwoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-secondary to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-24 flex items-end justify-center space-x-1 px-4">
                          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <div 
                              key={i}
                              className={`w-3 bg-white/80 rounded-full transition-all duration-300 ${stepTwoInView ? 'animate-sound-wave' : 'h-1'}`}
                              style={{ 
                                height: `${Math.random() * 100}%`, 
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '0.8s'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3: Customer Interaction */}
          <div 
            ref={stepThreeRef}
            className={`flex flex-col md:flex-row items-center mb-20 ${isRTL ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pl-10' : 'md:pr-10'} text-center md:text-right ${isRTL ? 'md:text-left' : 'md:text-right'}`}>
              <FadeIn className={`transition-all duration-700 ${stepThreeInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-3 text-gradient">{t('customerInteraction') || "Customer Interaction"}</h3>
                <p className="text-muted-foreground">
                  {t('customerInteractionDesc') || "Customers engage naturally with our AI, which can understand complex questions, provide solutions, and handle multiple conversation threads."}
                </p>
              </FadeIn>
            </div>
            
            <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center z-10 my-6 md:my-0">
              <UserRound className={`h-10 w-10 text-accent transition-all duration-700 ${stepThreeInView ? 'animate-pulse' : ''}`} />
            </div>
            
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pr-10' : 'md:pl-10'}`}>
              <div className={`bg-card border p-6 rounded-xl shadow-lg transition-all duration-700 ${stepThreeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="chat-container p-4 bg-muted/20 rounded-lg">
                  <div className={`chat-bubble user transition-all duration-300 ${stepThreeInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <UserRound className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-accent/10 p-3 rounded-lg max-w-[80%]">
                        <p>{t('userQuestion') || "Can I upgrade my current plan?"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`chat-bubble bot mt-3 transition-all duration-300 ${stepThreeInView ? 'opacity-100 translate-x-0 delay-300' : 'opacity-0 translate-x-full'}`}>
                    <div className="flex items-start gap-2 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-secondary/10 p-3 rounded-lg max-w-[80%]">
                        <p>{t('botResponse') || "Absolutely! I can help you upgrade your plan. What specific features are you looking for?"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4: Call Completion */}
          <div 
            ref={stepFourRef}
            className={`flex flex-col md:flex-row items-center ${isRTL ? '' : 'md:flex-row-reverse'}`}
          >
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pr-10' : 'md:pl-10'} text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <FadeIn className={`transition-all duration-700 ${stepFourInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h3 className="text-2xl font-bold mb-3 text-gradient">{t('callCompletion') || "Call Completion"}</h3>
                <p className="text-muted-foreground">
                  {t('callCompletionDesc') || "The AI successfully resolves the caller's needs, logs the interaction, and can schedule follow-ups or transfer to human agents if needed."}
                </p>
              </FadeIn>
            </div>
            
            <div className="w-24 h-24 rounded-full bg-green-600/20 border-4 border-green-600 flex items-center justify-center z-10 my-6 md:my-0">
              <Check className={`h-10 w-10 text-green-600 transition-all duration-700 ${stepFourInView ? 'animate-bounce' : ''}`} />
            </div>
            
            <div className={`w-full md:w-1/2 ${isRTL ? 'md:pl-10' : 'md:pr-10'}`}>
              <div className={`bg-card border p-6 rounded-xl shadow-lg transition-all duration-700 ${stepFourInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex justify-center">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                      <PhoneOff className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      4
                    </div>
                    <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-green-600 text-white text-sm rounded-full ${stepFourInView ? 'animate-bounce' : ''}`}>
                      {t('success') || "Success!"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Link to="/features">
              {t('exploreFeatures') || "Explore All Features"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
