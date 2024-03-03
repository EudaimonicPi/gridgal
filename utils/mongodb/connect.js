//vs require? not sure... 
import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true) //w/out console warning
    
    if (isConnected) {
        console.log("DB already up and running :)!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, 
            {dbName: 'Cluster0',
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("Mongo DB connected :)")

        //do i have to out db name? 
    } catch (error) {
        console.log("mongo connection err is weird" , error)
    }
}