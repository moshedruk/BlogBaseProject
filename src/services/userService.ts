import bcrypt from "bcrypt";
import userModel from "../models/userModel";  // ודא שזה הנתיב הנכון למודל
import { IUser } from "../interfaces/Iuser";

export const CreateNewUser = async (newUser: IUser) => {
    try {
        const { username, email, password } = newUser;

        
        if (!username || !email || !password) {
            throw new Error("Missing required fields: username, email, or password.");
        }

        
        
        const hash = await bcrypt.hash(password, 10);
        const dbUser = new userModel({
            username,
            password: hash,
            email,
        });

        
        await dbUser.save();
        
       
        return dbUser;
    } catch (err) {
        console.error("Error creating user:", err);
        throw err;  
    }
};



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
        const user = await userModel.findOne({_id:myuser})
        return user
    } catch (err) {
        console.error(err)
        throw err        
    }
}