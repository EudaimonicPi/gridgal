import { connectDB, modConnectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";
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
  const status = 'pending'
  const authorImage = cardInfo.authorImage? cardInfo.authorImage: IMAGE_DEFAULT
  // i think image needs to have the blob localhost thing
  const card = genCard(title, author, description, image, authorImage, status)
  // console.log("CARD IS ", card)
  const cardObj = new Card(card)

  try {
    await connectDB("testing create stuff");
    const newCard = await Card.create(cardObj);
    // console.log("NEW CARD IS ", newCard)
    
    return new Response({ status: 200 });
  } catch (err) {
    console.error("error in trying to create grid ");
    return new Response({status: 500})
  }
};


export const DELETE = async (request, { params }) => {
  // what does this do???
  // const { title } = await request.json();

  // how does it determine which grid to delete ahhh
  const id = params.id //actually id not title
   try {
    await connectDB();
    // console.log("HAS BEEN DELETED>>>", id)
    // findById and remove seems useful!
    await Card.deleteOne({ _id: id });
    //responses
    return new Response({ status: 200 });
  } catch (err) {
    return new Response({ status: 500 });
  }
};