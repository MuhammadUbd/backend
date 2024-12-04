import express from "express";
import dotenv from "dotenv"
// import { comments } from "./comments.js";
import productRoutes from "./routes/ProdRoute.js";

const app = express()
dotenv.config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.status(200).send("Welcome to backend")
})


app.use('/product', productRoutes)

app.listen(PORT, () => {
    console.log(`Server is Runing ${PORT}`)
})
    // app.get('/profile', (req, res) => {
    //     res.status(200).send("Welcome to Profile")
    // })
    
    // app.get('/comments', (req, res) => {
    //     res.status(200).send({status: 200, message: "You're Logged in", data: comments})
    // })