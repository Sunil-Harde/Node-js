import mongoose from "mongoose"
import ProductModel from "../model/Product.js"


export const createProduct = async (req, res, next) => {

    try {

        const { name, price } = req.body
        console.log(req.file);
        const image = req.file.filename;




        const product = await ProductModel.create({
            name,
            price,
            image
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


