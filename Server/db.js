import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({path: '../.env'});

console.log("env", process.env.DB_USERNAME);

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nextrove.okn764u.mongodb.net/test`);
        console.log("connected to db");
    } catch (error) {
        console.log("error in connecting to db", error);
        throw error;
    }
}

export default connectDB;