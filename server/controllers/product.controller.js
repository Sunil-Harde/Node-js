const Product = require("../model/product.model.js")



const createProduct = async (req, res, next) => {

    try {

        const { name, type, code } = req.body

        if (!name || !type || !code) {

            return res.json({
                success: false,
                message: "all required"
            })

        }

        const product = await Product.create({
            name,
            type,
            code
        })


        res.json({
            success: true,
            message: "product created successfully",
            data: product
        })

    }

    catch (err) {

        next(err)

    }



}


const getProducts = async (req, res, next) => {
    try {


        const product = await Product.find()


        res.json({
            success: true,
            message: "get all product successfully",
            data: product
        })


    }


    catch (err) {

        next(err)

    }
}

const getOneProduct = async (req, res) => {
    try {

        const { id } = req.params

        const product = await Product.findById(id)


        if (!product) {
            return res.json({
                success: false,
                message: 'product not found'
            })
        }


        res.json({
            success: true,
            message: "get product successfully",
            data: product
        })


    }


    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "internal server error"
        })


    }
}




const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params

        const product = await Product.findByIdAndDelete(id)



        if (!product) {
            return res.json({
                success: false,
                message: 'product not found'
            })
        }

        res.json({
            success: true,
            message: "product deleted successfully",
            data: product
        })


    }


    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "internal server error"
        })


    }
}



const updateProduct = async (req, res) => {

    try {

        const { id } = req.params
        const { name, type, code } = req.body

        const product = await Product.findByIdAndUpdate(

            id,
            { name, type, code },
            // { new: true }
            { returnDocument: 'after' }


        )



        if (!product) {
            return res.json({
                success: false,
                message: 'product not found'
            })
        }

        res.json({
            success: true,
            message: "product deleted successfully",
            data: product
        })


    }


    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "internal server error"
        })


    }
}

module.exports = { createProduct, getProducts, getOneProduct, updateProduct, deleteProduct }