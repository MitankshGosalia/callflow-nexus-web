
import React, { useState, useRef, useEffect } from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff,
  Settings,
  Volume2,
  MessagesSquare,
  Phone,
  History,
  BookOpen
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FadeIn, ScaleIn, SlideInRight } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { cn } from '@/lib/utils';

const AIAgent = () => {
  const { t, isRTL } = useLanguage();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hello! I\'m your AI assistant. How can I help you today?', time: '10:00 AM' },
    { sender: 'user', text: 'I need help setting up a new virtual assistant for my team.', time: '10:01 AM' },
    { sender: 'bot', text: 'Of course! I can guide you through the process. First, let me ask a few questions about your team\'s needs.', time: '10:01 AM' },
    { sender: 'bot', text: 'How many team members will be using the virtual assistant?', time: '10:01 AM' },
    { sender: 'user', text: 'We have about 15 team members who need access.', time: '10:02 AM' },
    { sender: 'bot', text: 'Great! And what are the primary tasks you\'d like the virtual assistant to help with? For example: call handling, scheduling, data entry, etc.', time: '10:02 AM' }
  ]);
  const [isRecording, setIsRecording] = useState(false);
  const chatEndRef = useRef(null);
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMsg = { sender: 'user', text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatHistory([...chatHistory, userMsg]);
    setMessage('');
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botReply = { 
        sender: 'bot', 
        text: "I understand you need help with that. Let me provide some assistance or connect you to the right resource.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, botReply]);
    }, 1000);
  };
  
  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);
  
  // Sample suggested prompts
  const suggestedPrompts = [
    "How do I set up call forwarding?",
    "Schedule a team meeting",
    "Connect to my email account",
    "Generate a call report"
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar isDashboard={true} />
      <main className="container pt-28 pb-20 relative">
        <FloatingElements 
          count={6} 
          speed="slow" 
          opacity="opacity-5" 
          minSize={20} 
          maxSize={100} 
          primary
          className="absolute inset-0"
        />
        
        <div className="relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-1 flex items-center gap-2">
                  <Bot className="h-8 w-8 text-primary" />
                  {t('aiAssistant')}
                </h1>
                <p className="text-muted-foreground">{t('aiAssistantDescription')}</p>
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                {t('configureAssistant')}
              </Button>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with AI capabilities */}
            <div className="lg:col-span-1">
              <SlideInRight delay={100}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{t('assistantCapabilities')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <div className="p-3 bg-primary/10 rounded-lg flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Call Management</p>
                          <p className="text-xs text-muted-foreground">Handle incoming calls</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-primary/10 rounded-lg flex items-center gap-3">
                        <MessagesSquare className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Chat Support</p>
                          <p className="text-xs text-muted-foreground">Answer questions</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-primary/10 rounded-lg flex items-center gap-3">
                        <History className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Call History</p>
                          <p className="text-xs text-muted-foreground">Track all interactions</p>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-primary/10 rounded-lg flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Knowledge Base</p>
                          <p className="text-xs text-muted-foreground">Access company info</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Assistant Status</p>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 flex items-center gap-1 w-fit">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        Active & Ready
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </SlideInRight>
            </div>
            
            {/* Main chat area */}
            <div className="lg:col-span-3">
              <ScaleIn>
                <Card className="h-full">
                  <CardHeader className="border-b pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="AI Assistant" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>Virtual Assistant</CardTitle>
                        <CardDescription>AI-powered help</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex flex-col h-[500px]">
                      <div className="flex-1 overflow-y-auto mb-4 pr-2">
                        {chatHistory.map((msg, index) => (
                          <div 
                            key={index} 
                            className={cn(
                              "mb-4 flex",
                              msg.sender === 'user' ? "justify-end" : "justify-start"
                            )}
                          >
                            {msg.sender === 'bot' && (
                              <Avatar className="h-8 w-8 mr-2 mt-1">
                                <AvatarImage src="/placeholder.svg" alt="AI" />
                                <AvatarFallback>AI</AvatarFallback>
                              </Avatar>
                            )}
                            
                            <div 
                              className={cn(
                                "max-w-[80%] rounded-lg px-4 py-2",
                                msg.sender === 'user' 
                                  ? "bg-primary text-primary-foreground" 
                                  : "bg-muted"
                              )}
                            >
                              <p className="text-sm">{msg.text}</p>
                              <p className="text-xs opacity-70 mt-1 text-right">{msg.time}</p>
                            </div>
                            
                            {msg.sender === 'user' && (
                              <Avatar className="h-8 w-8 ml-2 mt-1">
                                <AvatarImage src="/placeholder.svg" alt="User" />
                                <AvatarFallback>U</AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                        ))}
                        <div ref={chatEndRef} />
                      </div>
                      
                      {/* Suggested prompts */}
                      <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                        {suggestedPrompts.map((prompt, index) => (
                          <Button 
                            key={index} 
                            variant="outline" 
                            size="sm" 
                            className="whitespace-nowrap"
                            onClick={() => setMessage(prompt)}
                          >
                            {prompt}
                          </Button>
                        ))}
                      </div>
                      
                      {/* Message input */}
                      <form onSubmit={sendMessage} className="flex gap-2">
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="icon" 
                          className={cn(isRecording && "bg-red-500 text-white")}
                          onClick={toggleRecording}
                        >
                          {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        </Button>
                        
                        <Input 
                          placeholder="Type your message..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-1"
                        />
                        
                        <Button type="submit">
                          <Send className="h-4 w-4 mr-2" />
                          {t('send')}
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIAgent;
