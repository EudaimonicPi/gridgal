// This function generates the layout for a single card display
'use client'
import {useState} from 'react'
import './cardStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faPen} from '@fortawesome/free-solid-svg-icons'
import UserModal from '../modals/profileModal';

// TO DO: standardize size of image!
const BUTTON_TEXT = "More"

export default function SingleCard (props) {
     const [showUserM, setShowUserM] = useState(false)
     const setShow = props.setShow
     const card = props.card
//     console.log("CARD IMAGE IS ", card.image)
    return (
     <div className="cardContainer">
          <img src={card.image} className="cardPhoto"/>
          <div className="cardContent">
               <div className="cardHeading" style={{display: "flex", backgroundColor: 'white', justifyContent: 'flex-end'}}>
                    {card.title}
                    {/* ONLY SHOW if can edit */}
                    <FontAwesomeIcon icon={faPen} className="user-icon" style={{width: '10%'}}/>
               </div>
               <p className="cardDescription">{card.description}</p>
               <div style={{display: "flex", flexDirection: "row"}}>
                    {/*  clicking on the card shows you the more info modal  */}
                    <div style={{flex: "1"}}> 
                         <button className="cardButton" onClick={() => setShow(true)}>
                              {BUTTON_TEXT}
                         </button>
                    </div>
                    <div style={{ flex: "1",  display: 'flex'}}>
                         {/* i can replace this with a component that shows the profile no matter where */}
                              <FontAwesomeIcon icon={faUser} className="user-icon" onClick={() => setShowUserM(true)}/>
                              <FontAwesomeIcon icon={faFlag} className="user-icon" />
                         </div>
               </div>
          </div>
          <UserModal show={showUserM} setShow={setShowUserM}/>
     </div>
    )
}