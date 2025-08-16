'use client';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from '@/components/modals/moreInfoComponents/ModalHeader';
import ModalFooter from '@/components/modals/moreInfoComponents/ModalFooter';
import { getHugeImage } from '@/utils/imageFn';
import ThreeButtons from '../buttons/ThreeButtons';
import { useSession } from 'next-auth/react';
import { isAdmin } from '@/utils/modFns';

export default function MoreInfoModal({ card, show, setShow, mod, setRefresh }) {
  const { data, status } = useSession();
  const name = card.author;
  const image = card.authorImage || 'next.svg';
  const headerTitle = `${card.title} Fractal Grid`;
  const currentUser = false;

  const onModPage = mod;
  const admin = data ? isAdmin(data.user.email) : false;
  // NOTE: NAME HERE IS EMAIL WE MUST MUST MUST CHANGE THAT

  const onClick = () => {
    console.log('modal clicked!');
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <ModalHeader title={headerTitle} currentUser={false} name={name} onClick={onClick} image={image} />
      <Modal.Body>
        {getHugeImage(card.image)}
        {card.description}
        {onModPage && <ThreeButtons setRefresh={setRefresh} card={card} setShow={setShow} />}
      </Modal.Body>
      <ModalFooter
        card={card}
        setShow={setShow}
        admin={admin}
        onModPage={onModPage}
        currentUser={currentUser}
        name={name}
        image={image}
        onClick={onClick}
      />
    </Modal>
  );
}
