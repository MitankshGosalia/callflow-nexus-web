
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { MessageCircle, Bot, HelpCircle, Sparkles, CheckCircle } from 'lucide-react';

export function RegistrationGuide() {
  const { t } = useLanguage();
  const [guideRef, inView] = useInView({ threshold: 0.1, once: true });
  const [activeMessage, setActiveMessage] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Messages from our guide assistant
  const messages = [
    {
      text: t('guideWelcome'),
      delay: 1000,
    },
    {
      text: t('guideBusinessInfo'),
      delay: 4000,
    },
    {
      text: t('guideAdminAccount'),
      delay: 8000,
    },
    {
      text: t('guideEmployeeAccess'),
      delay: 12000,
    },
    {
      text: t('guideCompletion'),
      delay: 16000,
    }
  ];

  // Progress the guide messages
  useEffect(() => {
    if (!inView) return;
    
    // Show typing indicator before each message
    const typingTimeout = setTimeout(() => {
      setShowTyping(true);
    }, 500);
    
    // Show each message after its delay
    const messageTimeouts = messages.map((message, index) => {
      return setTimeout(() => {
        setActiveMessage(index);
        setShowTyping(false);
        
        // Show typing again after each message (except the last one)
        if (index < messages.length - 1) {
          setTimeout(() => {
            setShowTyping(true);
          }, 2000);
        } else {
          setAnimationComplete(true);
        }
      }, message.delay);
    });
    
    return () => {
      clearTimeout(typingTimeout);
      messageTimeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [inView, messages.length]);

  // Animated waveform for the bot "speaking"
  const Waveform = () => (
    <div className="flex items-center gap-1 h-3 my-1">
      {[1, 2, 3, 4].map((bar) => (
        <span
          key={bar}
          className={cn(
            "bg-primary h-full w-1 rounded-full animate-pulse",
            animationComplete ? "opacity-0" : ""
          )}
          style={{ 
            animationDelay: `${bar * 0.1}s`,
            animationDuration: '0.8s'
          }}
        ></span>
      ))}
    </div>
  );

  return (
    <div
      ref={guideRef}
      className={cn(
        "relative p-6 rounded-xl overflow-hidden",
        inView ? "animate-fade-in" : "opacity-0"
      )}
    >
      {/* Animated avatar */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
            <Bot className="w-16 h-16 text-primary" />
          </div>
          
          {/* Pulsing ring effect */}
          <div 
            className={cn(
              "absolute inset-0 rounded-full border-4 border-primary/30 animate-ping", 
              animationComplete ? "opacity-0" : "opacity-60"
            )} 
            style={{ animationDuration: '3s' }}
          ></div>
        </div>
      </div>
      
      {/* Call bot name and status */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold flex items-center justify-center gap-2">
          <span className="text-primary">AI</span> {t('assistantGuide')}
          <span className={cn(
            "w-2 h-2 rounded-full bg-green-500",
            animationComplete ? "" : "animate-pulse"
          )}></span>
        </h2>
        <p className="text-muted-foreground text-sm">{t('hereToHelpRegister')}</p>
      </div>
      
      {/* Chat bubbles */}
      <div className="space-y-4 max-w-md mx-auto">
        {messages.slice(0, activeMessage + 1).map((message, index) => (
          <div
            key={index}
            className={cn(
              "p-3 rounded-lg bg-primary/10 border border-primary/20",
              "transform transition-all duration-500",
              index === activeMessage ? "animate-scale-in" : ""
            )}
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full p-1.5 mt-0.5">
                {index % 2 === 0 ? 
                  <MessageCircle className="w-4 h-4" /> : 
                  <Sparkles className="w-4 h-4" />
                }
              </div>
              <div>
                <p>{message.text}</p>
                {index === activeMessage && !animationComplete && <Waveform />}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {showTyping && (
          <div className="p-3 rounded-lg bg-muted animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        )}
        
        {/* Helper buttons appear after animation completes */}
        {animationComplete && (
          <div className="pt-6 space-y-2 animate-fade-in">
            <button className="flex items-center gap-2 text-sm w-full p-2 rounded-md hover:bg-primary/5 transition-colors text-left">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>{t('needHelp')}</span>
            </button>
            <button className="flex items-center gap-2 text-sm w-full p-2 rounded-md hover:bg-primary/5 transition-colors text-left">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{t('readyToStart')}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
