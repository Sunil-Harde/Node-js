const express = require("express")
const { createProduct, getProducts, getOneProduct, updateProduct, deleteProduct } = require("../controllers/product.controller")

const app = express()


const route = express.Router()


route.post("/", createProduct)
route.get("/", getProducts)
route.get("/:id", getOneProduct)
route.put("/:id", updateProduct)
route.delete("/:id", deleteProduct)

module.exports = route