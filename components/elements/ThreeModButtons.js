import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { acceptCard, declineCard } from '@/utils/modFns';
import { faCheck, faHourglass, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import '@/styles/buttons.css'

function ModButton({ icon, color, onClick, label }) {
    return (
        <div className={`mod-button ${color}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span> {/* Render the label next to the icon */}
        </div>
    );
}

function DeleteButton(props) {
    const card = props.card
    const mongoID = card._id // perfect for db schemes :) 
    const title = card.title
    const setShow = props.setShow
    return (
        <ModButton 
                icon={faTrashCan} 
                color={"red"} 
                onClick={() => declineCard(title, mongoID, setShow)}
                label={"delete"}
        />
        
    )
}

// on click can also set show and give feedback to user and then also moderator
export default function ThreeButtons(props) { // no use effect separate place to put db stuff
    const card = props.card
    const mongoID = card._id // perfect for db schemes :) 
    const title = card.title
    const setShow = props.setShow

    const handleDelete = (title, mongoID,setShow) => {
        declineCard(title, mongoID, setShow)
        props.setRefresh(true) // assumed mod!
    }
     
    const handleAccept = (title, mongoID, setShow)=> {
        acceptCard(title, mongoID, setShow)
        props.setRefresh(true) // assumed mod!

    }

    return (
        <div className="button-container">
            {/* on click, add to regular data base */}
            <ModButton 
                icon={faCheck} 
                color={"green"} 
                onClick={() => handleAccept(title, mongoID, setShow)}
                label="Accept"
            />
            {/* on on click, delete from mongo database */}
             <ModButton 
                icon={faTrashCan} 
                color={"red"} 
                onClick={() => handleDelete(title, mongoID, setShow)}
                label="Decline"
            />
            <ModButton 
                icon={faHourglass} 
                color={"gold"} 
                onClick={() =>setShow(false)}
                label="Defer"
            />
        </div>

)}

export {ModButton, DeleteButton}