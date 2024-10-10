import { Request, Response, NextFunction } from "express";
import Post from "../models/postModel";
import User from "../models/userModel";
import { CreateNewPost ,DeletePost,GetAllPost,GetPostById,UpdatePost,AddCommentForPost} from "../services/postService";

// Create a new post
export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newPost = await CreateNewPost(req.body)
    res.status(201).json(newPost);
  } catch (err) {
    res.status(401).json({err})
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const Postdelet = await DeletePost(req.params.id)
    res.status(200).json(Postdelet);
  } catch (err) {
    res.status(401).json({err})
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
    res.status(200).json(allPost);
  } catch (err) {
    res.status(401).json({err})
  }
};


// Get a single post by ID
export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const getPostById = await GetPostById(req.params.id)
    res.status(200).json(getPostById);
  } catch (err) {
    res.status(401).json({err})    
  }
};


// Update a post
export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatePost = await UpdatePost(req.params.id,req.body)
    
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(401).json({err})   
  }
};
// Add a comment to a post
export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newComment = await AddCommentForPost(req.params.id,req.params.idpost,req.body)
    res.status(201).json(newComment);
  } catch (err) {
    res.status(401).json({err})    
  }
};


