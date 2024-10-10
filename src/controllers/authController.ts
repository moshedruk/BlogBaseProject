import { Request, Response } from "express";
import loginDTO from "../interfaces/Ilogin";
import { loginToSystem, logoutFromSystem } from "../services/authService";


export const login = async (
    req: Request<any,any,loginDTO>,
    res: Response,
  ): Promise<void> => {
    try {
      const token = await loginToSystem(req.body)
      localStorage.setItem("token", token as string)
      res.status(200).json({ token });

    } catch (error) {
      res.status(500).json({ error });
    }
  };

  export const logout = async (req: Request, res: Response):Promise<void> => {
    try {
      await logoutFromSystem();
      res.status(200).json({ message: "Logged out successfully" });
    }catch (err) {
    res.status(500).json({ err });
  }
}