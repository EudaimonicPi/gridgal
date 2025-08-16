import { userImageStyles} from './loginStyles'
import { useUserData } from '@/hooks/userHooks/useUserData';


// NOTE: assumes login, TODO: add error checking
function CurrentUserImage({onClick, image, name}) {
    const { userData } = useUserData()
    return (
        <UserImage 
            image={userData.image} 
            name={userData.name} 
            onClick={onClick}/>
    )
}

function UserImage({image, name, onClick}) {
    return (
         <img style={userImageStyles} 
            src={image} 
            // alt={name + ' photo'}
            onClick={onClick} />
    )
}

export { CurrentUserImage, UserImage}