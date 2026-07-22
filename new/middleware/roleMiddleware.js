export const authorize = (...roles) => {

    return (req, res, next) => {

        const role =  "user"

        // req.user.role

        if (!roles.includes(role)) {
            return res.status(403).json({
                success: false,
                message: "Access Denied"
            });


        }

        next();

    }

}