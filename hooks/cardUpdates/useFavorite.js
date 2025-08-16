// hooks/useFavorite.js
import { updateStatus } from '@/utils/dbFns/databaseFn';
import { useState, useEffect } from 'react';


// Custom hook to manage favorite status
const useFavorite = (card) => {
  const [isFavorite, setIsFavorite] = useState(card.ecyFav);

  // Toggle the favorite status
  const toggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus); // Update local state
    updateStatus(card.title, card._id, newFavoriteStatus); // Update DB via API
  };

  // Sync with the card's initial favorite status if it changes externally
  useEffect(() => {
    setIsFavorite(card.ecyFav);
  }, [card.ecyFav]);

  return { isFavorite, toggleFavorite };
};

export default useFavorite;
