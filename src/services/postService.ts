


export const CreateNewPost = async(newPost:any) => {
    try {
        const {title,content,author} = newPost
        const dbpost = new postModel({
            title,
            content,
            author
        })      
        await dbpost.save()      
    } catch (err) {
        throw err
    }
}

export const DeletePost = async() => {
    try {
        
    } catch (err) {
        throw err
    }
}

export const GetAllPost = async() => {
    try {
        
    } catch (err) {
        throw err
    }
}

export const GetPostById = async() => {
    try {
        
    } catch (err) {
        throw err
    }
}

export const UpdetePost = async() => {
    try {
        
    } catch (err) {
        throw err
    }
}

export const AddCommentForPost = async() => {
    try {
        
    } catch (err) {
        throw err
    }
}