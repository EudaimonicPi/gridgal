import './cardStyles.css';
import Image from '@/public/vercel.svg'
// TO DO: standardize size of image!
//TO DO: in card component edit buttons and links

export default function CardComponent (props) {
    // const [heading, description, buttonText] = props

    // eventually, for each button in buttonArr make a button compnoent out
    // of buttonInfo[i].txt and buttonInfo[i].link
    const heading = "This is the Grid title"
    const description = "This is the grid description" 
    // console.log(props.buttonText)
    const buttonText = "Author Maybe?"
    const buttonLink = "www.google.com"
    const buttonColor = '#8c1515'
    const img = Image.src //have to src based on how i imported
 
    return (
     <div className="cardContainer">
          <img src={img} className="cardPhoto"/>
          <div className="cardContent">
          <h2 className="cardHeading"><b>{heading}</b></h2>
          <p className="cardDescription">{description}</p>
          <div style={{}}>
               <a href= {"//" + buttonLink} target = "_blank" >
                    <button className="cardButton">
                        {buttonText}
                    </button>
               </a>
              
          </div>
         
          </div>
     </div>
    )
}