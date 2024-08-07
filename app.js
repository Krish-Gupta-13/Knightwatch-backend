import express from "express"
import mongoose, { mongo } from "mongoose"
import userRouter from "./routes/user.route.js"
import profileRouter from './routes/profile.route.js'
import cookieParser from "cookie-parser"
import cors from "cors"
import 'dotenv/config'
const PORT = process.env.PORT || 5000

const app = express();  
app.use(cookieParser());
app.use(cors({credentials:true, origin:process.env.BASE_URL}));
// app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use('/api', userRouter); 
app.use('/api', profileRouter);   


// connecting to mongodb
mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(PORT);
    console.log("Database connected! Listening to port 5000")
}).catch((err) => {
    console.log(err)
})



















// 3jplzAjKDutUCrJg
