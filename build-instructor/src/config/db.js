import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(``);
        console.log(`📍 MongoDB database connected on host: ${db.connection.host}`);
    } catch (error) {
        console.log("Error in Database connection:", error);
        process.exit(1);
    }
};

export default connectDB;