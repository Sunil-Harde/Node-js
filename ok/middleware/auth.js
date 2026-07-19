import jwt from "jsonwebtoken"



export const auth = async (req, res, next) => {

    try {

        const header = req.headers.authorization

        if (!header || header.startWith("Bearer ")) {
            return res.json({
                success: false,
                message: "token not exist or invalid token"
            })
        }

        const token = header.split(' ')[1]


        if (!token) {
            return res.json({
                success: false,
                message: "token not exist or invalid token"
            })
        }


        const decode = jwt.verify(token, process.env.Secret_Key)

        req.user = decode

        next()

    }



    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "internal server error"
        })


    }



}