import './cardStyles.css';
// TO DO: standardize size of image!

export default function SingleCard (props) {
    // const [heading, description, buttonText] = props
     const setShow = props.setShow
     const card = props.card

    // says same thing every time
    const buttonText = "Learn More" // opens modal that has a broader view and longer description 

    return (
     <div className="cardContainer">
          <img src={card.image} className="cardPhoto"/>
          <div className="cardContent">
          <div className="cardHeading">
               <div><b>{card.title}</b></div>
               <div>{card.author}</div>
          </div>
          <p className="cardDescription">{card.description}</p>
          <div style={{}}>
               {/*  clicking on the card shows you the more info modal  */}
               <button className="cardButton" onClick={() => setShow(true)}>
                    {buttonText}
               </button>
          </div>
          </div>
     </div>
    )
}