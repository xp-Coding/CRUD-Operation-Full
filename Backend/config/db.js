import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDb = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;