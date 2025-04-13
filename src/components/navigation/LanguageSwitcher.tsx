
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
  const { language, setLanguage, availableLanguages, languageNames } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2 gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languageNames[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="animate-scale-in">
        {availableLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`${language === lang ? 'bg-primary/10 font-medium' : ''} cursor-pointer`}
          >
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
