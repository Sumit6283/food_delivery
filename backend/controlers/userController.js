import userModel from "../models/userModel.js";
import jwt from'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from "validator";

//login
const loginUser = async (req,res)=>{

}


//signup

const registerUser = (req,res)=>{
    const {name,password,email} = req.body;
    try{
        const exists = userModel.findOne({email});
    }
    catch{

    }
}

export {loginUser,registerUser};


//signup