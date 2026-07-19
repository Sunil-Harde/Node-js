import express from "express"
import { userRegister, userLogin } from "../controllers/user.controller.js"
import { validateRequest } from "../middleware/validator.js"
import { userValidator } from "../validation/user.validation.js"

const route = express.Router()

console.log("user Route");


route.post("/register", userValidator, validateRequest, userRegister)
route.post("/login", userLogin)


export default route