'use client';
import { useState, useEffect } from 'react';
import { fetchAll } from '@/utils/dbFns/databaseFn';

export function usePaginatedCards(itemsPerPage = 5, mod = false, onlyFavorites=false) {
  const [allCards, setAllCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setIsLoading(true);

        // Step 1: fast load with a small batch
        // const firstBatchJSON = await fetchAll(mod, itemsPerPage);
        const firstBatchJSON = await fetchAll(mod, itemsPerPage, onlyFavorites);
        const firstBatch = JSON.parse(firstBatchJSON);

        if (!cancelled) {
          setAllCards(firstBatch);
          setIsLoading(false);
        }

        // Step 2: fetch the rest in the background
        setIsBackgroundLoading(true);
        const fullBatchJSON = await fetchAll(mod, null, onlyFavorites);
        const fullBatch = JSON.parse(fullBatchJSON);

        if (!cancelled) {
          setAllCards(fullBatch);
          setIsBackgroundLoading(false);
        }

      } catch (err) {
        console.error('Error fetching cards:', err);
        setIsLoading(false);
        setIsBackgroundLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [itemsPerPage, mod]);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = allCards.slice(startIndex, endIndex);

  return {
    cards: currentCards,
    page,
    setPage,
    totalPages: Math.ceil(allCards.length / itemsPerPage),
    isLoading,
    isBackgroundLoading,
  };
}




// export function usePaginatedCards(limit, isMod, onlyFavorites = false) {
//   const [cards, setCards] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchCards = async () => {
//       setIsLoading(true);
//       // Fetch the cards, passing the onlyFavorites flag to get only favorited cards
//       const allCards = await fetchAll(isMod, limit, onlyFavorites);
//       setCards(allCards.cards);
//       setTotalPages(allCards.totalPages);
//       setIsLoading(false);
//       console.log("ALL CARS IS ", allCards)
//     };
//     fetchCards();
//   }, [limit, page, isMod, onlyFavorites]);

//   return { cards, page, setPage, totalPages, isLoading };
// }

// You can modify this function to return cards from your API, including filtering by ecyFav if needed
// const fetchCardsFromAPI = async (limit, page, isMod, onlyFavorites) => {
//   // Example API call to fetch cards
//   const query = new URLSearchParams({ limit, page, isMod, onlyFavorites: onlyFavorites.toString() });
//   const res = await fetch(`/api/cards?${query.toString()}`);
//   const data = await res.json();
//   return data; // Assuming your API returns an object with 'cards' and 'totalPages'
// };
