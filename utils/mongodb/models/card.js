// contains card AND modal schema
import {Schema, model, models } from 'mongoose';

// basic type for 
const CardSchema = new Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String}, // i think it's encoded as a string... it will have to be? 
    status: {type: String, default: 'pending'},
    author: {type: String, default: 'ecyking72345@gmail.com'}, // for now... later on, we'll see type .
    authorImage: {type: String }, // no default for now... 
    ecyFav: {type: Boolean, default: false}
})


const UserSchema = new Schema({
    username: {type: String}, 
    email: {type: String},
    image: {type: String},
    bio: {type: String}, 
    country: {type: String}, // may change later?  
    grids: {type: Array} // do i need array type? 
    // gridArr... 
    //affiliation?

})
const Card = models.Card || model('Card', CardSchema); 
const User = models.User || model('User', UserSchema)
const NewCard = models.NewCard || model('NewCard', CardSchema)

export {Card, User, NewCard } ;