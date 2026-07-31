export const roleAuth = (...role) => {

    return (req, res,next) => {

        let userRole = req.user.role

        if ( !role.includes( req.user.role)) {

            return res.status(401).json({
                success: false,
                message: "unauthorized persone"
            })

        }

        next()

    }
}