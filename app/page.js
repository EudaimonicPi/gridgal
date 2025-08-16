'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePaginatedCards } from '@/hooks/usePaginatedCards';
// the culprit

// import HomepageHeader from '@/components/pageSections/headers/HomepageHeader'; // Import the new component
import { LoadingPage } from '@/components/elements/LoadingPage';
import { getCards } from '@/utils/cards';
import PaginationControls from '@/components/elements/PaginationPageControl';
import '@/styles/cards.css';


export default function Page() {
  const { data, status } = useSession();
  const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3); // 10 per page
  const [show, setShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);

  if (status === 'loading' || isLoading) return <LoadingPage />;

  return (
    <main>
      {/* Use HomepageHeader component */}
      {/* <HomepageHeader
        show={show}
        setShow={setShow}
        confirmModalShow={confirmModalShow}
        setConfirmModalShow={setConfirmModalShow}
        isAuthenticated={status === 'authenticated'}
      /> */}

      <div className="cards-container">
        {getCards(cards)}
      </div>

      {/* Pagination Controls */}
      <PaginationControls page={page} totalPages={totalPages} setPage={setPage} />
    </main>
  );
}
