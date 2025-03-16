//npm i boostrap react-boostrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getHugeImage } from '@/utils/imageFn'
import CountryFlag from '@/components/misc/countryFlag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag} from '@fortawesome/free-solid-svg-icons'
import { useSession, signIn, signOut } from 'next-auth/react';



//for styling purposes. essential? 
import 'bootstrap/dist/css/bootstrap.min.css';

 
export default function UserModal({user, show, setShow}) {
    // const { data, status } = useSession();

    return (
            <Modal show={show} onHide={() => setShow(false)}>
                {/* <div> ahls;kasgas</div> */}
                <Modal.Header closeButton> 
                <Modal.Title>  User  </Modal.Title>
                                    <div style={{ flex: "1",  display: 'flex'}}>
                              <FontAwesomeIcon icon={faUser} className="user-icon" />
                              {/* <img src={data.user.image} className="user-icon" style={{height: '50px'}} /> */}
                            {/* <CountryFlag countryCode={countryCode}/> */}

                         </div>
                </Modal.Header>      
                <Modal.Body className="modal-container"> 
                user stuff :) 
                {/* Things to include: navigate to profile page, user name, bio, grids, etc.. */}
                </Modal.Body>
                
                <Modal.Footer>
                    <div> made by hmm.... </div>
                    <Button variant="primary" onClick={() => setShow(close)}>
                    Close
                 </Button> 
           
                </Modal.Footer>
            </Modal>
    )}
