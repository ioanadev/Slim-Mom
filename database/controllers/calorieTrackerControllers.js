import  Joi from 'joi';
import { calorieCalculation} from '../utils/calories.js';
import Product from '../models/product.js';
import Diary from '../models/diary.js';
import { ValidateJWT } from '../utils/authFunctions.js';

const CalorieTrackerSchema = Joi.object({
 height: 
    Joi.number()
    .required(),
 age: 
    Joi.number()
    .required(),
 currentWeight: 
    Joi.number()
    .required(),
 desiredWeight: 
    Joi.number()
    .required(),
 bloodType:
    Joi.number()
    .required(),
})

export const calorieTracker = async (req, res, next) => {
    const {error, value:CalorieTracker} = CalorieTrackerSchema.validate(req.body);
  
    if(error){
     return res
      .status(400)
      .json({ error: error.details[0].message });
    }

   const {height, age, currentWeight, desiredWeight, bloodType } = CalorieTracker;
       if(!height || !age || !currentWeight || !desiredWeight || !bloodType){
        return res.status(400).json({message: 'Incomplete data provided'})
       }
   const dailyCalories = await calorieCalculation(height, age, currentWeight);

   const bloodTypeIndex = bloodType;

   try{
     const nonRecommendedProducts = await Product.find(
         { [`groupBloodNotAllowed.${bloodTypeIndex}`]: true }, 
         { title: 1, _id: 0 });
     const nonRecommendedProductsList = nonRecommendedProducts.map(product => product.title);
      res
      .status(201)
      .json({
       daily_calories: dailyCalories,
       non_recommended_products: nonRecommendedProductsList
      });
   }
   catch(err){
    return res
    .status(500)
    .json({ message: `${err}`});
   } 
}

export const registerDiary = async (req, res, next) => {
   const {error, value:CalorieTracker} = CalorieTrackerSchema.validate(req.body);
   if(error){
     return res
     .status(400)
     .json({ error: error.details[0].message });
   }

   const header = req.get('authorization');
   
   if(!header) {
      return res
      .status(401)
      .json({ message: 'Not authorized'});
   }
   const token = header.split(" ")[1];
  
   const payload =  ValidateJWT(token);
   const idUser = payload.id;
 
   const user = await Diary.findOne({userId:idUser});
   if(!user){

    const {height, age, currentWeight, desiredWeight, bloodType } = CalorieTracker;
      if(!height || !age || !currentWeight || !desiredWeight || !bloodType){
       return res.status(400).json({message: 'Incomplete data provided'})
      }
    const dailyCalories = await calorieCalculation(height, age, currentWeight);
 
    const bloodTypeIndex = bloodType;
     try{
       const nonRecommendedProducts = await Product.find(
       { [`groupBloodNotAllowed.${bloodTypeIndex}`]: true }, 
       { title: 1, _id: 0 });
       const nonRecommendedProductsList = nonRecommendedProducts.map(product => product.title);

       const newDiary = new Diary(
        {
          userId : idUser,
          age,
          height,
          currentWeight,
          desiredWeight,
          bloodType,
          dailyCalories,
          nonRecommendedProductsList : nonRecommendedProductsList
       });
       await newDiary.save();
       res
       .status(201)
       .json({
       message: 'Data saved successfully',
       diary: newDiary
       });
      }
     catch(err){
       return res
       .status(500)
       .json({ message: `${err}`});
      } 
   } else{
      return res
      .status(409)
      .json({
      message: 'User already exists'
      });
   }
}

export const searchProducts =  async(req, res, next) => {
    const query = req.query.q;
    
    if(!query){
        res.status(400).json({message: 'Query parameter q is required'});
    }
 try{
    const products = await Product.find(
        {title: {$regex:query, $options: 'i'}},
        {title: 1, categories: 1, weight: 1, calories: 1, _id: 0}
    );
    return res.status(200).json(products);

 }
 catch(err){
    return res
    .status(500)
    .json({ message: `${err}`});
 }
}

export const addProduct = async(req, res, next) => {
    const {product} = req.body;
   
    if(
        !product.date ||
        !product.title || 
        !product.calories || 
        !product.weight){
     return res
     .status(400)
     .json({message: 'Incomplete data provided'})

    }
    const header = req.get('authorization');
   
    if(!header) {
      return res
      .status(401)
      .json({ message: 'Not authorized'});
    }
    const token = header.split(" ")[1];
  
    const payload =  ValidateJWT(token);
     const idUser = payload.id;
   
 try{

    let result= await Diary.findOne({userId:idUser})

    if(!result){
      result = new Diary({
      userId: idUser,
      addProducts: [{...product}]
      })
    }else{
      result.addProducts.push({...product})
    }
    await result.save();
    res.json({ message: 'Product added successfully', result });

    }  
 catch(err){
    return res
    .status(500)
    .json({ message: `${err}`});
 }
}

export const removeProduct = async(req, res, next) =>{
    const {date, title} = req.body;
   
    const header = req.get('authorization');
   
    if(!header) {
      return res
      .status(401)
      .json({ message: 'Not authorized'});
    }
    const token = header.split(" ")[1];
  
    const payload =  ValidateJWT(token);
     const idUser = payload.id;
    
    const removeProduct = await Diary.findOneAndUpdate(
      {userId: idUser},
      {
       $pull:{
         addProducts:{
            $and:[
               {date: date},
               {title: title}
            ]
         }
       }
      }
      
     )
     if(!removeProduct){
      return res
        .status(401)
        .json({ message: 'Product not found.'});
    
     }
     return res
        .status(200)
        .json({ message: 'Product removed successfully.'});

}

export const dayInfo = async(req, res, next) => {

   const header = req.get('authorization');
   const infoOnDate = req.body;

   if(!header) {
     return res
     .status(401)
     .json({ message: 'Not authorized'});
   }
   const token = header.split(" ")[1];
 
   const payload =  ValidateJWT(token);
   const idUser = payload.id;

   try{
      const user = await Diary.findOne({userId: idUser}).exec();
  
      if(!user){
         console.log("user not found")
         return;
      }else{
         const getProductsOnDate = user.addProducts.filter(product => product.date === infoOnDate.date);

         if(getProductsOnDate.length === 0){
            return res
            .status(404)
            .json({message:'There are no registrations on the requested date'})
         }
         const response = getProductsOnDate.map(product =>({
            date: product.date,
            title:product.title,
            calories: product.calories,
            weight: product.weight
         }));
         return res.status(200).json({message: 'succes', products: response})
        
      }
   }
   catch(err){
      return res.status(500).json({ message: 'Internal Server Error', err });
   }
      
}