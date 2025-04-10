import Contact from '../models/contactModel.js';
import expressAsyncHandler from 'express-async-handler';

export const getAllContact = expressAsyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.render("index",{contacts});
})

export const addContact = (req, res) => {
    res.render("add");
}

export const createContact = expressAsyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if(!name || !email || !phone){
        return res.send("값이 없습니다")
    }

    const contact = await Contact.create({name,email,phone});
    res.redirect("/contacts");
})

export const getContact = expressAsyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render("update",{contact});
})

export const updateContact = expressAsyncHandler(async (req, res) => {
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        return res.send("값이 없습니다")
    }

    const contact = await Contact.findByIdAndUpdate(req.params.id,
        {
            name,email,phone
        }
    );

    res.redirect("/contacts");
})

export const deleteContact = expressAsyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    res.redirect("/contacts");
})