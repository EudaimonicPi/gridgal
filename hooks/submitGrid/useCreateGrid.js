import { useState } from 'react';
import { isInvalid } from '@/utils/validateInput';
import { genCard } from '@/utils/cards';
import { createOne } from '@/utils/dbFns/databaseFn';
import { compressImage } from '@/utils/imageFn';


export default function useCreateGrid(cards, setCards, handleClose, setConfirmShow) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImage] = useState(null);
    const [err, setErr] = useState('');
    const [isErr, setIsErr] = useState(false);

    const resetInputs = () => {
        setTitle('');
        setDescription('');
        setImage(null);
        setConfirmShow(true);
        handleClose();
    };

    const onSubmitFn = async (title, author, description, imageFile, authorImage = null) => {
        let validationArr = isInvalid(title, author, imageFile);
        if (validationArr.length > 0) {
            setErr(validationArr[0]);
            setIsErr(true);
            return;
        }

        try {
            // Compress the image first
            const compressedBlob = await compressImage(imageFile);

            // Convert compressed blob to Base64
            const reader = new FileReader();
            reader.readAsDataURL(compressedBlob);

            const imageInput = await new Promise((resolve) => {
                reader.onload = () => resolve(reader.result);
            });

            if (!imageInput) {
                console.error("Image input incorrect");
                setErr("Image input incorrect");
                setIsErr(true);
                return;
            }

            const card = genCard(title, author, description, imageInput, authorImage);

            resetInputs();
            await createOne('YOYOYO', card);
        } catch (error) {
            console.error('Error processing data:', error);
            setErr('Failed to process image');
            setIsErr(true);
        }
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        imageFile,
        setImage,
        err,
        isErr,
        onSubmitFn,
        handleImageChange,
        resetInputs
    };
}
