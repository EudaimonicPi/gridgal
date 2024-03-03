'use client'
import { useState } from 'react'
import Card from '@/components/card/cardComponent'
import CreateButton from '@/components/buttons/createButton'
import CreateModal from '@/components/modals/createModal'
// import "./page.module.css";

const cardContainerStyle = {
  backgroundColor: 'pink',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '20px',

}
export default function Home() {
  const [show, setShow] = useState(false) // show for the create button modal 
  const [cards, setCards] = useState([]) //card arr to store cards 

  function getCards() {
    // gets all the card elements
    return cards.map((card) => <Card card={card}/>)
  }

  return (
    <main>


        {/*  this is the + button that activates the modal  */}
        <CreateButton handleClick={() => setShow(true)}/>

        {/* This button allows you to create new cards */}
        <CreateModal 
          show={show} 
          handleClose={() => setShow(false)} 
          cards={cards}
          setCards={setCards}/>
         
        <div style={cardContainerStyle}>
          {getCards()} 
        </div>

    
     
    </main>
  );
}

// cool stuff ab how images may render 
{/*       
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            /> */}