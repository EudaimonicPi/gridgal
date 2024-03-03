'use client'
import { useState, useEffect } from 'react'
import Card from '@/components/card/cardComponent'
import CreateButton from '@/components/buttons/createButton'
import CreateModal from '@/components/modals/createModal'
import { fetchAll } from '@/utils/databaseFn'
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
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
    console.log("Cards is ", cards, typeof(cards))
    return cards.map((card) => <Card card={card}/>)
  }

  useEffect(() => {
      // IIFE to create an asynchronous context
      (async () => {
        try {
          // Use await inside the asynchronous function
          const fetchedCardsJSON = await fetchAll();
          const fetchedCards = JSON.parse(fetchedCardsJSON)
          setCards(fetchedCards); // omg it's so smart :) 
        } catch (error) {
          console.error('Error fetching cards:', error);
        }
      })();
    }, []); // Dependency array to run the effect once on mount

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