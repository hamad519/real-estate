import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a category name'],
        unique: [true, 'Category name must be unique'],
        trim: true
    },
    slug: {
        type: String,
        unique: [true, 'Category name must be unique'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Category = mongoose.model('Category', categorySchema);
