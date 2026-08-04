import { User } from "../model/User.js"



export const userProfile = async (req, res, next) => {

    try {

        const user = await User.findById(req.user._id).select("-password")
        console.log(user);
        // console.log(req.user);


        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "user login successfully",
            data: user
        })

    }

    catch (err) {
        next(err)
    }



}