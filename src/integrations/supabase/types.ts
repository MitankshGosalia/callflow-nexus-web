export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_call_transcripts: {
        Row: {
          call_id: string | null
          emotion: string | null
          id: string
          speaker: string | null
          timestamp: string | null
          transcript: string | null
          user_id: string | null
        }
        Insert: {
          call_id?: string | null
          emotion?: string | null
          id?: string
          speaker?: string | null
          timestamp?: string | null
          transcript?: string | null
          user_id?: string | null
        }
        Update: {
          call_id?: string | null
          emotion?: string | null
          id?: string
          speaker?: string | null
          timestamp?: string | null
          transcript?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_call_transcripts_call_id_fkey"
            columns: ["call_id"]
            isOneToOne: false
            referencedRelation: "call_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_interactions: {
        Row: {
          call_id: string | null
          created_at: string
          id: string
          message: string
          response: string | null
          user_id: string | null
        }
        Insert: {
          call_id?: string | null
          created_at?: string
          id?: string
          message: string
          response?: string | null
          user_id?: string | null
        }
        Update: {
          call_id?: string | null
          created_at?: string
          id?: string
          message?: string
          response?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_interactions_call_id_fkey"
            columns: ["call_id"]
            isOneToOne: false
            referencedRelation: "call_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_training_data: {
        Row: {
          category: string | null
          created_at: string
          effectiveness_rating: number | null
          id: string
          prompt: string
          response: string
          user_id: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          prompt: string
          response: string
          user_id?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          prompt?: string
          response?: string
          user_id?: string | null
        }
        Relationships: []
      }
      call_analysis: {
        Row: {
          action_items: string[] | null
          call_id: string
          created_at: string
          id: string
          key_topics: string[] | null
          sentiment_score: number | null
          summary: string | null
          user_id: string | null
        }
        Insert: {
          action_items?: string[] | null
          call_id: string
          created_at?: string
          id?: string
          key_topics?: string[] | null
          sentiment_score?: number | null
          summary?: string | null
          user_id?: string | null
        }
        Update: {
          action_items?: string[] | null
          call_id?: string
          created_at?: string
          id?: string
          key_topics?: string[] | null
          sentiment_score?: number | null
          summary?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "call_analysis_call_id_fkey"
            columns: ["call_id"]
            isOneToOne: false
            referencedRelation: "call_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      call_logs: {
        Row: {
          ai_assistant_enabled: boolean | null
          ai_summary: string | null
          ai_transcript: string | null
          call_type: string
          created_at: string
          duration: number | null
          ended_at: string | null
          id: string
          language: string | null
          notes: string | null
          recipient_name: string
          recipient_number: string
          recording_url: string | null
          sentiment_score: number | null
          started_at: string
          status: string
          user_id: string | null
        }
        Insert: {
          ai_assistant_enabled?: boolean | null
          ai_summary?: string | null
          ai_transcript?: string | null
          call_type: string
          created_at?: string
          duration?: number | null
          ended_at?: string | null
          id?: string
          language?: string | null
          notes?: string | null
          recipient_name: string
          recipient_number: string
          recording_url?: string | null
          sentiment_score?: number | null
          started_at?: string
          status: string
          user_id?: string | null
        }
        Update: {
          ai_assistant_enabled?: boolean | null
          ai_summary?: string | null
          ai_transcript?: string | null
          call_type?: string
          created_at?: string
          duration?: number | null
          ended_at?: string | null
          id?: string
          language?: string | null
          notes?: string | null
          recipient_name?: string
          recipient_number?: string
          recording_url?: string | null
          sentiment_score?: number | null
          started_at?: string
          status?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
