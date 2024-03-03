import {Schema, model, models } from 'mongoose';

// basic type for 
const CardSchema = new Schema({
    title: {type: String},
    author: {type: String}, // for now... later on, we'll see type
    description: {type: String},
    image: {type: String}, // i think it's encoded as a string... it will have to be? 
})

const Card = models.Card || model('Card', CardSchema); 
export {Card} ;