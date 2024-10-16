import bcrypt from "bcrypt";
import loginDTO from "../interfaces/Ilogin";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken"
import tokenPaloed from "../interfaces/tokenPayloed";

export const loginToSystem = async (userData: loginDTO): Promise<Error | string> => {
    const { username, password } = userData;

    
    const user = await userModel.findOne({ username});

    
    if (!user) {
        return new Error("User not found");
    }

   
    if (!password) {
        throw new Error("Password is required");
    }

   
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("403: Wrong password");
    }
    const Hpassword = await bcrypt.compare(password, user.password);
    if (!Hpassword) {
        throw new Error("403: Wrong password");
    }

    
    const payload:tokenPaloed = {
        id: user._id,
        username: user.username,
        email: user.email
    };

   
    const token:string = jwt.sign(payload, process.env.TOKEN_SECRET as string, { expiresIn: "1h" });
    

    return token;
};



