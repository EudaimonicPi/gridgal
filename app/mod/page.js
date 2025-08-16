'use client'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';
import {getCards} from '@/utils/cards'
import ProfilePic from '@/components/buttons/profilePic'
import { useSession } from 'next-auth/react';
import { isAdmin } from '@/utils/modFns'
import { LoadingPage } from '@/components/elements/LoadingPage'
import { usePaginatedCards } from '@/hooks/usePaginatedCards'
import PaginationControls from '@/components/elements/PaginationPageControl'
import '@/styles/cards.css';
// import {noWIFIfetchedCards} from '@/utils/offline/data'


export default function Route({props}) {
    const {data, status} = useSession()
    const [refresh, setRefresh] = useState(false)

    const email = data? data.user.email: null
    const isApproved= isAdmin(email)
    const permissionToView = status === "authenticated" && isApproved 

    const router = useRouter();

    useEffect(() => {
      if (!permissionToView) {
        // Redirect to homepage if no permission to view the page
        router.push('/');
        return; // Prevent further rendering
      }
    }, [permissionToView, router]);

    // mod is true
    const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3, true); // 10 per page

    if (status === "loading" || isLoading) return <LoadingPage />; 
   
        return (
          <div>
            <ProfilePic />
            <p> Moderation: Approve, Defer, Decline. </p>
            {refresh && <p>Refreshing...</p>}
            <p> Number of grids to approve: {cards.length} </p>

            <div className="cards-container">
              {getCards(cards, true, setRefresh)}
            </div>
            <PaginationControls page={page} totalPages={totalPages} setPage={setPage} />
          </div>
        )

}