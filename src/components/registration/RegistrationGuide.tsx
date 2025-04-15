
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScaleIn } from '@/components/animations/AnimatedElement';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Building, User, CheckCircle, HelpCircle,
  MessageCircle, Calculator, Info, FileText
} from 'lucide-react';

export const RegistrationGuide = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const [isTyping, setIsTyping] = useState(true);
  const [message, setMessage] = useState('');
  const [showTip, setShowTip] = useState(false);
  
  const messages = [
    "Welcome! I'll guide you through the registration process. Start by entering your business details.",
    "Great! Now let's set up your admin account. This will be used to access all administrative features.",
    "Almost done! Please review your information carefully before submitting."
  ];
  
  const tips = [
    "Make sure your business email is regularly monitored, as important system notifications will be sent here.",
    "Choose a strong password that includes uppercase letters, lowercase letters, numbers, and special characters.",
    "You can add additional employees and team members after registration is complete.",
    "Your business details will be used for billing and to customize your dashboard experience."
  ];
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const simulateTyping = () => {
      setIsTyping(true);
      setMessage('');
      
      const currentMessage = messages[activeStep - 1];
      let index = 0;
      
      const typingInterval = setInterval(() => {
        setMessage(prev => prev + currentMessage[index]);
        index++;
        
        if (index >= currentMessage.length) {
          clearInterval(typingInterval);
          setIsTyping(false);
          
          // Show a tip after typing is complete
          setTimeout(() => {
            setShowTip(true);
          }, 1000);
        }
      }, 30);
      
      return () => clearInterval(typingInterval);
    };
    
    timer = setTimeout(simulateTyping, 500);
    
    return () => {
      clearTimeout(timer);
      setShowTip(false);
    };
  }, [activeStep]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.id.split('-')[1]);
            if (stepId !== activeStep) {
              setActiveStep(stepId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const stepElements = document.querySelectorAll('[id^="step-"]');
    stepElements.forEach((el) => observer.observe(el));
    
    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <ScaleIn>
      <Card className="border-primary/20 shadow-lg">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Registration Assistant</h3>
              <p className="text-muted-foreground text-sm">
                I'll help you set up your account
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Steps indicator */}
            <div className="flex justify-between relative mb-8">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step} 
                  className={`flex flex-col items-center z-10 ${step <= activeStep ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center 
                      ${step < activeStep ? 'bg-primary text-white' : 
                        step === activeStep ? 'border-2 border-primary bg-primary/10' : 
                        'border-2 border-muted'}`}
                  >
                    {step < activeStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : step === 1 ? (
                      <Building className="h-5 w-5" />
                    ) : step === 2 ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <CheckCircle className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-xs mt-1">
                    {step === 1 ? 'Business' : step === 2 ? 'Admin' : 'Review'}
                  </span>
                </div>
              ))}
              
              {/* Connecting lines */}
              <div className="absolute top-5 left-0 right-0 h-[2px] bg-muted -z-0"></div>
              <div 
                className="absolute top-5 left-0 h-[2px] bg-primary -z-0 transition-all"
                style={{ width: activeStep === 1 ? '0%' : activeStep === 2 ? '50%' : '100%' }}
              ></div>
            </div>
            
            {/* Assistant message bubble */}
            <div className="relative bg-muted/50 rounded-lg p-4 mb-4">
              <p className="leading-relaxed">
                {message}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
              
              {!isTyping && showTip && (
                <div className="mt-4 bg-background border rounded-md p-3 flex gap-3">
                  <Info className="h-5 w-5 text-primary shrink-0" />
                  <p className="text-sm">
                    {tips[Math.floor(Math.random() * tips.length)]}
                  </p>
                </div>
              )}
            </div>
            
            {/* Additional helpful information */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-4">
              <div className="flex gap-3">
                <Calculator className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-sm">Pricing Calculator</h4>
                  <p className="text-xs text-muted-foreground">
                    Add your business details to get accurate pricing.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-sm">Documentation</h4>
                  <p className="text-xs text-muted-foreground">
                    Access guides on how to get the most out of our platform.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-sm">Need Help?</h4>
                  <p className="text-xs text-muted-foreground">
                    Email us at support@aicallcenter.com for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ScaleIn>
  );
};

