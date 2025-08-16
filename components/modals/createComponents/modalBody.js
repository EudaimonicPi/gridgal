// // The create modal that pops up once you create a grid
'use client '
import Modal from 'react-bootstrap/Modal'; //just keeping it consistent :)

import { Button } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import { getImagePreview } from '@/utils/imageFn';
import Inputs from '../../elements/SubmitGridInputs';
import useCreateGrid from '@/hooks/submitGrid/useCreateGrid';  // Import the custom hook

import 'bootstrap/dist/css/bootstrap.min.css'; // Necessary for styling

const iconStyles = {
    color: "white",
    padding: "5px 15px",
    borderRadius: "5px",
    cursor: "pointer",
};

export default function ModalBody({ handleClose, cards, setCards, setConfirmShow }) {
    const { data, status } = useSession();
    const author = data ? data.user.email : null;
    const authorImage = data ? data.user.image : null;

    const {
        title,
        setTitle,
        description,
        setDescription,
        imageFile,
        handleImageChange,
        err,
        isErr,
        onSubmitFn,
        resetInputs
    } = useCreateGrid(cards, setCards, handleClose, setConfirmShow);

    return (
        <Modal.Body>
            <div>
                <Inputs 
                    handleImageChange={handleImageChange}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                />
                {/* Image Preview */}
                {imageFile && getImagePreview(imageFile)}

                <p>Feel free to talk about the why, what, and how of your grid!</p>

                <Button 
                    onClick={() => onSubmitFn(title, author, description, imageFile, authorImage)} 
                    style={iconStyles}
                >
                    Submit
                </Button>

                <p style={{ color: 'red', marginTop: "1%" }}>{isErr && err}</p>
            </div>
        </Modal.Body>
    );
}
