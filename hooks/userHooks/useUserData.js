// hooks/useUserData.js
'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
// import {
//   fetchUserDocument,
//   createUserDocument,
//   checkAndAddUser
// } from '@/utils/databaseFns/fbFn';

export function useUserData() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    const loadUserData = async () => {
      setLoading(true);

      if (status === 'authenticated' && session?.user?.email) {
      
      } else {
        // not authenticated
     
      }
    };

    loadUserData();
  }, [session, status]);

  return { userData, loading, isAuthenticated, session, status };
}
