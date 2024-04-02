import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/route.js";

dotenv.config();

// Import environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Create Express app
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json()); // Replace bodyParser with express.json()

// Use the router
app.use('/api', router);

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Database connected successfully');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });
