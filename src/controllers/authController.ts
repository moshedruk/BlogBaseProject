import { Request, Response } from "express";
import loginDTO from "../interfaces/Ilogin";


export const login = async (
    req: Request<any,any,loginDTO>,
    res: Response,
  ): Promise<void> => {
    try {
      const token = await loginToSystem(req.body)
      res.status(200).json({ token });

    } catch (error) {
      res.status(500).json({ error });
    }
  };
  