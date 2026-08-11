import express from "express"
import { createProduct, getProduct } from "../controllers/product.controller.js"
import createProductValidator from "../validation/product.validator.js"
import validateRequest from "../middleware/validetionMiddleware.js"
import { authorize } from "../middleware/roleMiddleware.js"
import { upload } from "../middleware/upload.js"



const router = express.Router()


router.post("/", createProductValidator, validateRequest, upload.single("image"), createProduct)
// router.get("/",authorize("admin", "user"), getProduct)
router.get("/", getProduct)


export default router
