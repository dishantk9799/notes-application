import connectDB from "./config/db.js";
import app from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3002;

connectDB();

app.listen(port, () => {
    console.log(`✅ Serve is connected: http://localhost/${port}`);
});