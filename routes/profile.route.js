import express from "express";
import { Edit } from "../controllers/profile.controller.js"

const profileRouter = express.Router();

profileRouter.post('/edit', Edit)

export default profileRouter