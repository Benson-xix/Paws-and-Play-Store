import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log("Mongo Connection was successful");
    } catch (error) {
        console.error("Error Connecting to MongoDB:", error);
        throw new Error("Error Connecting to MongoDB.");
    }
};

export default connect;
