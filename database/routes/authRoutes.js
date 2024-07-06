import express from'express'; 
// import  Joi from 'joi';
import {
    login,
    logout, 
    singup, 
    validateAuth
} from '../controllers/authController.js';

const router = express.Router();

// POST /auth/signup
router.post('/signup', singup);

// POST /auth/login
router.post('/login', login);

//GET /auth/logout
router.get('/logout', validateAuth, logout);

export default router