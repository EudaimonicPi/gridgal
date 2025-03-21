// This function generates the layout for a single card display
'use client'
import {useState} from 'react'
import { CardHeading, CardImage, CardDescription,CardFooter } from './cardViewComponents';
import './cardStyles.css';


// NOTE: this is card view
export default function SingleCard (props) {
     const [showUserM, setShowUserM] = useState(false)
     const setShow = props.setShow
     const card = props.card
     // have to go over user data abse to get what the user image is,  buut i am satisfied for now
     // author is there! 
     const image = card.authorImage? card.authorImage: "next.svg" // TO BE card.image
     const name = card.name? card.name:"TEST" // too be card.name
//     console.log("CARD IMAGE IS ", card.image)
     // console.log("WHAT IS ", card.author)

    return (
     <div className="cardContainer" style={{backgroundColor: '#ddd'}} onClick={() => setShow(true)}>
          <CardImage image={card.image}/>
          <div className="cardContent">
               <CardHeading title={card.title}/>
               <CardDescription description={card.description}/>
             <CardFooter image={image} name={name} setShowUserM={setShowUserM}/>
          </div>
          {/* Note: user modal disabled for now */}
          {/* <UserModal show={showUserM} setShow={setShowUserM}/> */}
     </div>
    )
}