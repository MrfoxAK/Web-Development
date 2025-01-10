import mongoose from "mongoose";

export const connectDB = async ()=>{
     try{
          const conn = await mongoose.connect(process.env.MONGODB_URL);
          console.log(`Mongoose Connected: ${conn}`);
          
     }catch(error){
          console.log("Mongoose Error", error);
     }
};
