import express, {Express, Request, Response} from 'express'
import routes from './routes'
const dotenv = require("dotenv")

dotenv.config()

const app : Express = express()
const port = process.env.PORT

console.log("PORT", port)

app.use("/users", routes.UserRouter)

app.listen(port , () => {
    console.log(`[Server]: Server is running at http://localhost:${port}`)
})