import mongoose from "mongoose"
import ProductModel from "../model/Product.js"


export const createProduct = async (req, res, next) => {

    try {

        const { name, price, stock, category } = req.body
        console.log(req.file);
        const image = req.file.filename;


        const product = await ProductModel.create({
            name,
            price,
            image,
            stock,
            category
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

        let { search, limit, page, filter, minPrice, maxPrice, sort } = req.query


        page = Number(page)
        limit = Number(limit)

        const productFilter = {}


        if (search) {

            productFilter.name = {

                $regex: search,
                $options: 'i'

            }

        }

        if (filter) {
            productFilter.category = filter
        }

        const products = await ProductModel.find(productFilter).limit(5).skip(1)

        res.status(201).json({
            success: true,
            data: products
        })

    }


    catch (err) {

        next(err)
    }
}


