const mongoose = require("mongoose")

let productSchema = new mongoose.Schema({
    name: String,
    type: String,
    code: String,
})


const Product = mongoose.model("Products", productSchema)

module.exports = Product