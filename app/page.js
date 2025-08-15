'use client';
import {useState} from 'react'
import { useSession } from 'next-auth/react';
import { usePaginatedCards } from '@/hooks/usePaginatedCards';
import CreateButton from '@/components/buttons/createButton';
import CreateModal from '@/components/modals/createModal';
import ConfirmModal from '@/components/modals/confirmModal';
import SignInButton from '@/components/buttons/signIn';
import ProfilePic from '@/components/buttons/profilePic';
import { LoadingPage } from '@/components/loading/login';
import { getCards } from '@/utils/cards';
import './extra.css';
import PaginationControls from '@/components/elements/PaginationControls';

const cardContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  padding: '20px',
  justifyContent: 'center',
};

export default function Home() {
  const { data, status } = useSession();

  const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3); // 10 per page
  const [show, setShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [countryCode, setCountryCode] = useState('US');

  if (status === 'loading' || isLoading) return <LoadingPage />;

  return (
    <main>
      {status === 'authenticated' && (
        <CreateButton handleClick={() => setShow(true)} />
      )}
      <SignInButton />
      <ProfilePic />

      <ConfirmModal
        show={confirmModalShow}
        handleClose={() => setConfirmModalShow(false)}
      />
      <CreateModal
        show={show}
        handleClose={() => setShow(false)}
        cards={cards}
        setCards={() => {}} // optional, since we handle in hook
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        confirmShow={confirmModalShow}
        setConfirmShow={setConfirmModalShow}
      />

      <div style={cardContainerStyle}>{getCards(cards)}</div>

      {/* Pagination Controls */}
      <PaginationControls page={page} totalPages={totalPages} setPage={setPage}/>
    </main>
  );
}

