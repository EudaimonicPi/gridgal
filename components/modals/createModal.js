'use client'
import {useState} from 'react'
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import Image from '@/public/vercel.svg'

export default function CreateModal({show, handleClose, cards, setCards}) {
    const [title, setTitle] = useState('') // title 
    const [author, setAuthor] = useState('') // title 
    const [description, setDescription] = useState('') // title 

    const genCard = (title, author, description, image) => { 
        return {title, author, description, image}
    }
    
    function setCardsFn(title, author, description, image) {
        // here can validate ???
        const card = genCard(title, author, description, image)
        setCards([...cards, card])
    }

    return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton> 
                    <Modal.Title>  Add grid to gallery </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    {/* NOTE: eventually clean up white space and stuff*/}
                    <div>
                        <p>Name Your Grid (unique)</p>
                        <p>Title</p>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />  
                        <p> Grid Author </p>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />  

                        <p> Grid Description </p>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />  
                        <button onClick={() => setCardsFn(title, author, description, Image.src)}>Submit</button> 
                    </div>
                    {/* <div style={{color: 'gray'}}>
                        {inputErr && inputErrMsg}
                    </div> */}
                </Modal.Body>      
            </Modal>
  );
}