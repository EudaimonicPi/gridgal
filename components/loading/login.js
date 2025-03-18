/* This file currently containes the sign in, sign out, and loading page viewss
*/
import Image from 'next/image'
import './login.css'


function LoadingPage() {
   return (
      <div className="loading-container">
      {/* Loading Image */}
        <Image src="/fgman.png" alt="Fragman Picture" width={200} height={120} />

        {/* Loading Bar */}
        <div className="loading-bar">
          <div className="progress"></div>
        </div>

        {/* Loading Text */}
        {/* <h3>Loading... Please wait</h3> */}
        <h3> Feel the Fractality!  </h3>
    </div>
   )
   
}

export { LoadingPage}
