
import { User } from "../model/User.js"
import bcrypt from "bcrypt"
import crypto from "crypto"
import jwt from "jsonwebtoken"
import { sendMail } from "../utils/sendMail.js"



export const register = async (req, res, next) => {

    try {

        const { name, number, email, password } = req.body


        const hasEmail = await User.findOne({ email })

        if (hasEmail) {
            return res.status(404).json({
                success: false,
                message: "Email already exist"
            })
        }


        const hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            number,
            email,
            password: hashPassword
        })


        res.status(201).json({
            success: true,
            message: "user created successfully",
            data: {
                id: user._id,
                name: user.name
            }
        })

    }

    catch (err) {
        next(err)
    }
}



export const login = async (req, res, next) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        console.log(user)

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "user not found"
            })

        }

        const isMatch = await bcrypt.compare(password, user.password)

        console.log(isMatch)

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message: "user password is wrong"
            })

        }

        // const token = await jwt.sign(
        //     {
        //         _id: user._id,
        //         role: user.role
        //     },
        //     process.env.JWT_SECRET_KEY,
        //     {
        //         expiresIn: "1d"
        //     }
        // )


        const accessToken = jwt.sign(
            {
                _id: user._id,
                role: user.role

            },

            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '15m'
            }
        )

        const refreshToken = jwt.sign(
            {
                userId: user._id
            },

            process.env.REFRESH_TOKEN_SECRET,

            {
                expiresIn: '7d'
            }

        )

        user.refreshToken = refreshToken;

        await user.save()

        res.cookie(
            "refreshToken",

            refreshToken,

            {
                httpOnly: true,
                secure: false,
                sameSite: 'strict',
                maxAge: 1000 * 60 * 60 * 24 * 7
            }
        )


        res.status(200).json({
            success: true,
            message: "login successfully",
            // token,
            accessToken,
            user: {
                _id: user._id,
                role: user.role
            }
        })

    }


    catch (err) {
        next(err)
    }

}


export const refreshToken = async (req, res, next) => {

    try {

        const token = req.cookies.refreshToken;

        if (!token) {

            return res.status(401).json({

                success: false,
                message: "refresh token missing"

            })
        }

        const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)

        const user = await User.findById(decode.userId)

        if (!user || user.refreshToken !== token) {

            return res.status(401).json({
                success: false,
                message: "Invalid refresh token"
            })

        }

        const newAccessToken = jwt.sing(
            {
                userId: user._id,
                role: user.role
            },

            process.env.ACCESS_TOKEN_SECRET,

            {
                expiresIn: '15m'
            }
        )

        res.status(200).json({
            success: true,
            accessToken: newAccessToken
        })

    }


    catch (err) {
        next(err)
    }


}


export const logoutUser = async (req, res, next) => {

    try {

        const token = req.cookies.refreshToken;

        if (token) {

            const decode = jwt.verify(
                token,
                process.env.REFRESH_TOKEN_SECRET
            )

            await User.findByIdAndUpdate(
                decode.userId,
                {
                    refreshToken: null
                }
            )
        }

        res.clearCookie('refreshToken')

        res.status(200).json({
            success: true,
            message: 'logged out successfully'
        })


    }

    catch (err) {
        next(err)
    }

}


export const forgotPassword = async (req, res, next) => {


    try {

        const { email } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        console.log(user.resetPasswordToken)
        const resetToken = crypto.randomBytes(32).toString("hex")


        // Hash token before storing
        // const hashedToken = crypto
        //     .createHash("sha256")
        //     .update(resetToken)
        //     .digest("hex");



        user.resetPasswordToken = resetToken //hashedToken
        user.resetPasswordExpire = Date.now() + 15 * 60 * 1000

        await user.save()

        const resetUrl = `http://localhost:5173/reset-password/${resetToken}`

        const message = `
        
        pls click on this link to reset password

        click me:${resetUrl}

        you have only 15 min 

        `

        await sendMail({
            email: user.email,
            subject: "reset password",
            message
        })

        res.status(200).json({

            success: true,

            message: 'Password reset link generated pls check you mail',

            resetUrl

        });

    }


    catch (err) {
        next(err)
    }

}



export const resetPassword = async (req, res, next) => {

    try {


        const { token } = req.params
        const { password } = req.body


        // Hash incoming token
        // const hashedToken = crypto
        //     .createHash("sha256")
        //     .update(token)
        //     .digest("hex");


        const user = await User.findOne({
            resetPasswordToken: token,  //hashedToken
            resetPasswordExpire: { $gt: Date.now() }
        })

        console.log(token);
        console.log(user);


        if (!user) {
            return res.status(400).json({
                success: false,
                message: "invalid or expired reset token"
            })

        }

        const hashPassword = await bcrypt.hash(password, 10)

        user.password = hashPassword

        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save()

        res.status(200).json({
            success: true,
            message: 'password reset successfully'
        })

    }

    catch (err) {
        next(err)
    }
}