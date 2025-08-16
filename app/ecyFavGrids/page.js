// // pages/favorites.js
'use client'
import { useSession } from 'next-auth/react';
import { usePaginatedCards } from '@/hooks/usePaginatedCards';
import { LoadingPage } from '@/components/elements/LoadingPage';
import CardsContainer from '@/components/elements/CardsContainer';

export default function Page() {
  const { data, status } = useSession();
  const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3, false, true); // 10 per page

  if (status === 'loading' || isLoading) return <LoadingPage />;

  return (
    <div>
         <CardsContainer 
                cards={cards} 
                page={page}
                totalPages={totalPages}
                setPage={setPage}
                getEcyFavs={true}/>

    </div>
  );
}