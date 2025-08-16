// hooks/useArrowNavigation.js
import { useEffect } from 'react';

export default function useArrowNavigation({ page, totalPages, setPage }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setPage((p) => Math.max(p - 1, 1));
      } else if (event.key === 'ArrowRight') {
        setPage((p) => Math.min(p + 1, totalPages));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setPage, totalPages]);
}
