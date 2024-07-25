import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';

import productRoutes from './routes/products.routes.js'
import { error } from './middleware/error.js';

const app = express()
connectDB();


app.use(bodyParser.json())

app.use('/', productRoutes)


app.use('*', (req, res, next)=>{
    res.json({
        mesage:'The requested resource is not found'
    })
})

app.use(error)




app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})