import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabaseUrl = 'https://hsadfoxwunrbsqerdhzp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYWRmb3h3dW5yYnNxZXJkaHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NjAxMTUsImV4cCI6MjAwNzMzNjExNX0.R67iiTkmlt0mXPvoWdVnoLIUTG4kHJKCZjbQCXoV3wc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)