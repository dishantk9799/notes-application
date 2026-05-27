import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

dotenv.config();

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`✅ Server is listening on port: http://localhost/${port}`);
})