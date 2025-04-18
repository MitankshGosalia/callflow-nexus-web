
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageCircle,
  PhoneCall,
  Mail
} from 'lucide-react';
import { FadeIn, SlideInRight } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { Link } from 'react-router-dom';

const Help = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const faqs = [
    {
      question: "How do I set up my account?",
      answer: "To set up your account, navigate to the Profile page after logging in. You can update your personal information, set preferences, and configure notification settings from there."
    },
    {
      question: "How do I make a call using the platform?",
      answer: "To make a call, go to the 'Make a Call' page from the dashboard. Enter the recipient's details, choose the call type, and click the call button. Our AI system will connect you to the recipient."
    },
    {
      question: "Can I access my call history?",
      answer: "Yes, all your calls are recorded in the Call Log page. You can filter calls by date, type, and status. Each entry includes details like call duration, notes, and outcome."
    },
    {
      question: "How does the AI agent assist with calls?",
      answer: "Our AI agent can handle routine calls, provide real-time assistance during your calls, transcribe conversations, and offer analytics on customer sentiment and key discussion points."
    },
    {
      question: "What should I do if I encounter technical issues?",
      answer: "If you experience technical issues, first check your internet connection. Then try refreshing the page or logging out and back in. If problems persist, contact our support team through the Help page or via email at support@aicompany.com."
    }
  ];

  const helpResources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and documentation",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/documentation"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: <Video className="h-10 w-10 text-primary" />,
      link: "/resources/videos"
    },
    {
      title: "Community Forums",
      description: "Connect with other users",
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      link: "/resources/community"
    }
  ];
  
  // Filter FAQs based on search
  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
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
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                <HelpCircle className="inline-block mr-2 h-8 w-8 text-primary" />
                {t('helpCenter')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('helpDescription')}
              </p>
              
              <div className="relative max-w-lg mx-auto mt-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  className="pl-10"
                  placeholder="Search for help topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <SlideInRight delay={100}>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('frequentlyAskedQuestions')}</CardTitle>
                    <CardDescription>Find answers to common questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </SlideInRight>
            </div>
            
            <div>
              <SlideInRight delay={200}>
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>{t('contactSupport')}</CardTitle>
                    <CardDescription>Need more help? Reach out to our team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <PhoneCall className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@aicompany.com</p>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-2">
                      {t('startSupportChat')}
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>{t('helpfulResources')}</CardTitle>
                    <CardDescription>Explore our resources to learn more</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {helpResources.map((resource, index) => (
                      <Link key={index} to={resource.link}>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <div className="bg-primary/10 p-2 rounded-full">
                            {resource.icon}
                          </div>
                          <div>
                            <p className="font-medium">{resource.title}</p>
                            <p className="text-sm text-muted-foreground">{resource.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </SlideInRight>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
