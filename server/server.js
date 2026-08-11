const express = require("express")
const mongoose = require("mongoose")
const connect = require("./config/connectDB")
const productRoute = require("./router/product.routes.js")
const app = express()
const {err} = require("./middleware/error.js")
const {admin} = require("./middleware/role.js")
const cors = require("cors")
connect()

app.use(express.json())
app.use(admin)
app.use(cors({
    origin:"http://localhost:5173"
}))



app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "api is running"

    })

})

app.use("/api/product", productRoute)

app.use(err)


app.listen(5000, () => {

    console.log('server running on 5000');

})



// const cookieParser = require("cookie-parser")
// const express = require("express")

// const app = express()



// app.use(cookieParser)


// app.post("/login", async (req, res) => {

//     const refreshToken = 'abcd123'

//     const cookiePass = "acb123"

//     res.cookie(cookiePass, refreshToken,
//         {
//             httpOnly: true,
//             maxAge: 1000 * 60
//         }

//     )

//     res.json({
//         success: true,
//         message: "login successfully"
//     })

// })

// app.get("/cookie", (req, res) => {

//     console.log(req.cookies);

    
//     res.json({
//         success: true,
//         cookie: req.cookies
//     })
// })

//     app.post("logout", (req, res) => {

//         res.clearCookie('refreshToken');

//         res.json({
//             success: true,
//             message: 'Logged out'
//         });



// })



// app.listen(5000, () => {

//     console.log('server running on 5000');

// })