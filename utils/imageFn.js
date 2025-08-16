// this gets the image for the card's LEARN modal to see
// maybe could do primary and secondary images
function getHugeImage(image) {
    // these two takein two diff inputs
    // make super large and juciy
    return (
           <img 
        //    src={URL.createObjectURL(image)} 
                src={image} 
                alt="Uploaded" 
                style={{ width: '80%', marginTop: '10px' }} />
    )
}

// this is the image preview when you create modal 
function getImagePreview(imageURL) {
        return (
            <img 
                src={URL.createObjectURL(imageURL)} 
                alt="Uploaded"  //alt text?
                style={{ width: '50%', marginTop: '10px' }} />)
}
 

const compressImage = (file, maxWidth = 500, maxHeight = 500, quality = 0.7) => {
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
export {getHugeImage, getImagePreview, compressImage}