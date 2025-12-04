import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const CleanRouter = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Clean URL immediately when location changes
    if (window.location.hash && window.location.hash !== '#/') {
      const cleanPath = window.location.pathname + window.location.search;
      window.history.replaceState(null, null, cleanPath);
    }
  }, [location]);

  return children;
};