import mongoose, { Schema, Types } from "mongoose";
import { IPost } from "../interfaces/Ipost";
import { commentSchema } from "../interfaces/Icomment";


const postSchema:Schema<IPost> = new Schema<IPost>({
  title: {
      type: String,
      required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: [{type:Types.ObjectId,ref:"users"}],
  comments:[commentSchema]
},{
  
})

const postModel:mongoose.Model<IPost> = mongoose.model<IPost>("posts", postSchema)

export default postModel;
