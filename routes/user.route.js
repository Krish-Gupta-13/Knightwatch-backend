import express from "express";
import { Signup, VerifyToken, GetUser, refreshToken, Logout } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";

const userRouter = express.Router();

// routing to signup            
userRouter.post('/signup', Signup)
userRouter.post('/login', Login)
userRouter.get('/user', VerifyToken, GetUser)
userRouter.get('/refresh', refreshToken, VerifyToken, GetUser);
userRouter.post('/logout', VerifyToken, Logout)

export default userRouter