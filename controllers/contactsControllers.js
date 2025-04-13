import Contact from '../models/contactModel.js';
import expressAsyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const checkLogin = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        res.redirect('/');
    }
    else {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.userId = decoded.userId;
            next();
        }
        catch (err) {
            res.redirect('/');
        }
    }
}

export const logout = expressAsyncHandler( async(req,res) => {
    res.clearCookie("token");
    res.redirect("/");
})

export const getAllContact = expressAsyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.render("index", { contacts });
})

export const addContact = (req, res) => {
    res.render("add");
}

export const createContact = expressAsyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.send("값이 없습니다")
    }

    const contact = await Contact.create({ name, email, phone });
    res.redirect("/contacts");
})

export const getContact = expressAsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render("update", { contact });
})

export const updateContact = expressAsyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.send("값이 없습니다")
    }

    const contact = await Contact.findByIdAndUpdate(req.params.id,
        {
            name, email, phone
        }
    );

    res.redirect("/contacts");
})

export const deleteContact = expressAsyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    res.redirect("/contacts");
})