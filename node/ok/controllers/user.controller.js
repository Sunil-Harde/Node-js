import User from "../model/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const userRegister = async (req, res) => {

    try {

        const { name, password, number, email } = req.body


        const emailExist = await User.findOne({
            email,
        })


        if (emailExist) {
            return res.json({
                success: false,
                message: "email already exist"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)


        const user = await User.create({
            name,
            email,
            password: hashPassword,
            number
        })

        res.status(200).json({
            success: true,
            message: "user create successfully",
            user: {
                id: user._id,
                name: user.name
            }
        })



    }


    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "internal server error"
        })


    }

}

export const userLogin = async (req, res) => {

    try {

        const { password, email } = req.body


        const user = await User.findOne({
            email,
        })


        if (!user) {
            return res.json({
                success: false,
                message: "user not found"
            })
        }

        const userPassword = await bcrypt.compare(password, user.password)

        if (!userPassword) {
            return res.json({
                success: false,
                message: "Password is inCorrect"
            })
        }


        const token = await jwt.sign(
            {
                id: user._id
            },
            process.env.Secret_Key,
            {
                expiresIn: "1h"
            }
        )

        res.status(200).json({
            success: true,
            message: "user successfully Login",
            token,
            user: {
                id: user._id,
                name: user.name
            }
        })



    }


    catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "internal server error"
        })


    }

}

