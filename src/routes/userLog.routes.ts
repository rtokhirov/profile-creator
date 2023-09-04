import express from "express"
import { login, signup } from "../controllers/userLog.conteollers"

const userLogRouter= express.Router()

userLogRouter.post('/signup', signup)
userLogRouter.post('/login', login)

export default userLogRouter