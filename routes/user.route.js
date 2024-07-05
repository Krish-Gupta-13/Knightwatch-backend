import express from "express";
import { Signup, VerifyToken, GetUser, refreshToken, Logout } from "../controllers/user.controller.js";
import { Login } from "../controllers/user.controller.js";
// import { Edit } from "../controllers/profile.controller.js"

const router = express.Router();

// routing to signup            
router.post('/signup', Signup)
router.post('/login', Login)
router.get('/user', VerifyToken, GetUser)
router.get('/refresh', refreshToken, VerifyToken, GetUser);
router.post('/logout', VerifyToken, Logout)
// router.post('/edit', Edit)
export default router