
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Phone, 
  BookOpen, 
  HelpCircle,
  Bot, 
  LogOut, 
  User,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/navigation/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function DashboardNavBar() {
  const [open, setOpen] = useState(false);
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const navRef = useRef(null);
  
  // Dashboard navigation links
  const dashboardLinks = [
    { 
      name: t('dashboard'), 
      href: '/dashboard',
      icon: LayoutDashboard
    },
    { 
      name: t('callLog'), 
      href: '/calllog',
      icon: Phone
    },
    { 
      name: t('makeCall'), 
      href: '/make-call',
      icon: Phone
    },
    { 
      name: t('aiAgent'), 
      href: '/ai-agent',
      icon: Bot
    },
    { 
      name: t('resources'), 
      href: '/resources',
      icon: BookOpen
    },
    { 
      name: t('help'), 
      href: '/help',
      icon: HelpCircle
    }
  ];
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
  
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm py-3"
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={navRef}
    >
      <nav className="container flex items-center justify-between">
        <Link 
          to="/dashboard" 
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <div>
            <h1 className="font-bold text-xl">{t('dashboardTitle')}</h1>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {dashboardLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === link.href
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground/80 hover:text-foreground hover:bg-accent"
              )}
            >
              <link.icon className="h-4 w-4 mr-2" />
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 mr-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          
          <Link to="/profile" className="mr-2">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </Link>
          
          <Button 
            variant="destructive" 
            size="sm"
            className="hidden md:flex"
            asChild
          >
            <Link to="/" className="flex items-center gap-1">
              <LogOut className="h-4 w-4" />
              {t('logout')}
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          open ? 'visible' : 'invisible'
        )}
      >
        <div 
          className={cn(
            'absolute inset-0 bg-background/95 backdrop-blur-lg transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
        />
        
        <div 
          className={cn(
            'relative h-full flex flex-col pt-20 pb-6 px-6',
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
          )}
        >
          <div className="flex flex-col space-y-1">
            {dashboardLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-md transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary font-medium" 
                    : "hover:bg-muted"
                )}
                onClick={() => setOpen(false)}
              >
                <link.icon className="h-5 w-5 mr-3" />
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/profile"
              className={cn(
                "flex items-center px-4 py-3 rounded-md transition-colors",
                location.pathname === '/profile'
                  ? "bg-primary/10 text-primary font-medium" 
                  : "hover:bg-muted"
              )}
              onClick={() => setOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              {t('profile')}
            </Link>
          </div>
          
          <div className="mt-auto space-y-4">
            <div className="flex items-center justify-center gap-4 pt-4 border-t">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
            
            <Button 
              variant="destructive" 
              className="w-full" 
              asChild
            >
              <Link to="/" className="flex items-center justify-center gap-2">
                <LogOut className="h-4 w-4" />
                {t('logout')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
