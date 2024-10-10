import bcrypt from "bcrypt";
import loginDTO from "../interfaces/Ilogin";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken"

export const loginToSystem = async (userData:loginDTO): Promise<Error| string> => {
    //create new User
    const  {username,password} = userData
    const user = await userModel.findOne({username: userData.username})
    if (!user) {
        return new Error("User not found")
    }
    if(!await bcrypt.compare(password,user.password)){ 
        throw new Error("403:Wrong password ");
    }
    const payloed = {
        id: user._id,
        username,
        email: user.email
    }
    const token = jwt.sign(payloed,process.env.TOKEN_TOKEN as string,{expiresIn: "1h"})
    return token



}

export const logoutFromSystem =  ():void => {
    localStorage.removeItem("token")
}