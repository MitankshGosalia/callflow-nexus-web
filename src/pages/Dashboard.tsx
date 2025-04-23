import React, { useEffect, useState } from 'react';
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
  const [user, setUser] = useState<any>(null);
  
  // Check if user is logged in
  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      if (userData.authenticated) {
        setUser(userData);
        console.log("User authenticated:", userData);
      } else {
        console.log("User not authenticated, redirecting to login");
        navigate('/login');
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate('/login');
    }
  }, [navigate]);
  
  if (!user) {
    return null; // Return loading state or redirect
  }
  
  // Different titles based on user role
  const welcomeText = user.role === 'admin' 
    ? 'Welcome back, Admin' 
    : 'Welcome back, Employee';
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar isDashboard={true} />
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
                <p className="text-muted-foreground">{welcomeText} {user.name}</p>
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
          
          {/* Admin-specific content */}
          {user.role === 'admin' && (
            <FadeIn delay={500}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{t('adminTools')}</CardTitle>
                  <CardDescription>{t('adminOnlyFeatures')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h3 className="font-medium mb-1">User Management</h3>
                      <p className="text-sm text-muted-foreground">Manage employee accounts and permissions</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h3 className="font-medium mb-1">System Settings</h3>
                      <p className="text-sm text-muted-foreground">Configure platform settings and integrations</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg">
                      <h3 className="font-medium mb-1">Advanced Analytics</h3>
                      <p className="text-sm text-muted-foreground">View detailed performance metrics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}
          
          {/* Employee-specific content */}
          {user.role === 'employee' && (
            <FadeIn delay={500}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{t('yourTasks')}</CardTitle>
                  <CardDescription>{t('pendingActivities')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/10 rounded-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-medium mb-1">Follow up with customer #1234</h3>
                        <p className="text-sm text-muted-foreground">Due: Today</p>
                      </div>
                      <div className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-2 py-1 rounded text-xs font-medium">
                        Pending
                      </div>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-medium mb-1">Complete training module</h3>
                        <p className="text-sm text-muted-foreground">Due: Tomorrow</p>
                      </div>
                      <div className="bg-blue-500/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium">
                        In Progress
                      </div>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg flex items-center justify-between">
                      <div>
                        <h3 className="font-medium mb-1">Team meeting</h3>
                        <p className="text-sm text-muted-foreground">April 19, 10:00 AM</p>
                      </div>
                      <div className="bg-green-500/20 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-medium">
                        Scheduled
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
