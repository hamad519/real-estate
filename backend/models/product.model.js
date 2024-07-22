import mongoose from 'mongoose';
const { Schema } = mongoose;


const productSchema = new Schema({
    title: {
        type:String,
        required:[true, 'Please provide the title'],
        minLength:[5, 'Title must have atleast 5 characters in length'],
        maxLength:[50, 'Title must have less than 50 characters in length'],
    },
    price: {
        type:Number,
        min:[100, 'Please set 100 or more as minimum price'],
        max:[10000, 'Please set 10000 or less as mx price'],
        required:[true, 'Please provide the price']
    },
    description: String,
    category: {
        type:String,
        enum:['Men Fashion', 'Watches']
    },
})


export const Product = mongoose.model('product', productSchema);