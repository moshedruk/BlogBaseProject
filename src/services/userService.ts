import bcrypt from "bcrypt";
import userModel from "../models/userModel";

export const CreateNewuser = async(newUser:any) => {
    try {        
        const {username,email,profile,password} = newUser
        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10)
        const dbUser = new userModel({
            username,
            password: hashedPassword,
            email,
            profile
        })
        await dbUser.save()
    }catch (err) {
        console.error(err)
        throw err        
    }
}


export const GetAllUser = async() => {
    try {
        const users = await userModel.find({})
        return users
    } catch (err) {
        console.error(err)
        throw err
    }
}

export const GetUserById = async(myuser:any) => {
    try {
        const user = await userModel.findOne({_id:myuser.id})
    } catch (err) {
        console.error(err)
        throw err        
    }
}