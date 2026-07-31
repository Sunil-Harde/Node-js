import mongoose from "mongoose"

let productSchema = new mongoose.Schema({
    name: String,
    type: String,
    code: String,
})


export const Product = mongoose.model("Products", productSchema)

