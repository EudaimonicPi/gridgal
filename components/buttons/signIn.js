import './extra.css'
import { useSession, signIn, signOut } from 'next-auth/react';
export default function SignInOrOutButton() {
   const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  
   if (status === 'authenticated') {
        return (
            <div>
                <button className="left-icon" onClick={signOut}>sign out</button>
            </div>)
        }
    return (
      <div>
        <button className="left-icon" onClick={() => signIn()}>sign in</button>
      </div>
  );

}
   