
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { LanguageSwitcher } from '@/components/navigation/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/navigation/ThemeSwitcher';

export function Footer() {
  const { t, isRTL } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Demo', href: '#demo' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'FAQ', href: '#faq' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
        { name: 'Security', href: '#security' },
        { name: 'GDPR', href: '#gdpr' },
      ]
    },
  ];
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
  ];
  
  return (
    <footer 
      className="bg-muted/30 py-12 md:py-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 mb-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <span className="font-bold text-xl">{t('title')}</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6">
              Revolutionizing customer interactions with AI-powered voice technology that understands, responds, and continuously improves.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((column, colIndex) => (
            <div 
              key={colIndex} 
              className="col-span-1 md:col-span-1 lg:col-span-2"
            >
              <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h4 className="font-bold text-lg mb-4">Subscribe to our newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Get the latest updates and news delivered to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border"
                required
              />
              <button 
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} AI-Driven Call Bot. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
