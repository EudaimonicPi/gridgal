// hooks/useUserData.js
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function useUserData() {
  const { data: session, status } = useSession();
  const [userData, setUserData ] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log("DATA IS ", session?.user)
  // we have userData.email, image, and name
  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    const loadUserData = async () => {
      setLoading(true);

      if (status === 'authenticated' && session?.user) {
          setUserData(session.user)

      } else {
        // not authenticated
     
      }
    };

    loadUserData();
  }, [session, status]);

  return { userData, loading, isAuthenticated, status };
}
