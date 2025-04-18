
import React, { useState } from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  PhoneCall, 
  User, 
  Clock, 
  Bot,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Phone
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { toast } from '@/hooks/use-toast';

const MakeCall = () => {
  const { t, isRTL } = useLanguage();
  const [callType, setCallType] = useState('direct');
  const [recipient, setRecipient] = useState('');
  const [notes, setNotes] = useState('');
  const [callInProgress, setCallInProgress] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [isAIEnabled, setIsAIEnabled] = useState(true);
  const [durationInterval, setDurationInterval] = useState(null);
  
  const startCall = () => {
    if (!recipient) {
      toast({
        title: "Error",
        description: "Please enter a recipient for the call",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Call initiated",
      description: `Connecting to ${recipient}...`,
    });
    
    setTimeout(() => {
      setCallInProgress(true);
      // Start call duration timer
      const interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      setDurationInterval(interval);
    }, 1500);
  };
  
  const endCall = () => {
    setCallInProgress(false);
    clearInterval(durationInterval);
    
    toast({
      title: "Call ended",
      description: `Call duration: ${formatDuration(callDuration)}`,
    });
    
    // Reset for next call
    setTimeout(() => {
      setCallDuration(0);
    }, 3000);
  };
  
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Recent contacts for quick selection
  const recentContacts = [
    { name: "Sarah Johnson", department: "Sales", phone: "123-456-7890" },
    { name: "David Lee", department: "Customer Support", phone: "123-456-7891" },
    { name: "Emily Wilson", department: "Marketing", phone: "123-456-7892" },
    { name: "Michael Brown", department: "Technical Support", phone: "123-456-7893" }
  ];
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar isDashboard={true} />
      <main className="container pt-28 pb-20 relative">
        <FloatingElements 
          count={6} 
          speed="slow" 
          opacity="opacity-5" 
          minSize={20} 
          maxSize={100} 
          primary
          className="absolute inset-0"
        />
        
        <div className="relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-1">
                  <Phone className="inline-block mr-2 h-8 w-8 text-primary" />
                  {t('makeCall')}
                </h1>
                <p className="text-muted-foreground">{t('initiateNewCall')}</p>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Call form */}
            <div className="lg:col-span-2">
              <ScaleIn>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('newCall')}</CardTitle>
                    <CardDescription>{t('enterCallDetails')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="direct" className="mb-6" onValueChange={setCallType}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="direct">Direct Call</TabsTrigger>
                        <TabsTrigger value="conference">Conference Call</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="direct" className="pt-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="recipient">Recipient</Label>
                            <Input 
                              id="recipient" 
                              placeholder="Enter name, number, or email" 
                              value={recipient}
                              onChange={(e) => setRecipient(e.target.value)}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="callType">Call Type</Label>
                            <Select defaultValue="audio">
                              <SelectTrigger>
                                <SelectValue placeholder="Select call type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="audio">Audio Only</SelectItem>
                                <SelectItem value="video">Audio & Video</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="notes">Call Notes</Label>
                            <Textarea 
                              id="notes" 
                              placeholder="Add notes about this call" 
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                            />
                          </div>
                          
                          <div className="flex items-center space-x-2 pt-2">
                            <Switch id="ai-assistant" checked={isAIEnabled} onCheckedChange={setIsAIEnabled} />
                            <Label htmlFor="ai-assistant" className="flex items-center gap-2">
                              <Bot className="h-4 w-4 text-primary" />
                              Enable AI Assistant
                            </Label>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="conference" className="pt-4">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="conference-name">Conference Name</Label>
                            <Input id="conference-name" placeholder="Enter conference name" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="participants">Participants</Label>
                            <Input id="participants" placeholder="Add participant emails (comma separated)" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="schedule">Schedule</Label>
                            <div className="grid grid-cols-2 gap-4">
                              <Input id="date" type="date" />
                              <Input id="time" type="time" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="conf-notes">Conference Notes</Label>
                            <Textarea id="conf-notes" placeholder="Add notes or agenda" />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    {/* Call controls */}
                    {callInProgress ? (
                      <div className="flex flex-col items-center pt-4">
                        <div className="mb-6 text-center">
                          <p className="text-lg font-medium mb-2">Call in progress with</p>
                          <p className="text-2xl font-bold text-primary">{recipient}</p>
                          <p className="text-3xl font-mono mt-4">{formatDuration(callDuration)}</p>
                        </div>
                        
                        <div className="flex gap-4">
                          <Button 
                            variant="outline" 
                            size="icon"
                            className={isMuted ? "bg-red-500/10 text-red-500 border-red-500" : ""}
                            onClick={() => setIsMuted(!isMuted)}
                          >
                            {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            size="icon"
                            className={isSpeakerOn ? "bg-primary/10 text-primary border-primary" : ""}
                            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
                          >
                            {isSpeakerOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                          </Button>
                          
                          <Button 
                            variant="destructive" 
                            size="icon" 
                            className="h-12 w-12 rounded-full"
                            onClick={endCall}
                          >
                            <PhoneCall className="h-6 w-6 rotate-135" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button 
                        className="w-full mt-4 gap-2" 
                        size="lg"
                        onClick={startCall}
                      >
                        <PhoneCall className="h-5 w-5" />
                        {callType === 'direct' ? 'Start Call' : 'Schedule Conference'}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </ScaleIn>
            </div>
            
            {/* Recent contacts */}
            <div>
              <ScaleIn delay={100}>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('recentContacts')}</CardTitle>
                    <CardDescription>Quickly connect with recent contacts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentContacts.map((contact, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                          onClick={() => setRecipient(contact.name)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-primary/10 text-primary p-2 rounded-full">
                              <User className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium">{contact.name}</p>
                              <p className="text-sm text-muted-foreground">{contact.department}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <PhoneCall className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScaleIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MakeCall;
