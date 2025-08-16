// // //this function gets all the cards
// import { connectDB } from "@/utils/mongodb/connect";
// import { Card } from "@/utils/mongodb/models/card";

// // this function gets all the cards, if mod is true it gets mod cards
// export async function POST(request) { // maybe eventually is user? for params and finding one user schema?
//     const { mod } = await request.json()
//     try {
//         await connectDB()
//         // const fields = "_id title" // we actual want all of the things bc we need all to render

//         // get status depending on mode
//         const status = mod? 'pending': 'accepted'
//         const allCards = await Card.find({status: status}) // no .select(fields yet)
//         // cnosole.log("CARDS ARE ", allCards) // watch when i print this out cuz it's really big!!
//         const toSend = JSON.stringify(allCards) //stringify yeah?
//         // const toSend = JSON.stringify(noWifi)
//         return new Response(toSend, { status: 200 })
//     } catch(error) {
//         return new Response("Failed to get a single grid", { status: 500 });
//     }  
// }

// /api/cards/route.js
import { connectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";

// export async function POST(request) {
//   const { mod, limit } = await request.json(); // accept limit
//   try {
//     await connectDB();

//     const status = mod ? 'pending' : 'accepted';
//     let query = Card.find({ status });

//     if (limit && Number.isInteger(limit)) {
//       query = query.limit(limit); // limit results
//     }

//     const allCards = await query.exec();

//     return new Response(JSON.stringify(allCards), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to get cards", { status: 500 });
//   }
// }


export async function POST(request) {
  const { mod, limit, onlyFavorites } = await request.json(); // Accept limit and onlyFavorites
  try {
    await connectDB();
    // const fields = "_id title" // we do want all the fields though 

    // Default to 'accepted' status unless mod is true (pending)
    const status = mod ? 'pending' : 'accepted';
    
    // Start with the base query
    let query = Card.find({ status });

    // If onlyFavorites is true, filter for ecyFav = true
    // if (onlyFavorites) {
    //   query = query.where('ecyFav').equals(true);
    // }

    // Apply limit if provided
    if (limit && Number.isInteger(limit)) {
      query = query.limit(limit); // Limit results
    }

    // Execute the query
    const allCards = await query

    return new Response(JSON.stringify(allCards), { status: 200 });
  } catch (error) {
    return new Response("Failed to get cards", { status: 500 });
  }
}
