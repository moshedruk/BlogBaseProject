import { Types } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    profile: {
      bio?: string;
      socialLinks?: string[];
    };
    posts: Types.ObjectId[];
  }