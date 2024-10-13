import bcrypt from "bcrypt";
import loginDTO from "../interfaces/Ilogin";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken"
import tokenPaloed from "../interfaces/tokenPayloed";

export const loginToSystem = async (userData: loginDTO): Promise<Error | string> => {
    const { username, password } = userData;

    // מוצאים משתמש לפי שם משתמש
    const user = await userModel.findOne({ username});

    // אם המשתמש לא נמצא
    if (!user) {
        return new Error("User not found");
    }

    // אם לא נשלחה סיסמה
    if (!password) {
        throw new Error("Password is required");
    }

    // בדיקה אם הסיסמה תואמת את הסיסמה המוצפנת ב-Database
    // const isPasswordMatch = await bcrypt.compare(password, user.password);
    // if (!isPasswordMatch) {
    //     throw new Error("403: Wrong password");
    // }
    // const Hpassword = await bcrypt.compare(password, user.password);
    // if (!Hpassword) {
    //     throw new Error("403: Wrong password");
    // }

    // יצירת טוקן
    const payload:tokenPaloed = {
        id: user._id,
        username: user.username,
        email: user.email
    };

    console.log(process.env.TOKEN_SECRET); // בדוק שהסוד לא ריק
    const token:string = jwt.sign(payload, process.env.TOKEN_SECRET as string, { expiresIn: "1h" });
    console.log(token); // הדפס את הטוקן שנוצר

    return token;
};



