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
            <input
                type="text"
                value={value}
                onChange={onChange}
                style={{ 

                width: '100%',
                height: '100px', //what's wrong w height
                marginBottom: '5%',
                // height: "100px",
            }}
            />
        </div>
    );
}

export {ImageInput, TextInput, BigTextInput}