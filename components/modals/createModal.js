'use client'
import {useState} from 'react'
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import Image from '@/public/vercel.svg'
import { genCard } from '@/utils/cards'
import { getImagePreview } from '@/utils/imageFn'
import { createOne } from '@/utils/databaseFn'

const IMAGE_DEFAULT = Image.src

export default function CreateModal({show, handleClose, cards, setCards}) {
    const [title, setTitle] = useState('') // title 
    const [author, setAuthor] = useState('') // title 
    const [description, setDescription] = useState('') // title 
    const [image, setImage] = useState(null);

    function resetInputs() {
        setTitle('');
        setAuthor('');
        setDescription('');
        setImage(null);
        handleClose();
    }
    
    
    //
    function onSubmitFn(title, author, description, imageURL) {
        // Image.src would be default here
        const imageInput = imageURL? URL.createObjectURL(imageURL): IMAGE_DEFAULT // have to fix default one
        const card = genCard(title, author, description, imageInput)
        setCards([...cards, card])
        resetInputs()
        // note ASYNC FUNCTION
        createOne('YOYOYO', card)
    }

    const handleImageChange = (e) => { // chat, presumably makes image out of first file
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

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

                        <p>Upload Image</p>
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange} >
                        </input>
                        {/* image preview pops up */}
                        {image && getImagePreview(image)}
                        <button onClick={() => onSubmitFn(title, author, description, image)}>
                            Submit
                        </button> 
                    </div>
                    {/* could have input thing for whole fun */}
                    {/* <div style={{color: 'gray'}}>
                        {inputErr && inputErrMsg}
                    </div> */}
                </Modal.Body>      
            </Modal>
  );
}