import { Request, Response } from "express";
import { customRequest } from "../middleware/auth";
import userModel from "../models/user.model";

export async function getProfile(req: Request, res: Response) {
  try {
    const user = await userModel.find(
      {
        log_id: (req as customRequest).log_id,
      },
      { _id: 0,__v:0,updatedAt:0,log_id:0}
    );

    res.status(200).json(user[0]);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const { first_name, last_name, email } = req.body;
    console.log({ first_name, last_name, email });
    
    if (first_name && last_name) {
      const user = await userModel.updateOne(
        { log_id: (req as customRequest).log_id },
        {
          first_name,
          last_name,
          email,
        },
        { _id: 0,__v:0,updatedAt:0,log_id:0}
      );
      res.status(201).json(user);
    } else {
      throw new Error();
    }
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
}
