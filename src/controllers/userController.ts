import { Request, Response } from "express";
import User from "../models/userModel";
import { CreateNewuser ,GetUserById,GetAllUser} from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await CreateNewuser(req.body)
        res.status(201).json(newUser);
      } catch (err) {
        res.status(500).json({ err: err})
        
      }
};
// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await GetAllUser()
        res.status(200).json(users);
      } catch (err) {
        res.status(401).json({ err: err})
      }
};
// Get a single user by ID
export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await GetUserById(req.params.id)
        res.status(200).json(user);
      } catch (err) {
        res.status(401).json({err})
      }
};

// Optionally, add DELETE and EDIT functions
