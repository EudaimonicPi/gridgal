// hooks/useAuthStatus.js
'use client';
import { useSession } from 'next-auth/react';

export function useAuthStatus() {
  const { data, status } = useSession();
  return {
    user: data?.user ?? null,
    isAuthenticated: status === 'authenticated',
    isLoadingSession: status === 'loading',
  };
}
