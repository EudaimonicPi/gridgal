//npm i boostrap react-boostrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getHugeImage } from '@/utils/imageFn'
import CountryFlag from '@/components/misc/countryFlag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faCheck, faHourglass, faX, faTrashCan} from '@fortawesome/free-solid-svg-icons'

//for styling purposes. essential? 
import 'bootstrap/dist/css/bootstrap.min.css';
import { updateStatus, deleteOne } from '@/utils/dbFns/databaseFn';

const acceptCard = (title, mongoID, setShow) => {
        updateStatus(title, mongoID)
        console.log("WE HAVE ACCEPTED THE CARD")
        setShow(false) // closes modal, resets hopefully!
}

const declineCard = (title, mongoID, setShow) => {
        console.log("title and mongo id are", title, mongoID)
        deleteOne(title, mongoID)
        setShow(false) // closes modal, resets hopefully! doesn't trigger reset
        console.log("WE HAVE DELETED THE CARD")
}
// pass in onAccept, onReject, onDefer
function ThreeButtons(props) { // no use effect separate place to put db stuff
    const card = props.card
    const mongoID = card._id // perfect for db schemes :) 
    const title = card.title
    const setShow = props.setShow
    // console.log("Cards ", card, mongoID)
    return (

        <>
        {/* put some styling so you know when clicked */}
            {/* on click, add to regular data base */}
            <FontAwesomeIcon 
                icon={faCheck} 
                className="smol-button" 
                style={{width: '10%'}}
                onClick={() => acceptCard(title, mongoID, setShow)}
            />
            {/* on on click, delete from mongo database */}
            <FontAwesomeIcon 
                icon={faTrashCan} 
                className="user-icon" 
                style={{width: '10%'}}
                onClick={() => declineCard(title, mongoID, setShow)}
            />
            {/* on click leave alone */}
            <FontAwesomeIcon 
                icon={faHourglass} 
                className="user-icon" 
                style={{width: '10%'}}
                onClick={() => console.log("I don't think any action taken??? ")}
            />

        </>

)}
 
export default function ModalView({card, show, setShow, countryCode, mod}) {


    return (
            <Modal show={show} onHide={() => setShow(false)}>
                {/* <div> ahls;kasgas</div> */}
                <Modal.Header closeButton> 
                <Modal.Title>  {card.title} Fractal Grid </Modal.Title>
                                    <div style={{ flex: "1",  display: 'flex'}}>
                              {/* <FontAwesomeIcon icon={faUser} className="user-icon" /> */}

                              <FontAwesomeIcon icon={faUser} className="user-icon" />
                            <CountryFlag countryCode={countryCode}/>

                         </div>
                </Modal.Header>      
                <Modal.Body className="modal-container"> 
                    {getHugeImage(card.image)}
                    {card.description}
                </Modal.Body>
                
                <Modal.Footer>
                    
                    <div> made by {card.author} </div>
                    {mod && <ThreeButtons card={card} setShow={setShow}/>}

                <Button variant="primary" onClick={() => setShow(close)}>
                    Close
                 </Button> 
           
                </Modal.Footer>
            </Modal>
    )}
