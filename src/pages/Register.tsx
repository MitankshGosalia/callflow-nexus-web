import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { RegistrationForm } from '@/components/registration/RegistrationForm';
import { RegistrationGuide } from '@/components/registration/RegistrationGuide';
import { useLanguage } from '@/contexts/LanguageContext';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  
  const handleRegistrationSuccess = () => {
    toast({
      title: t('registrationSuccess'),
      description: t('redirectingToDashboard'),
    });

    // Simulate instant login after registration
    const userData = {
      email: "",
      name: "",
      role: "admin", // Assume main registration is for admin
      authenticated: true
    };
    try {
      // If email etc. available in RegistrationForm, pass here!
      localStorage.setItem('user', JSON.stringify(userData));
    } catch {}
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="container pt-24 pb-20 relative">
        {/* Background animations */}
        <FloatingElements 
          count={15} 
          speed="slow" 
          opacity="opacity-5" 
          minSize={20} 
          maxSize={150} 
          primary
          secondary
          className="absolute inset-0 pointer-events-none"
        />
        
        {/* Header section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{t('registerYourBusiness')}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('registerBusinessDescription')}
          </p>
          
          <div className="mt-4">
            <Button
              variant="outline"
              className="gap-1"
              onClick={() => navigate('/login')}
            >
              <ArrowLeft className="h-4 w-4" /> {t('alreadyHaveAccount')}
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Registration Guide - Animated assistant */}
          <div className="w-full md:w-2/5 sticky top-24">
            <RegistrationGuide />
          </div>
          
          {/* Registration Form */}
          <div className="w-full md:w-3/5">
            <RegistrationForm onSuccess={handleRegistrationSuccess} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
