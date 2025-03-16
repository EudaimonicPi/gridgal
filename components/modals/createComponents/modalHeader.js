/* Contains the modal head */
import { faUser, faFlag} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import './ModalStyles.css'; // Import your CSS file for styling
import CountrySelect from '@/components/misc/countryDropdown'

export default function ModalHeader({currentUser, title, name, image, onClick}) {
  // Add grid to gallery 
    return (  
            <Modal.Header closeButton style={{backgroundColor: '#dfdfdf'}}> 
                <Modal.Title className={"modal-title"}> 
                    <h4> {title}  </h4>
                </Modal.Title>
            </Modal.Header>           
)}
