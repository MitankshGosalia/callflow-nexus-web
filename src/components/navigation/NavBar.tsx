import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, LogIn, UserPlus, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/navigation/ThemeSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { DashboardNavBar } from '@/components/navigation/DashboardNavBar';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar({ isDashboard = false }) {
  // If this is the dashboard, render the dashboard navbar instead
  if (isDashboard) {
    return <DashboardNavBar />;
  }
  
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (open) {
      if (mobileMenuTimeoutRef.current) {
        clearTimeout(mobileMenuTimeoutRef.current);
      }
      
      mobileMenuTimeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 20000);
    } else if (mobileMenuTimeoutRef.current) {
      clearTimeout(mobileMenuTimeoutRef.current);
      mobileMenuTimeoutRef.current = null;
    }
    
    return () => {
      if (mobileMenuTimeoutRef.current) {
        clearTimeout(mobileMenuTimeoutRef.current);
      }
    };
  }, [open]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
  
  const toggleSubMenu = (menu: string) => {
    setSubMenuOpen(subMenuOpen === menu ? null : menu);
  };
  
  // Public website navigation links
  const navLinks = [
    { 
      name: t('features'), 
      href: '/features',
      subLinks: []
    },
    { 
      name: t('products'), 
      href: '/products',
      subLinks: [
        { name: "AI Call Center", href: "/products/ai-call-center" },
        { name: "Virtual Assistant", href: "/products/virtual-assistant" },
        { name: "Analytics Suite", href: "/products/analytics-suite" },
      ]
    },
    { 
      name: t('solutions'), 
      href: '/solutions',
      subLinks: []
    },
    {
      name: t('resources'),
      href: '/resources',
      subLinks: [
        { name: "Documentation", href: "/documentation" },
        { name: "Use Cases", href: "/use-cases" },
        { name: "Blog", href: "/blog" },
        { name: "Video Tutorials", href: "/resources/videos" },
        { name: "API Reference", href: "/resources/api" },
        { name: "Community Forums", href: "/resources/community" }
      ]
    },
    { 
      name: t('pricing'), 
      href: '/pricing',
      subLinks: []
    },
    { 
      name: t('about'), 
      href: '/about',
      subLinks: []
    },
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
      ref={navRef}
    >
      <nav className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setOpen(false)}
        >
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <div>
            <h1 className="font-bold text-xl">{t('title')}</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">{t('subtitle')}</p>
          </div>
        </Link>
        
        <div className="hidden lg:block">
          <NavigationMenu className="z-10">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  {link.subLinks.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subLink.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subLink.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center px-4 py-2 text-sm font-medium transition-colors",
                        location.pathname === link.href || 
                        (link.href !== '/' && location.pathname.startsWith(link.href))
                          ? "text-primary" 
                          : "text-foreground/80 hover:text-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <ThemeSwitcher />
            
            <Button 
              variant="outline" 
              className="text-foreground/80 hover:text-foreground"
              size="sm"
              asChild
            >
              <Link to="/login" className="flex items-center gap-1">
                <LogIn className="h-4 w-4" />
                {t('login')}
              </Link>
            </Button>
            
            <Button className="bg-primary hover:bg-primary/90" size="sm" asChild>
              <Link to="/register" className="flex items-center gap-1">
                <UserPlus className="h-4 w-4" />
                {t('register')}
              </Link>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      
      <div 
        className={cn(
          'fixed inset-0 z-40 transition-all duration-300',
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
            'relative h-full flex flex-col lg:hidden pt-24 pb-6 px-6',
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
          )}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-border">
                {link.subLinks.length > 0 ? (
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <Link 
                        to={link.href}
                        className="flex-grow text-foreground py-3"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <button
                        className="py-3 px-2"
                        onClick={() => toggleSubMenu(link.name)}
                      >
                        {subMenuOpen === link.name ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {subMenuOpen === link.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.href}
                            className="block py-2 text-foreground/80 hover:text-foreground"
                            onClick={() => setOpen(false)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="block text-foreground py-3"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
            <div className="flex items-center justify-between border-t border-border pt-4">
              <ThemeSwitcher />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-1" 
                onClick={() => setOpen(false)}
                asChild
              >
                <Link to="/login">
                  <LogIn className="h-4 w-4" />
                  {t('login')}
                </Link>
              </Button>
              <Button 
                className="w-full flex items-center justify-center gap-1" 
                onClick={() => setOpen(false)}
                asChild
              >
                <Link to="/register">
                  <UserPlus className="h-4 w-4" />
                  {t('register')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
