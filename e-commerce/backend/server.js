import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import { connect } from "./config/db.js"

dotenv.config()

const app = express()

app.use(cors({
    origin:"",
    method:["post","get","put","delete"],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Pragma"
    ],
    credentials:true
}))

const PORT = process.env.URL || 5000


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})



app.use(express.json())


