import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';

import productRoutes from './routes/products.routes.js'

import authRoutes from './routes/auth.routes.js'

import { error } from './middleware/error.js';
import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:5173',
}

const app = express()
connectDB();

app.use(cors())

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', productRoutes)
app.use('/', authRoutes)

app.use('*', (req, res, next)=>{
    res.json({
        mesage:'The requested resource is not found'
    })
})


app.use(error)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})