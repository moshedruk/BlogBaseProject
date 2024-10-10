import { Document, Schema, Types } from "mongoose";

export interface IComment extends Document {
    content: string;
    author: Types.ObjectId;
    createdAt: Date;
  }
 export const commentSchema:Schema<IComment> = new Schema<IComment>({})
  
