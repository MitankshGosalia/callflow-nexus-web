
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/navigation/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, isRTL } = useLanguage();
  
  // Handle scroll effect
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
  
  const navLinks = [
    { name: t('features'), href: '#features' },
    { name: t('solutions'), href: '#solutions' },
    { name: t('pricing'), href: '#pricing' },
    { name: t('about'), href: '#about' },
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
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors link-underline hover:no-underline"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              {t('contact')}
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              {t('getStarted')}
            </Button>
          </div>
          
          {/* Mobile menu button */}
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
          'fixed inset-0 bg-background/95 backdrop-blur-sm z-40 flex flex-col md:hidden transition-all duration-300 pt-24 pb-6 px-6',
          open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-4 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground text-lg py-2 border-b border-border"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="mt-auto space-y-4">
          <div className="flex items-center justify-between border-t border-border pt-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
              {t('contact')}
            </Button>
            <Button className="w-full" onClick={() => setOpen(false)}>
              {t('getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
