import express from "express";
import {checkLogin,getAllContact,addContact,createContact,getContact,updateContact,deleteContact} from '../controllers/contactsControllers.js'

const router = express.Router();

router.route('/')
    .get(checkLogin,getAllContact);

router.route('/add')
    .get(checkLogin,addContact)
    .post(checkLogin,createContact);

router.route('/:id')
    .get(checkLogin,getContact)
    .put(checkLogin,updateContact)
    .delete(checkLogin,deleteContact);

export default router;