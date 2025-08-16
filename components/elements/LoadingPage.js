
import Image from 'next/image'
import '@/styles/login.css'

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
        <h3> Feel the Fractality!  </h3>
    </div>
   )
   
}

export { LoadingPage}
