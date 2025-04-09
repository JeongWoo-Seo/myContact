import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("DB connect");
    }
    catch(err){
        console.log(err);
    }
}

export default dbConnect;