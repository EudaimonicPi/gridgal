//npm i boostrap react-boostrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getHugeImage } from '@/utils/imageFn'

//for styling purposes. essential? 
import 'bootstrap/dist/css/bootstrap.min.css';

 
export default function ModalView({card, show, setShow}) {
    return (
            <Modal show={show} onHide={() => setShow(false)}>
                {/* <div> ahls;kasgas</div> */}
                <Modal.Header closeButton> 
                <Modal.Title>  {card.title} Fractal Grid </Modal.Title>
                </Modal.Header>      
                <Modal.Body className="modal-container"> 
                    <div> Higher Res info</div>
                    {getHugeImage(card.image)}
                    {card.description}
                </Modal.Body>
                <Modal.Footer>
                    <div> made by {card.author} </div>
                    <Button variant="primary" onClick={() => setShow(close)}>
                    Close
                 </Button> 
           
                </Modal.Footer>
            </Modal>
    )}
