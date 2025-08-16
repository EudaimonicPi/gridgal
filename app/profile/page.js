import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import ProfilePic from '@/components/buttons/profilePic'
export default function Route({props}) {
    return (
    <div>
          <ProfilePic />
        <p> Profile </p>
                    <div style={{backgroundColor: 'pink'}}>
                        hi
                            {/* <FontAwesomeIcon icon={faUser} className="user-icon" /> */}
                      </div>

    </div>
)}