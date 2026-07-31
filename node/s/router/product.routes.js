import express from "express"
import { createProduct, getProducts, getOneProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js"
import { roleAuth } from "../middleware/roleAuthMiddleware.js"

const app = express()


const route = express.Router()


route.post("/", createProduct)
route.get("/", roleAuth("admin","manager","user"), getProducts)
route.get("/:id", getOneProduct)
route.put("/:id", updateProduct)
route.delete("/:id", deleteProduct)


export default route