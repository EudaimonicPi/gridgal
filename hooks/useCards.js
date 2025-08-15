// hooks/useCards.js
'use client'
import { useState, useEffect } from 'react';
import { fetchAll } from '@/utils/dbFns/databaseFn';

export function useCards(batchSize = null, batchDelay = 300) {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      try {
        setIsLoading(true);

        const fetchedCardsJSON = await fetchAll();
        const allCards = JSON.parse(fetchedCardsJSON);

        if (batchSize && batchSize > 0) {
          // Load in batches
          let currentIndex = 0;

          function loadBatch() {
            if (isCancelled) return;

            const nextBatch = allCards.slice(
              currentIndex,
              currentIndex + batchSize
            );
            setCards((prev) => [...prev, ...nextBatch]);
            currentIndex += batchSize;

            if (currentIndex < allCards.length) {
              setTimeout(loadBatch, batchDelay);
            } else {
              setIsLoading(false);
            }
          }

          loadBatch();
        } else {
          // Load all at once
          if (!isCancelled) {
            setCards(allCards);
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error('Error fetching cards:', err);
        setIsLoading(false);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [batchSize, batchDelay]);

  return { cards, setCards, isLoading };
}
