import mongoose from 'moongoose'

const foodSchema = new mongoose.schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);