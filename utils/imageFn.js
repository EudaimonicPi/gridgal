// this gets the image for the card's modal to see
// maybe could do primary and secondary images
function getHugeImage(image) {
    // make super large and juciy
    return (
           <img 
                src={image} 
                alt="Uploaded" 
                style={{ width: '50%', marginTop: '10px' }} />
    )
}

function getImagePreview(image) {
        return (
            <img 
                src={URL.createObjectURL(image)} 
                alt="Uploaded" 
                style={{ width: '50%', marginTop: '10px' }} />)
}
 

export {getHugeImage, getImagePreview}