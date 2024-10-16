import  mongoose, { Schema, Types, Model } from "mongoose";
import validator from "validator";


import { IUser } from "../interfaces/Iuser";

const userSchema:Schema<IUser> = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique:true,
        minlength: 5,
        maxlength: 10
    },
    password: {
       type: String,
        required: true,
        minlength: 8,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "Invalid email address"]
    },
    profile:{
      bio:{type: String},
      socialLinks:[{type: String}]

    },
    posts:[{type:Types.ObjectId,ref:"posts"}]
})

const userModel:Model<IUser> = mongoose.model<IUser>("users", userSchema)

export default userModel;
