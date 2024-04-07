import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ykbwvlmsduyfptexjlvm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrYnd2bG1zZHV5ZnB0ZXhqbHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjI2MDQsImV4cCI6MjAyNzYzODYwNH0.e7JakJPK7gPgfPYRBELyyXUa2wPaihARYyUAtqqNMu0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
