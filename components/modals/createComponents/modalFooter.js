'use client'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import RecordBtn from './audioRecorder';
//have to make sure it does this for the flipside too
// import 'react-voice-recorder/dist/index.css' 
import SpeechButtons from './footerElements/speechButtons';


//with all of these would probs be better to use props
export default function ModalFooter(props) {

    
    const evals = props.evals 
    // if props.evals
    //lol footer needs editor state
    return (      
        <Modal.Footer>
            <SpeechButtons editorState={props.editorState}/>
            <Button variant="primary" onClick={props.handleClose}>
                Close
            </Button> 
        </Modal.Footer>
)}
