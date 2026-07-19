import mongoose from "mongoose"
import ProductModel from "../model/Product.js"


export const createProduct = async (req, res) => {

    try {

        const { name, number } = req.body


        const product = await ProductModel.create({
            name,
            number
        })


        res.status(201).json({
            success: true,
            data: product
        })

    }


    catch (err) {
        res.status(500).json({
            success: false,
            message: "internal server error",

        })
    }

}






export const getProduct = async (req, res) => {

    try {


        const products = await ProductModel.find()

        res.status(201).json({
            success: true,
            data: products
        })

    }


    catch (err) {


        console.log(err.message)

        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}


