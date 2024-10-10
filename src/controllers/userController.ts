import { Request, Response } from "express";
import User, { IUser } from "../models/userModel";
import { CreateNewuser ,GetUserById,GetAllUser} from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await CreateNewuser()
      } catch (error) {
        
      }
};
// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await GetAllUser()
      } catch (error) {
        
      }
};
// Get a single user by ID
export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await GetUserById()
      } catch (error) {
        
      }
};

// Optionally, add DELETE and EDIT functions
