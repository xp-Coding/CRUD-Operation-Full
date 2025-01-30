import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js"
import { router } from "./Router/userRouter.js"

const app = express()
app.use(express.json())
dotenv.config()
const port = process.env.PORT;


app.use(cors())
app.use("/api", router)

try {
    connectDb()
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    })
} catch (error) {
    
}



