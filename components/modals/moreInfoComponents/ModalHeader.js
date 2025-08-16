import React from 'react';
import { Modal } from 'react-bootstrap';
import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

export default function ModalHeader({ title, currentUser, name, onClick, image }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
      <div>
        {currentUser ? <CurrentUserImage /> : <UserImage name={name} image={image} onClick={onClick} />}
      </div>
    </Modal.Header>
  );
}
