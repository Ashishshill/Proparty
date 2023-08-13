import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import  userRoute  from "../backend/routes/userRoute.js"
import  clientRoutes  from "../backend/routes/clientRoutes.js"
import  generalRoutes  from "../backend/routes/generalRoutes.js"
import  managmentRoutes  from "../backend/routes/managmentRoutes.js"
import  salesRoutes  from "../backend/routes/salesRoutes.js"

// CONFIGURATION
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/managment", managmentRoutes)
app.use("/sales", salesRoutes)

app.use('/api/user', userRoute)

// MONGOES SETUP
const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(()=> {
    app.listen(port, ()=> console.log(`Server is runing ${port}`))
}).catch((error) => console.log(`${error} did not connect`))


app.get("/",  (req, res) => res.send('Server is runing'))



