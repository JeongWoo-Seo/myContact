import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";

export const getLogin = expressAsyncHandler ( async (req,res) => {
    res.render("home");
})

export const userLogin = expressAsyncHandler (async (req,res) => {

})

export const getRegister = expressAsyncHandler (async (req,res) => {
    res.render("registers");
})

export const userRegister = expressAsyncHandler (async (req,res) => {

})