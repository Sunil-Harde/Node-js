import jwt from "jsonwebtoken"

export const auth = async (req, res,next) => {

    try {

        const headers = req.headers.authorization

        if (!headers) {

            return res.status(401).json({
                success: false,
                message: "pls login"
            })

        }

        console.log(headers.startsWith("Bearer "));
        

        if (!headers.startsWith("Bearer ")) {

            return res.status(401).json({
                success: false,
                message: "token not present or invalid token"
            })

        }


        const token = headers.split(' ')[1]

        if (!token) {

            return res.json({
                success: false,
                message: "token not exist or invalid token"
            })

        }

        const decode = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decode

        next()

    }

    catch (err) {

        console.log(err);

        if(err.name === 'jsonWebTokenError'){

            return res.status(401).json({
                success:false,
                message:"invalid token"
            })

        }


        res.status(500).json({
            success: false,
            message: "internal server error"
        })


    }


}

