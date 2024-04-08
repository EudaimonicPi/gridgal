
import { connectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";
import { genCard } from '@/utils/cards'


const IMAGE_DEFAULT = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5Ytxod5EJvWA9oaS72-8QGRLHSiGK50tyiOV2ozaiQ&s"
// had to put separately bc of POST stuff
//CREATE, creates a card from cardInfo... 
// maybe this can be UPDATE? 
export const POST = async (request, { params }) => {

  // from the request :) 
  const { cardInfo } = await request.json(); //title and not id

  // hopefully we'd just get the id or title here... 

  // // console.log("TITLE ","CARD ",  cardInfo.author)
  // const title = cardInfo.title
  // const author = cardInfo.author
  // const description = cardInfo.description
  // // tryin to get an image that works 
  // const image = cardInfo.image // something wrong w the image on save and load perhaps
  // let mod = cardInfo.mod !== undefined? cardInfo.mod: false // if it is do something 
  

  // console.log("CARD INFO MODDED IS ", mod)
  

  // i think image needs to have the blob localhost thing
  const card = genCard(title, author, description, image)
  // console.log("CARD IS ", card)
  const cardObj = new Card(card)

  try {
    await connectDB(mod);
    const newCard = await Card.create(cardObj);
    // console.log("NEW CARD IS ", newCard)
    
    return new Response({ status: 200 });
  } catch (err) {
    console.error("error in trying to create grid ");
    return new Response({status: 500})
  }
};

export const DELETE = async (request, { params }) => {
  const {title} = params
  const { cardID } = await request.json();
  console.log("we're deleting ", cardID)

   try {
    await connectDB();
    // console.log("HAS BEEN DELETED>>>", id)
    // findById and remove seems useful!
    await Card.deleteOne({ _id: cardID });
    //responses
    return new Response({ status: 200 });
  } catch (err) {
    return new Response({ status: 500 });
  }
};


// SAVE 
export const PUT = async (request, { params }) => {
  // need to know if mod or not or no? 
  // mod update=> status goes from pending-> accepted
  // other updates i can think about later

  const {title} = params
  const { cardID } = await request.json();
  // console.log("Card is is ", cardID, title)

  try {
    await connectDB();
    // this is update 1
    const testSave = await Card.findOneAndUpdate(
        {_id: cardID}, //first arg is find
        {status: 'accepted'}// second arg is update
    );

    // if id not found stuff
    return new Response({ status: 200 });
  } catch (err) {
    return new Response({ status: 500 });
  }
};