
import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
  userId: {
    type: String
  }, 
  
  height: {
    type: Number,
    default: false,
    required: [true, 'Please enter the height']
  },
  age: {
    type: Number,
    default: false,
    required: [true, 'Please enter the age']
  },
  currentWeight: {
    type: Number,
    default: false,
    required: [true, 'Please enter the current weight']
  },
  
  desiredWeight: {
    type: Number,
    default: false,
    required: [true, 'Please enter the desire weight']
  },

  bloodType: {
    type: Number,
    default: false,
    required: [true, 'Please select the blood type']
  },

  dailyCalories: {
    type: Number
  },

  nonRecommendedProductsList: {
    type: [String]
  },
  
  addProducts: [{
    date: {
      type: String,
      required: true
    },
    title: { 
      type: String, 
      required: true 
    },
    calories: { 
      type: Number, 
      required: true 
    },
    weight: { 
      type: Number, 
      required: true 
    }
  }]
});

const Diary = mongoose.model('Diary', schema);

export default Diary;


  