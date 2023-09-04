import express from "express";
import { getLinks, updateLinks } from "../controllers/links.controllers";

const linkRouter= express.Router();

linkRouter.get('/', getLinks);
linkRouter.patch('/', updateLinks);

export default linkRouter
