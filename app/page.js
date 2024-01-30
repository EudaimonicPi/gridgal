import Card from '@/components/card/postcard'
// import "./page.module.css";

const cardContainerStyle = {
  backgroundColor: 'pink',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

}
export default function Home() {
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
         

        <div style={cardContainerStyle}>
          <Card/>
          <Card/>
        </div>

    
     
    </main>
  );
}
