
function admin(req, res, next) {

    console.log("Route Middleware is Running")

    let role = "admin"

    if (role !== "admin") {
        return res.json({
            success: false,
            message: "pls login as admin"
        })
    }



    next()

}


module.exports= {admin}