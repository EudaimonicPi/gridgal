//vs require? not sure... 
import mongoose from 'mongoose';

let isConnected = false;
const theDB = 'Cluster0'

export const connectDB = async () => {
    mongoose.set('strictQuery', true) //w/out console warning

    if (isConnected) {
        console.log("DB already up and running :)!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, 
            {dbName: theDB,
        })
        isConnected = true;
        console.log("regular db has connected")
        //do i have to out db name? 
    } catch (error) {
        console.log("mongo connection err is weird " , error)
    }
}