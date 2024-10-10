import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

export default userRouter;
