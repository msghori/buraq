import { useEffect } from 'react';

export const useCleanURL = () => {
  useEffect(() => {
    // Clean up any hash from URL immediately
    const cleanURL = () => {
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname + window.location.search);
      }
    };
    
    // Clean immediately
    cleanURL();
    
    // Also clean on hash changes
    const handleHashChange = () => {
      setTimeout(cleanURL, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};