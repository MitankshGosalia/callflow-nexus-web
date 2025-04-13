
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, Headphones, ShoppingBag, Hotel, 
  Stethoscope, Briefcase, GraduationCap, Search,
  Shield, ArrowRight, CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type Industry = {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  caseStudy?: {
    company: string;
    logo?: string;
    challenge: string;
    solution: string;
    results: string[];
  }
};

const UseCases = () => {
  const { t, isRTL } = useLanguage();
  
  const industries: Industry[] = [
    {
      id: "customer-service",
      name: "Customer Service",
      icon: <Headphones className="h-6 w-6" />,
      description: "Transform your customer support with AI call agents that handle inquiries 24/7, reduce wait times, and maintain consistent service quality.",
      benefits: [
        "24/7 support coverage without staffing concerns",
        "Consistent service quality across all interactions",
        "Immediate response to customer inquiries",
        "Seamless escalation to human agents when needed"
      ],
      caseStudy: {
        company: "GlobalSupport Inc.",
        challenge: "Managing high call volumes during peak hours while maintaining quality service.",
        solution: "Deployed AI Call Agents to handle tier-1 support queries, allowing human agents to focus on complex issues.",
        results: [
          "Reduced average wait time from 15 minutes to under 30 seconds",
          "Increased customer satisfaction scores by 28%",
          "Handled 65% of all incoming calls without human intervention"
        ]
      }
    },
    {
      id: "retail",
      name: "Retail & E-commerce",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Enhance the shopping experience with AI-powered product recommendations, order status updates, and personalized assistance for online and offline retail.",
      benefits: [
        "Personalized product recommendations",
        "Instant order status updates and tracking",
        "Seamless returns and exchange processing",
        "Consistent cross-channel customer experience"
      ],
      caseStudy: {
        company: "Fashion Forward",
        challenge: "Handling high volumes of order status and product availability queries during sale seasons.",
        solution: "Implemented AI call bots to handle routine inquiries while providing personalized product recommendations.",
        results: [
          "Processed 78% more calls during peak seasons",
          "Increased conversion rate by 15% through personalized recommendations",
          "Reduced operational costs by 32%"
        ]
      }
    },
    {
      id: "hospitality",
      name: "Hospitality",
      icon: <Hotel className="h-6 w-6" />,
      description: "Streamline reservations, provide property information, and enhance guest services with AI call agents that elevate the hospitality experience.",
      benefits: [
        "Efficient booking and reservation management",
        "Consistent information across all properties",
        "Multilingual support for international guests",
        "Personalized recommendations for amenities and services"
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Improve patient experiences with appointment scheduling, medication reminders, and preliminary symptom assessment through AI call agents.",
      benefits: [
        "Simplified appointment scheduling and reminders",
        "Medication adherence support",
        "Basic triage and symptom assessment",
        "Reduced administrative burden on medical staff"
      ]
    },
    {
      id: "finance",
      name: "Financial Services",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Provide secure, compliant banking support with AI call agents that handle account inquiries, transaction verifications, and basic financial guidance.",
      benefits: [
        "Secure account information access",
        "Transaction verification and fraud prevention",
        "Regulatory compliant customer interactions",
        "Personalized financial product recommendations"
      ]
    },
    {
      id: "education",
      name: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Support students and staff with AI call agents that assist with enrollment, course information, campus services, and administrative queries.",
      benefits: [
        "Streamlined enrollment and registration processes",
        "24/7 access to course and campus information",
        "Administrative support for students and staff",
        "Multilingual support for international students"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        <div className="container py-12">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Use Cases
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Discover how organizations across various industries are transforming their customer interactions with our AI-driven call bot technology.
            </p>
          </FadeIn>
          
          {/* Industry filter tabs */}
          <Tabs defaultValue="customer-service" className="mb-12">
            <div className="mb-8 overflow-x-auto pb-2">
              <TabsList className="inline-flex min-w-max">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry.id}
                    value={industry.id}
                    className="px-4 py-2"
                  >
                    <span className="flex items-center gap-2">
                      {industry.icon}
                      <span>{industry.name}</span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Industry overview */}
                  <div className="lg:col-span-1">
                    <Card className="h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          {React.cloneElement(industry.icon as React.ReactElement, { 
                            className: "h-6 w-6 text-primary"
                          })}
                        </div>
                        <CardTitle className="text-2xl">{industry.name}</CardTitle>
                        <CardDescription className="text-base">
                          {industry.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-lg font-medium mb-4">Key Benefits</h3>
                        <ul className="space-y-3">
                          {industry.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link to="/contact">
                            Request Demo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  {/* Case study or additional details */}
                  <div className="lg:col-span-2">
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl">
                          {industry.caseStudy 
                            ? `${industry.caseStudy.company} Success Story` 
                            : `${industry.name} Solutions`}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {industry.caseStudy ? (
                          <>
                            <div>
                              <h3 className="font-semibold text-lg mb-2">The Challenge</h3>
                              <p>{industry.caseStudy.challenge}</p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-lg mb-2">Our Solution</h3>
                              <p>{industry.caseStudy.solution}</p>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-lg mb-2">Results</h3>
                              <ul className="space-y-2">
                                {industry.caseStudy.results.map((result, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                            <Building2 className="h-16 w-16 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-medium mb-2">Custom Solutions for {industry.name}</h3>
                            <p className="text-muted-foreground mb-6 max-w-md">
                              We offer tailored AI call bot solutions specific to your {industry.name.toLowerCase()} business needs and challenges.
                            </p>
                            <Button asChild>
                              <Link to="/contact">Contact Sales for Case Studies</Link>
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Implementation Process */}
          <FadeIn className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined implementation process ensures a smooth transition to AI-powered call solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border rounded-xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-4 pt-2">Assessment & Planning</h3>
                <p className="text-muted-foreground">
                  We analyze your current call operations and develop a tailored implementation strategy.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-medium">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-4 pt-2">Configuration & Training</h3>
                <p className="text-muted-foreground">
                  Our team configures the AI system to your specific needs and trains it on your business data.
                </p>
              </div>
              
              <div className="bg-card border rounded-xl p-6 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-4 pt-2">Deployment & Optimization</h3>
                <p className="text-muted-foreground">
                  We launch your AI call system and continuously optimize its performance based on real-world data.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
