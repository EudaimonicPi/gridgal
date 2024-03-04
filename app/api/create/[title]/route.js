import { connectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";
import Image from '@/public/vercel.svg'
import { genCard } from '@/utils/cards'


const IMAGE_DEFAULT = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5Ytxod5EJvWA9oaS72-8QGRLHSiGK50tyiOV2ozaiQ&s"
// had to put separately bc of POST stuff
//CREATE, creates a card from cardInfo... 
export const POST = async (request, { params }) => {
  // console.log("CAME IN HERE")

  // from the request :) 
  const { cardInfo } = await request.json(); //title and not id

  // console.log("TITLE ","CARD ",  cardInfo.author)
  const title = cardInfo.title
  const author = cardInfo.author
  const description = cardInfo.description
  // tryin to get an image that works 
  const image = cardInfo.image // something wrong w the image on save and load perhaps

  // i think image needs to have the blob localhost thing
  const card = genCard(title, author, description, image)
  // console.log("CARD IS ", card)
  const cardObj = new Card(card)

  try {
    await connectDB();
    const newCard = await Card.create(cardObj);
    // console.log("NEW CARD IS ", newCard)
    
    return new Response({ status: 200 });
  } catch (err) {
    console.error("error in trying to create grid ");
    return new Response({status: 500})
  }
};
