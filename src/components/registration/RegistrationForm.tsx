import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Mail, User, Lock, KeyRound, Users, ArrowRight, Briefcase, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface Employee {
  email: string;
  password: string;
  name: string;
  role: string;
}

const formSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters."),
  businessAddress: z.string().min(5, "Address must be at least 5 characters."),
  businessWebsite: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  businessPhone: z.string().min(8, "Phone number must be at least 8 digits."),
  businessDescription: z.string().min(10, "Description must be at least 10 characters."),
  industry: z.string().min(2, "Please select an industry."),
  adminName: z.string().min(2, "Admin name must be at least 2 characters."),
  adminEmail: z.string().email("Please enter a valid email address."),
  adminPassword: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters.")
}).refine((data) => data.adminPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

interface RegistrationFormProps {
  onSuccess: () => void;
}

export function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [newEmployee, setNewEmployee] = useState<Employee>({ email: '', password: '', name: '', role: '' });
  const [formRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1, once: true });
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      businessAddress: "",
      businessWebsite: "",
      businessPhone: "",
      businessDescription: "",
      industry: "",
      adminName: "",
      adminEmail: "",
      adminPassword: "",
      confirmPassword: ""
    },
  });

  const nextStep = () => {
    const currentFields = [
      ['businessName', 'businessAddress', 'businessWebsite', 'businessPhone', 'businessDescription', 'industry'],
      ['adminName', 'adminEmail', 'adminPassword', 'confirmPassword']
    ][currentStep - 1];
    
    form.trigger(currentFields as any).then(isValid => {
      if (isValid) {
        setCurrentStep(prev => Math.min(prev + 1, 3));
      }
    });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleAddEmployee = () => {
    if (newEmployee.email && newEmployee.password && newEmployee.name) {
      setEmployees([...employees, { ...newEmployee }]);
      setNewEmployee({ email: '', password: '', name: '', role: '' });
      toast({ description: "Employee added successfully" });
    }
  };

  const handleRemoveEmployee = (index: number) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    toast({ description: "Employee removed" });
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    console.log("Employees:", employees);
    
    setTimeout(() => {
      onSuccess();
    }, 1500);
  };

  return (
    <Card 
      ref={formRef} 
      className={cn(
        "w-full shadow-lg border-2 border-primary/20",
        inView ? "animate-scale-in" : "opacity-0"
      )}
    >
      <CardHeader className="space-y-2 bg-primary/5 border-b border-primary/10">
        <CardTitle className="text-2xl md:text-3xl font-bold text-center">
          {t('businessRegistration')}
        </CardTitle>
        <CardDescription className="text-center">
          {t('registrationDescription')}
        </CardDescription>
        
        <div className="w-full mt-6">
          <div className="flex justify-between">
            {[1, 2, 3].map((step) => (
              <div 
                key={step}
                className={cn(
                  "flex flex-col items-center", 
                  { "opacity-100": step <= currentStep, "opacity-50": step > currentStep }
                )}
              >
                <div 
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-full text-white font-medium transition-all",
                    { "bg-primary": step <= currentStep, "bg-muted": step > currentStep }
                  )}
                >
                  {step}
                </div>
                <span className="text-xs mt-1">
                  {step === 1 ? t('businessDetails') : 
                   step === 2 ? t('adminAccount') : 
                   t('employeeAccess')}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 w-full bg-muted mt-4 rounded-full">
            <div 
              className="h-1 bg-primary rounded-full transition-all"
              style={{ width: `${(currentStep - 1) / 2 * 100}%` }}
            ></div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4 animate-fade-in">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" /> {t('businessName')}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder={t('enterBusinessName')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> {t('industry')}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder={t('enterIndustry')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="businessAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {t('businessAddress')}
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('enterAddress')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="businessPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="h-4 w-4" /> {t('phoneNumber')}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t('enterPhone')} type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Globe className="h-4 w-4" /> {t('website')} ({t('optional')})
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourcompany.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="businessDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('businessDescription')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('describeYourBusiness')} rows={3} {...field} />
                      </FormControl>
                      <FormDescription>
                        {t('briefDescriptionBusiness')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4 animate-fade-in">
                <FormField
                  control={form.control}
                  name="adminName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" /> {t('adminName')}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder={t('enterFullName')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="adminEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Mail className="h-4 w-4" /> {t('adminEmail')}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="admin@yourcompany.com" type="email" {...field} />
                      </FormControl>
                      <FormDescription>
                        {t('thisWillBeUsername')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="adminPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Lock className="h-4 w-4" /> {t('password')}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t('enterPassword')} type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <KeyRound className="h-4 w-4" /> {t('confirmPassword')}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder={t('confirmPassword')} type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5" /> {t('addEmployeeAccounts')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('employeeAccountsDescription')}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <Input 
                        placeholder={t('employeeName')}
                        value={newEmployee.name}
                        onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                      />
                      <Input 
                        placeholder={t('employeeRole')}
                        value={newEmployee.role}
                        onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Input 
                        type="email"
                        placeholder={t('employeeEmail')}
                        value={newEmployee.email}
                        onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                      />
                      <Input 
                        type="password"
                        placeholder={t('temporaryPassword')}
                        value={newEmployee.password}
                        onChange={(e) => setNewEmployee({...newEmployee, password: e.target.value})}
                      />
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full" 
                      onClick={handleAddEmployee}
                    >
                      {t('addEmployee')}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium mb-2">
                    {t('addedEmployees')} ({employees.length})
                  </h4>
                  
                  {employees.length === 0 ? (
                    <div className="text-center py-4 bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground">{t('noEmployeesAdded')}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {employees.map((emp, index) => (
                        <div 
                          key={index} 
                          className="flex items-center justify-between bg-muted/30 p-3 rounded-md"
                        >
                          <div>
                            <p className="font-medium">{emp.name}</p>
                            <div className="flex items-center gap-4">
                              <p className="text-sm text-muted-foreground">{emp.email}</p>
                              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                {emp.role || t('employee')}
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-destructive hover:text-destructive/90"
                            onClick={() => handleRemoveEmployee(index)}
                          >
                            {t('remove')}
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 border-t flex justify-between">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  {t('previous')}
                </Button>
              ) : (
                <div></div>
              )}
              
              {currentStep < 3 ? (
                <Button type="button" onClick={nextStep} className="gap-2">
                  {t('next')} <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" className="gap-2">
                  {t('completeRegistration')}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
