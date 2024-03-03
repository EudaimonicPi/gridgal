import './cardStyles.css';
// TO DO: standardize size of image!
//TO DO: in card component edit buttons and links

export default function SingleCard (props) {
    // const [heading, description, buttonText] = props
     const setShow = props.setShow
    const heading = props.heading
    const author = props.author
    const description = props.description
    const img = props.image

    // says same thing every time
    const buttonText = "Learn More" // opens modal that has a broader view and longer description 
 
    return (
     <div className="cardContainer">
          <img src={img} className="cardPhoto"/>
          <div className="cardContent">
          <div className="cardHeading">
               <div><b>{heading}</b></div>
               <div>{author}</div>
          </div>
          <p className="cardDescription">{description}</p>
          <div style={{}}>
               <button className="cardButton" onClick={() => setShow(true)}>
                    {buttonText}
               </button>
          </div>
          </div>
     </div>
    )
}