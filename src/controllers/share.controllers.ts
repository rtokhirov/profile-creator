import { Request, Response } from "express";
import { customRequest } from "../middleware/auth";
import userModel from "../models/user.model";

export async function getSharedID(req: Request, res: Response) {
    try {
      res.status(200).json({ id:`${(req as customRequest).user_id}`});
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
}

export async function getSharedProfile(req: Request, res: Response) {
    try {
        const id = req.params.id;
        
        const user = await userModel.findOne(
        {
          _id: id,
        },
        {_id:0, __v:0,updatedAt:0,log_id:0}
      );
  
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
}