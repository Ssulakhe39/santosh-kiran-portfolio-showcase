
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageVisit } from '@/services/databaseService';

const PageTracker = () => {
  const location = useLocation();
  const prevPathRef = useRef<string>('');

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Only track if the path changes or on initial load
    if (prevPathRef.current !== currentPath) {
      // Use async IIFE to handle the promise without useEffect warning
      (async () => {
        try {
          await trackPageVisit(currentPath);
        } catch (error) {
          // Silent catch for analytics - no need to disturb the user experience
          console.error("Failed to track page visit:", error);
        }
        prevPathRef.current = currentPath;
      })();
    }
  }, [location.pathname]);

  // No UI to render
  return null;
};

export default PageTracker;
