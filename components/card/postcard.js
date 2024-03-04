import './cardStyles.css';
// TO DO: standardize size of image!

export default function SingleCard (props) {
    // const [heading, description, buttonText] = props
     const setShow = props.setShow
     const card = props.card

    // says same thing every time
    // author doesn't have to show up until click the modal,,, icon idea
    const buttonText = "Learn More" // opens modal that has a broader view and longer description 
//     console.log("CARD IMAGE IS ", card.image)
    return (
     <div className="cardContainer">
          <img src={card.image} className="cardPhoto"/>
          <div className="cardContent">
               <div className="cardHeading">{card.title}</div>
               <p className="cardDescription">{card.description}</p>
          <div style={{}}>
               {/*  clicking on the card shows you the more info modal  */}
               <button className="cardButton" onClick={() => setShow(true)}>
                    {buttonText}
               </button>
               {/* more of an icon than a button  */}
               {/* <p>
                    {card.author}
               </p> */}


          </div>
          </div>
     </div>
    )
}