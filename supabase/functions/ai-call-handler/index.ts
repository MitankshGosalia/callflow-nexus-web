
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Configuration, OpenAIApi } from "https://esm.sh/openai@3.2.1"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log("AI call handler function called");
    const { callDetails, userMessage } = await req.json()
    console.log("Call details:", JSON.stringify(callDetails));
    console.log("User message:", userMessage);
    
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      console.error("OPENAI_API_KEY environment variable is not set");
      throw new Error("OPENAI_API_KEY environment variable is not set");
    }
    
    const configuration = new Configuration({
      apiKey: openaiApiKey,
    })
    const openai = new OpenAIApi(configuration)

    // Prepare context-aware system prompt
    const systemPrompt = `
      You are an AI assistant making a professional call on behalf of a user. 
      Context of the call: ${callDetails.context || 'General business communication'}
      Your goal is to:
      - Communicate clearly and professionally
      - Represent the user's interests
      - Gather or provide necessary information
      - Maintain a neutral to positive tone
    `;

    console.log("Calling OpenAI API...");
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
    })

    console.log("OpenAI API response received");
    const aiResponse = completion.data.choices[0]?.message?.content || 
      "I apologize, I couldn't process that request."
    
    // Optional: Store interaction in Supabase
    try {
      const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
      const supabaseUrl = Deno.env.get('SUPABASE_URL');
      const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
      
      if (!supabaseUrl || !supabaseServiceRoleKey) {
        console.error("Supabase environment variables not set");
        throw new Error("Supabase environment variables not set");
      }
      
      const supabaseClient = createClient(supabaseUrl, supabaseServiceRoleKey)
      
      console.log("Storing transcript in Supabase");
      if (!callDetails.callId) {
        console.warn("No callId provided, creating a new record instead");
      }
      
      await supabaseClient
        .from('ai_call_transcripts')
        .insert({
          call_id: callDetails.callId || null,
          user_id: callDetails.userId || null,
          speaker: 'AI',
          transcript: aiResponse,
          emotion: 'neutral' // Could be enhanced with sentiment analysis
        })
      
      console.log("Transcript stored successfully");
    } catch (supabaseError) {
      console.error("Error storing transcript:", supabaseError);
      // Continue with the response even if storage fails
    }
    
    return new Response(
      JSON.stringify({ 
        response: aiResponse,
        callId: callDetails.callId,
        success: true
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('Error in AI Call Handler:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message, 
        success: false,
        details: typeof error === 'object' ? JSON.stringify(error) : 'Unknown error'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      },
    )
  }
})
