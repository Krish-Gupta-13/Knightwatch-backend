import express from "express"
import mongoose, { mongo } from "mongoose"
import router from "./routes/user.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import 'dotenv/config'


const app = express();
app.use(cookieParser());
// app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cors({credentials:true, origin:process.env.BASE_URL}));
app.use(express.json());
app.use('/api', router);
const PORT = process.env.PORT || 5000

// connecting to mongodb
mongoose.connect('mongodb+srv://krishgupta:3jplzAjKDutUCrJg@cluster0.eje9wku.mongodb.net/').then(() => {
    app.listen(PORT);
    console.log("Database connected! Listening to port 5000")
}).catch((err) => {
    console.log(err)
})



















// 3jplzAjKDutUCrJg
