import { UserImage } from '../../buttons/icons';
import './cardStyles.css';

// TO DO: standardize size of image!
const MAX_CHARS = 60

function CardHeading({title}) {
     return (
          <div className="cardHeading" style={{ 
                    display: "flex", 
                    textAlign: "center",
                    justifyContent: "center",
                    // backgroundColor: 'white', 
                    margin: "0px"
                   
                    }}>
                    {title}
                    {/* ONLY SHOW if can edit */}
                    {/* <FontAwesomeIcon icon={faPen} className="user-icon" style={{width: '10%'}}/> */}
          </div>
     )

}

function CardImage({image}) {
     return (
            <img src={image} className="cardPhoto"/>
     )
}

function CardDescription({ description }) {
  const maxLength = MAX_CHARS;
  const truncatedDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  return <p className="cardDescription">{truncatedDescription}</p>;
}

function CardFooter({image, name, setShowUserM}) {
     return (
          <div style={{display: "flex", flexDirection: "row"}} className="cardFooter">
                    <UserImage className="user-icon" image={image} name={name} onClick={() => setShowUserM(true)} />
          </div>
     )
}

export { CardHeading, CardImage, CardDescription,CardFooter }