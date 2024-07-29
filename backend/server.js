import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser';
import { connectDB } from './config/db.js';

import productRoutes from './routes/products.routes.js'

const app = express()
connectDB();


app.use(bodyParser.json())

app.use('/', productRoutes)
//thisfsdflkddfsdfdfkls
//adkakkkdfksdk



//aasdhkaskdkajskdakjsdkjasjkdjkashdjkhasjkdh


app.use('*', (req, res, next)=>{
    res.json({
        mesage:'The requested resource is not found'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err || 'something went'
    })
})




app.listen(process.env.PORT, ()=>{
    console.log('Server is running');
})