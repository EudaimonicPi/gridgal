
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import Image from '@/public/vercel.svg'
import ModalHeader from './createComponents/modalHeader';
import ModalBody from './createComponents/modalBody'


const IMAGE_DEFAULT = Image.src


// function /
export default function CreateModal({show, handleClose, cards, setCards, countryCode, 
    setCountryCode, setConfirmShow}) {

    return (
            <Modal show={show} onHide={handleClose} >
                <ModalHeader title={"Add grid to gallery"} currentUser={true} setCountryCode={setCountryCode}/>
                <ModalBody 
                // check to see which ones in use!
                    handleClose={handleClose}
                    cards={cards}
                    setCards={setCards}
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                    setConfirmShow={setConfirmShow}
                    
                    
                />
                <Modal.Footer>
                                        <text style={{color: 'gray'}}>
                        NOTE: after submitting, the grid will go to the database for moderator approval.
                    </text>
                </Modal.Footer>
            </Modal>
  );
}