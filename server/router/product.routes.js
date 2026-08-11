const express = require("express")
const { createProduct, getProducts, getOneProduct, updateProduct, deleteProduct } = require("../controllers/product.controller")

const app = express()


const route = express.Router()

// route.use()

function admin(req, res, next) {

    console.log("Route Middleware is Running")

    let role = "user"

    if (role !== "admin") {
        return res.json({
            success: false,
            message: "pls login as admin"
        })
    }



    next()

}

route.post("/", admin, createProduct)
route.get("/", getProducts)
route.get("/:id", getOneProduct)
route.put("/:id", admin, updateProduct)
route.delete("/:id", admin, deleteProduct)

module.exports = route