'use client';
import { useState, useEffect } from 'react';
import { fetchAll } from '@/utils/dbFns/databaseFn';

export function usePaginatedCards(itemsPerPage = 5, mod = false) {
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
        const firstBatchJSON = await fetchAll(mod, itemsPerPage);
        const firstBatch = JSON.parse(firstBatchJSON);

        if (!cancelled) {
          setAllCards(firstBatch);
          setIsLoading(false);
        }

        // Step 2: fetch the rest in the background
        setIsBackgroundLoading(true);
        const fullBatchJSON = await fetchAll(mod);
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


