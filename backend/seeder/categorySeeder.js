import mongoose from 'mongoose';
import { Category } from '../models/category.js';
import { categories } from './data.js';

const seedCategories = async() => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/e-commerce-b14');

    await Category.deleteMany();
    console.log('Category are deleted');

    await Category.insertMany(categories);
    console.log('All Category are added.');

    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
}

seedCategories();