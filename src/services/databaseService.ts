
import { supabase } from "@/integrations/supabase/client";

// Interface for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

// Interface for page visit data
export interface PageVisit {
  path: string;
  referrer?: string;
  created_at?: string;
}

// Save contact form submissions
export const saveContactSubmission = async (data: ContactFormData) => {
  try {
    const { error } = await supabase.from('contact_submissions').insert([
      { 
        name: data.name,
        email: data.email,
        message: data.message,
        created_at: new Date().toISOString()
      }
    ]);
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return { success: false, error };
  }
};

// Track page visits
export const trackPageVisit = async (path: string) => {
  try {
    const { error } = await supabase.from('page_visits').insert([
      { 
        path, 
        referrer: document.referrer || null,
        created_at: new Date().toISOString()
      }
    ]);
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error tracking page visit:", error);
    // Silently fail for analytics
    return { success: false, error };
  }
};
