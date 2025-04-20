
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
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
    const { message } = await req.json()
    
    const configuration = new Configuration({
      apiKey: Deno.env.get('OPENAI_API_KEY'),
    })
    const openai = new OpenAIApi(configuration)

    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant for a call center. You help users with their calls and provide professional, helpful responses. Keep responses concise and focused on call-related topics."
        },
        {
          role: "user",
          content: message
        }
      ],
    })

    const aiResponse = completion.data.choices[0]?.message?.content || "I apologize, I couldn't process that request."
    
    // Log the interaction in the database
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2')
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )
    
    await supabaseClient
      .from('ai_interactions')
      .insert({
        message: message,
        response: aiResponse
      })
    
    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      },
    )
  }
})
