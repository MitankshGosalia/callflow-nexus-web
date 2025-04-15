
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, ArrowRight, BarChart, LineChart, PieChart,
  TrendingUp, TrendingDown, Zap, Database, Filter,
  Users, Bell, Layers, Smartphone, Download, FileText
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
  CardHeader,
  CardTitle,
  CardDescription, // Added missing CardDescription import
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductAnalyticsSuite = () => {
  const { isRTL } = useLanguage();
  
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
            secondary 
            accent 
          />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div>
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-6">
                    <BarChart className="h-4 w-4 mr-2" />
                    Conversation Analytics Suite
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Turn Conversation Data Into Business Intelligence
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Our Analytics Suite transforms customer interaction data into actionable insights, revealing trends, opportunities, and areas for improvement across your business.
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
                      <div className="mx-auto text-sm font-medium">Analytics Dashboard</div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-background rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-muted-foreground">Calls</div>
                          <div className="text-xl font-bold">5,724</div>
                          <div className="flex items-center text-xs text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +12%
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-muted-foreground">Avg Duration</div>
                          <div className="text-xl font-bold">4:12</div>
                          <div className="flex items-center text-xs text-green-500">
                            <TrendingDown className="h-3 w-3 mr-1" />
                            -8%
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 shadow-sm">
                          <div className="text-xs text-muted-foreground">Resolution</div>
                          <div className="text-xl font-bold">94%</div>
                          <div className="flex items-center text-xs text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            +3%
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background rounded-lg p-4 mb-6">
                        <div className="mb-2 flex justify-between items-center">
                          <h4 className="text-sm font-medium">Call Volume Trend</h4>
                          <div className="text-xs text-muted-foreground">Last 30 days</div>
                        </div>
                        <div className="h-40 flex items-end gap-1">
                          {/* Simulated chart bars */}
                          {Array.from({ length: 30 }).map((_, i) => {
                            const height = Math.random() * 80 + 20;
                            return (
                              <div 
                                key={i} 
                                className="bg-primary/70 rounded-t w-full"
                                style={{ height: `${height}%` }}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="bg-background rounded-lg p-4">
                        <div className="mb-2 flex justify-between items-center">
                          <h4 className="text-sm font-medium">Top Customer Topics</h4>
                          <div className="text-xs text-muted-foreground">This week</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span>Product Inquiries</span>
                            <span className="font-medium">32%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '32%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span>Technical Support</span>
                            <span className="font-medium">28%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '28%' }}></div>
                          </div>
                          
                          <div className="flex justify-between items-center text-sm">
                            <span>Billing Questions</span>
                            <span className="font-medium">18%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '18%' }}></div>
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
                <h2 className="text-3xl font-bold mb-4">Powerful Analytics Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive tools to understand, measure, and optimize customer interactions
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Dashboards",
                  description: "Monitor key metrics as they happen with customizable dashboards that update in real-time.",
                  icon: <BarChart className="h-10 w-10" />
                },
                {
                  title: "Custom Reporting",
                  description: "Create and schedule personalized reports to track the metrics that matter most to your business.",
                  icon: <FileText className="h-10 w-10" />
                },
                {
                  title: "Trend Analysis",
                  description: "Identify patterns and trends in customer inquiries, sentiment, and satisfaction over time.",
                  icon: <LineChart className="h-10 w-10" />
                },
                {
                  title: "Call Quality Metrics",
                  description: "Measure conversation quality, resolution rates, and customer satisfaction across all interactions.",
                  icon: <PieChart className="h-10 w-10" />
                },
                {
                  title: "Conversion Tracking",
                  description: "Track how conversations lead to sales, sign-ups, or other valuable business outcomes.",
                  icon: <TrendingUp className="h-10 w-10" />
                },
                {
                  title: "AI Recommendations",
                  description: "Receive intelligent suggestions for improving agent training, scripts, and customer experience.",
                  icon: <Zap className="h-10 w-10" />
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
        
        {/* Data Visualization Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScaleIn>
                <div className="bg-card border rounded-lg p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4">Customer Sentiment Analysis</h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-background rounded-lg p-3 text-center">
                      <div className="text-green-500 text-2xl font-bold">64%</div>
                      <div className="text-xs text-muted-foreground">Positive</div>
                    </div>
                    <div className="bg-background rounded-lg p-3 text-center">
                      <div className="text-blue-500 text-2xl font-bold">22%</div>
                      <div className="text-xs text-muted-foreground">Neutral</div>
                    </div>
                    <div className="bg-background rounded-lg p-3 text-center">
                      <div className="text-amber-500 text-2xl font-bold">9%</div>
                      <div className="text-xs text-muted-foreground">Mixed</div>
                    </div>
                    <div className="bg-background rounded-lg p-3 text-center">
                      <div className="text-red-500 text-2xl font-bold">5%</div>
                      <div className="text-xs text-muted-foreground">Negative</div>
                    </div>
                  </div>
                  
                  <div className="bg-background rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-3">Sentiment Trend (30 days)</h4>
                    <div className="h-64 w-full">
                      <div className="h-full flex items-end">
                        <div className="w-full h-full flex items-end justify-between">
                          {/* Simulated line chart */}
                          <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                            <path
                              d="M0,75 C50,65 100,100 150,50 C200,0 250,25 300,60"
                              fill="none"
                              stroke="rgba(16,185,129,0.6)"
                              strokeWidth="3"
                            />
                            <path
                              d="M0,110 C50,120 100,95 150,105 C200,115 250,110 300,100"
                              fill="none"
                              stroke="rgba(245,158,11,0.6)"
                              strokeWidth="3"
                            />
                            <path
                              d="M0,130 C50,125 100,135 150,130 C200,125 250,140 300,135"
                              fill="none"
                              stroke="rgba(239,68,68,0.6)"
                              strokeWidth="3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2 space-x-6">
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-xs">Positive</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                        <span className="text-xs">Mixed</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                        <span className="text-xs">Negative</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
              
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold mb-6">Advanced Data Visualization</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Transform complex conversation data into clear, actionable visualizations that tell the story behind your customer interactions.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Multi-dimensional Analysis",
                        description: "Analyze conversations across time, channel, topic, sentiment, and outcome to uncover multifaceted insights.",
                        icon: <Filter className="h-5 w-5" />
                      },
                      {
                        title: "Automated Pattern Detection",
                        description: "Our AI automatically identifies recurring patterns and anomalies in your conversation data.",
                        icon: <TrendingUp className="h-5 w-5" />
                      },
                      {
                        title: "Interactive Reports",
                        description: "Drill down into data with interactive reports that let you explore insights from multiple angles.",
                        icon: <Smartphone className="h-5 w-5" />
                      },
                      {
                        title: "Export & Integration",
                        description: "Easily export reports or connect your analytics to existing BI tools via our robust API.",
                        icon: <Download className="h-5 w-5" />
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          {React.cloneElement(feature.icon, { className: "h-5 w-5 text-primary" })}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        
        {/* Use Cases Tabs */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Analytics for Every Department</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Tailored insights for different teams across your organization
                </p>
              </div>
            </FadeIn>
            
            <Tabs defaultValue="customer-service" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList>
                  <TabsTrigger value="customer-service">Customer Service</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="product">Product Teams</TabsTrigger>
                  <TabsTrigger value="executive">Executive</TabsTrigger>
                </TabsList>
              </div>
              
              {[
                {
                  id: "customer-service",
                  title: "Customer Service Insights",
                  description: "Optimize agent performance and customer satisfaction with detailed interaction analytics.",
                  metrics: [
                    "Average handling time",
                    "First-call resolution rate",
                    "Transfer rate",
                    "Customer effort score",
                    "Agent performance comparisons",
                    "Topic identification"
                  ],
                  icon: <Users className="h-6 w-6" />
                },
                {
                  id: "marketing",
                  title: "Marketing Intelligence",
                  description: "Uncover customer preferences, pain points, and messaging effectiveness.",
                  metrics: [
                    "Campaign performance tracking",
                    "Customer feedback analysis",
                    "Competitor mentions",
                    "Product interest tracking",
                    "Conversion path analysis",
                    "Message effectiveness"
                  ],
                  icon: <TrendingUp className="h-6 w-6" />
                },
                {
                  id: "product",
                  title: "Product Development Insights",
                  description: "Capture voice-of-customer data to inform product improvements and innovation.",
                  metrics: [
                    "Feature request tracking",
                    "Pain point analysis",
                    "User experience feedback",
                    "Bug report aggregation",
                    "Competitive comparison",
                    "Product sentiment trends"
                  ],
                  icon: <Layers className="h-6 w-6" />
                },
                {
                  id: "executive",
                  title: "Executive Dashboards",
                  description: "High-level metrics and trends for strategic decision making.",
                  metrics: [
                    "Customer satisfaction trends",
                    "Operational efficiency metrics",
                    "Revenue impact assessment",
                    "Cross-department insights",
                    "Strategic opportunity identification",
                    "Risk factor monitoring"
                  ],
                  icon: <BarChart className="h-6 w-6" />
                }
              ].map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id} className="animate-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          {React.cloneElement(useCase.icon, { className: "h-5 w-5 text-primary" })}
                        </div>
                        <h3 className="text-2xl font-bold">{useCase.title}</h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {useCase.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {useCase.metrics.map((metric, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <p>{metric}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild>
                        <Link to="/contact">Request {useCase.title} Demo</Link>
                      </Button>
                    </div>
                    
                    <div className="bg-card border rounded-xl overflow-hidden">
                      <div className="bg-muted/50 p-4 border-b">
                        <h4 className="font-bold">{useCase.title} Dashboard</h4>
                      </div>
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-background rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold text-primary">
                              {useCase.id === "customer-service" && "93%"}
                              {useCase.id === "marketing" && "42%"}
                              {useCase.id === "product" && "538"}
                              {useCase.id === "executive" && "$1.2M"}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {useCase.id === "customer-service" && "CSAT Score"}
                              {useCase.id === "marketing" && "Conversion Rate"}
                              {useCase.id === "product" && "Feature Requests"}
                              {useCase.id === "executive" && "Revenue Impact"}
                            </div>
                          </div>
                          <div className="bg-background rounded-lg p-4 text-center">
                            <div className="text-3xl font-bold text-primary">
                              {useCase.id === "customer-service" && "2:18"}
                              {useCase.id === "marketing" && "18K"}
                              {useCase.id === "product" && "87%"}
                              {useCase.id === "executive" && "24%"}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {useCase.id === "customer-service" && "Avg Handle Time"}
                              {useCase.id === "marketing" && "Brand Mentions"}
                              {useCase.id === "product" && "Positive Feedback"}
                              {useCase.id === "executive" && "Efficiency Gain"}
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-40 bg-background rounded-lg mb-4 p-3">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="text-xs font-medium">
                              {useCase.id === "customer-service" && "Resolution Rate Trend"}
                              {useCase.id === "marketing" && "Campaign Performance"}
                              {useCase.id === "product" && "Feature Popularity"}
                              {useCase.id === "executive" && "Overall Metrics"}
                            </h5>
                            <span className="text-xs text-muted-foreground">Last 30 days</span>
                          </div>
                          <div className="h-28 w-full relative">
                            {/* Simulated chart line */}
                            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                              <path
                                d={
                                  useCase.id === "customer-service" 
                                    ? "M0,70 C50,60 100,55 150,40 C200,25 250,20 300,10" 
                                    : useCase.id === "marketing"
                                    ? "M0,50 C50,70 100,30 150,60 C200,40 250,20 300,30"
                                    : useCase.id === "product"
                                    ? "M0,80 C50,70 100,75 150,50 C200,30 250,35 300,20"
                                    : "M0,90 C50,80 100,70 150,50 C200,30 250,20 300,10"
                                }
                                fill="none"
                                stroke="rgba(126,34,206,0.6)"
                                strokeWidth="3"
                              />
                            </svg>
                            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent"></div>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="h-4 w-4 mr-2" />
                          Export Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Integration Section */}
        <section className="py-16">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Connect with your existing tools for unified data insights
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
              {[
                "Salesforce", "HubSpot", "Zendesk", 
                "Google Analytics", "Tableau", "PowerBI",
                "Slack", "Teams", "Shopify", 
                "Looker", "Mixpanel", "Custom API"
              ].map((integration, index) => (
                <ScaleIn key={index} delay={index * 50}>
                  <div className="bg-card border rounded-lg p-4 text-center h-full flex items-center justify-center hover-lift">
                    <p className="font-medium">{integration}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/documentation">
                  View Integration Documentation
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pricing Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Powerful analytics for businesses of all sizes
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter",
                  price: "$199",
                  description: "Essential analytics for small businesses",
                  features: [
                    "Basic dashboards & reports",
                    "30-day data retention",
                    "Standard visualizations",
                    "Email exports",
                    "Up to 5,000 conversations/mo"
                  ],
                  highlight: false
                },
                {
                  name: "Professional",
                  price: "$599",
                  description: "Advanced analytics for growing teams",
                  features: [
                    "Custom dashboards & reports",
                    "90-day data retention",
                    "Advanced visualizations",
                    "API access",
                    "Real-time alerts",
                    "Up to 20,000 conversations/mo"
                  ],
                  highlight: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "Full-scale analytics for large organizations",
                  features: [
                    "Unlimited dashboards & reports",
                    "Unlimited data retention",
                    "Priority support",
                    "Dedicated account manager",
                    "Custom integrations",
                    "Unlimited conversations"
                  ],
                  highlight: false
                }
              ].map((plan, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <Card className={`h-full flex flex-col ${plan.highlight ? 'border-primary shadow-lg' : ''}`}>
                    <CardHeader>
                      {plan.highlight && (
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl">
                          MOST POPULAR
                        </div>
                      )}
                      <div className="text-xl font-bold mb-1">{plan.name}</div>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-muted-foreground ml-1">/month</span>}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button 
                        className="w-full" 
                        variant={plan.highlight ? "default" : "outline"}
                        asChild
                      >
                        <Link to={plan.price === "Custom" ? "/contact" : "/register"}>
                          {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </FadeIn>
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
                  Common questions about our Analytics Suite
                </p>
              </div>
            </FadeIn>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "What data sources can your analytics platform connect to?",
                  answer: "Our Analytics Suite integrates with a wide range of data sources, including our own AI Call Center and Virtual Assistant platforms, third-party call center systems, chat logs, CRM systems, ticketing platforms, and custom data sources via API. We support structured and unstructured data formats, making it easy to consolidate insights across your entire customer communication ecosystem."
                },
                {
                  question: "How customizable are the dashboards and reports?",
                  answer: "Our dashboards are highly customizable, allowing you to build the exact views you need. You can select from over 200 pre-built metrics and visualizations, create custom metrics with our formula builder, design personalized views for different roles and departments, and set custom alerts and thresholds. We also offer a white-label option for agencies and enterprise clients."
                },
                {
                  question: "Can I export data to other systems?",
                  answer: "Yes, we offer multiple export options. You can schedule automated exports via email in PDF, Excel, or CSV formats, connect directly to business intelligence tools like Tableau and PowerBI, access all data via our RESTful API, and set up webhook notifications for real-time updates to external systems."
                },
                {
                  question: "How far back can I access historical data?",
                  answer: "Data retention varies by plan. The Starter plan includes 30 days of history, the Professional plan includes 90 days, and the Enterprise plan offers unlimited historical data retention. All plans provide full fidelity data without sampling, and enterprise clients can also set up custom data warehousing solutions for specialized compliance or retention needs."
                },
                {
                  question: "Is the analytics platform compliant with privacy regulations?",
                  answer: "Yes, our platform is designed with privacy and compliance in mind. We support GDPR, CCPA, HIPAA, and other regulatory frameworks. Features include data anonymization options, consent management tools, role-based access controls, comprehensive audit logs, and configurable data retention policies. We also offer data residency options for organizations with geographic requirements."
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

export default ProductAnalyticsSuite;
