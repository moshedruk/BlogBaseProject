import userModel from "../models/userModel"


export const CreateNewuser = async(newUser:any) => {
    try {        
        const {username,email,profile} = newUser
        const dbUser = new userModel({
            username,
            email,
            profile
        })
        await dbUser.save()
        return dbUser
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
        const user = await userModel.findOne({_id:myuser})
        return user
    } catch (err) {
        console.error(err)
        throw err        
    }
}