import mongoose from "mongoose";


const users = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
})

const feedback = mongoose.models.users || new mongoose.model("users",users);

export default feedback;