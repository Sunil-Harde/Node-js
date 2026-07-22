import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
    try {
        const { name, email, password, number, role } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            number,
            password: hashedPassword,
            role
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                number: user.number,
                role: user.role
            }
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                number: user.number,
                role: user.role,
            }
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const getProfile = async (req, res) => {


    try {

        const user = await User.findById(req.user.id).select("-password")
        console.log("getUser :- ", req.user);


        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });


    }


    catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "internal server error"
        })


    }


} 
