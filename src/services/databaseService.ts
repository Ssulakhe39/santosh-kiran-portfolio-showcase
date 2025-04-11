
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
    // Use type assertion to help TypeScript understand this is a valid table
    const { error } = await supabase
      .from('contact_submissions' as any)
      .insert([
        { 
          name: data.name,
          email: data.email,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ] as any);
    
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
    // Use type assertion to help TypeScript understand this is a valid table
    const { error } = await supabase
      .from('page_visits' as any)
      .insert([
        { 
          path, 
          referrer: document.referrer || null,
          created_at: new Date().toISOString()
        }
      ] as any);
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error("Error tracking page visit:", error);
    // Silently fail for analytics
    return { success: false, error };
  }
};
