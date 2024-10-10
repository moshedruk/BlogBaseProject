import { NextFunction, Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/postController";
import verifyUser from "../middleware/verifiyd";

const postRouter = Router();

postRouter.post("/",verifyUser, createPost);
postRouter.get("/",verifyUser, getPosts);
postRouter.get("/:id",verifyUser, getPost as unknown as NextFunction);
postRouter.put("/:id",verifyUser, updatePost);
postRouter.delete("/:id",verifyUser, deletePost);
postRouter.post("/:id/comments",verifyUser, addComment);

export default postRouter;
