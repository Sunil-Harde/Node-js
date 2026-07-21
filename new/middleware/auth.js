import jwt from 'jsonwebtoken'
import User from "../model/User.js"

export const auth = async (req, res, next) => {

    try {

        const bearerHeader = req.headers.authorization


        if (!bearerHeader) {

            return res.json({
                success: false,
                message: "Access denied. No token exist"
            })
        }

        const token = bearerHeader.split(' ')[1]

        if (!token) {

            return res.json({
                success: false,
                message: "invalid token format"
            })

        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        console.log(verifyToken);

        req.user = verifyToken

        next()
    }

    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });

    }

}

