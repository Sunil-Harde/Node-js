import {Product} from "../model/product.model.js"



export const createProduct = async (req, res) => {

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

        console.log(err);


        res.json({
            success: false,
            message: "internal server error"
        })

    }



}


export const getProducts = async (req, res) => {
    try {


        const product = await Product.find()


        res.json({
            success: true,
            message: "get all product successfully",
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

export const getOneProduct = async (req, res) => {
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




export const deleteProduct = async (req, res) => {
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



export const updateProduct = async (req, res) => {

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
