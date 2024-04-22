import mongoose from "mongoose";

const connect = async () => {
     if (mongoose.connections[0].readyState) return;
    try {
         await mongoose.connect(process.env.DATABASE_URL as string, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
         } as any);

         console.log("Mongo Connection was successful")
    } catch (error) {
         throw new Error("Error Connecting to MongoDB.");
    }
}

export default connect;
