
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, ArrowRight, Phone, Mic, Globe, 
  Users, Headphones, Bot, BarChart, MessageSquare, 
  Layers, Shield, PhoneCall, MicOff, User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CTASection } from '@/components/home/CTASection';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductAICallCenter = () => {
  const { isRTL } = useLanguage();
  
  // Case study data
  const caseStudies = [
    {
      company: "Global Retail Inc.",
      industry: "Retail",
      challenge: "Managing seasonal call volume spikes and reducing wait times",
      solution: "Implemented AI Call Center with intelligent call routing and overflow handling",
      results: "42% reduction in operational costs, 68% improvement in customer satisfaction",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      company: "HealthFirst",
      industry: "Healthcare",
      challenge: "Handling complex patient queries while maintaining HIPAA compliance",
      solution: "Custom AI voice agents trained on medical knowledge with secure authentication",
      results: "Decreased average call time by 50%, improved appointment scheduling by 35%",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
      company: "TravelWise",
      industry: "Travel & Hospitality",
      challenge: "Supporting customers across multiple languages and time zones",
      solution: "24/7 multilingual AI Call Center with custom voice agents",
      results: "Now serving customers in 12 languages, 97% first-call resolution rate",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-12 relative overflow-hidden">
          <FloatingElements 
            count={8} 
            speed="slow" 
            opacity="opacity-5" 
            minSize={30} 
            maxSize={150} 
            primary 
            secondary 
          />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                    <Phone className="h-4 w-4 mr-2" />
                    AI Call Center Solution
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Transform Your Call Center with AI Voice Technology
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Our AI Call Center solution handles customer inquiries, routes calls intelligently, and provides 24/7 support, all with the natural feel of human conversation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <Link to="/register">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact">
                        Schedule Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
              
              <ScaleIn delay={300}>
                <div className="relative bg-gradient-to-tr from-primary/20 to-secondary/20 p-1 rounded-2xl overflow-hidden">
                  <div className="bg-card rounded-xl overflow-hidden shadow-xl">
                    <div className="bg-muted/80 h-12 flex items-center px-4 border-b">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-sm font-medium">AI Call Center Dashboard</div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-background rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-muted-foreground mb-1">Active Calls</div>
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-xs text-green-500">+12% from average</div>
                        </div>
                        <div className="bg-background rounded-lg p-4 shadow-sm">
                          <div className="text-sm text-muted-foreground mb-1">Avg Wait Time</div>
                          <div className="text-2xl font-bold">0:42</div>
                          <div className="text-xs text-green-500">-30% from average</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-background rounded-lg p-3 shadow-sm animate-pulse-glow">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <PhoneCall className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Live call with Customer #1058</div>
                            <div className="text-xs text-muted-foreground">Duration: 03:42 • Sentiment: Positive</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 bg-background rounded-lg p-3 shadow-sm">
                          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                            <User className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Call transferred to agent</div>
                            <div className="text-xs text-muted-foreground">Duration: 01:15 • Complex inquiry</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 bg-background rounded-lg p-3 shadow-sm">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Issue resolved successfully</div>
                            <div className="text-xs text-muted-foreground">Duration: 04:28 • Customer satisfied</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>
        
        {/* Key Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our AI Call Center solution comes with everything you need to transform customer service
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Intelligent Call Routing",
                  description: "Automatically directs calls to the right AI agent or human representative based on customer needs, history, and agent availability.",
                  icon: <Phone className="h-10 w-10" />
                },
                {
                  title: "24/7 Availability",
                  description: "Never miss a customer call with round-the-clock AI agents that handle inquiries at any time, regardless of volume or time zone.",
                  icon: <Headphones className="h-10 w-10" />
                },
                {
                  title: "Multilingual Support",
                  description: "Communicate with customers in their preferred language with our AI agents that speak over 30 languages fluently.",
                  icon: <Globe className="h-10 w-10" />
                },
                {
                  title: "Real-time Transcription",
                  description: "Every call is transcribed in real-time with high accuracy, making it easy to review conversations and extract valuable insights.",
                  icon: <Mic className="h-10 w-10" />
                },
                {
                  title: "Sentiment Analysis",
                  description: "Automatically detect customer emotions and adjust conversation flow to improve satisfaction and resolution rates.",
                  icon: <Users className="h-10 w-10" />
                },
                {
                  title: "CRM Integration",
                  description: "Seamlessly integrate with your existing CRM systems to maintain customer history and provide personalized service.",
                  icon: <Layers className="h-10 w-10" />
                },
              ].map((feature, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card border rounded-xl p-6 h-full hover-lift">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      {React.cloneElement(feature.icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our AI Call Center integrates seamlessly with your existing systems
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Call Reception",
                    description: "Customer calls are received through your existing phone system or our cloud-based solution."
                  },
                  {
                    step: "2",
                    title: "AI Processing",
                    description: "Our AI analyzes the call in real-time, identifying the caller's intent, language, and sentiment."
                  },
                  {
                    step: "3",
                    title: "Intelligent Routing",
                    description: "The system routes the call to the appropriate AI agent capable of handling the specific query."
                  },
                  {
                    step: "4",
                    title: "Conversation & Resolution",
                    description: "AI engages in natural conversation, resolves issues, and transfers to human agents when necessary."
                  },
                  {
                    step: "5",
                    title: "Analysis & Improvement",
                    description: "All interactions are analyzed to continuously improve the system's performance and customer satisfaction."
                  },
                ].map((step, index) => (
                  <FadeIn key={index} delay={index * 100}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              
              <ScaleIn>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-1 rounded-2xl">
                  <div className="bg-card h-full w-full rounded-xl overflow-hidden">
                    <div className="relative aspect-video">
                      <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <PhoneCall className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-pulse" />
                          <p className="text-muted-foreground">Interactive Demo Video</p>
                          <Button variant="outline" className="mt-4">
                            Play Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>
        
        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore how different industries leverage our AI Call Center solution
                </p>
              </div>
            </FadeIn>
            
            <Tabs defaultValue="retail" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="retail">Retail</TabsTrigger>
                  <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                  <TabsTrigger value="finance">Finance</TabsTrigger>
                  <TabsTrigger value="travel">Travel & Hospitality</TabsTrigger>
                </TabsList>
              </div>
              
              {[
                {
                  id: "retail",
                  title: "Retail & E-commerce",
                  description: "Handle high volume of customer inquiries about orders, returns, and product information.",
                  benefits: [
                    "Manage seasonal call volume spikes without hiring temporary staff",
                    "Provide 24/7 order status updates and tracking information",
                    "Seamlessly process simple returns and exchanges",
                    "Answer product questions with detailed information",
                    "Transfer complex issues to specialized human agents"
                  ]
                },
                {
                  id: "healthcare",
                  title: "Healthcare Providers",
                  description: "Assist patients with appointment scheduling, basic health information, and insurance questions.",
                  benefits: [
                    "HIPAA-compliant patient information handling",
                    "Simplified appointment scheduling and reminders",
                    "Medication refill requests processing",
                    "Basic symptom triage with appropriate escalation",
                    "Insurance coverage verification"
                  ]
                },
                {
                  id: "finance",
                  title: "Financial Services",
                  description: "Provide secure account information and handle routine banking queries.",
                  benefits: [
                    "Secure account balance and transaction history checks",
                    "Bill payment assistance and confirmation",
                    "Card activation and basic troubleshooting",
                    "Branch and ATM location services",
                    "Fraud alert management with rapid escalation"
                  ]
                },
                {
                  id: "travel",
                  title: "Travel & Hospitality",
                  description: "Support travelers with booking information, changes, and travel assistance.",
                  benefits: [
                    "Reservation confirmations and itinerary details",
                    "Simple booking changes and updates",
                    "Check-in assistance and status updates",
                    "Multilingual support for international travelers",
                    "Local information and concierge-like recommendations"
                  ]
                }
              ].map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id} className="animate-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {useCase.description}
                      </p>
                      <div className="space-y-3">
                        {useCase.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <p>{benefit}</p>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-6" asChild>
                        <Link to="/contact">
                          Explore {useCase.title} Solution
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="bg-card border rounded-xl overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold">
                              {useCase.title} Call Center
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Sample conversation flow
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-4">
                          <div className="flex items-start gap-3">
                            <Avatar>
                              <AvatarFallback>CU</AvatarFallback>
                            </Avatar>
                            <div className="bg-muted p-3 rounded-lg">
                              <p className="text-sm">Hi, I'm calling about my recent order #12345.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 flex-row-reverse">
                            <Avatar>
                              <AvatarFallback className="bg-primary">AI</AvatarFallback>
                            </Avatar>
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <p className="text-sm">Hello! I'd be happy to help with your order #12345. I can see it was shipped yesterday and is expected to arrive on Thursday. Would you like tracking information?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <Avatar>
                              <AvatarFallback>CU</AvatarFallback>
                            </Avatar>
                            <div className="bg-muted p-3 rounded-lg">
                              <p className="text-sm">Yes, please send me the tracking number.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 flex-row-reverse">
                            <Avatar>
                              <AvatarFallback className="bg-primary">AI</AvatarFallback>
                            </Avatar>
                            <div className="bg-primary/10 p-3 rounded-lg">
                              <p className="text-sm">I've sent the tracking number to your email and phone. Is there anything else I can help with today?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See how our customers transformed their call centers with AI technology
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card border rounded-xl overflow-hidden h-full flex flex-col hover-lift">
                    <div className="p-6 flex-grow">
                      <div className="flex items-center gap-4 mb-6">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={study.avatar} />
                          <AvatarFallback>{study.company.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{study.company}</h3>
                          <p className="text-sm text-muted-foreground">{study.industry}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground">Challenge:</h4>
                          <p>{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground">Solution:</h4>
                          <p>{study.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground">Results:</h4>
                          <p>{study.results}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t p-4">
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link to="/contact">Read Full Case Study</Link>
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about our AI Call Center solution
                </p>
              </div>
            </FadeIn>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How quickly can we implement your AI call system?",
                  answer: "Our standard implementation takes 2-4 weeks depending on the complexity of your requirements. This includes initial setup, training the AI on your business data, integration with existing systems, and testing. For simpler use cases, we offer a quick-start option that can be operational within one week."
                },
                {
                  question: "Can the AI handle multiple languages?",
                  answer: "Yes, our AI call system supports over 30 languages with native-level proficiency in English, Spanish, French, German, Japanese, Mandarin, Arabic, and Hindi. Additional languages can be added upon request."
                },
                {
                  question: "How do you ensure data security and compliance?",
                  answer: "We implement bank-level encryption for all data, both in transit and at rest. Our platform is compliant with GDPR, HIPAA, SOC 2, and PCI DSS standards. We also offer data residency options for organizations with specific geographic requirements."
                },
                {
                  question: "Can the AI transfer calls to human agents when necessary?",
                  answer: "Absolutely. Our system is designed to seamlessly hand off conversations to human agents when needed. The AI can detect complex issues, emotional situations, or specific customer requests that require human intervention, and will transfer the call along with all context and conversation history."
                },
                {
                  question: "What kind of reporting and analytics do you provide?",
                  answer: "Our platform includes comprehensive analytics covering call volumes, resolution rates, customer sentiment, popular topics, peak times, and conversion metrics. All analytics are available through customizable dashboards and can be exported or accessed via API."
                },
              ].map((faq, index) => (
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
          </div>
        </section>
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductAICallCenter;
