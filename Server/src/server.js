import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./db/db.js";

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

import router from "./routers/auth.routers.js";

app.use('/api/auth', router)




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on the port ${ port }`);
})