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
                style={{ width: '50%', marginTop: '10px' }} />
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
 

export {getHugeImage, getImagePreview}