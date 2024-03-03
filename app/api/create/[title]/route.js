import { connectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";
import Image from '@/public/vercel.svg'
import { genCard } from '@/utils/cards'


const IMAGE_DEFAULT = Image.src
// had to put separately bc of POST stuff
//CREATE
// POST (creates a whole new grid that's blank)
export const POST = async (request, { params }) => {
  console.log("CAME IN HERE")

  // from the request :) 
  const { cardInfo } = await request.json(); //title and not id

  // console.log("TITLE ","CARD ",  cardInfo.author)
  const title = cardInfo.title
  const author = cardInfo.author
  const description = cardInfo.description
  const image = cardInfo.image

  // i think image needs to have the blob localhost thing
  const card = genCard(title, author, description, image)
  console.log("CARD IS ", card)
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
