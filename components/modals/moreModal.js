// also the mod modal 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getHugeImage } from '@/utils/imageFn'
import { CurrentUserImage, UserImage } from '@/components/buttons/icons';

//for styling purposes. essential? 
import ModalHeader from './createComponents/modalHeader';
import ThreeButtons, { DeleteButton, ModButton } from '../buttons/ThreeButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isAdmin } from '@/utils/modFns';
import { useSession } from 'next-auth/react';
import ButtonTemplate, { ModButtonTemplate } from '../buttons/ButtonTemplate';
import { faStar } from '@fortawesome/free-solid-svg-icons';



// for moderation and more!
export default function ModalView({card, show, setShow, mod, setRefresh}) {
    const {data, status } = useSession()
    const name = card.author // eventually, cards have names from the db
    const onClick = () => { console.log("modal clicked!")}
    const image = card.authorImage? card.authorImage :'next.svg'
    const headerTitle = card.title + " Fractal Grid"
    const currentUser= false


    // TODO: note asuming authenticated!!!
    const admin = data? isAdmin(data.user.email): false
    

    // if we are on the main page (not mod) and admin, can delete any grid 
    function ExtraDelete() {
        if (mod) return 
        // if not admin || snot data.user.email === card.author 
        if (!admin) return // this should be not possible though? 

        // if grid is yours, delete button :) 
        return (<DeleteButton card={card} setShow={setShow}/>)
    }


    function MoreModalFooter() {
        // on click favorites in db going to Ecy land
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
            <ExtraDelete/>

{/* could potentiall put {card.name} but rn that's email */}
        <div> made by  </div>
        <div >
                {currentUser && <CurrentUserImage/>}
                {!currentUser && <UserImage name={name} image={image} onClick={onClick}/>}
        </div>
        
        <Button variant="primary" onClick={() => setShow(close)}>
            Close
        </Button> 
        </Modal.Footer>
    )
}
    return (
            <Modal show={show} onHide={() => setShow(false)}>
                <ModalHeader title={headerTitle} currentUser={false}
                    name={name} onClick={onClick} image={image}/>
                    
                <Modal.Body> 
                    {getHugeImage(card.image)}
                    {card.description}
                    {mod && <ThreeButtons setRefresh={setRefresh} card={card} setShow={setShow}/>}
                </Modal.Body>
                {/*  TO DO: add props and abstract away */}
                <MoreModalFooter/>
            </Modal>
    )}
