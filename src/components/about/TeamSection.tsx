
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn } from '@/components/animations/AnimatedElement';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function TeamSection() {
  const { t } = useLanguage();
  
  // Team members from translations
  const teamMembers = [
    {
      id: 'ceo',
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: t('teamMembers.ceo.name'),
      role: t('teamMembers.ceo.role'),
      bio: t('teamMembers.ceo.bio'),
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 'cto',
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: t('teamMembers.cto.name'),
      role: t('teamMembers.cto.role'),
      bio: t('teamMembers.cto.bio'),
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 'cpo',
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: t('teamMembers.cpo.name'),
      role: t('teamMembers.cpo.role'),
      bio: t('teamMembers.cpo.bio'),
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 'cso',
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      name: t('teamMembers.cso.name'),
      role: t('teamMembers.cso.role'),
      bio: t('teamMembers.cso.bio'),
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];
  
  return (
    <section className="py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t('team')}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            Meet the visionaries driving our innovation and growth.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id}
              member={member}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
}

function TeamMemberCard({ member, delay }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <FadeIn delay={delay}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <div 
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
            
            {/* Glow effect on hover */}
            <div className={`absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`} />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 bg-background/95 backdrop-blur-sm">
          <div className="p-4">
            <h4 className="font-bold">{member.name}</h4>
            <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
            <p className="text-sm">{member.bio}</p>
          </div>
          <div className="bg-muted/30 p-3 flex justify-end gap-2">
            <a href={member.socialLinks.linkedin} className="text-muted-foreground hover:text-primary">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href={member.socialLinks.twitter} className="text-muted-foreground hover:text-primary">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </HoverCardContent>
      </HoverCard>
    </FadeIn>
  );
}
