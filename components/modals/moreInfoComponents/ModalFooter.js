import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ModButtonTemplate } from '@/components/buttons/ButtonTemplate';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import DeleteButton from '@/components/buttons/DeleteButton';
import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

function ExtraDelete({ card, setShow, admin, onModPage }) {
  if (onModPage) return null; // Do not show on the mod page
  if (!admin) return null; // Not possible unless admin

  return <DeleteButton card={card} setShow={setShow} />;
}

export default function ModalFooter({ card, setShow, admin, onModPage, currentUser, name, image, onClick }) {
  return (
    <Modal.Footer>
      <span>
        
        <ModButtonTemplate onClick={() => console.log('favorite clicked')} icon={faStar} label="Favorite" color="gold" mod={admin} />
        <ExtraDelete card={card} setShow={setShow} admin={admin} onModPage={onModPage} />
        <div>Made by:</div>
        <div>
          {currentUser ? <CurrentUserImage /> : <UserImage name={name} image={image} onClick={onClick} />}
        </div>
        <Button variant="primary" onClick={() => setShow(false)}>
          Close
        </Button>
      </span>

    </Modal.Footer>
  );
}
