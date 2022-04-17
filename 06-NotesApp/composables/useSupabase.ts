import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyeGVib2NoanFtaXFycnFycXF2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MDIxMzI1MCwiZXhwIjoxOTY1Nzg5MjUwfQ.w30KrvbS3krHbHvhUsFTX-ag0DX2RgSGaivSE4KPRDA";
const SUPABASE_URL = "https://xrxebochjqmiqrrqrqqv.supabase.co";

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return {
    supabase,
  };
};

export default useSupabase;
