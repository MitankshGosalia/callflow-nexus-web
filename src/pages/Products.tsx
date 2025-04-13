
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, ArrowRight, Phone, Headphones, 
  Bot, BarChart, MessageSquare, Layers, Shield, 
  Globe, HelpCircle, Settings, Users, LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
import { FloatingElements } from '@/components/animations/FloatingElements';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Products = () => {
  const { isRTL } = useLanguage();
  
  // Product data
  const products = [
    {
      id: "ai-call-center",
      name: "AI Call Center",
      icon: <Phone className="h-6 w-6" />,
      description: "Complete call center solution powered by advanced AI for handling customer inquiries, routing calls, and providing 24/7 support.",
      features: [
        "Intelligent call routing",
        "24/7 availability",
        "Multilingual support",
        "Real-time transcription",
        "Sentiment analysis",
        "CRM integration",
        "Custom voice creation"
      ],
      pricing: {
        starter: "$499/mo",
        professional: "$1,499/mo",
        enterprise: "Custom"
      }
    },
    {
      id: "virtual-assistant",
      name: "Virtual Assistant Platform",
      icon: <Bot className="h-6 w-6" />,
      description: "Highly customizable virtual assistants that can be trained on your business data to provide personalized customer support.",
      features: [
        "Knowledge base integration",
        "Custom conversation flows",
        "Personalization options",
        "Multi-channel deployment",
        "Context-aware responses",
        "Interactive voice response",
        "Self-learning capabilities"
      ],
      pricing: {
        starter: "$299/mo",
        professional: "$899/mo",
        enterprise: "Custom"
      }
    },
    {
      id: "analytics-suite",
      name: "Conversation Analytics Suite",
      icon: <BarChart className="h-6 w-6" />,
      description: "Powerful analytics platform that provides insights into customer interactions, sentiment trends, and business opportunities.",
      features: [
        "Real-time dashboards",
        "Custom reporting",
        "Trend analysis",
        "Call quality metrics",
        "Conversion tracking",
        "Agent performance monitoring",
        "AI-powered recommendations"
      ],
      pricing: {
        starter: "$199/mo",
        professional: "$599/mo",
        enterprise: "Custom"
      }
    }
  ];
  
  // FAQ data
  const faqs = [
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
    }
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-12 relative overflow-hidden">
          <FloatingElements 
            count={10} 
            speed="slow" 
            opacity="opacity-5" 
            minSize={30} 
            maxSize={150} 
            primary 
            secondary 
            accent
          />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  AI-Powered Communication Products
                </h1>
              </FadeIn>
              
              <FadeIn delay={200}>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                  Discover our suite of AI communication solutions designed to transform customer interactions, streamline operations, and boost satisfaction.
                </p>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/pricing">
                      View Pricing
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">
                      Request Demo
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Products Tab Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-10 text-center">Our Product Suite</h2>
            </FadeIn>
            
            <Tabs defaultValue="ai-call-center" className="w-full">
              <div className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  {products.map((product) => (
                    <TabsTrigger key={product.id} value={product.id} className="py-3">
                      <span className="flex items-center gap-2">
                        {product.icon}
                        <span className="hidden sm:inline">{product.name}</span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {products.map((product) => (
                <TabsContent key={product.id} value={product.id} className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="bg-card border rounded-xl p-8 h-full">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            {React.cloneElement(product.icon, { className: "h-6 w-6 text-primary" })}
                          </div>
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                        </div>
                        
                        <p className="text-lg text-muted-foreground mb-8">
                          {product.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-auto">
                          <Button asChild>
                            <Link to="/contact">
                              Schedule Demo
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to={`/products/${product.id}`}>
                              Learn More
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-card border rounded-xl p-6">
                        <h4 className="text-lg font-semibold mb-4">Pricing Options</h4>
                        
                        <div className="space-y-4">
                          <div className="p-4 border rounded-lg bg-background">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Starter</span>
                              <span className="text-lg font-bold">{product.pricing.starter}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">For small businesses and startups</p>
                          </div>
                          
                          <div className="p-4 border rounded-lg bg-background relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1">
                              POPULAR
                            </div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Professional</span>
                              <span className="text-lg font-bold">{product.pricing.professional}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">For growing businesses</p>
                          </div>
                          
                          <div className="p-4 border rounded-lg bg-background">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">Enterprise</span>
                              <span className="text-lg font-bold">{product.pricing.enterprise}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Custom solutions for large organizations</p>
                          </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                          <Button variant="outline" className="w-full" asChild>
                            <Link to="/pricing">
                              View Full Pricing Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Integration Ecosystem */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Integration Ecosystem</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our products seamlessly integrate with your existing tech stack and business tools.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "Salesforce", icon: <Layers className="h-8 w-8" /> },
                { name: "HubSpot", icon: <Users className="h-8 w-8" /> },
                { name: "Zendesk", icon: <Headphones className="h-8 w-8" /> },
                { name: "Zoom", icon: <MessageSquare className="h-8 w-8" /> },
                { name: "Slack", icon: <MessageSquare className="h-8 w-8" /> },
                { name: "Microsoft Teams", icon: <Users className="h-8 w-8" /> },
                { name: "Shopify", icon: <ShoppingBag className="h-8 w-8" /> },
                { name: "Twilio", icon: <Phone className="h-8 w-8" /> },
                { name: "Zapier", icon: <Workflow className="h-8 w-8" /> },
                { name: "AWS", icon: <Cloud className="h-8 w-8" /> },
                { name: "Google Cloud", icon: <Cloud className="h-8 w-8" /> },
                { name: "Azure", icon: <Cloud className="h-8 w-8" /> }
              ].map((integration, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-card border rounded-lg p-4 h-24 flex flex-col items-center justify-center cursor-pointer hover-lift">
                      <ScaleIn>
                        <div className="text-primary mb-2">
                          {React.cloneElement(integration.icon, { className: "h-8 w-8 mx-auto text-primary" })}
                        </div>
                        <p className="font-medium text-sm text-center">{integration.name}</p>
                      </ScaleIn>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div>
                        <h4 className="text-sm font-semibold">{integration.name} Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Seamlessly connect your {integration.name} account for enhanced workflow and data synchronization.
                        </p>
                        <div className="flex items-center pt-2">
                          <Link 
                            to="/documentation" 
                            className="text-xs text-primary underline underline-offset-2"
                          >
                            View Integration Documentation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
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
                  Find answers to common questions about our AI products and services.
                </p>
              </div>
            </FadeIn>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
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
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see your question here?
              </p>
              <Button asChild>
                <Link to="/contact">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See how our products have transformed businesses across industries.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The AI Call Center solution reduced our operational costs by 42% while improving customer satisfaction scores.",
                  author: "Sarah Johnson",
                  role: "CTO, Global Retail Inc.",
                  avatar: "https://i.pravatar.cc/150?img=1"
                },
                {
                  quote: "We implemented the Virtual Assistant Platform and saw immediate results in our response times and resolution rates.",
                  author: "Michael Chen",
                  role: "Head of Customer Experience, TechSolutions",
                  avatar: "https://i.pravatar.cc/150?img=8"
                },
                {
                  quote: "The analytics suite provided insights we never had before, allowing us to optimize our entire customer journey.",
                  author: "Priya Sharma",
                  role: "VP of Operations, ServiceNow",
                  avatar: "https://i.pravatar.cc/150?img=5"
                }
              ].map((testimonial, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="bg-card border p-6 rounded-xl h-full flex flex-col">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    
                    <blockquote className="text-lg mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center mt-auto">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Customer Interactions?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of businesses already using our AI-powered communication solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Missing imports
const ShoppingBag = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const Workflow = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="6" height="6" rx="1"></rect>
    <rect x="15" y="3" width="6" height="6" rx="1"></rect>
    <rect x="3" y="15" width="6" height="6" rx="1"></rect>
    <path d="M15 8v4h4"></path>
    <path d="M18 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
  </svg>
);

const Cloud = (props: any) => (
  <svg 
    {...props}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

export default Products;
