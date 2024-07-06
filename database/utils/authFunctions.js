import bcrypt from 'bcrypt';
import User from '../models/User.js'
import jwt from 'jsonwebtoken';
import "dotenv/config";


const PRIVATE_KEY = process.env.PRIVATE_KEY
// singup
export const singupFunction = async (user) => {

    const saltRounds = 10;
    const encryptedPass = await bcrypt.hash(user.password, saltRounds);
   
     const newUser = ({
       name: user.name,
       password: encryptedPass,
       email: user.email,
      });
    const addNewUser = await User.create(newUser);
    // console.log(addNewUser);
    return addNewUser;  
   }

export const loginFunction = async (user) =>{
  const payload = {
   id: user._id
  };

  const token = jwt.sign(
    payload, 
    PRIVATE_KEY, 
    { expiresIn: '1h' }
  );
 user.token = token;
 await user.save();
 return token; 

}

export const isEmailFunction = async (email) =>{
  const isEmail = await User.findOne({email});
  // console.log("email in isEmailFunction:", isEmail)
  return isEmail;
}

export const verifyPasswordFunction = async (email, password) => {
const user =  await isEmailFunction(email);
if(!user){
  return false;
}
const verifyPassword = bcrypt.compareSync(password, user.password);
return verifyPassword;
}

export const ValidateJWT = (token)=>{
    try{
      const decoded = jwt.verify(token, PRIVATE_KEY)

      return decoded
    }
    catch(err){
     console.log(err)
    }
  }