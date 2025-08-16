import { useState } from 'react';
import { isInvalid } from '@/utils/validateInput';
import { genCard } from '@/utils/cards';
import { createOne } from '@/utils/dbFns/databaseFn';

const compressImage = (file, maxWidth = 800, maxHeight = 800, quality = 0.7) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            image.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);

        image.onload = () => {
            const canvas = document.createElement('canvas');
            let width = image.width;
            let height = image.height;

            // Maintain aspect ratio
            if (width > height) {
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);

            canvas.toBlob(
                (blob) => resolve(blob),
                'image/jpeg',
                quality // 0-1
            );
        };

        image.onerror = reject;
    });
};

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
