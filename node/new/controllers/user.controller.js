import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";





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
