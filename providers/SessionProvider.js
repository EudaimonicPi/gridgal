'use client'
import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionProvider({ children }) {
  // NOTE: 
  return <SessionProvider>{children}</SessionProvider>;
}
