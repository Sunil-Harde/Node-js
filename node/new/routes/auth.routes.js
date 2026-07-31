import express from "express"

import { registerUser, loginUser } from "../controllers/auth.controller.js"
import { auth } from "../middleware/auth.js";
import { authorize } from "../middleware/roleMiddleware.js";


const route = express.Router()

route.post("/register", registerUser)
route.post("/login", loginUser)


export default route
