import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    name:String,
    number:Number,

})


const ProductModel = new mongoose.model("product", productSchema)


export default ProductModel