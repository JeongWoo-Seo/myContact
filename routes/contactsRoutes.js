import express from "express";
import {getAllContact} from '../controllers/contactsControllers.js'

const router = express.Router();

router.route('/')
    .get(getAllContact);

export default router;