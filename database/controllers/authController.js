// import bcrypt from 'bcrypt';

import  Joi from 'joi';
import User from '../models/User.js'
import {
   ValidateJWT, 
   isEmailFunction, 
   loginFunction, 
   singupFunction, 
   verifyPasswordFunction
   } from '../utils/authFunctions.js';
import passport from 'passport';


const SingupUserSchema = Joi.object({
  name: Joi.string()
           .required(),
  email: Joi.string()
            .email()
            .required(),
  password: Joi.string()
               .required()           
})

const LoginUserSchema = Joi.object({
  name: Joi.string(),

  email: Joi.string()
            .email()
            .required(),
  password: Joi.string()
               .required()           
})

export const singup = async (req, res, next)=>{
  const {error, value:user} = SingupUserSchema.validate(req.body);

   if(error){
    return res
     .status(400)
     .json({ error: error.details[0].message });
   }
   const existsEmail =  await User.findOne({email: user.email})
  if(existsEmail){
     return res.status(409).json({mesage: "Email in use"})
  }
  try{ 
    if(user.email && user.password){
     const newUser = await singupFunction(user)
     return res
      .status(201)
      .json({ message: 'The user has been added',
       user: {
       email: newUser.email
       }
      })

    }else{
      return res
      .status(400)
      .json({mesage: "Eroare de la librăria Joi sau o altă librărie de validare"})
    }
  }
  catch(err){
    return res
    .status(500)
    .json({ message: `${err}`});
  }
};

export const login = async (req, res, next) =>{
  const {error, value:user} = LoginUserSchema.validate(req.body);

  if(error){
    return res
    .status(400)
    .json({ error: error.details[0].message });
  }
  try{
    // console.log("email in authController:", user.email);
   const existEmail = await isEmailFunction(user.email)
   const existPassword = await verifyPasswordFunction(user.email, user.password)

   if(!existEmail){
    return res
    .status(401)
    .json({mesage: "Email is wrong"});
   }else if(!existPassword){
    return res
    .status(401)
    .json({mesage: "Password is wrong"});
   }else{
    const token = await loginFunction(existEmail)
    return res
    .status(200)
    .json({message:"Login completed successfully",  
     token: token,
      user: {
       email: user.email,
       subscription: user.subscription
      },
    })
   }
  }
  catch(err){
    return res
    .status(500)
    .json({ message: `${err}`});
  }
};

export const logout = async (req, res, next) =>{

  try{
    const header = req.get('authorization');
    console.log("Header:", header)
    if(!header) {
      return res
      .status(401)
      .json({ message: 'Not authorized'});
    }
    const token = header.split(" ")[1];
    console.log("Token:", token);
    
    const payload =  ValidateJWT(token);

    const id = payload.id;
    console.log("Id:", id);
    const user = await User.findById(id);
    console.log("User:", user)

    user.token = null;
    await user.save();
    return res
    .status(204)
    .send()

  }
  catch(err){
    return res
    .status(500)
    .json({ message: `${err}`});
  }
};

export const validateAuth = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (!user || err) {
      return res
      .status(401).json({message: "Not authorized"});
    }
    req.user = user;
    next();
  })
  (req, res, next);
};