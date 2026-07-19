import express from "express"
import { createProduct, getProduct } from "../controllers/product.controller.js"
import createProductValidator from "../validation/product.validator.js"
import validateRequest from "../middleware/validetionMiddleware.js"
import { authorize } from "../middleware/roleMiddleware.js"


const router = express.Router()


router.post("/", createProductValidator, validateRequest, createProduct)
router.get("/",authorize("admin"), getProduct)


export default router
