
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FloatingElements } from '../animations/FloatingElements';
import { Mic, User, Bot, Phone, HelpCircle, Send, Info } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
}

interface AudioWaveProps {
  isActive: boolean;
}

const AudioWave = ({ isActive }: AudioWaveProps) => {
  const bars = 8;
  
  return (
    <div className={cn(
      "flex items-end h-4 gap-0.5 mx-1",
      !isActive && "opacity-0"
    )}>
      {Array.from({ length: bars }).map((_, i) => {
        const randomHeight = isActive ? Math.random() * 100 : 30;
        
        return (
          <div 
            key={i}
            className="w-0.5 bg-primary rounded-full transition-all duration-300 ease-in-out"
            style={{ 
              height: `${randomHeight}%`, 
              animationDelay: `${i * 0.1}s`,
              animation: isActive ? `pulse 0.5s infinite alternate ${i * 0.1}s` : 'none'
            }}
          />
        )
      })}
    </div>
  );
};

export function DemoSection() {
  const { t, isRTL } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [botTyping, setBotTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  
  // Demo conversation options
  const demoOptions = [
    {
      icon: <HelpCircle className="h-4 w-4" />,
      label: t('askQuestion'),
      query: t('howCanAssist')
    },
    {
      icon: <Info className="h-4 w-4" />,
      label: t('requestInfo'),
      query: t('businessHours')
    },
    {
      icon: <User className="h-4 w-4" />,
      label: t('accountHelp'),
      query: t('accountSettings')
    }
  ];
  
  // Bot responses to demo queries
  const getBotResponse = (query: string): string => {
    if (query.includes(t('howCanAssist'))) {
      return t('assistResponse');
    }
    if (query.includes(t('businessHours'))) {
      return t('hoursResponse');
    }
    if (query.includes(t('accountSettings'))) {
      return t('accountResponse');
    }
    return t('defaultResponse');
  };
  
  // Add a new message to the chat
  const addMessage = (text: string, sender: 'user' | 'bot', isTyping = false) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      isTyping
    };
    
    setMessages(prev => [...prev, newMessage]);
  };
  
  // Handle sending a message
  const handleSendMessage = (text: string) => {
    addMessage(text, 'user');
    
    // Simulate bot typing
    setTimeout(() => {
      setBotTyping(true);
      
      // Simulate bot response after typing
      setTimeout(() => {
        setBotTyping(false);
        addMessage(getBotResponse(text), 'bot');
      }, 2000);
    }, 500);
  };
  
  // Simulation of voice recording
  const handleRecording = () => {
    setIsRecording(true);
    
    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false);
      handleSendMessage(t('voiceQuery'));
    }, 3000);
  };
  
  // Add bot typing indicator when typing
  useEffect(() => {
    if (botTyping) {
      addMessage("", 'bot', true);
    } else {
      setMessages(prev => prev.filter(m => !m.isTyping));
    }
  }, [botTyping]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Start with welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      addMessage(t('welcomeMessage'), 'bot');
    }, 800);
    
    return () => clearTimeout(timer);
  }, [t]);
  
  return (
    <section 
      id="demo" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/80"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background decorative elements */}
      <FloatingElements 
        count={6} 
        speed="slow" 
        opacity="opacity-5" 
        minSize={30} 
        maxSize={120} 
        primary 
        accent
        type="circles"
      />
      
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side: Chat demo */}
          <FadeIn delay={200} className="w-full">
            <div className="bg-card rounded-2xl border overflow-hidden shadow-lg relative h-[500px] md:h-[600px] flex flex-col max-w-md mx-auto">
              {/* Chat header */}
              <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></span>
                  </div>
                  <div>
                    <h3 className="font-medium">{t('aiAssistant')}</h3>
                    <p className="text-xs text-muted-foreground">{t('online')}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Chat messages */}
              <div 
                ref={chatRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin"
              >
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={cn(
                      "flex",
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div className={cn(
                      "max-w-[80%] rounded-2xl p-3",
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-tr-none' 
                        : 'bg-muted rounded-tl-none'
                    )}>
                      {message.isTyping ? (
                        <div className="flex items-center justify-center h-6 w-16">
                          <div className="dot-flashing" />
                        </div>
                      ) : (
                        <p>{message.text}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chat demo options */}
              <div className="p-4 bg-card border-t">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-thin">
                  {demoOptions.map((option, i) => (
                    <Button 
                      key={i}
                      variant="outline" 
                      size="sm"
                      className="whitespace-nowrap flex-shrink-0"
                      onClick={() => handleSendMessage(option.query)}
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </Button>
                  ))}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button 
                        variant={isRecording ? "destructive" : "outline"}
                        size="icon" 
                        className={cn(
                          "rounded-full transition-all",
                          isRecording && "animate-pulse"
                        )}
                        onClick={handleRecording}
                      >
                        <Mic className="h-4 w-4" />
                      </Button>
                      
                      {isRecording && <AudioWave isActive={isRecording} />}
                      
                      <Button 
                        variant="outline"
                        size="icon" 
                        className="rounded-full"
                        onClick={() => handleSendMessage(t('textMessage'))}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glowing effect around the card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy -z-10"></div>
            </div>
          </FadeIn>
          
          {/* Right side: Features */}
          <FadeIn delay={400} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </span>
                {t('instantResponses')}
              </h3>
              <p className="text-muted-foreground">{t('instantResponsesDesc')}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Mic className="h-5 w-5 text-secondary" />
                </span>
                {t('voiceEnabled')}
              </h3>
              <p className="text-muted-foreground">{t('voiceEnabledDesc')}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-accent" />
                </span>
                {t('personalizedExperience')}
              </h3>
              <p className="text-muted-foreground">{t('personalizedExperienceDesc')}</p>
            </div>
            
            <Button size="lg" className="mt-6">
              {t('startFreeTrial')}
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
