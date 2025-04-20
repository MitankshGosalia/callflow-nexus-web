
import { createClient } from '@supabase/supabase-js';

// Default values for development (these will be replaced by actual env values if available)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
    const { data, error } = await supabase
      .from('call_logs')
      .insert([callData])
      .select()
      .single();
      
    if (error) throw error;
    return data;
  },
  
  async updateCallLog(id: string, updates: Partial<CallLog>) {
    const { data, error } = await supabase
      .from('call_logs')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
      
    if (error) throw error;
    return data;
  },
  
  async getUserCalls() {
    const { data, error } = await supabase
      .from('call_logs')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  }
};

// AI interaction functions
export const aiService = {
  async createInteraction(message: string, callId?: string) {
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
      
    if (error) throw error;
    return data;
  },
  
  async getUserInteractions() {
    const { data, error } = await supabase
      .from('ai_interactions')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  }
};
