import { validationResult } from "express-validator"


const validateRequest = (req, res, next) => {


    const err = validationResult(res)


    console.log(err.array());

    if (!err.isEmpty()) {

        return res.status(400).json({
            success: false,
            error: err.array()
        })

    }

    next()

}

export default validateRequest