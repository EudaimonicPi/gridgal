// This function generates the layout for a single card display
'use client'
import {useState} from 'react'
import './cardStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faPen} from '@fortawesome/free-solid-svg-icons'
import UserModal from '../modals/profileModal';
import UserImage from '../buttons/icons';

// TO DO: standardize size of image!
const BUTTON_TEXT = "More"

function CardHeading({title}) {
     return (
          <div className="cardHeading" style={{ 
                    display: "flex", 
                    // backgroundColor: 'white', 
                   
                    }}>
                    {title}
                    {/* ONLY SHOW if can edit */}
                    {/* <FontAwesomeIcon icon={faPen} className="user-icon" style={{width: '10%'}}/> */}
          </div>
     )

}

function CardImage({image}) {
     return (
            <img src={image} className="cardPhoto"/>
     )

}

function MoreInfo({setShow}) {
     return (
          <div style={{flex: "1"}}> 
               <button className="cardButton" onClick={() => setShow(true)}>
                    {BUTTON_TEXT}
               </button>
          </div>
     )
}

function CardDescription({description}) {
     return (
          <p className="cardDescription">{description}</p>
     )
}

function CardFooter({setShow, image, name, setShowUserM}) {
     return (
          <div style={{display: "flex", flexDirection: "row"}}>
               {/* <MoreInfo setShow={setShow}/> */}
               <div style={{ flex: "1",  display: 'flex'}}>
                    {/* i can replace this with a component that shows the profile no matter where */}
                         <UserImage className="user-icon" image={image} name={name} onClick={() => setShowUserM(true)} />
                         {/* <FontAwesomeIcon icon={faUser} className="user-icon" onClick={() => setShowUserM(true)}/> */}
                         <FontAwesomeIcon icon={faFlag} className="user-icon" />
               </div>
          </div>
     )
}

export default function SingleCard (props) {
     const [showUserM, setShowUserM] = useState(false)
     const setShow = props.setShow
     const card = props.card
     const image = "next.svg" // TO BE card.image
     const name = "TEST"
    console.log("CARD IMAGE IS ", card.image)

    return (
     <div className="cardContainer" style={{backgroundColor: '#ddd'}} onClick={() => setShow(true)}>
          <CardImage image={card.image}/>
          <div className="cardContent">
               <CardHeading title={card.title}/>
               <CardDescription description={card.description}/>
             <CardFooter image={image} name={name} setShow={setShow} setShowUserM={setShowUserM}/>
          </div>
          <UserModal show={showUserM} setShow={setShowUserM}/>
     </div>
    )
}