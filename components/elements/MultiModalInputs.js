import styles from '@/styles/MultiModalInputs.module.css'
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
function TextInput({ label, value, onChange, placeholder="start typing..."}) {
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
                className={styles.bigInputStyle}
            />
        </div>
    );
}

export {ImageInput, TextInput, BigTextInput}