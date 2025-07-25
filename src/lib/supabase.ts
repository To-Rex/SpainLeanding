import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  phone?: string
  city?: string
  duration?: string
  travelers?: string
  budget?: string
  interests: string[]
  message?: string
  status: 'new' | 'in_progress' | 'completed'
  created_at?: string
  updated_at?: string
}