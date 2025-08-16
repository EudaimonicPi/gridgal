// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { ModButtonTemplate } from '@/components/basicElements/ButtonTemplate';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { DeleteButton } from '@/components/elements/ThreeModButtons';

// import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

// function ExtraDelete({ card, setShow, admin, onModPage }) {
//   if (onModPage) return null; // Do not show on the mod page
//   if (!admin) return null; // Not possible unless admin
//   return <DeleteButton card={card} setShow={setShow} />;
// }

// export default function ModalFooter({ card, setShow, admin, onModPage, currentUser, name, image, onClick }) {

//   return (
//         <Modal.Footer>
//              {admin && !onModPage && <ModButtonTemplate 
//                 onClick={() => console.log("sga")} 
//                 icon={faStar} 
//                 label="favorite"
//                 color="gold"
//              />}
//             {/* can delete means either is admin or card author matches current user */}
//             <ExtraDelete card={card} setShow={setShow} admin={admin} onModPage={onModPage} />


//           {/* could potentiall put {card.name} but rn that's email */}
//           <div> made by: </div>
//           <div >
//                   {currentUser && <CurrentUserImage/>}
//                   {!currentUser && <UserImage name={name} image={image} onClick={onClick}/>}
//           </div>
        
//           <Button variant="primary" onClick={() => setShow(close)}>
//               Close
//           </Button> 
//         </Modal.Footer>


//   );
// }

import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ModButtonTemplate } from '@/components/basicElements/ButtonTemplate';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';  // For favorite icon toggling
import { DeleteButton } from '@/components/elements/ThreeModButtons';

import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

// Import the custom hook
import useFavorite from '@/hooks/cardUpdates/useFavorite';

function ExtraDelete({ card, setShow, admin, onModPage }) {
  if (onModPage) return null; // Do not show on the mod page
  if (!admin) return null; // Not possible unless admin
  return <DeleteButton card={card} setShow={setShow} />;
}

export default function ModalFooter({
  card,
  setShow,
  admin,
  onModPage,
  currentUser,
  name,
  image,
  onClick,
}) {
  // Use the custom useFavorite hook
  const { isFavorite, toggleFavorite } = useFavorite(card);

  return (
    <Modal.Footer>
      {/* Favorite Button */}
     {admin && !onModPage && <ModButtonTemplate
        onClick={toggleFavorite}  // Toggle favorite status using the hook
        icon={isFavorite ? faStar : faStarHalfAlt} // Toggle between filled and empty star
        label="Favorite"
        color="gold"
      />}

      {/* Extra Delete button if admin */}
      <ExtraDelete card={card} setShow={setShow} admin={admin} onModPage={onModPage} />

      <div>Made by:</div>
      <div>
        {currentUser && <CurrentUserImage />}
        {!currentUser && <UserImage name={name} image={image} onClick={onClick} />}
      </div>

      <Button variant="primary" onClick={() => setShow(false)}>
        Close
      </Button>
    </Modal.Footer>
  );
}
