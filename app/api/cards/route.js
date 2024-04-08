// //this function gets all the cards
import { connectDB } from "@/utils/mongodb/connect";
import { Card } from "@/utils/mongodb/models/card";

// this function gets all the cards, if mod is true it gets mod cards
export async function POST(request) { // maybe eventually is user? for params and finding one user schema?
    const { mod } = await request.json()
    try {
        await connectDB()
        // const fields = "_id title" // we actual want all of the things bc we need all to render

        // get status depending on mode
        const status = mod? 'pending': 'accepted'
        const allCards = await Card.find({status: status}) // no .select(fields yet)
        // cnosole.log("CARDS ARE ", allCards) // watch when i print this out cuz it's really big!!
        const toSend = JSON.stringify(allCards) //stringify yeah?
        // const toSend = JSON.stringify(noWifi)
        return new Response(toSend, { status: 200 })
    } catch(error) {
        return new Response("Failed to get a single grid", { status: 500 });
    }  
}