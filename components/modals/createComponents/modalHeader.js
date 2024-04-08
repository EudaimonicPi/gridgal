/* Contains the modal head */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import './ModalStyles.css'; // Import your CSS file for styling
import CountrySelect from '@/components/misc/countryDropdown'

export default function ModalHeader(props) {
    return (  
            <Modal.Header closeButton> 
                <Modal.Title style={{display: 'flex', width: "100%", height: "100%", justifyContent: 'center' }}> 
                {/* This not filling whole height */}
                      <h4 style={{backgroundColor: 'brown', flex: "2", height: "100%"}}>Add grid to gallery </h4>
                      <div style={{backgroundColor: 'pink', flex: "1", height: "100%"}}>
                            <FontAwesomeIcon icon={faUser} className="user-icon" />
                            <FontAwesomeIcon icon={faFlag} className="user-icon" />
                      </div>
                       
                </Modal.Title>
                {/* <FontAwesomeIcon icon={faUser} /> */}
               

            </Modal.Header>           
)}