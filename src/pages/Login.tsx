
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScaleIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { toast } from "@/hooks/use-toast";
import { AtSign, Lock, ArrowRight, User, Briefcase } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Login = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [loginType, setLoginType] = React.useState('admin');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login - in a real app, this would be an API call
    setTimeout(() => {
      // Create user object with role based on login type
      const userData = {
        email,
        name: email.split('@')[0],
        role: loginType, // 'admin' or 'employee'
        authenticated: true
      };
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      
      setLoading(false);
      toast({
        title: t('loginSuccess'),
        description: t('redirectingToDashboard'),
      });
      
      // Navigate to dashboard after a short delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }, 1000);
  };
  
  // If user is already logged in, redirect to dashboard
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar />
      <main className="container pt-28 pb-20 relative">
        <FloatingElements 
          count={6} 
          speed="slow" 
          opacity="opacity-5" 
          minSize={30} 
          maxSize={100} 
          primary
          className="absolute inset-0"
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Login image */}
            <div className="hidden md:block">
              <ScaleIn>
                <div className="aspect-video relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Person working on laptop" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {loginType === 'admin' ? 'Admin Dashboard Access' : 'Employee Portal Access'}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {loginType === 'admin' 
                        ? 'Access advanced business analytics, user management, and system configurations.' 
                        : 'Access your tasks, team communication, and customer support tools.'
                      }
                    </p>
                  </div>
                </div>
              </ScaleIn>
            </div>
            
            {/* Login form */}
            <div>
              <ScaleIn>
                <Card className="border-2 border-primary/20 shadow-lg">
                  <CardHeader className="text-center space-y-1">
                    <CardTitle className="text-2xl">{t('login')}</CardTitle>
                    <CardDescription>
                      {t('enterCredentials')}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Tabs defaultValue="admin" onValueChange={setLoginType} className="mb-6">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="admin" className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" /> Admin
                        </TabsTrigger>
                        <TabsTrigger value="employee" className="flex items-center gap-2">
                          <User className="h-4 w-4" /> Employee
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="admin">
                        <div className="text-sm text-muted-foreground mt-4 mb-6 text-center">
                          Login as an administrator to manage your business, employees, and settings.
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="employee">
                        <div className="text-sm text-muted-foreground mt-4 mb-6 text-center">
                          Login as an employee to access your workspace, tasks, and communications.
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <AtSign className="h-4 w-4" /> {t('emailAddress')}
                        </Label>
                        <Input 
                          id="email" 
                          placeholder={loginType === 'admin' ? "admin@company.com" : "employee@company.com"} 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="flex items-center gap-2">
                          <Lock className="h-4 w-4" /> {t('password')}
                        </Label>
                        <Input 
                          id="password" 
                          type="password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? t('loggingIn') : (loginType === 'admin' ? 'Login as Admin' : 'Login as Employee')}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t pt-4">
                    <Button 
                      variant="link" 
                      onClick={() => navigate('/register')}
                    >
                      {t('noAccount')}
                    </Button>
                  </CardFooter>
                </Card>
              </ScaleIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
