//require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.error("ERROR: ", err)
    throw err
})


/*
import express from "express"
const app = express()

;( async () => {
    try {
        await mongoose.env(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on( "error",(error) => {
            console.log("ERROR : ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
} )()
*/