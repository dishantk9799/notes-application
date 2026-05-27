import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`📍 MongoDB database connected on host: ${db.connection.host}`);
    } catch (error) {
        console.log("Error in Database connection:", error);
        process.exit(1);
    }
};

export default connectDB;