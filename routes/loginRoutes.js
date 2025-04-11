import express from 'express';
import {getLogin, userLogin, getRegister, userRegister} from '../controllers/loginContrllers.js'

const router = express.Router();

router.route('/')
    .get(getLogin)
    .post(userLogin);


router.route('/register')
    .get(getRegister)
    .post(userRegister);


export default router;