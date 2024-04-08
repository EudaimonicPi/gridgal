
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import Image from '@/public/vercel.svg'
import ModalHeader from './createComponents/modalHeader';
import ModalBody from './createComponents/modalBody'

const IMAGE_DEFAULT = Image.src



// function /
export default function CreateModal({show, handleClose, cards, setCards, countryCode, setCountryCode}) {

    return (
            <Modal show={show} onHide={handleClose}>
                <ModalHeader setCountryCode={setCountryCode}/>
                <ModalBody 
                // check to see which ones in use!
                    handleClose={handleClose}
                    cards={cards}
                    setCards={setCards}
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                />
            </Modal>
  );
}