
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeIn, ScaleIn } from '@/components/animations/AnimatedElement';
import { 
  AtSign, Lock, Building, Phone, Globe, 
  Info, MapPin, Users, CheckCircle, User,
  FileText, Briefcase, Settings, ArrowRight,
  Image, Upload, MessageCircle
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type RegistrationFormProps = {
  onSuccess: () => void;
}

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('business');
  const [loading, setLoading] = useState(false);
  
  // Form states for business details
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessCity, setBusinessCity] = useState('');
  const [businessState, setBusinessState] = useState('');
  const [businessZip, setBusinessZip] = useState('');
  const [businessWebsite, setBusinessWebsite] = useState('');
  const [businessIndustry, setBusinessIndustry] = useState('');
  const [businessSize, setBusinessSize] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  
  // Form states for admin account
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminConfirmPassword, setAdminConfirmPassword] = useState('');
  const [adminTitle, setAdminTitle] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 2000);
  };
  
  const nextStep = () => {
    if (activeTab === 'business') {
      setActiveTab('admin');
    } else if (activeTab === 'admin') {
      setActiveTab('confirmation');
    }
  };
  
  const prevStep = () => {
    if (activeTab === 'admin') {
      setActiveTab('business');
    } else if (activeTab === 'confirmation') {
      setActiveTab('admin');
    }
  };
  
  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Hospitality',
    'Real Estate',
    'Transportation',
    'Construction',
    'Entertainment',
    'Agriculture',
    'Energy',
    'Other'
  ];
  
  const businessSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];
  
  return (
    <form onSubmit={handleSubmit}>
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle>{t('registerYourBusiness')}</CardTitle>
          <CardDescription>{t('completeRegistrationBelow')}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="business" className="flex items-center gap-2">
                <Building className="h-4 w-4" /> Business
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <User className="h-4 w-4" /> Admin Account
              </TabsTrigger>
              <TabsTrigger value="confirmation" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Confirmation
              </TabsTrigger>
            </TabsList>
            
            {/* Business Details Tab */}
            <TabsContent value="business" className="space-y-6">
              <FadeIn>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name" className="flex items-center gap-2">
                        <Building className="h-4 w-4" /> Business Name
                      </Label>
                      <Input 
                        id="business-name" 
                        placeholder="Acme Corporation" 
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business-industry" className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> Industry
                      </Label>
                      <Select value={businessIndustry} onValueChange={setBusinessIndustry}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-email" className="flex items-center gap-2">
                        <AtSign className="h-4 w-4" /> Business Email
                      </Label>
                      <Input 
                        id="business-email" 
                        type="email" 
                        placeholder="info@acmecorp.com" 
                        value={businessEmail}
                        onChange={(e) => setBusinessEmail(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business-phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" /> Business Phone
                      </Label>
                      <Input 
                        id="business-phone" 
                        placeholder="(555) 123-4567" 
                        value={businessPhone}
                        onChange={(e) => setBusinessPhone(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-address" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Street Address
                    </Label>
                    <Input 
                      id="business-address" 
                      placeholder="123 Main Street" 
                      value={businessAddress}
                      onChange={(e) => setBusinessAddress(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-city">City</Label>
                      <Input 
                        id="business-city" 
                        placeholder="New York" 
                        value={businessCity}
                        onChange={(e) => setBusinessCity(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business-state">State/Province</Label>
                      <Input 
                        id="business-state" 
                        placeholder="NY" 
                        value={businessState}
                        onChange={(e) => setBusinessState(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2 col-span-full md:col-span-1">
                      <Label htmlFor="business-zip">ZIP/Postal Code</Label>
                      <Input 
                        id="business-zip" 
                        placeholder="10001" 
                        value={businessZip}
                        onChange={(e) => setBusinessZip(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-website" className="flex items-center gap-2">
                        <Globe className="h-4 w-4" /> Website
                      </Label>
                      <Input 
                        id="business-website" 
                        placeholder="https://www.acmecorp.com" 
                        value={businessWebsite}
                        onChange={(e) => setBusinessWebsite(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business-size" className="flex items-center gap-2">
                        <Users className="h-4 w-4" /> Company Size
                      </Label>
                      <Select value={businessSize} onValueChange={setBusinessSize}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessSizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-description" className="flex items-center gap-2">
                      <Info className="h-4 w-4" /> Business Description
                    </Label>
                    <Textarea 
                      id="business-description" 
                      placeholder="Tell us about your business..." 
                      className="min-h-[100px]"
                      value={businessDescription}
                      onChange={(e) => setBusinessDescription(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2 border-t pt-6">
                    <Label className="flex items-center gap-2">
                      <Image className="h-4 w-4" /> Business Logo (Optional)
                    </Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drop your logo here or <span className="text-primary">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recommended size: 512x512px. Max 2MB.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <Button 
                type="button"
                className="w-full"
                onClick={nextStep}
              >
                Continue to Admin Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </TabsContent>
            
            {/* Admin Account Tab */}
            <TabsContent value="admin" className="space-y-6">
              <FadeIn>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-name" className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Full Name
                      </Label>
                      <Input 
                        id="admin-name" 
                        placeholder="John Doe" 
                        value={adminName}
                        onChange={(e) => setAdminName(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="admin-title" className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> Job Title
                      </Label>
                      <Input 
                        id="admin-title" 
                        placeholder="CEO / Manager / Owner" 
                        value={adminTitle}
                        onChange={(e) => setAdminTitle(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="flex items-center gap-2">
                      <AtSign className="h-4 w-4" /> Admin Email
                    </Label>
                    <Input 
                      id="admin-email" 
                      type="email" 
                      placeholder="john.doe@acmecorp.com" 
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      required 
                    />
                    <p className="text-xs text-muted-foreground">
                      This email will be used for logging in as an administrator.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-password" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" /> Password
                      </Label>
                      <Input 
                        id="admin-password" 
                        type="password" 
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="admin-confirm-password" className="flex items-center gap-2">
                        <Lock className="h-4 w-4" /> Confirm Password
                      </Label>
                      <Input 
                        id="admin-confirm-password" 
                        type="password" 
                        value={adminConfirmPassword}
                        onChange={(e) => setAdminConfirmPassword(e.target.value)}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-muted/30 space-y-3">
                    <h4 className="font-medium flex items-center gap-2">
                      <Settings className="h-4 w-4" /> Administrator Privileges
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" /> Access to all system settings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" /> User and employee management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" /> Billing and subscription controls
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" /> Analytics and reporting
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" /> API integrations and webhooks
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="sm:flex-1"
                >
                  Back to Business
                </Button>
                <Button 
                  type="button"
                  onClick={nextStep}
                  className="sm:flex-1"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            
            {/* Confirmation Tab */}
            <TabsContent value="confirmation" className="space-y-6">
              <FadeIn>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{t('almostDone')}</h3>
                    <p className="text-muted-foreground mt-2">
                      Please review your information before submitting
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium flex items-center gap-2 mb-3">
                        <Building className="h-4 w-4" /> Business Information
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Name</p>
                          <p className="font-medium">{businessName || 'Not provided'}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Industry</p>
                          <p className="font-medium">{businessIndustry || 'Not provided'}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Email</p>
                          <p className="font-medium">{businessEmail || 'Not provided'}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Phone</p>
                          <p className="font-medium">{businessPhone || 'Not provided'}</p>
                        </div>
                        <div className="col-span-2 space-y-1">
                          <p className="text-muted-foreground">Address</p>
                          <p className="font-medium">
                            {[businessAddress, businessCity, businessState, businessZip]
                              .filter(Boolean)
                              .join(', ') || 'Not provided'}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Website</p>
                          <p className="font-medium">{businessWebsite || 'Not provided'}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Size</p>
                          <p className="font-medium">{businessSize || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium flex items-center gap-2 mb-3">
                        <User className="h-4 w-4" /> Administrator Account
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Name</p>
                          <p className="font-medium">{adminName || 'Not provided'}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">Title</p>
                          <p className="font-medium">{adminTitle || 'Not provided'}</p>
                        </div>
                        <div className="col-span-2 space-y-1">
                          <p className="text-muted-foreground">Email</p>
                          <p className="font-medium">{adminEmail || 'Not provided'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-md bg-muted/30">
                    <h4 className="font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Terms and Agreement
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      By clicking "Complete Registration", you agree to our Terms of Service and Privacy Policy.
                      You also agree to receive notifications and marketing communications.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="sm:flex-1"
                >
                  Back to Admin
                </Button>
                <Button 
                  type="submit" 
                  className="sm:flex-1"
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Complete Registration'}
                  {!loading && <CheckCircle className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </form>
  );
};

