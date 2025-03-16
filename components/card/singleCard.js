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
const MAX_CHARS = 60

function CardHeading({title}) {
     return (
          <div className="cardHeading" style={{ 
                    display: "flex", 
                    textAlign: "center",
                    justifyContent: "center",
                    // backgroundColor: 'white', 
                    margin: "0px"
                   
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

function CardDescription({ description }) {
  const maxLength = MAX_CHARS;
  const truncatedDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  return <p className="cardDescription">{truncatedDescription}</p>;
}

function CardFooter({image, name, setShowUserM}) {
     return (
          <div style={{display: "flex", flexDirection: "row"}} className="cardFooter">
                    <UserImage className="user-icon" image={image} name={name} onClick={() => setShowUserM(true)} />
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
             <CardFooter image={image} name={name} setShowUserM={setShowUserM}/>
          </div>
          <UserModal show={showUserM} setShow={setShowUserM}/>
     </div>
    )
}