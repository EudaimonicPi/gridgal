'use client'
import {useState} from 'react'
import {getCards} from '@/utils/cards'
import ProfilePic from '@/components/buttons/profilePic'
import { useSession } from 'next-auth/react';
import { isAdmin } from '@/utils/modFns'
import { LoadingPage } from '@/components/elements/LoadingPage'
import { usePaginatedCards } from '@/hooks/usePaginatedCards'
import PaginationControls from '@/components/elements/PaginationControls'
import '@/styles/cards.css';
// import {noWIFIfetchedCards} from '@/utils/offline/data'


export default function Route({props}) {
    const {data, status} = useSession()
    // const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const email = data? data.user.email: null
    const isApproved= isAdmin(email)
    const permissionToView = status === "authenticated" && isApproved 
    // mod is true
    const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3, true); // 10 per page

    if (status === "loading" || isLoading) return <LoadingPage />; 
   
    // return (
        return permissionToView? (
          <div>
            <ProfilePic />
            <p> Moderation: Approve, Defer, Decline. </p>
            {refresh && <p>Refreshing...</p>}
            <p> Number of grids to approve: {cards.length} </p>

            <div className="card-container">
              {getCards(cards, true, setRefresh)}
            </div>


            <PaginationControls page={page} totalPages={totalPages} setPage={setPage} />
          </div>
      ) : null // If not authenticated, return nothing
        // ) // would be great to redirect instea
}