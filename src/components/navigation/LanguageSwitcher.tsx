
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2 gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {availableLanguages.find(lang => lang.code === language)?.name || language}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`${language === lang.code ? 'bg-primary/10 font-medium' : ''} cursor-pointer`}
          >
            {lang.flag} {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
