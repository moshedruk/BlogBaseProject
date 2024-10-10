import { Router } from "express";

const authRouter = Router();

authRouter.post("/login",login)

authRouter.delete("/logout",logout)

export default authRouter;
