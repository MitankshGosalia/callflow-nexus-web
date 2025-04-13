
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';

export function VideoShowcase() {
  const { t, isRTL } = useLanguage();
  const [videoOpen, setVideoOpen] = useState(false);
  
  return (
    <section 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/5"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t('seeItInAction') || "See It In Action"}
            </h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t('videoShowcaseDesc') || "Watch our AI-powered call system handle real-world scenarios with unmatched precision"}
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-primary/20 bg-black/20 aspect-video">
            {/* Video thumbnail with play overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center cursor-pointer group"
              style={{ backgroundImage: "url('https://placehold.co/1920x1080/252042/5040AA?text=AI+Call+System+Demo&font=montserrat')" }}
              onClick={() => setVideoOpen(true)}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-10 w-10 text-white fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => setVideoOpen(true)}
            >
              <Play className="mr-2 h-4 w-4" />
              {t('watchDemo') || "Watch Demo"}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-6xl p-0 bg-background/95 backdrop-blur-md">
          <DialogHeader className="p-4">
            <DialogTitle>{t('productDemo') || "AI Call System Demo Video"}</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <div className="aspect-video w-full bg-black">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Product Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 flex justify-end">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                {t('watchOnYoutube') || "Watch on YouTube"}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
