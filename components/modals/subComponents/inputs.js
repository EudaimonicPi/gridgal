// ImageInput component
function ImageInput({ label, onChange }) {
    return (
        <div>
            <p><b>{label}</b></p>
            <input 
                type="file" 
                accept="image/*" 
                onChange={onChange} 
            />
        </div>
    );
}

// does text stuff 
function TextInput({ label, value, onChange, placeholder="hi"}) {
    return (
        <div>
            <p>{label}</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

function BigTextInput({ label, value, onChange }) {
    return (
        <div>
            <p>{label}</p>
            <textarea
                value={value}
                onChange={onChange}
                style={{ 
                    width: '100%',
                    height: '100px',
                    marginBottom: '5%',
                    resize: 'none', /* Prevents resizing */
                    textAlign: 'start', /* Ensures text starts from the left */
                    verticalAlign: 'top', /* Keeps cursor at the top */
                    padding: '8px', /* Adds spacing inside the box */
                    boxSizing: 'border-box' /* Ensures padding doesn't affect width */
                }}
            />
        </div>
    );
}

export {ImageInput, TextInput, BigTextInput}