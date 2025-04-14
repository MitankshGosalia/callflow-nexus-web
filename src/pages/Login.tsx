
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
import { AtSign, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t('loginSuccess'),
        description: t('redirectingToDashboard'),
      });
      
      // Navigate to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 1500);
  };
  
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
        
        <div className="max-w-md mx-auto">
          <ScaleIn>
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center space-y-1">
                <CardTitle className="text-2xl">{t('login')}</CardTitle>
                <CardDescription>
                  {t('enterCredentials')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <AtSign className="h-4 w-4" /> {t('emailAddress')}
                    </Label>
                    <Input 
                      id="email" 
                      placeholder="admin@company.com" 
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
                    {loading ? t('loggingIn') : t('loginNow')}
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
      </main>
      <Footer />
    </div>
  );
};

export default Login;
