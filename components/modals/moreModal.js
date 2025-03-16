//npm i boostrap react-boostrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getHugeImage } from '@/utils/imageFn'
import CountryFlag from '@/components/misc/countryFlag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faCheck, faHourglass, faX, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

//for styling purposes. essential? 
import 'bootstrap/dist/css/bootstrap.min.css';
import { acceptCard, deleteCard } from '@/utils/modFns';
import ModalHeader from './createComponents/modalHeader';
import ThreeButtons from './modComponents/ThreeButtons';

// for moderation and more!
export default function ModalView({card, show, setShow, countryCode, mod}) {
    const name = "TEST NAME" // eventually, cards have names from the db
    const onClick = () => { console.log("modal clicked!")}
    const image = 'next.svg'
    const headerTitle = card.title + " Fractal Grid"
    const currentUser= false


    return (
            <Modal show={show} onHide={() => setShow(false)}>
                <ModalHeader title={headerTitle} currentUser={false}
                    name={name} onClick={onClick} image={image}/>
                    
                <Modal.Body className="modal-container"> 
                    {getHugeImage(card.image)}
                    {card.description}
                    {mod && <ThreeButtons card={card} setShow={setShow}/>}
                </Modal.Body>
                
                <Modal.Footer>
                    <div> made by {card.author} </div>
                    <div >
                            {currentUser && <CurrentUserImage/>}
                            {!currentUser && <UserImage name={name} image={image} onClick={onClick}/>}
                  </div>

                    <Button variant="primary" onClick={() => setShow(close)}>
                        Close
                    </Button> 
                </Modal.Footer>
            </Modal>
    )}
