
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import ModalHeader from './createComponents/modalHeader';
import ModalBody from './createComponents/modalBody'
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling




// function /
export default function CreateModal({
    show, 
    handleClose, 
    cards, 
    setCards, 
    setConfirmShow}) {

    return (
            <Modal show={show} onHide={handleClose} >
                <ModalHeader title={"Add grid to gallery"} currentUser={true}/>
                <ModalBody 
                    handleClose={handleClose}
                    cards={cards}
                    setCards={setCards}
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