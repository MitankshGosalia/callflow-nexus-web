
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, ArrowRight, Layers, 
  Bot, BarChart, MessageSquare, 
  Globe, HelpCircle, Settings, Users, LayoutGrid, 
  Sparkles, Shield, Workflow, Brain, LineChart
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
      id: "security",
      name: "Enterprise Security",
      icon: <Shield className="h-6 w-6" />,
      description: "Advanced security features to protect your business data with state-of-the-art encryption, access controls, and security monitoring.",
      features: [
        "End-to-end encryption",
        "Advanced access control",
        "Security auditing",
        "Breach detection",
        "Compliance monitoring",
        "DDoS protection",
        "Secure authentication"
      ],
      pricing: {
        starter: "$299/mo",
        professional: "$899/mo",
        enterprise: "Custom"
      },
      pageUrl: "/products#security"
    },
    {
      id: "ai-workflow",
      name: "AI Workflow Automation",
      icon: <Workflow className="h-6 w-6" />,
      description: "Automate complex business processes with AI-powered workflows that learn and adapt to your company's specific needs.",
      features: [
        "Intelligent task routing",
        "Process optimization",
        "Custom workflow builder",
        "Integration ecosystem",
        "Performance analytics",
        "Decision automation",
        "AI recommendations"
      ],
      pricing: {
        starter: "$199/mo",
        professional: "$599/mo",
        enterprise: "Custom"
      },
      pageUrl: "/products#ai-workflow"
    },
    {
      id: "nlp",
      name: "Natural Language Processing",
      icon: <Brain className="h-6 w-6" />,
      description: "Harness the power of advanced natural language processing to understand customer intent, sentiment, and needs across all communication channels.",
      features: [
        "Sentiment analysis",
        "Intent recognition",
        "Entity extraction",
        "Language detection",
        "Custom NLP models",
        "Multilingual support",
        "Contextual understanding"
      ],
      pricing: {
        starter: "$349/mo",
        professional: "$999/mo",
        enterprise: "Custom"
      },
      pageUrl: "/products#nlp"
    }
  ];
  
  // Integration platforms
  const integrationPlatforms = [
    "Salesforce", "HubSpot", "Zendesk", "Zoom", "Slack", "Microsoft Teams", 
    "Shopify", "Twilio", "AWS", "Google Cloud", "Azure", "Zapier"
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How can these products integrate with my existing systems?",
      answer: "Our products feature robust API integration capabilities for seamless connection with CRM systems, e-commerce platforms, ticketing systems, and custom databases. We provide pre-built integrations for popular platforms like Salesforce, Zendesk, and more, plus custom integration services for proprietary systems."
    },
    {
      question: "Do you offer customization for enterprise needs?",
      answer: "Yes, all our products can be tailored to meet specific enterprise requirements. Our professional services team works closely with enterprise clients to understand their unique needs and configure the platform accordingly, ensuring optimal performance and alignment with business processes."
    },
    {
      question: "What kind of support is included with your products?",
      answer: "All plans include standard support with email and documentation access. Professional and Enterprise plans include priority support with guaranteed response times, dedicated account managers, and regular check-ins. Enterprise clients also receive 24/7 emergency support and custom SLAs."
    },
    {
      question: "How secure are your products?",
      answer: "Security is our top priority. We implement bank-level encryption for all data, both in transit and at rest. Our platform is compliant with GDPR, HIPAA, SOC 2, and PCI DSS standards. We regularly undergo third-party security audits and penetration testing to ensure the highest security standards."
    },
    {
      question: "Can I try your products before purchasing?",
      answer: "Absolutely! We offer free trials for all our products so you can experience their value firsthand. Enterprise customers can also request a personalized proof of concept tailored to their specific use case and requirements."
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
              
              <FadeIn delay={400}>
                <div className="flex justify-center gap-4 mt-8 flex-wrap">
                  <Link to="/products/ai-call-center" className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors">
                    AI Call Center
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link to="/products/virtual-assistant" className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary hover:bg-secondary/20 transition-colors">
                    Virtual Assistant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link to="/products/analytics-suite" className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition-colors">
                    Analytics Suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Products Tab Section */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-10 text-center">Our Enterprise Solutions</h2>
            </FadeIn>
            
            <Tabs defaultValue="security" className="w-full">
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
                            <Link to={product.pageUrl}>
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
        
        {/* Feature showcase with animations */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Cutting-Edge Technology</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our platform leverages the latest advancements in artificial intelligence and machine learning
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Smart Recommendations",
                  description: "AI-powered suggestions based on customer behavior and preferences",
                  icon: <Sparkles className="h-10 w-10" />,
                  color: "from-blue-500 to-purple-600"
                },
                {
                  title: "Predictive Analytics",
                  description: "Forecast trends and customer needs before they emerge",
                  icon: <LineChart className="h-10 w-10" />,
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "Behavioral Analysis",
                  description: "Deep insights into customer behavior patterns and preferences",
                  icon: <Users className="h-10 w-10" />,
                  color: "from-orange-500 to-amber-600"
                },
                {
                  title: "Continuous Learning",
                  description: "Systems that improve over time with each customer interaction",
                  icon: <Brain className="h-10 w-10" />,
                  color: "from-red-500 to-pink-600"
                }
              ].map((feature, index) => (
                <ScaleIn key={index} delay={index * 100}>
                  <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-shadow overflow-hidden relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(feature.icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                    
                    <div className="mt-6 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to="/features" className="inline-flex items-center text-primary text-sm">
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
        
        {/* Integration Ecosystem */}
        <section className="py-16 bg-muted/30">
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
              {integrationPlatforms.map((platform, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-card border rounded-lg p-4 h-24 flex flex-col items-center justify-center cursor-pointer hover-lift">
                      <ScaleIn>
                        <div className="text-primary mb-2">
                          <Layers className="h-8 w-8 mx-auto text-primary" />
                        </div>
                        <p className="font-medium text-sm text-center">{platform}</p>
                      </ScaleIn>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div>
                        <h4 className="text-sm font-semibold">{platform} Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Seamlessly connect your {platform} account for enhanced workflow and data synchronization.
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
        <section className="py-16">
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
        <section className="py-16 bg-muted/30">
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

export default Products;

