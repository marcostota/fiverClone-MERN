import mongoose from "mongoose";
const{ Schema } = mongoose

const UserSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            require:true
        },
        img:{
            type:String,
            require:false
        },
        country:{
            type:String,
            require:false
        },
        phone:{
            type:String,
            require:false
        },
        desc:{
            type:String,
            require:false
        },
        isSeller:{
            type:Boolean,
            default:false
        },
    },
    {
        timestamps:true
    }
);

export default mongoose.model('User', UserSchema)
