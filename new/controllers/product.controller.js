import mongoose from "mongoose"
import ProductModel from "../model/Product.js"


export const createProduct = async (req, res, next) => {

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
        next(err)
    }

}






export const getProduct = async (req, res, next) => {

    try {


        const products = await ProductModel.find()

        res.status(201).json({
            success: true,
            data: products
        })

    }


    catch (err) {

        next(err)
    }
}


