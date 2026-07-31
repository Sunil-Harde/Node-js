import express from "express";
import { userProfile } from "../controllers/user.controller.js";



const router = express()

router.get("/profile", userProfile)

export default router