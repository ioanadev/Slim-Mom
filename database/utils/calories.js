import Diary from "../models/diary.js";

export const calorieCalculation = async (height, age, currentWeight) =>{
const BMR = 10*currentWeight+6.25*height-5*age-161;
const calories = Math.ceil(BMR*1.2)-500;
return calories;
} 

