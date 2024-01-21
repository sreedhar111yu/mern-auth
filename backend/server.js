// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log('MongoDB URI:', process.env.MONGODB_URI); // Log the MongoDB URI

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000!");
});
