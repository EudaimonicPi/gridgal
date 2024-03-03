// // GET: gets all L2 grid ids :)  with 'api/grids/ link
import { connectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";


// this function gets all the cards 
export async function POST(request) { // maybe eventually is user? for params and finding one user schema?
    // testing
    // return new Response(JSON.stringify([{_id: 123, gridTitle: 'fakiefakie'}]), {status: 200})
    try {
        await connectDB();
        const fields = "_id title" // we actual want all of the things bc we need all to render
        const allCards = await Card.find({}) // no .select(fields yet)
        // if none, nothing i should do on this front
        
        const toSend = JSON.stringify(allCards) //stringify yeah?
        return new Response(toSend, { status: 200 })
    } catch(error) {
        return new Response("Failed to get a single grid", { status: 500 });
    }  
}