//npm i boostrap react-boostrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

//for styling purposes. essential? 
import 'bootstrap/dist/css/bootstrap.min.css';

//with all of these would probs be better to use props
export default function ModalView(props) {
    const show = props.show
    const setShow = props.setShow
    // const cellId = props.cellId
    // props: show, handleClose, cellId
    return (
            <Modal show={show} onHide={() => props.setShow(false)}>
                {/* <div> ahls;kasgas</div> */}
                <Modal.Header closeButton> 
                <Modal.Title>  some title shit </Modal.Title>
                </Modal.Header>      
                <Modal.Body className="modal-container"> 
                    <div>spme body stuff</div>
                </Modal.Body>
                <Modal.Footer>
                    <div>some footer stuff</div>
                    <Button variant="primary" onClick={() => setShow(close)}>
                    Close
                 </Button> 
           
                </Modal.Footer>
            </Modal>
    )}
