import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://poqqptdjmokhrqttsgem.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcXFwdGRqbW9raHJxdHRzZ2VtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTMxNzI1NCwiZXhwIjoyMDA2ODkzMjU0fQ.8uCqfJyg6Yy4xrC84CfhOl_ElFL0crFBEIWeqmd-e90';

const supabase = createClient(supabaseUrl, supabaseKey);

export {supabase};
