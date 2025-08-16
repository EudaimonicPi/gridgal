'use client'
import '@/styles/headerStyle.css'
import ProfilePic from '@/components/buttons/ProfileIcon'

export default function Header(props) {
    const title = props.title
    const msg = props.msg
    return (
      <>
      <ProfilePic/>
        <div className="header">
             <img src="/fgman.png" style={{width: '10%', height: '10%', flex: 1}}/>
            <h1 style={{flex: 3}}>
            <b>{title}</b>
            </h1>
          <p style={{ fontSize: "20px" }}> {msg} </p>
        </div>
      </>
    );
  }