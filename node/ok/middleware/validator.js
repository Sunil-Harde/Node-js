import { validationResult } from "express-validator"


export const validateRequest = (req, res, next) => {


    const err = validationResult(req)


    console.log(validationResult(req));
    console.log(err.array());
    console.log("true:- ",!err.array());

    if (!err.isEmpty()) {

        console.log("middleware if");
        
        return res.status(400).json({
            success: false,
            error: err.array()
        })

    }

    next()

}

