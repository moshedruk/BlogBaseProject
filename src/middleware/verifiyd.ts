import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload, TokenExpiredError} from "jsonwebtoken";
import RequestWithUser from "../interfaces/requestWithUser";
import TokenPayloadDTO from "../interfaces/tokenPayloed";



const verifyUser = async (
    req: RequestWithUser | Request,
    res: Response,
    next: NextFunction
) => {
    try { 
         const tokenFromLocalStorage:string = JSON.stringify(localStorage.getItem("token"))   
        const token: string = tokenFromLocalStorage
        const payload: TokenPayloadDTO = jwt.verify(token, process.env.TOKEN_SECRET as string) as TokenPayloadDTO
        (req as RequestWithUser).user = payload
        next()
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            res.status(401).json({
                err: true,
                message: "Token expiered, please log in again",
                data: err
            })
        } else {
            res.status(400).json({
                err: true,
                message: "Token is missing or curropted",
                data: err
            })
        }
    }
}

export default verifyUser