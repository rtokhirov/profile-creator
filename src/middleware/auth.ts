import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface customRequest extends Request {
    "log_id": string,
    "user_id": string
}

interface JwtPayload {
    log_id: string,
    user_id: string
}

export default async function(req: Request, res: Response, next: NextFunction){
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const {log_id}= jwt.verify(token as string, process.env.JWT_SECRET_KEY as string) as JwtPayload
        const {user_id}= jwt.verify(token as string, process.env.JWT_SECRET_KEY as string) as JwtPayload
        (req as customRequest).log_id= log_id;
        (req as customRequest).user_id= user_id
    } catch (error) {
        return res.status(403).send({message:"token invalid"})
    }
    next();
}