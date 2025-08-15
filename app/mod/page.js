'use client'
import {useState, useEffect} from 'react'
import {getCards} from '@/utils/cards'
import { fetchAll } from '@/utils/dbFns/databaseFn'
import ProfilePic from '@/components/buttons/profilePic'
import { useSession } from 'next-auth/react';
import { isAdmin } from '@/utils/modFns'
import { LoadingPage } from '@/components/elements/login'
// import {noWIFIfetchedCards} from '@/utils/offline/data'
const cardContainerStyle = {
  // backgroundColor: 'pink',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '20px',
}





export default function Route({props}) {
    const [cards, setCards] = useState([]) //card arr to store cards 
    const {data, status} = useSession()
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const email = data? data.user.email: null
    const isApproved= isAdmin(email)
    const permissionToView = status === "authenticated" && isApproved 

    // note: eval is not valid function name LOL 

    // use Effect to fetdh cards from MOD database 
     useEffect(() => { // weird promise stuff ou non?
      // IIFE to create an asynchronous context
      (async () => {
        try {
          setIsLoading(true)

          // Use await inside the asynchronous function
          const fetchedCardsJSON = await fetchAll(true);
          const fetchedCards = JSON.parse(fetchedCardsJSON)
          setCards(fetchedCards);  
          if (refresh) setRefresh(false)
        } catch (error) {
          console.error('Error fetching cards:', error);
        } finally {
          setIsLoading(false)
        }
      })();
    }, [refresh]); // Dependency array to run the effect once on mount

    // when the mod updates (approve/decline, state should update)
    // bad way to refresh, ideal is that modal is at this level but o well! 
    // Fetch cards on mount and when `refresh` changes

  if (status === "loading" || isLoading) return <LoadingPage />; 
   
    // return (
          return permissionToView? (
        <div>
          <ProfilePic />
          <p> Moderation: Approve, Defer, Decline. </p>
          {refresh && <p>Refreshing...</p>}
          <p> Number of grids to approve: {cards.length} </p>
          <div style={cardContainerStyle}>
            {getCards(cards, true, setRefresh)}
          </div>
        </div>
      ) : null // If not authenticated, return nothing
        // )

}