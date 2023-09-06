import express from "express";

import auth from "../middleware/auth";
import { getSharedID, getSharedProfile } from "../controllers/share.controllers";

const shareRouter= express.Router();

shareRouter.get('', auth, getSharedID );
shareRouter.get('/:id', getSharedProfile);

export default shareRouter
