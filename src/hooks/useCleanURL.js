import { useEffect } from 'react';

export const useCleanURL = () => {
  useEffect(() => {
    // Only clean URL on localhost, preserve hash routing on GitHub Pages
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      const cleanURL = () => {
        if (window.location.hash) {
          window.history.replaceState(null, null, window.location.pathname + window.location.search);
        }
      };
      
      cleanURL();
      
      const handleHashChange = () => {
        setTimeout(cleanURL, 0);
      };
      
      window.addEventListener('hashchange', handleHashChange);
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
    // On GitHub Pages, do nothing - let hash routing work normally
  }, []);
};