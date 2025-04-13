
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, HeartHandshake, ShoppingCart, UserCheck, Briefcase } from 'lucide-react';

const SolutionCard = ({ title, description, icon, color }: { title: string; description: string; icon: React.ReactNode; color: string }) => {
  return (
    <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
        Learn more <ArrowRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};

const Solutions = () => {
  const { isRTL } = useLanguage();
  
  const industries = [
    {
      title: "Enterprise",
      description: "Transform customer engagement across large organizations with scalable AI-powered call solutions.",
      icon: <Building className="h-6 w-6 text-white" />,
      color: "bg-primary"
    },
    {
      title: "Healthcare",
      description: "Provide 24/7 patient support, appointment scheduling, and medical information with compassionate AI interactions.",
      icon: <HeartHandshake className="h-6 w-6 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "Retail",
      description: "Enhance shopping experiences with personalized recommendations and instant customer service.",
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Financial Services",
      description: "Secure, compliant, and intelligent banking and financial support available around the clock.",
      icon: <Briefcase className="h-6 w-6 text-white" />,
      color: "bg-yellow-500"
    },
    {
      title: "Customer Service",
      description: "Revolutionize your support team with AI assistants that handle routine inquiries while humans focus on complex cases.",
      icon: <UserCheck className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        <div className="container py-12">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Solutions for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
              Our AI-Driven Call Bot platform adapts to the unique needs of your industry, providing tailored solutions that drive results.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {industries.map((industry, index) => (
                <SolutionCard 
                  key={index}
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                  color={industry.color}
                />
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We work with businesses of all sizes to create tailored AI solutions that address your specific challenges.
              </p>
              <Button size="lg">
                Contact our Solutions Team
              </Button>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
