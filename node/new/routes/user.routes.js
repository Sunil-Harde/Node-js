import express from "express"

import { getProfile } from "../controllers/user.controller.js"
import { auth } from "../middleware/auth.js";
import { authorize } from "../middleware/roleMiddleware.js";


const route = express.Router()

route.get("/profile", auth, getProfile)


export default route
