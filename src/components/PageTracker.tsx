
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
      trackPageVisit(currentPath).catch(console.error);
      prevPathRef.current = currentPath;
    }
  }, [location.pathname]);

  // No UI to render
  return null;
};

export default PageTracker;
