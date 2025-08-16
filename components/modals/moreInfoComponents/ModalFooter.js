import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ModButtonTemplate } from '@/components/buttons/ButtonTemplate';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DeleteButton } from '@/components/buttons/ThreeButtons';

import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

function ExtraDelete({ card, setShow, admin, onModPage }) {
  if (onModPage) return null; // Do not show on the mod page
  if (!admin) return null; // Not possible unless admin
  return <DeleteButton card={card} setShow={setShow} />;
}

export default function ModalFooter({ card, setShow, admin, onModPage, currentUser, name, image, onClick }) {
  return (
        <Modal.Footer>
             <ModButtonTemplate 
                onClick={() => console.log("sga")} 
                icon={faStar} 
                label="favorite"
                color="gold"
                mod={admin}
             />
            {/* can delete means either is admin or card author matches current user */}
            <ExtraDelete card={card} setShow={setShow} admin={admin} onModPage={onModPage} />


          {/* could potentiall put {card.name} but rn that's email */}
          <div> made by: </div>
          <div >
                  {currentUser && <CurrentUserImage/>}
                  {!currentUser && <UserImage name={name} image={image} onClick={onClick}/>}
          </div>
        
          <Button variant="primary" onClick={() => setShow(close)}>
              Close
          </Button> 
        </Modal.Footer>


  );
}

