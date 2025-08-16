import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ButtonTemplate({className, onClick, icon, label, color="white"}) {
    // two classes? $`className`
    return (
        <div 
            className={'mod-button' } 
            style={{backgroundColor: color, color: 'white'}} 
            onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span> 
        </div>
    );

}

// i'm not sure if this is used...? 
export function ModButtonTemplate({onClick, icon, label, color="white"}) {
    // two classes? $`className`
    return (
        <div 
            className={'mod-button' } 
            style={{backgroundColor: color, color: 'white'}} 
            onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span> 
        </div>
    );

}