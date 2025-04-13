
import React, { useState } from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { 
  Book, FileText, Code, Database, Server, 
  Cpu, Globe, Shield, Workflow, Search 
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type DocCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  articles: {
    id: string;
    title: string;
    excerpt: string;
    link: string;
  }[];
};

const Documentation = () => {
  const { isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  
  const docCategories: DocCategory[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Book className="h-5 w-5" />,
      description: "Learn the basics of our AI Call System platform",
      articles: [
        {
          id: "welcome",
          title: "Welcome to AI Call Bot",
          excerpt: "An introduction to our platform and its capabilities",
          link: "/docs/welcome"
        },
        {
          id: "quick-start",
          title: "Quick Start Guide",
          excerpt: "Get your first AI call agent up and running in minutes",
          link: "/docs/quick-start"
        },
        {
          id: "dashboard-overview",
          title: "Dashboard Overview",
          excerpt: "Navigate the platform dashboard and understand key metrics",
          link: "/docs/dashboard"
        },
      ]
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: <Workflow className="h-5 w-5" />,
      description: "Connect our platform with your existing systems",
      articles: [
        {
          id: "crm-integration",
          title: "CRM Integration",
          excerpt: "Connect with popular CRM systems like Salesforce, HubSpot, and more",
          link: "/docs/crm-integration"
        },
        {
          id: "voip-setup",
          title: "VoIP Setup",
          excerpt: "Configure your VoIP system to work with our AI Call Bot",
          link: "/docs/voip-setup"
        },
        {
          id: "api-overview",
          title: "API Overview",
          excerpt: "Understanding our API capabilities for custom integrations",
          link: "/docs/api-overview"
        },
      ]
    },
    {
      id: "ai-customization",
      title: "AI Customization",
      icon: <Cpu className="h-5 w-5" />,
      description: "Customize your AI agents to match your brand's voice and needs",
      articles: [
        {
          id: "voice-customization",
          title: "Voice Customization",
          excerpt: "Select and customize your AI agent's voice and speech patterns",
          link: "/docs/voice-customization"
        },
        {
          id: "conversation-flows",
          title: "Conversation Flows",
          excerpt: "Design conversation flows for different customer scenarios",
          link: "/docs/conversation-flows"
        },
        {
          id: "response-templates",
          title: "Response Templates",
          excerpt: "Create and manage response templates for common queries",
          link: "/docs/response-templates"
        },
      ]
    },
    {
      id: "technical",
      title: "Technical Documentation",
      icon: <Code className="h-5 w-5" />,
      description: "Detailed technical resources for developers",
      articles: [
        {
          id: "api-reference",
          title: "API Reference",
          excerpt: "Complete API documentation with examples and use cases",
          link: "/docs/api-reference"
        },
        {
          id: "webhooks",
          title: "Webhooks",
          excerpt: "Set up webhooks to receive real-time notifications",
          link: "/docs/webhooks"
        },
        {
          id: "sdk-libraries",
          title: "SDK & Libraries",
          excerpt: "Client libraries for various programming languages",
          link: "/docs/sdk-libraries"
        },
      ]
    },
  ];
  
  const filteredCategories = searchQuery
    ? docCategories.map(category => ({
        ...category,
        articles: category.articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.articles.length > 0)
    : docCategories;
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        <div className="container py-12">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Explore our comprehensive guides and resources to get the most out of the AI Call Bot platform.
            </p>
          </FadeIn>
          
          {/* Search bar */}
          <div className="relative max-w-2xl mb-12">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Featured categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <FadeIn delay={100}>
              <div className="bg-card border rounded-xl p-6 hover-lift">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">User Guides</h3>
                <p className="text-muted-foreground mb-4">Step-by-step guides to help you get started and make the most of our platform.</p>
                <Button variant="outline" className="w-full">Browse Guides</Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="bg-card border rounded-xl p-6 hover-lift">
                <Code className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p className="text-muted-foreground mb-4">Detailed API documentation for developers building integrations with our platform.</p>
                <Button variant="outline" className="w-full">View Reference</Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="bg-card border rounded-xl p-6 hover-lift">
                <Database className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                <p className="text-muted-foreground mb-4">Learn about our security practices and how we keep your customer data safe.</p>
                <Button variant="outline" className="w-full">Security Docs</Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="bg-card border rounded-xl p-6 hover-lift">
                <Server className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Deployment</h3>
                <p className="text-muted-foreground mb-4">Learn how to deploy our AI solutions across your communication channels.</p>
                <Button variant="outline" className="w-full">Deployment Guide</Button>
              </div>
            </FadeIn>
          </div>
          
          {/* Documentation content */}
          <Tabs defaultValue="getting-started" className="mt-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {docCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center justify-center gap-2 py-3"
                >
                  {category.icon}
                  <span>{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {docCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {category.icon}
                    <span>{category.title}</span>
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article) => (
                    <Link 
                      key={article.id} 
                      to={article.link}
                      className="bg-card hover:bg-accent/5 border rounded-lg p-6 transition-colors hover-lift"
                    >
                      <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                      <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
