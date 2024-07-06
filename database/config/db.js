import mongoose from'mongoose';
import "dotenv/config";

const PASS = process.env.PASS

export async function connectToDb (){
    try{
      await mongoose
      .connect(`mongodb+srv://ioanahdev:${PASS}@cluster0.do5fuou.mongodb.net/db-calorie-tracker`);
     console.log('Database connection successful')
    }
    catch(error){
     console.log(error);
     process.exit(1);
    }
    }