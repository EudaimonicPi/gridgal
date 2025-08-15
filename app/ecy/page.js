'use client'
import { useState, useEffect } from 'react'
// import Card from '@/components/card/cardComponent'
import CreateButton from '@/components/buttons/createButton'
import CreateModal from '@/components/modals/createModal'
import { fetchAll } from '@/utils/dbFns/databaseFn'
import CountryFlag from '@/components/misc/countryFlag';
import { getCards } from '@/utils/cards'
import { useSession } from 'next-auth/react';
// import "./extra.css";
import SignInButton from '@/components/buttons/signIn'
import ProfilePic from '@/components/buttons/profilePic'
import { LoadingPage } from '@/components/loading/login'
import ConfirmModal from '@/components/modals/confirmModal'


const cardContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
};


export default function Home() {
  const [show, setShow] = useState(false) // show for the create button modal 
  const [cards, setCards] = useState([]) //card arr to store cards 
  const [isLoading, setLoading] = useState(true)


  const [countryCode, setCountryCode] = useState('US') // is US okay default, or ahhhhhh? 

  // this fetches the cards
  // TODO: implement loading features and ui 
  useEffect(() => { // weird promise stuff ou non?
      // IIFE to create an asynchronous context
      ( async () => {
        try {
          setLoading(true); // Show loading page while fetchingside the asynchronous function
          // Use await in
          const fetchedCardsJSON = await fetchAll();
          const fetchedCards = JSON.parse(fetchedCardsJSON)

          setCards(fetchedCards); // omg it's so smart :) 
        } catch (error) {
          console.error('Error fetching cards:', error);
        } finally {
        setLoading(false); // Hide loading page when done
      }
      })();
    }, []); // Dependency array to run the effect once on mount

  if ( isLoading) return <LoadingPage />; 

  return (
    <main>
 
        <div style={cardContainerStyle}>
          {getCards(cards)} 
        </div>
    </main>
  );
}

// 'use client'

// import { useState, useEffect } from 'react'

// import { getCards } from "@/utils/cards";
// import { fetchAll } from '@/utils/dbFns/databaseFn'
// import { LoadingPage } from '@/components/loading/login';


// const cardContainerStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//   gap: "20px",
//   padding: "20px",
//   justifyContent: "center",
// };


// export default function Route({props}) {
//     const [cards, setCards] = useState([]) //card arr to store cards 
//     const [isLoading, setLoading] = useState(true)


//     useEffect(() => { // weird promise stuff ou non?
//       // IIFE to create an asynchronous context
//       ( async () => {
//         try {
//           setLoading(true); // Show loading page while fetchingside the asynchronous function

//           // Use await in
//           const fetchedCardsJSON = await fetchAll();
//           const fetchedCards = JSON.parse(fetchedCardsJSON)

//           setCards(fetchedCards); // omg it's so smart :) 
//         } catch (error) {
//           console.error('Error fetching cards:', error);
//         } finally {
//         setLoading(false); // Hide loading page when done
//       }
//       })();
//     }, []); // Dependency array to run the effect once on mount
//     if (isLoading) return <LoadingPage />; 

//     return (
//     <div>
//             hi YO

//         <div style={cardContainerStyle}>
//           {getCards(cards)} 
//         </div>

//     </div>
// )}