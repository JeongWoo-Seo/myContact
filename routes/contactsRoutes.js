import express from "express";
import {getAllContact,addContact,createContact,getContact,updateContact,deleteContact} from '../controllers/contactsControllers.js'

const router = express.Router();

router.route('/')
    .get(getAllContact);

router.route('/add')
    .get(addContact)
    .post(createContact);

router.route('/:id')
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

export default router;