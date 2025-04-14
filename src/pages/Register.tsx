
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { RegistrationForm } from '@/components/registration/RegistrationForm';
import { RegistrationGuide } from '@/components/registration/RegistrationGuide';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  
  const handleRegistrationSuccess = () => {
    toast({
      title: t('registrationSuccess'),
      description: t('redirectingToDashboard'),
    });
    
    // In a real app, you'd redirect to dashboard after successful registration
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="container pt-28 pb-20">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Registration Guide - Animated assistant */}
          <div className="w-full md:w-2/5">
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
