'use client'
import {useEffect} from 'react'
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import {handleKeyDown} from '@/utils/hotkeys/handleKey'

export default function CreateModal({show, handleClose, inputValue, setInputValue, 
    handleSubmit, inputErrMsg, inputErr}) {
    // props are show, handleClose, inputValue, setInputValue, handleSubmit, inputErrMsg, inputErr


    useEffect(() => { // anyway to expot his? 
        const keyDownHandler = (event) => handleKeyDown(event, 'Enter', handleSubmit);
        document.addEventListener('keydown', keyDownHandler);

        return () => { document.removeEventListener('keydown', keyDownHandler);};
  }, [,inputValue]);
    return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> 
                    <Modal.Title>  CREATE NEW GRID </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    {/* NOTE: eventually clean up white space and stuff*/}
                    <div>
                        <p>Name Your Grid (unique)</p>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}

                        />  
                        <button onClick={handleSubmit}>Submit</button> 
                    </div>
                    <div style={{color: 'gray'}}>
                        {inputErr && inputErrMsg}
                    </div>
                </Modal.Body>      
            </Modal>
  );
}