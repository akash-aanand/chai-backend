import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";

const connectDB = async()=>{
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MonogoDB connected !! DB host: ${connectionInstant.connection.host}`)
    } catch (error) {
        console.log("MoongoDB conncetion Failed ",error);
        process.exit;   
    }
}
 
export default connectDB;