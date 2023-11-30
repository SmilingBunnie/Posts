import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import compression from "compression"
import {connectDB} from "./db/connect"
import errorHandlerMiddleware from "./middleware/error-handler"
import "dotenv/config"
import env from "./validate/validate-env"
import router from './routes/post'



const app = express()
const port = env.PORT || 3000
const connectionString = env.MONGO_URI
connectDB(env.MONGO_URI)
.then(result => {
    console.log("Connected to DB")
    app.listen(port, (): void => {console.log(`Listening on port:${port}`)})
})


app.use(express.json())
app.set("trust proxy", 1)
app.use(cors)
app.use(helmet)
app.use(morgan('dev'))
app.use(compression)

app.use('/api', router)

app.use(errorHandlerMiddleware)
