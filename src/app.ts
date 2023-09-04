import express from "express"

import auth from "./middleware/auth"
import userLogRouter from "./routes/userLog.routes"
import linkRouter from "./routes/links.routes"
import profileRouter from "./routes/profile.routes"

const app = express()

app.use(express.json())

app.use("/", userLogRouter)
app.use("/links", auth, linkRouter )
app.use("/profile", auth, profileRouter )

export default app

