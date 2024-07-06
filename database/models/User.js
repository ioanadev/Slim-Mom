import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 

    name: {
        type: String,
        required: false,
    },

    password: {
       type: String,
       required: [true, 'Password is required'],
    },
    
    email: {
       type: String,
       required: [true, 'Email is required'],
       unique: true,
    },
    token: {
        type: String,
        default: null,
     },
    
});
const User = mongoose.model('Auth', schema);
    
export default User
