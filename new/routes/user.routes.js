import express from "express"

import { registerUser, loginUser, getProfile } from "../controllers/user.controller.js"
import { auth } from "../middleware/auth.js";
import { authorize } from "../middleware/roleMiddleware.js";


const route = express.Router()

route.post("/register", registerUser)
route.post("/login", loginUser)
route.get("/profile", auth, getProfile)


export default route
