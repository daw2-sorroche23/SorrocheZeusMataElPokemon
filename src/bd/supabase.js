import { createClient } from '@supabase/supabase-js'

// Conexión con supabase
// Estamos diciendo la url donde estara nuestra base de datos
const supabaseUrl = 'https://iryecmvubunvcoacyiga.supabase.co'

// const supabaseKey = process.env.SUPABASE_KEY
// contraseña de base de datos
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeWVjbXZ1YnVudmNvYWN5aWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxNzk5MzMsImV4cCI6MTk5Mjc1NTkzM30.OZBXSC14CIc9Yy0W52Y25XAaGqcGQOMw1A5QypHzTHc'

// conexion a la base de datos
export const supabase = createClient(supabaseUrl, supabaseKey)
