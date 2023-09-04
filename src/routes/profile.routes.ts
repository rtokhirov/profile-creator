import express from "express";
import { getProfile, updateProfile } from "../controllers/profile.controllers";

const profileRouter= express.Router();

profileRouter.get('/', getProfile);
profileRouter.patch('/', updateProfile);

export default profileRouter