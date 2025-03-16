// TO DO: note does not follow style conventions
const imageContainerStyles = { //gpt gen
    // backgroundColor: 'yellow', // for testing

    /// to do: fix this positioning!
    position: 'fixed',
    top: '3%',
    right: '10px',
    border: 'none',
    zIndex: 1, 
    cursor: 'pointer',
}

const userImageStyles = { //gpt gen
    borderRadius: '50%', // Makes the image circular
    width: '30px', // Adjust the size as needed
    height: '30px', // Ensure it's a perfect square
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adds a soft shadow for depth
    border: '2px solid #fff', // Optional: Add a white border for a clean look
}

export {imageContainerStyles, userImageStyles}