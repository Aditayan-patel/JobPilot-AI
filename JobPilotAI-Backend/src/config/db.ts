import mongoose  from "mongoose";

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: "jobpilot-ai"
        })

        console.log("Connected to Mongodb");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;