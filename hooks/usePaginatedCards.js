'use client';
import { useState, useEffect } from 'react';
import { fetchAll } from '@/utils/dbFns/databaseFn';

export function usePaginatedCards(itemsPerPage = 1, mod = false, onlyFavorites=false) {
  const [allCards, setAllCards] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        console.log("how many times do we go through this useEffect?")
        setIsLoading(true);

        // const firstBatchJSON = await fetchAll(mod, itemsPerPage);
        const firstBatch = await fetchAll(mod, itemsPerPage, onlyFavorites);
        console.log("first batch has been fetched !")
        // const firstBatch = JSON.parse(firstBatchJSON);

        if (!cancelled) {
          console.log("First batch length:", firstBatch.length);
          setAllCards(firstBatch);
          setIsLoading(false);
        }
        console.log("now we're fetching background things ")
        // Step 2: fetch the rest in the background
        setIsBackgroundLoading(true);
        const fullBatch = await fetchAll(mod, null, onlyFavorites);

        if (!cancelled) {
          console.log("Full batch length:", fullBatch.length);
          setAllCards(fullBatch);
          setIsBackgroundLoading(false);
        }

      } catch (err) {
        console.error('Error fetching cards:', err);
        setIsLoading(false);
        setIsBackgroundLoading(false);
      }
    })();

    // return () => {
      // console.log("WHY IS IT CANCELED???")
      // cancelled = true;
    // };
  }, [itemsPerPage, mod, onlyFavorites]);


  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = allCards.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allCards.length / itemsPerPage) || 1;

  return {
    cards: currentCards,
    page,
    setPage,
    totalPages,
    isLoading,
    isBackgroundLoading,
  };
}

