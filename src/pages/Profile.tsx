
import React, { useState } from 'react';
import { NavBar } from '@/components/navigation/NavBar';
import { Footer } from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Settings, 
  Bell, 
  Lock, 
  Shield, 
  LogOut,
  Phone,
  Mail,
  MapPin,
  Building,
  Calendar
} from 'lucide-react';
import { FadeIn, SlideInRight, ScaleIn } from '@/components/animations/AnimatedElement';
import { FloatingElements } from '@/components/animations/FloatingElements';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // User profile data
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '(123) 456-7890',
    role: 'Customer Support Agent',
    department: 'Support',
    location: 'New York, NY',
    joinDate: 'March 15, 2023',
    bio: 'Experienced customer support professional specializing in technical troubleshooting and client communication.'
  });
  
  const saveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully."
    });
  };
  
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
                <h1 className="text-4xl font-bold mb-1">{t('profile')}</h1>
                <p className="text-muted-foreground">{t('manageYourAccount')}</p>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Profile sidebar */}
            <div className="lg:col-span-1">
              <SlideInRight delay={100}>
                <Card className="mb-6">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{profileData.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{profileData.role}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                      <Building className="h-3 w-3" />
                      <span>{profileData.department}</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      {t('editProfile')}
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{t('accountNavigation')}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div>
                      <button 
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${activeTab === 'profile' ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary' : 'hover:bg-muted'}`}
                        onClick={() => setActiveTab('profile')}
                      >
                        <User className="h-4 w-4" />
                        {t('personalInfo')}
                      </button>
                      
                      <button 
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${activeTab === 'settings' ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary' : 'hover:bg-muted'}`}
                        onClick={() => setActiveTab('settings')}
                      >
                        <Settings className="h-4 w-4" />
                        {t('settings')}
                      </button>
                      
                      <button 
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${activeTab === 'notifications' ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary' : 'hover:bg-muted'}`}
                        onClick={() => setActiveTab('notifications')}
                      >
                        <Bell className="h-4 w-4" />
                        {t('notifications')}
                      </button>
                      
                      <button 
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm ${activeTab === 'security' ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary' : 'hover:bg-muted'}`}
                        onClick={() => setActiveTab('security')}
                      >
                        <Shield className="h-4 w-4" />
                        {t('security')}
                      </button>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 border-t mt-4">
                    <Button variant="destructive" className="w-full gap-2">
                      <LogOut className="h-4 w-4" />
                      {t('logout')}
                    </Button>
                  </CardFooter>
                </Card>
              </SlideInRight>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-3">
              <ScaleIn>
                <Card className="h-full">
                  {isEditing ? (
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-bold mb-6">Edit Profile</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input 
                              id="name" 
                              value={profileData.name}
                              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email" 
                              value={profileData.email}
                              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input 
                              id="phone" 
                              value={profileData.phone}
                              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input 
                              id="location" 
                              value={profileData.location}
                              onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input 
                            id="bio" 
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          />
                        </div>
                        
                        <div className="flex justify-end gap-4 pt-4">
                          <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                          <Button onClick={saveProfile}>Save Changes</Button>
                        </div>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="pt-6">
                      {activeTab === 'profile' && (
                        <div>
                          <h2 className="text-xl font-bold mb-6">Personal Information</h2>
                          
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Full Name</p>
                                <p className="font-medium flex items-center gap-2">
                                  <User className="h-4 w-4 text-primary" />
                                  {profileData.name}
                                </p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <p className="font-medium flex items-center gap-2">
                                  <Mail className="h-4 w-4 text-primary" />
                                  {profileData.email}
                                </p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p className="font-medium flex items-center gap-2">
                                  <Phone className="h-4 w-4 text-primary" />
                                  {profileData.phone}
                                </p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="font-medium flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-primary" />
                                  {profileData.location}
                                </p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Role</p>
                                <p className="font-medium flex items-center gap-2">
                                  <Building className="h-4 w-4 text-primary" />
                                  {profileData.role} ({profileData.department})
                                </p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Join Date</p>
                                <p className="font-medium flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-primary" />
                                  {profileData.joinDate}
                                </p>
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-sm text-muted-foreground">Bio</p>
                              <p className="mt-1">{profileData.bio}</p>
                            </div>
                          </div>
                          
                          <Separator className="my-6" />
                          
                          <div>
                            <h3 className="text-lg font-medium mb-4">Work Statistics</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <Card>
                                <CardContent className="pt-6 text-center">
                                  <p className="text-4xl font-bold text-primary">97%</p>
                                  <p className="text-sm text-muted-foreground">Call Resolution Rate</p>
                                </CardContent>
                              </Card>
                              <Card>
                                <CardContent className="pt-6 text-center">
                                  <p className="text-4xl font-bold text-primary">142</p>
                                  <p className="text-sm text-muted-foreground">Calls This Month</p>
                                </CardContent>
                              </Card>
                              <Card>
                                <CardContent className="pt-6 text-center">
                                  <p className="text-4xl font-bold text-primary">4.8</p>
                                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'settings' && (
                        <div>
                          <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                          
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Language & Region</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="language">Language</Label>
                                  <Input id="language" defaultValue="English (US)" />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="timezone">Timezone</Label>
                                  <Input id="timezone" defaultValue="Eastern Time (UTC-5)" />
                                </div>
                              </div>
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Theme & Display</h3>
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="dark-mode">Dark Mode</Label>
                                  <Switch id="dark-mode" />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="compact-view">Compact View</Label>
                                  <Switch id="compact-view" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'notifications' && (
                        <div>
                          <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                          
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Email Notifications</h3>
                              
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="email-calls">Incoming Call Notifications</Label>
                                  <Switch id="email-calls" defaultChecked />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="email-reports">Daily Reports</Label>
                                  <Switch id="email-reports" defaultChecked />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="email-updates">System Updates</Label>
                                  <Switch id="email-updates" />
                                </div>
                              </div>
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Push Notifications</h3>
                              
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="push-calls">Incoming Calls</Label>
                                  <Switch id="push-calls" defaultChecked />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="push-messages">New Messages</Label>
                                  <Switch id="push-messages" defaultChecked />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="push-reminders">Task Reminders</Label>
                                  <Switch id="push-reminders" defaultChecked />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'security' && (
                        <div>
                          <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                          
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Password</h3>
                              <div className="space-y-4">
                                <div className="space-y-2">
                                  <Label htmlFor="current-password">Current Password</Label>
                                  <Input id="current-password" type="password" />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="new-password">New Password</Label>
                                  <Input id="new-password" type="password" />
                                </div>
                                
                                <div className="space-y-2">
                                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                                  <Input id="confirm-password" type="password" />
                                </div>
                                
                                <Button className="mt-2">Update Password</Button>
                              </div>
                            </div>
                            
                            <Separator />
                            
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                              
                              <div className="flex items-center justify-between">
                                <div>
                                  <Label htmlFor="2fa" className="text-base">Enable Two-Factor Authentication</Label>
                                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                                </div>
                                <Switch id="2fa" />
                              </div>
                              
                              <Button variant="outline" className="mt-2">
                                Set Up Two-Factor Authentication
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
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

export default Profile;
