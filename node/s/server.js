import dotenv from "dotenv"

dotenv.config()
// Packages

import express from "express"
import mongoose from "mongoose"

// 
import {connect} from "./config/connectDB.js"
import authRoute from "./router/auth.routes.js"
import productRoute from "./router/product.routes.js"
import userRoute from "./router/user.routes.js"


// Middleware 

import { errorHandler } from "./middleware/error.js"
import { auth } from "./middleware/auth.js"




const app = express()
connect()

app.use(express.json())

app.get("/", (req, res) => {
    
    res.json({
        success: true,
        message: "api is running"
        
    })
    
})


app.use("/api/user", authRoute)

app.use(auth)
app.use("/api/product", productRoute)
app.use("/api/user", userRoute)


app.use(errorHandler)


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