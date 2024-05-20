import mongoose from 'mongoose';
export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://sumit:10101010@cluster0.inw0kup.mongodb.net/food_delivery").then(()=>console.log("DB Connected"))
}
