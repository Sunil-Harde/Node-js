import jwt from "jsonwebtoken"

export const auth = async (req, res,next) => {

    try {

        const headers = req.headers.authorization

        if (!headers) {

            return res.status(401).json({
                success: false,
                message: "'No token provided"
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

        // const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        console.log("decode :", decode);
        
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

