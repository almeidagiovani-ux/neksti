import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jtrnckpeazblsnjzdfip.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0cm5ja3BlYXpibHNuanpkZmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNzMzOTYsImV4cCI6MjA4ODc0OTM5Nn0.xOKS5k5JYUkyBKIdbiTbSMsEcPulKCtwIUoMTSJliD0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)