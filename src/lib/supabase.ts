import { createClient } from '@supabase/supabase-js';

// Get environment variables or stored values
const getSupabaseUrl = () => {
  const storedUrl = localStorage.getItem('VITE_SUPABASE_URL');
  return storedUrl || import.meta.env.VITE_SUPABASE_URL || 'https://luaiepqxmmqlikmhyvwe.supabase.co';
};

const getSupabaseAnonKey = () => {
  const storedKey = localStorage.getItem('VITE_SUPABASE_ANON_KEY');
  return storedKey || import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1YWllcHF4bW1xbGlrbWh5dndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMzM1OTYsImV4cCI6MjA2MDcwOTU5Nn0.12_TD0oHTSbjPAKK9vQWYyJKF1vKtwsdDeDrIXROtl8';
};

// Initialize the Supabase client with auth options
export const supabase = createClient(
  getSupabaseUrl(), 
  getSupabaseAnonKey(),
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

console.log("Supabase client initialized with URL:", getSupabaseUrl());

// Call-related types
export interface CallLog {
  id: string;
  user_id: string;
  recipient_name: string;
  recipient_number: string;
  duration: number;
  started_at: string;
  ended_at: string | null;
  notes: string | null;
  call_type: 'direct' | 'conference';
  status: 'completed' | 'missed' | 'failed';
  recording_url: string | null;
  ai_assistant_enabled: boolean;
  created_at: string;
}

export interface AIInteraction {
  id: string;
  user_id: string;
  call_id: string | null;
  message: string;
  response: string | null;
  created_at: string;
}

// Call-related functions
export const callService = {
  async createCallLog(callData: Omit<CallLog, 'id' | 'user_id' | 'created_at'>) {
    try {
      // Get the current user session
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData?.session?.user?.id;
      
      // Add the user_id to the call data if available
      const callDataWithUser = userId ? { ...callData, user_id: userId } : callData;
      
      const { data, error } = await supabase
        .from('call_logs')
        .insert([callDataWithUser])
        .select()
        .single();
        
      if (error) {
        console.error("Error creating call log:", error);
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Exception creating call log:", error);
      throw error;
    }
  },
  
  async updateCallLog(id: string, updates: Partial<CallLog>) {
    try {
      const { data, error } = await supabase
        .from('call_logs')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
        
      if (error) {
        console.error("Error updating call log:", error);
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Exception updating call log:", error);
      throw error;
    }
  },
  
  async getUserCalls() {
    try {
      const { data, error } = await supabase
        .from('call_logs')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error("Error getting user calls:", error);
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Exception getting user calls:", error);
      throw error;
    }
  }
};

// AI interaction functions
export const aiService = {
  async createInteraction(message: string, callId?: string) {
    try {
      const { data, error } = await supabase
        .from('ai_interactions')
        .insert([
          {
            message,
            call_id: callId
          }
        ])
        .select()
        .single();
        
      if (error) {
        console.error("Error creating AI interaction:", error);
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Exception creating AI interaction:", error);
      throw error;
    }
  },
  
  async getUserInteractions() {
    try {
      const { data, error } = await supabase
        .from('ai_interactions')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error("Error getting user interactions:", error);
        throw error;
      }
      return data;
    } catch (error) {
      console.error("Exception getting user interactions:", error);
      throw error;
    }
  }
};
