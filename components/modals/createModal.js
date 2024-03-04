'use client'
import {useState} from 'react'
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling
import Image from '@/public/vercel.svg'
import { genCard } from '@/utils/cards'
import { getImagePreview } from '@/utils/imageFn'
import { createOne } from '@/utils/databaseFn'
import { validateInput } from '@/utils/validateInput';

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
    
    // clean this function the fuck up ;)
function isInvalid(title, author, imageFile) {

    if (!imageFile) {
        return ["Please Upload an Image"]
    }
    //titles is fetching all of the titles.... cards.get titles
    // authors don't have to be unique though... does uniqueness matter? 
    const titleValid = validateInput(title)
    const authorValid = validateInput(author)

    if (titleValid.length === 0 && authorValid.length === 0) {
        return []
    } 

    // desription can be empty but ned to design those guidelines :) 
    if (!titleValid.length == 0) {
        return titleValid
    }
    if (!authorValid.length == 0) {
        return authorValid
    }

}

const onSubmitFn = async (title, author, description, imageFile) => {
    // validation functions!!!
    const validationArr = isInvalid(title, author,  imageFile)
    if (!validationArr.length == 0) { 
        console.log(validationArr[0])
        return 
    }
    try { // thanks chat gpt !
        const reader = new FileReader();

        // Set up a promise to resolve when the reader has loaded the file
        const fileLoaded = new Promise((resolve) => {
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
        });

        reader.readAsDataURL(imageFile); // load the file
        const imageInput = await fileLoaded; // wait for teh file to be loaded
        if (typeof(imageInput) != 'blob') {
            console.error("GOTCHA")
        }
        const card = genCard(title, author, description, imageInput);
        setCards([...cards, card]); // update state with new card
        resetInputs();
        await createOne('YOYOYO', card); // asynchronously save to db
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