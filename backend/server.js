// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import path from 'path'


dotenv.config();

console.log('MongoDB URI:', process.env.MONGODB_URI); // Log the MongoDB URI

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
    const __dirname =path.resolve();

const app = express();

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>{
    res.sendFiles(path.join(__dirname,'client','dist','index.html'));
});
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server running on port 3000!");
});


app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes)


app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message= err.message || 'Internal server error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})