// // hooks/useRouteProtection.js
// 'use client';

// import { useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';

// // delete soon?

// export function useRouteProtection({ status, loading, userData }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   // can tell us whether we are on /mod page
//   // limits access to mod page (/mod) if not admin, redirects home 
//   // if unauthenticaed keeps track (isLoggedIn)
// }

'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function useRouteProtection({ status, loading, userData }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Redirect to login page if not authenticated
    // will need to update for ecy public grids or just exclude mod
    
    if (status === 'unauthenticated' && pathname !== '/') {
      router.push('/');
    }

    // Protect /mod page for non-admin users
    if (status === 'authenticated' && userData?.role !== 'admin' && pathname.startsWith('/mod')) {
      router.push('/'); // Redirect to homepage if user is not admin
    }
    
    // Optionally, you can log or track if the user is logged in
    if (status === 'authenticated') {
      // Logic to track if the user is logged in (could be used for analytics)
      console.log(`User is logged in: ${userData?.name}`);
    }
    
  }, [status, pathname, router, userData]);

  // Optionally, return anything that might be useful for other parts of the app
  return { isLoggedIn: status === 'authenticated' };
}
