import { userImageStyles} from './loginStyles'
import { useSession } from 'next-auth/react';




// NOTE: assumes login, TODO: add error checking
function CurrentUserImage({onClick}) {
    const {data, status} = useSession()
    return (
        <UserImage 
            image={data.user.image} 
            name={data.user.name} 
            onClick={onClick}/>
    )
}
function UserImage({image, name, onClick}) {
    return (
         <img style={userImageStyles} 
            src={image} 
            alt={name + ' photo'}
            onClick={onClick} />
    )
}

export { CurrentUserImage, UserImage}