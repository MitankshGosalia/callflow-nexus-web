
import React from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Clock, 
  User, 
  Search,
  Check,
  X
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn, SlideInRight } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';

const CallLog = () => {
  const { t, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Sample call log data
  const callLogs = [
    {
      id: 1,
      caller: "John Smith",
      recipient: "Support Team",
      type: "incoming",
      duration: "5m 23s",
      date: "2025-04-18",
      time: "10:45 AM",
      status: "completed",
      notes: "Customer had issues with account setup"
    },
    {
      id: 2,
      caller: "Support Team",
      recipient: "Emily Johnson",
      type: "outgoing",
      duration: "3m 12s",
      date: "2025-04-18",
      time: "11:20 AM",
      status: "completed",
      notes: "Follow-up on previous support ticket"
    },
    {
      id: 3,
      caller: "Michael Brown",
      recipient: "Support Team",
      type: "incoming",
      duration: "8m 47s",
      date: "2025-04-18",
      time: "1:35 PM",
      status: "missed",
      notes: ""
    },
    {
      id: 4,
      caller: "Support Team",
      recipient: "Sarah Wilson",
      type: "outgoing",
      duration: "4m 05s", 
      date: "2025-04-17",
      time: "3:15 PM",
      status: "completed",
      notes: "Resolved billing issue"
    },
    {
      id: 5,
      caller: "David Lee",
      recipient: "Support Team",
      type: "incoming",
      duration: "2m 38s",
      date: "2025-04-17",
      time: "9:50 AM",
      status: "completed",
      notes: "Product information inquiry"
    }
  ];
  
  // Filter logs based on search query
  const filteredLogs = callLogs.filter(log => 
    log.caller.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.notes.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <NavBar isDashboard={true} />
      <main className="container pt-28 pb-20 relative">
        {/* Background elements */}
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
                <h1 className="text-4xl font-bold mb-1">{t('callLog')}</h1>
                <p className="text-muted-foreground">{t('recentCallHistory')}</p>
              </div>
              
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  className="pl-10 w-full md:w-[250px]"
                  placeholder="Search calls..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </FadeIn>

          <SlideInRight delay={100}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  {t('callHistory')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('type')}</TableHead>
                        <TableHead>{t('caller')}</TableHead>
                        <TableHead>{t('recipient')}</TableHead>
                        <TableHead>{t('dateTime')}</TableHead>
                        <TableHead>{t('duration')}</TableHead>
                        <TableHead>{t('status')}</TableHead>
                        <TableHead>{t('notes')}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell>
                            {log.type === 'incoming' ? (
                              <PhoneIncoming className="h-4 w-4 text-green-500" />
                            ) : (
                              <PhoneOutgoing className="h-4 w-4 text-blue-500" />
                            )}
                          </TableCell>
                          <TableCell>{log.caller}</TableCell>
                          <TableCell>{log.recipient}</TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">{log.date}</span>
                              <span className="text-xs text-muted-foreground">{log.time}</span>
                            </div>
                          </TableCell>
                          <TableCell>{log.duration}</TableCell>
                          <TableCell>
                            <Badge variant={log.status === 'completed' ? 'default' : 'destructive'}>
                              {log.status === 'completed' ? (
                                <Check className="h-3 w-3 mr-1" />
                              ) : (
                                <X className="h-3 w-3 mr-1" />
                              )}
                              {log.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="line-clamp-1">{log.notes || '-'}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </SlideInRight>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CallLog;
