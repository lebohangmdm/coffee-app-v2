import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://drelayajmkgamglguukd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZWxheWFqbWtnYW1nbGd1dWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjQ1NDksImV4cCI6MjAzMDc0MDU0OX0.-M7uzhXmQ4xCkci4iGQPgl56QiWmUm2i_Vx2EpnKG9w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
