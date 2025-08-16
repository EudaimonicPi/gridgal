'use client';

import { UserContext } from './contexts';
import { useUserData } from '@/hooks/userHooks/useUserData';

export function UserProvider({ children }) {
  const { userData, loading, isAuthenticated } = useUserData();

  return (
    <UserContext.Provider value={{ userData, loading, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}
