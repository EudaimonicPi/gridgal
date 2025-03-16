import {imageContainerStyles, userImageStyles} from './loginStyles'


export default function UserImage({image, name, onClick}) {
    return (
         <img style={userImageStyles} 
            src={image} 
            alt={name + ' photo'}
            onClick={onClick} />
    )
}