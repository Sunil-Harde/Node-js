
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

        const comparePassword = await bcrypt.compare(password, user.password)

        console.log(comparePassword)

        if (!comparePassword) {

            return res.status(400).json({
                success: false,
                message: "user password is wrong"
            })

        }

        const token = await jwt.sign(
            {
                _id: user._id,
                role: user.role
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({
            success: true,
            message: "login successfully",
            token,
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