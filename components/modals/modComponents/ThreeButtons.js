import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { acceptCard, declineCard } from '@/utils/modFns';
import { faUser, faFlag, faCheck, faHourglass, faX, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './modButton.css' // TODO: eventually integrate with other import 

function ModButton({ icon, color, onClick, label }) {
    return (
        <div className={`mod-button ${color}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span> {/* Render the label next to the icon */}
        </div>
    );
}

// on click can also set show and give feedback to user and then also moderator
export default function ThreeButtons(props) { // no use effect separate place to put db stuff
    const card = props.card
    const mongoID = card._id // perfect for db schemes :) 
    const title = card.title
    const setShow = props.setShow
    return (

        <div className="button-container">
            {/* on click, add to regular data base */}
            <ModButton 
                icon={faCheck} 
                color={"green"} 
                onClick={() => acceptCard(title, mongoID, setShow)}
                label="Accept"
            />
            {/* on on click, delete from mongo database */}
             <ModButton 
                icon={faTrashCan} 
                color={"red"} 
                onClick={() => declineCard(title, mongoID, setShow)}
                label="Decline"
            />
           
            <ModButton 
                icon={faHourglass} 
                color={"gold"} 
                onClick={() => console.log("No action taken")}
                label="Defer"
            />
       

        </div>

)}