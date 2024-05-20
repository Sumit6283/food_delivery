const port = 4000;
// import path from 'path';
import express from 'express';
// import mongoose from 'mongoose';
import cors from "cors";
import { connectDB } from './config/db.js';
const app = express();

// mongoose.connect('');

// const product = mongoose.model("products",({
//     name:{
//         type:String,
//     },
//     email:{
//         email:String,
//     }
// }))

app.use(express.json());

app.use(cors());

//DB Connection
connectDB()

app.get("/",(req,res)=>{
    res.send("Hiii");
})

app.listen(port,()=>{
    console.log("listening at port 4000");
})
