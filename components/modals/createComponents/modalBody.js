'use client'
import {useState} from 'react'
// The create modal that pops up once you create a grid
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)
import 'bootstrap/dist/css/bootstrap.min.css'; //necessary for styling

import Image from '@/public/vercel.svg'
import { genCard } from '@/utils/cards'
import { getImagePreview } from '@/utils/imageFn'
import { createOne } from '@/utils/dbFns/databaseFn'
import {isInvalid } from '@/utils/validateInput';
// import { faPlus} from '@fortawesome/free-solid-svg-icons'
import CountrySelect from '@/components/misc/countryDropdown'
import { useSession } from 'next-auth/react';
import Inputs from './body/createInputs';
const IMAGE_DEFAULT = Image.src

const iconStyles = {
    color: "black",
    padding: "5px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    // position: "absolute"
  }

// TODO: decomp
export default function ModalBody({handleClose, cards, setCards, countryCode, setCountryCode}) {

    const [title, setTitle] = useState('') // title 
    // author will be form useSession email :) 
    const [description, setDescription] = useState('') // title 
    const [imageFile, setImage] = useState(null);
    const [err, setErr] = useState('')
    const [isErr, setIsErr] = useState(false)
    const {data, status} = useSession()
    
    // TODO: error fixing, to put in useEffect oopsie!
    const author = data? data.user.email: null // osmethin went wrong or i did
    const authorImage = data? data.user.image: null
    console.log("AUTHOR image IS ", authorImage)


    function resetInputs() {
        setTitle('');
        setDescription('');
        setImage(null);
        handleClose();
    }
    

const onSubmitFn = async (title, author, description, imageFile, authorImage=null) => {
    // validation functions!!!
    let validationArr = isInvalid(title, author,  imageFile)
    if (!validationArr.length == 0) { 
        // this sets the error message 
        setErr(validationArr[0])
        setIsErr(true)
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
            console.error("Image input incorrect, not blob?")
            setErr("Image input incorrect")
            setIsErr(true)
        }

        // generates a new card 
        const card = genCard(title, author, description, imageInput, authorImage);

        // here's what i SHOULDN'T BE DOING! we don't want this because card has to go for mod approval!
        // setCards([...cards, card]); // update state with new card instead, mod approval message

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
                <Modal.Body> 
                    {/* NOTE: eventually clean up white space and stuff*/}
                    <div>
                        <Inputs 
                                    handleImageChange={handleImageChange}
                                    title={title}
                                    setTitle={setTitle}
                                    description={description}
                                     setDescription={setDescription}/>
                        {/*THIS IS THE PREVIEW */}
                        {imageFile && getImagePreview(imageFile)}
                {/* This should be tied to the user in future, right? like where they are based  */}
                <p> Where was the grid made? </p>
                    <CountrySelect setCountryCode={setCountryCode}/>
                    <button onClick={() => onSubmitFn(title, author, description, imageFile, authorImage)}
                    style={iconStyles}>
                        Submit
                    </button> 
                     
                        <p style={{color: 'red', marginTop: "1%"}}>{isErr && err}</p>
                    </div>

                </Modal.Body>      
  );
}