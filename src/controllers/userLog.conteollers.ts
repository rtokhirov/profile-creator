import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import userLogModel from "../models/userLogs.model";
import userModel from "../models/user.model";

export async function signup(req: Request, res: Response){
    try {
        const{ email, password }=req.body
        if(email && password){
            const userLog = await userLogModel.create({email, password})
            const user = await userModel.create({log_id:userLog._id})
            const token= jwt.sign({'log_id':userLog._id, email:userLog.email }, process.env.JWT_SECRET_KEY as string,{expiresIn:'30d'})
            res.status(201).json({
                email: userLog.email,
                token
            })
        }else{
            throw new Error
        }
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export async function login(req: Request, res: Response){
    try {
        const{ email, password }=req.body
        if(email && password){
            const userLog = await userLogModel.findOne({email, password})
            if (userLog) {
                const token= jwt.sign({'log_id':userLog._id, email:userLog.email}, process.env.JWT_SECRET_KEY as string,{expiresIn:'30d'})
                res.status(201).json({
                    email: userLog.email,
                    token
                })
              } else {
                res.status(400).send({ error: "Login or Password wrong!" });
              }
        }else{
            throw new Error
        }
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}