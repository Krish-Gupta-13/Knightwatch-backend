import express from "express"
import mongoose, { mongo } from "mongoose"
import router from "./routes/user.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import 'dotenv/config'


const app = express();
app.use(cookieParser());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use('/api', router);
const PORT = process.env.PORT || 5000

// connecting to mongodb
mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(PORT);
    console.log("Database connected! Listening to port 5000")
}).catch((err) => {
    console.log(err)
})



















// 3jplzAjKDutUCrJg
