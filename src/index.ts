import * as dotenv from "dotenv"
import mongoose from "mongoose"

import app from "./app"

dotenv.config()
const port = process.env.PORT || 3000

async function startServer(){
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) { 
        console.log(error);
    }
}

startServer() 