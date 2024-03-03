'use client'
import { useState } from 'react'
import Card from '@/components/card/cardComponent'
import CreateButton from '@/components/buttons/createButton'
// import "./page.module.css";

const cardContainerStyle = {
  backgroundColor: 'pink',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '20px',

}
export default function Home() {
  const [show, setShow] = useState(false) // show for the create button modal 
  return (
    <main>
      
{/*       
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            /> */}


             {/* <CreateModal 
                show={show} 
                handleClose={handleModalClose} 
                inputValue={inputValue} 
                setInputValue={setInputValue}

                handleSubmit={() => handleSubmit(grids, inputValue, setInputMsg, setInputErr, 
                    setInputValue, handleModalClose, setGrids)} 
                inputErrMsg={inputMsg} 
                inputErr={inputErr}/>

            <CreateButton handleClick={() => setShow(true)}/> */}

            <CreateButton handleClick={() => setShow(true)}/>
         

        <div style={cardContainerStyle}>
          <Card/>
        </div>

    
     
    </main>
  );
}
