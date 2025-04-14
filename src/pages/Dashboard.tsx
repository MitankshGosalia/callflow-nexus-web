
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Dashboard = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="container pt-28 pb-20">
        <h1 className="text-4xl font-bold mb-8">{t('dashboard')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center aspect-square">
            <div className="text-5xl font-bold text-primary">75%</div>
            <div className="mt-2 text-center">{t('callResolutionRate')}</div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center aspect-square">
            <div className="text-5xl font-bold text-primary">124</div>
            <div className="mt-2 text-center">{t('callsHandledToday')}</div>
          </div>
          
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center aspect-square">
            <div className="text-5xl font-bold text-primary">4.8</div>
            <div className="mt-2 text-center">{t('averageSatisfaction')}</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-muted-foreground">{t('dashboardPlaceholder')}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
