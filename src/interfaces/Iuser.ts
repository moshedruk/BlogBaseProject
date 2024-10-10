import { Types } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    profile: {
      bio?: string;
      socialLinks?: string[];
    };
    posts: Types.ObjectId[];
  }