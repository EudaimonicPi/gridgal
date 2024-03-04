'use client'
import {useState} from 'react'
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import Image from '@/public/vercel.svg'
import { genCard } from '@/utils/cards'
import { getImagePreview } from '@/utils/imageFn'
import { createOne } from '@/utils/databaseFn'
import { set } from 'mongoose';

const IMAGE_DEFAULT = Image.src

export default function CreateModal({show, handleClose, cards, setCards}) {
    const [title, setTitle] = useState('') // title 
    const [author, setAuthor] = useState('') // title 
    const [description, setDescription] = useState('') // title 
    const [imageFile, setImage] = useState(null);
    const [image, setFinalImage] = useState(null)

    function resetInputs() {
        setTitle('');
        setAuthor('');
        setDescription('');
        setImage(null);
        handleClose();
    }
    


const onSubmitFn = async (title, author, description, imageFile) => {
    try { // thanks chat gpt!
        const reader = new FileReader();

        // Set up a promise to resolve when the reader has loaded the file
        const fileLoaded = new Promise((resolve) => {
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
        });
        // Start loading the file
        reader.readAsDataURL(imageFile);
        // Wait for the file to be loaded
        const imageInput = await fileLoaded;
        // Create card
        const card = genCard(title, author, description, imageInput);
        setCards([...cards, card]); // update state with new card
        resetInputs();
        // Asynchronously save to the database
        await createOne('YOYOYO', card); // TO DO: fix title
    } catch (error) {
        console.error('Error processing data:', error);
        // Handle error as needed
    }
};


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
                        {imageFile && getImagePreview(imageFile)}
                        <button onClick={() => onSubmitFn(title, author, description, imageFile)}>
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