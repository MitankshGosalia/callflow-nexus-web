
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Sample data for charts
const data = [
  { name: 'Jan', value: 54 },
  { name: 'Feb', value: 67 },
  { name: 'Mar', value: 41 },
  { name: 'Apr', value: 55 },
  { name: 'May', value: 73 },
  { name: 'Jun', value: 94 },
  { name: 'Jul', value: 79 },
];

const Dashboard = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="container pt-28 pb-20 relative">
        {/* Background elements */}
        <FloatingElements 
          count={8} 
          speed="slow" 
          opacity="opacity-5" 
          minSize={20} 
          maxSize={100} 
          primary
          secondary
          className="absolute inset-0"
        />
        
        <div className="relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-1">{t('dashboard')}</h1>
                <p className="text-muted-foreground">{t('welcomeBack')}</p>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2 flex gap-2 items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium">{t('businessActive')}</span>
              </div>
            </div>
          </FadeIn>

          {/* Stats overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={100}>
              <Card className="bg-primary/10 border border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-medium">
                    <div className="p-2 rounded-full bg-primary/20">
                      <BarChart className="h-4 w-4 text-primary" />
                    </div>
                    {t('callResolutionRate')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">75%</div>
                  <p className="text-xs text-muted-foreground mt-1">+5% {t('fromLastMonth')}</p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={200}>
              <Card className="bg-primary/10 border border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-medium">
                    <div className="p-2 rounded-full bg-primary/20">
                      <LineChart className="h-4 w-4 text-primary" />
                    </div>
                    {t('callsHandledToday')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">124</div>
                  <p className="text-xs text-muted-foreground mt-1">+12 {t('fromYesterday')}</p>
                </CardContent>
              </Card>
            </FadeIn>
            
            <FadeIn delay={300}>
              <Card className="bg-primary/10 border border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-medium">
                    <div className="p-2 rounded-full bg-primary/20">
                      <PieChart className="h-4 w-4 text-primary" />
                    </div>
                    {t('averageSatisfaction')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">4.8</div>
                  <p className="text-xs text-muted-foreground mt-1">+0.3 {t('fromLastMonth')}</p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
          
          {/* Chart */}
          <FadeIn delay={400}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{t('performanceOverview')}</CardTitle>
                <CardDescription>{t('lastSixMonthsData')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={data}
                      margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          
          <div className="mt-10 text-center">
            <FadeIn delay={500}>
              <p className="text-xl text-muted-foreground">{t('dashboardPlaceholder')}</p>
            </FadeIn>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
