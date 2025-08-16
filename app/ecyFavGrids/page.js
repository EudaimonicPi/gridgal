// // pages/favorites.js
'use client'
import ProfilePic from '@/components/buttons/profilePic';
// import { useSession } from 'next-auth/react';
// import { isAdmin } from '@/utils/modFns';
// import { LoadingPage } from '@/components/elements/LoadingPage';
// import { usePaginatedCards } from '@/hooks/usePaginatedCards';
// import CardsContainer from '@/components/elements/CardsContainer';

// import '@/styles/cards.css';

// export default function Favorites() {
//   const { data, status } = useSession();

//   // Get only the favorite cards (filter ecyFav === true)
//   const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3); // Pass true to filter favorites

//   if (status === 'loading' || isLoading) return <LoadingPage />;

//   return (
//     <div>
//       <ProfilePic />
//       <p>Some of Ecy's Favorite Grids:</p>
//       <CardsContainer 
//                 getEcyFavs={true}
//                 cards={cards} 
//                 page={page}
//                 totalPages={totalPages}
//                 setPage={setPage}/>

//     </div>
//   );
// }

import { useSession } from 'next-auth/react';
import { usePaginatedCards } from '@/hooks/usePaginatedCards';
import { LoadingPage } from '@/components/elements/LoadingPage';
import CardsContainer from '@/components/elements/CardsContainer';

export default function Page() {
  const { data, status } = useSession();
  const { cards, page, setPage, totalPages, isLoading } = usePaginatedCards(3, false, true); // 10 per page

  if (status === 'loading' || isLoading) return <LoadingPage />;

  return (
    <main>
      {/* Use HomepageHeader component */}
      <ProfilePic/>
         <CardsContainer 
                cards={cards} 
                page={page}
                totalPages={totalPages}
                setPage={setPage}/>

                    {/* <CardsContainer 
                cards={cards} 
                page={page}
                totalPages={totalPages}
                setPage={setPage}/> */}


    </main>
  );
}
