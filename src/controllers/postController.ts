import { Request, Response, NextFunction } from "express";
import Post from "../models/postModel";
import User from "../models/userModel";
import { CreateNewPost ,DeletePost,GetAllPost,GetPostById,UpdetePost,AddCommentForPost} from "../services/postService";

// Create a new post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newPost = await CreateNewPost(req.body)
  } catch (error) {
    
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const Postdelet = await DeletePost()
  } catch (error) {
    
  }
};



// Get all posts
export const getPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const allPost = await GetAllPost()
  } catch (error) {
    
  }
};


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const getPostById = await GetPostById()
  } catch (error) {
    
  }
};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatePost = await UpdetePost()
  } catch (error) {
    
  }
};


// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newComment = await AddCommentForPost()
  } catch (error) {
    
  }
};


