import app from './app.js';
import dotnev from 'dotenv';
dotnev.config({path: './.env'});
import connectDB from './db/index.js';

const port = 8000;

connectDB()
    .then(() => (
        app.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}/`)
        })
    ))
    .catch((err) => {
        console.error("MongoDB connection error", err);
        process.exit(1);
    })