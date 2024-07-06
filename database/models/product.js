import mongoose from 'mongoose';


// const {Schema} = mongoose;



const schema = new mongoose.Schema({ 
  categories: {
    type: String,
    default: false
  },
  weight: {
    type: Number,
    default: false
  },
  title: {
    type: String,
    default: false
  },
  
  calories: {
    type: Number,
    default: false
  },

  groupBloodNotAllowed: {
    type: Boolean
  },
  
});

const Product = mongoose.model('Product', schema);

export default Product;