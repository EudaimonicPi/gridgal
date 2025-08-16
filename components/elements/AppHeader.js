import FGImage from '@/utils/fgman.png'
import '@/styles/headerStyle.css'


export default function Header(props) {
    const title = props.title
    const msg = props.msg
    return (
      <>
        <div className="header">
             <img src={FGImage.src} style={{width: '10%', height: '10%', flex: 1}}/>
            <h1 style={{flex: 3}}>
            <b>{title}</b>
            </h1>
          <p style={{ fontSize: "20px" }}> {msg} </p>
        </div>
      </>
    );
  }