import dotenv from "dotenv"
import express from "express"
import cors from "cors"
const app = express()

import rateLimiter from "express-rate-limit"
dotenv.config()

import connect from "./config/connectDB.js"
import { auth } from "./middleware/auth.js"

import productRoutes from "./routes/product.routes.js"

import userRoutes from "./routes/auth.routes.js"
import errorHandler  from "./middleware/errorHandler.js"

connect()



app.use(express.json())
app.use("/uploads", express.static("uploads"));

app.use(cors({
    origin:"http://localhost:5173"
}))



app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "practice api production"
    })
})


app.use("/api/user", userRoutes)


// app.use(auth)
app.use("/api/product", productRoutes)

app.use(errorHandler);

const PORT = process.env.PORT || 6000


app.listen(process.env.PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})