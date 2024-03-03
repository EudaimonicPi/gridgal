// This is the create button for the multiple grids page
import './buttonStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


export default function CreateButton (props) {
    return (
        <div className='right-button' onClick={props.handleClick}>
                {/* CREATE */}
                <FontAwesomeIcon icon={faPlus} />
        </div>
    )
     
}