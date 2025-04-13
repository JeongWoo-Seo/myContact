import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const getLogin = expressAsyncHandler ( async (req,res) => {
    res.render("home");
})

export const userLogin = expressAsyncHandler (async (req,res) => {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.json({message: "등록된 사용자가 없습니다"});
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({message: "비밀번호가 틀렸습니다"});
    }

    const token = await jwt.sign({id:user._id},JWT_SECRET);
    res.cookie("token",token,{httpOnly:true});

    res.redirect("/contacts");

})

export const getRegister = expressAsyncHandler (async (req,res) => {
    res.render("register");
})

export const userRegister = expressAsyncHandler (async (req,res) => {
    const {username,password,password2} = req.body;
    const userRegisted = await User.findOne({username});

    if(userRegisted){
        return res.json({message: "등록된 사용자가 있습니다"});
    }
    else if(password === password2){
       const hashPassword = await bcrypt.hash(password,10);
       const user = await User.create({username : username,password : hashPassword});
       res.send("register success");
    }
    else{
        return res.json({message: "비밀번호가 서로 다릅니다"});
    }

})