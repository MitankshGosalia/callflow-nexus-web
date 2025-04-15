
import React from "react";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Code, MessageCircle, Video } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const { t } = useLanguage();
  
  const resourceCategories = [
    {
      title: "Documentation",
      description: "Comprehensive guides and documentation for our products",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/documentation"
    },
    {
      title: "Video Tutorials",
      description: "Learn through our step-by-step video tutorials",
      icon: <Video className="h-10 w-10 text-primary" />,
      link: "/resources/videos"
    },
    {
      title: "API Reference",
      description: "Technical documentation for developers",
      icon: <Code className="h-10 w-10 text-primary" />,
      link: "/resources/api"
    },
    {
      title: "Community Forums",
      description: "Join our active community and get support",
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      link: "/resources/community"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to get the most out of our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {category.description}
                  </CardDescription>
                  <Button asChild>
                    <Link to={category.link}>Explore {category.title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
                <p className="text-lg mb-6">
                  Our support team is available 24/7 to help you with any questions or issues you may have.
                </p>
                <Button variant="default" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
              <div className="hidden md:block w-1/3">
                <img 
                  src="/placeholder.svg" 
                  alt="Support Team" 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
