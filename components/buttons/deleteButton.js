// This is the create button for the multiple grids page
import './buttonStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default function DeleteButton (props) {
    //props: handleClick, delMode
    return (
        <div>
            <div className='left-button' onClick={props.handleClick}>
                <FontAwesomeIcon icon={faTrash} />
                {/* {!props.delMode? "DELETE": "DONE"}  */}
            </div>
        </div>
    )
     
}