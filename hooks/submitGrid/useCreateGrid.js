import { useState } from 'react';
import { isInvalid } from '@/utils/validateInput';
import { genCard } from '@/utils/cards';
import { createOne } from '@/utils/dbFns/databaseFn';

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
            const reader = new FileReader();

            const fileLoaded = new Promise((resolve) => {
                reader.addEventListener('load', () => {
                    resolve(reader.result);
                });
            });

            reader.readAsDataURL(imageFile);
            const imageInput = await fileLoaded;

            if (typeof imageInput !== 'blob') {
                console.error("Image input incorrect, not blob?");
                setErr("Image input incorrect");
                setIsErr(true);
            }

            const card = genCard(title, author, description, imageInput, authorImage);

            resetInputs();
            await createOne('YOYOYO', card);
        } catch (error) {
            console.error('Error processing data:', error);
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
