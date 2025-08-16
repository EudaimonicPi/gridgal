'use client';
import CreateButton from '@/components/buttons/createButton';
// import CreateModal from '@/components/modals/CreateCardModal';
import ConfirmModal from '@/components/modals/SubmittedGridModal';
import SignInButton from '@/components/buttons/signIn';
import ProfilePic from '@/components/buttons/profilePic';

export default function HomepageHeader({ show, setShow, confirmModalShow, setConfirmModalShow, isAuthenticated }) {
  return (
    <div>
      {isAuthenticated && (
        <CreateButton handleClick={() => setShow(true)} />
      )}
      {/* hmmm... want this on the left though */}
      {!isAuthenticated && <SignInButton />}

      <ProfilePic />

      <ConfirmModal
        show={confirmModalShow}
        handleClose={() => setConfirmModalShow(false)}
      />
      <CreateModal
        show={show}
        handleClose={() => setShow(false)}
        cards={[]}
        setCards={() => {}}
        confirmShow={confirmModalShow}
        setConfirmShow={setConfirmModalShow}
      />
    </div>
  );
}
