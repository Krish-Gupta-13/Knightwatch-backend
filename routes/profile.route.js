import express from "express";
import { Edit, GetProfileUser } from "../controllers/profile.controller.js"

const profileRouter = express.Router();

profileRouter.post('/edit', Edit)
profileRouter.get('/profile', GetProfileUser)

export default profileRouter