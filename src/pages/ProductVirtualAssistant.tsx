
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, ArrowRight, Bot, Database, Wifi, 
  BarChart, MessageCircle, Zap, Repeat, LineChart,
  Settings, FileText, Globe, Shield, Users, Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { CTASection } from '@/components/home/CTASection';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductVirtualAssistant = () => {
  const { isRTL } = useLanguage();
  
  // Integration platforms
  const integrationPlatforms = [
    "Website", "Mobile App", "WhatsApp", "Facebook Messenger", 
    "Slack", "Microsoft Teams", "SMS", "Email", "Custom API"
  ];
  
  // Industry applications
  const industryApplications = [
    {
      industry: "E-commerce",
      description: "Help customers find products, track orders, process returns, and provide personalized recommendations.",
      icon: <Laptop className="h-6 w-6" />
    },
    {
      industry: "Financial Services",
      description: "Assist with account inquiries, transaction history, budget planning, and financial advice.",
      icon: <LineChart className="h-6 w-6" />
    },
    {
      industry: "Healthcare",
      description: "Support appointment scheduling, medication reminders, symptom checking, and health tracking.",
      icon: <Users className="h-6 w-6" />
    },
    {
      industry: "Education",
      description: "Provide course information, assignment support, scheduling, and learning resources.",
      icon: <FileText className="h-6 w-6" />
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
            accent 
          />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                    <Bot className="h-4 w-4 mr-2" />
                    Virtual Assistant Platform
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Intelligent Virtual Assistants for Every Business Need
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Our Virtual Assistant Platform creates AI assistants that understand your business, deliver personalized support, and continuously learn from interactions.
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
                  <div className="bg-card rounded-xl overflow-hidden shadow-xl h-full">
                    <div className="bg-muted/80 h-12 flex items-center px-4 border-b">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="mx-auto text-sm font-medium">Virtual Assistant Demo</div>
                    </div>
                    <div className="p-6">
                      <div className="bg-background rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Bot className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">AskAI Assistant</div>
                            <div className="text-xs text-muted-foreground">Online • Ready to help</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-4">
                        <div className="flex justify-end">
                          <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                            <p className="text-sm">Hi there! How can I help you today?</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-start">
                          <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
                            <p className="text-sm">I need help finding information about your business hours.</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 max-w-[80%]">
                            <p className="text-sm">Our main office is open Monday through Friday from 9:00 AM to 5:00 PM. Our customer support is available 24/7. Would you like me to help you with anything else?</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-start">
                          <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-[80%]">
                            <p className="text-sm">What services do you offer for small businesses?</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 max-w-[80%] animate-pulse-glow">
                            <p className="text-sm">For small businesses, we offer tailored packages including customer support automation, lead qualification, appointment scheduling, and FAQ handling. Would you like me to explain any of these services in more detail?</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <input 
                          type="text" 
                          className="w-full rounded-lg border bg-background px-4 py-2 pr-10" 
                          placeholder="Type your message..." 
                        />
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="absolute right-1 top-1 h-8 w-8 p-0" 
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
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
                <h2 className="text-3xl font-bold mb-4">Platform Capabilities</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Build powerful, customized virtual assistants that solve real business problems
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Knowledge Base Integration",
                  description: "Connect your virtual assistant to your documentation, FAQs, and internal knowledge bases to provide accurate and helpful responses.",
                  icon: <Database className="h-10 w-10" />
                },
                {
                  title: "Custom Conversation Flows",
                  description: "Design conversation pathways that guide customers through complex processes while maintaining natural interactions.",
                  icon: <MessageCircle className="h-10 w-10" />
                },
                {
                  title: "Advanced Personalization",
                  description: "Create experiences that remember user preferences, history, and behavior to provide truly personalized assistance.",
                  icon: <Users className="h-10 w-10" />
                },
                {
                  title: "Multi-Channel Deployment",
                  description: "Deploy your assistant across websites, mobile apps, messaging platforms, and more with consistent experiences.",
                  icon: <Wifi className="h-10 w-10" />
                },
                {
                  title: "Context-Aware Responses",
                  description: "Deliver responses that understand the full context of conversations, including past interactions and user intent.",
                  icon: <Bot className="h-10 w-10" />
                },
                {
                  title: "Self-Learning Capabilities",
                  description: "Virtual assistants that continuously improve through machine learning and feedback loops.",
                  icon: <Repeat className="h-10 w-10" />
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
        
        {/* Integration Channels */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Deploy Anywhere</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your virtual assistant works wherever your customers are
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {integrationPlatforms.map((platform, index) => (
                <ScaleIn key={index} delay={index * 50}>
                  <div className="border rounded-lg p-4 text-center bg-card hover-lift">
                    <p className="font-medium">{platform}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/documentation">
                  View Integration Documentation
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Industry Applications */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Industry Applications</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Virtual assistants customized for your specific industry needs
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryApplications.map((industry, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          {React.cloneElement(industry.icon, { className: "h-5 w-5 text-primary" })}
                        </div>
                        <CardTitle>{industry.industry}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{industry.description}</p>
                      <Button className="mt-4" variant="outline" asChild>
                        <Link to={`/solutions#${industry.industry.toLowerCase().replace(/\s+/g, '-')}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why Choose Our Virtual Assistant Platform?</h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "24/7 Customer Support",
                        description: "Provide round-the-clock assistance without increasing headcount or costs.",
                        icon: <Zap className="h-5 w-5" />
                      },
                      {
                        title: "Reduce Support Costs",
                        description: "Automate up to 80% of common inquiries and save on support costs.",
                        icon: <BarChart className="h-5 w-5" />
                      },
                      {
                        title: "Improve Response Times",
                        description: "Instant responses to customer questions, eliminating wait times completely.",
                        icon: <Repeat className="h-5 w-5" />
                      },
                      {
                        title: "Intelligent Escalation",
                        description: "Seamlessly transfer complex issues to human agents with full context preserved.",
                        icon: <Users className="h-5 w-5" />
                      },
                      {
                        title: "Actionable Insights",
                        description: "Gain valuable data on customer needs, common issues, and satisfaction levels.",
                        icon: <LineChart className="h-5 w-5" />
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          {React.cloneElement(benefit.icon, { className: "h-5 w-5 text-primary" })}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <ScaleIn>
                <div className="bg-card border rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-muted/50 p-6 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">ROI Calculator</h3>
                        <p className="text-sm text-muted-foreground">See your potential savings</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Current monthly support tickets</label>
                        <input type="number" className="w-full rounded-md border bg-background px-3 py-2" placeholder="5,000" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Average resolution time (minutes)</label>
                        <input type="number" className="w-full rounded-md border bg-background px-3 py-2" placeholder="12" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Average agent hourly cost ($)</label>
                        <input type="number" className="w-full rounded-md border bg-background px-3 py-2" placeholder="25" />
                      </div>
                      
                      <Button className="w-full">Calculate Savings</Button>
                      
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-sm text-center mb-2">Estimated Annual Savings</p>
                        <p className="text-3xl font-bold text-center text-primary">$240,000</p>
                        <p className="text-xs text-center text-muted-foreground mt-1">Based on 70% automation rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>
        
        {/* Implementation Process */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Quick and easy deployment in just four steps
                </p>
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery & Design",
                  description: "We work with you to understand your business, customers, and goals to design the perfect virtual assistant.",
                  icon: <Settings className="h-6 w-6" />
                },
                {
                  step: "2",
                  title: "Knowledge Transfer",
                  description: "Connect your documentation, FAQs, and business rules to train your assistant on your specific domain.",
                  icon: <Database className="h-6 w-6" />
                },
                {
                  step: "3",
                  title: "Testing & Refinement",
                  description: "We test the assistant against real-world scenarios and refine its responses for accuracy and helpfulness.",
                  icon: <Repeat className="h-6 w-6" />
                },
                {
                  step: "4",
                  title: "Deployment & Optimization",
                  description: "Launch your assistant across your chosen channels and continuously optimize based on performance data.",
                  icon: <Zap className="h-6 w-6" />
                }
              ].map((step, index) => (
                <div key={index} className={`flex ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-16 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto">
                      {step.step}
                    </div>
                    {index < 3 && (
                      <div className="h-full border-l border-dashed border-primary/30 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className={`flex-1 bg-card border rounded-lg p-6 ${index % 2 !== 0 ? 'mr-6' : 'ml-6'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {React.cloneElement(step.icon, { className: "h-5 w-5 text-primary" })}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Common questions about our Virtual Assistant Platform
                </p>
              </div>
            </FadeIn>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How long does it take to deploy a virtual assistant?",
                  answer: "Basic assistants can be deployed in as little as 1-2 weeks. More complex implementations with extensive knowledge bases and integrations typically take 3-6 weeks. We work with your timeline and can prioritize specific features for faster deployment."
                },
                {
                  question: "How accurate is the virtual assistant in answering questions?",
                  answer: "Our platform achieves over 95% accuracy for questions covered in your knowledge base. The system continuously improves through machine learning and human feedback. For questions outside its knowledge, the assistant gracefully acknowledges limitations and can escalate to human support."
                },
                {
                  question: "Can the virtual assistant integrate with our existing systems?",
                  answer: "Yes, our platform offers robust API integration capabilities for CRM systems, e-commerce platforms, ticketing systems, and custom databases. We provide pre-built integrations for popular platforms like Salesforce, Zendesk, Shopify, and more, plus custom integration services for proprietary systems."
                },
                {
                  question: "Is the platform secure and compliant with regulations?",
                  answer: "Absolutely. Our platform is built with security-first architecture, featuring end-to-end encryption, regular security audits, and compliance with GDPR, CCPA, HIPAA (for healthcare implementations), and other relevant regulations. We offer data residency options and detailed data processing agreements."
                },
                {
                  question: "How is the virtual assistant trained on our specific business?",
                  answer: "Training happens through multiple channels: document ingestion (FAQs, manuals, policies), API connections to your knowledge base, conversation logs from your existing support channels, and direct rule creation in our management interface. Our team guides you through this process to ensure optimal knowledge transfer."
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

export default ProductVirtualAssistant;
