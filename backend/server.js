const port = 4000;
// import path from 'path';
import express from 'express';
// import mongoose from 'mongoose';
import cors from "cors";
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
const app = express();

app.use(express.json());

app.use(cors());

//DB Connection
connectDB()

app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("Hiii");
})

app.listen(port,()=>{
    console.log("listening at port 4000");
})
