import bcrypt from "bcrypt";
import userModel from "../models/userModel";  // ודא שזה הנתיב הנכון למודל

export const CreateNewUser = async (newUser: any) => {
    try {
        const { username, email, profile, password } = newUser;

        // בדוק שכל השדות הנדרשים קיימים
        if (!username || !email || !password) {
            throw new Error("Missing required fields: username, email, or password.");
        }

        // הצפנת הסיסמה לפני השמירה
        // const hashedPassword = await bcrypt.hash(password, 10);
        // const hash = await bcrypt.hash(password, 10);
        
        // יצירת אובייקט המשתמש עם סיסמה מוצפנת
        const dbUser = new userModel({
            username,
            password: password,
            email,
            profile
        });

        // שמירת המשתמש ב-Database
        await dbUser.save();
        
        // החזרת המשתמש שנוצר
        return dbUser;
    } catch (err) {
        console.error("Error creating user:", err);
        throw err;  // החזר את השגיאה כדי שהקריאה החיצונית תדע מה קרה
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