import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_APP_API_KEY;
const supabaseUrl = "https://pkkglaeseuzkwbecbahr.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
