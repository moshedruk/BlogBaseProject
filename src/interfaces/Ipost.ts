import { Types } from "mongoose";
import { IComment } from "./Icomment";

export interface IPost extends Document {
    title: string;
    content: string;
    author: Types.ObjectId;
    comments: IComment[];
  }