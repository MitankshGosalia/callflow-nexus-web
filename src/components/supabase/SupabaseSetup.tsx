
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface SupabaseSetupProps {
  onComplete: (url: string, key: string) => void;
}

export function SupabaseSetup({ onComplete }: SupabaseSetupProps) {
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');
  
  const handleSave = () => {
    if (!supabaseUrl || !supabaseKey) {
      toast({
        title: "Missing information",
        description: "Please provide both the Supabase URL and Anon Key",
        variant: "destructive"
      });
      return;
    }
    
    // Save to localStorage for persistence
    localStorage.setItem('VITE_SUPABASE_URL', supabaseUrl);
    localStorage.setItem('VITE_SUPABASE_ANON_KEY', supabaseKey);
    
    // Notify parent component
    onComplete(supabaseUrl, supabaseKey);
    
    toast({
      title: "Supabase configured",
      description: "Your Supabase credentials have been saved",
    });
  };
  
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Supabase Configuration Required</CardTitle>
          <CardDescription>
            Please enter your Supabase project credentials to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="supabase-url">Supabase URL</Label>
            <Input 
              id="supabase-url" 
              placeholder="https://your-project.supabase.co" 
              value={supabaseUrl}
              onChange={(e) => setSupabaseUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="supabase-key">Supabase Anon Key</Label>
            <Input 
              id="supabase-key" 
              placeholder="your-anon-key" 
              value={supabaseKey}
              onChange={(e) => setSupabaseKey(e.target.value)}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            <p>You can find these details in your Supabase project settings under API.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave} className="w-full">Save Configuration</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
