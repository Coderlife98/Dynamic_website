import mongoose from "mongoose";

export const dbConfig = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://sunny:dynamic@cluster0.rgcgv7p.mongodb.net/`);
        console.log("Connected Database");
    } catch (error) {
        console.log(error.message);
    }
}