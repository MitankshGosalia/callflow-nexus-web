
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  buttonText?: string;
}

const PricingTier = ({ name, price, description, features, highlight = false, buttonText = "Get Started" }: PricingTierProps) => {
  return (
    <div className={cn(
      "rounded-xl border p-6",
      highlight ? "border-primary/50 bg-primary/5 shadow-lg" : "bg-card"
    )}>
      <div className="mb-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground"> /month</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className={cn(
              "h-4 w-4 flex-shrink-0",
              highlight ? "text-primary" : "text-green-500"
            )} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={highlight ? "default" : "outline"} 
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const { isRTL } = useLanguage();
  
  const tiers = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small businesses just getting started with AI.",
      features: [
        "Up to 500 AI call minutes/month",
        "Basic voice recognition",
        "Email support",
        "Standard response times",
        "Basic analytics"
      ]
    },
    {
      name: "Business",
      price: "$299",
      description: "Ideal for growing businesses with increasing call volumes.",
      features: [
        "Up to 2,000 AI call minutes/month",
        "Advanced voice recognition",
        "Multi-language support",
        "Priority email & chat support",
        "Advanced analytics dashboard",
        "Custom voice personality"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with complex needs.",
      features: [
        "Unlimited AI call minutes",
        "Premium voice recognition",
        "Full language support",
        "24/7 dedicated support",
        "Custom integration options",
        "Advanced security features",
        "White-labeling options"
      ],
      buttonText: "Contact Sales"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="pt-24">
        <div className="container py-12">
          <FadeIn>
            <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the plan that works best for your business needs. All plans include our core AI technology.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {tiers.map((tier, index) => (
                <PricingTier 
                  key={index}
                  name={tier.name}
                  price={tier.price}
                  description={tier.description}
                  features={tier.features}
                  highlight={tier.highlight}
                  buttonText={tier.buttonText}
                />
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="bg-card border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-2">How do the call minutes work?</h3>
                  <p className="text-muted-foreground">Call minutes are calculated based on the total duration of AI-handled calls. Unused minutes do not roll over to the next month.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Can I change plans later?</h3>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Is there a free trial?</h3>
                  <p className="text-muted-foreground">Yes, we offer a 14-day free trial on all plans so you can experience the full benefits before committing.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">We accept all major credit cards, PayPal, and offer invoice payment options for Enterprise customers.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
