'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePaginatedCards } from '@/hooks/usePaginatedCards';
import HomepageHeader from '@/components/pageSections/headers/HomepageHeader'; // Import the new component
import { LoadingPage } from '@/components/elements/LoadingPage';
import CardsContainer from '@/components/elements/CardsContainer';

export default function Page() {
  const { data, status } = useSession();
  const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3); 
  const [show, setShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);

  if (status === 'loading' || isLoading) return <LoadingPage />;

  return (
    <main>
      {/* Use HomepageHeader component */}
      <HomepageHeader
        show={show}
        setShow={setShow}
        confirmModalShow={confirmModalShow}
        setConfirmModalShow={setConfirmModalShow}
        isAuthenticated={status === 'authenticated'}
      />
         <CardsContainer 
                cards={cards} 
                page={page}
                totalPages={totalPages}
                setPage={setPage}/>

    </main>
  );
}
