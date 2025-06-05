import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://dscczaukwjawwbkzstet.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzY2N6YXVrd2phd3dia3pzdGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNTE5MDgsImV4cCI6MjA2MDcyNzkwOH0.GdvFyJvLI6zm-rlC84kwYCjm8JXARZ622o5AAffszQc";

const supabaseUrl = "https://hszdewrygdlcbvbdorwx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzemRld3J5Z2RsY2J2YmRvcnd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwOTgxNDQsImV4cCI6MjA2NDY3NDE0NH0.28uZ2kluWW-F8vDbAIyITJ1ZYAYt7EdRbeTrQHvLIns";

export const supabase = createClient(supabaseUrl, supabaseKey);
