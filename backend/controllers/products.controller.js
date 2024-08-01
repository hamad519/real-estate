
import {Product} from "../models/product.model.js"


export default class ProductController{
    
    async createProduct(req, res, next) {
        const product = req.body
        try {
            await Product.create(product);
            res.json({
                message: "Product created successfully",
            })
        } catch (error) {
            // next(new Error(error))
            next(error)
        }
    }
    
    async getAllProducts(req, res, next) {
        try {
            const products = await Product.find()
            res.json({
                message: "getAllProducts called", 
                products       
            })
        } catch (error) {
            next(error);
        } 
    }
    
    async getProductById(req, res, next){
       const {id} = req.query
       try {
        const product = await Product.findById(id)
        res.json({
            message: "getProductById clled",
            product
        })
       } catch (error) {
        next(error);
       }
        
    }
    
    async updateProduct (req, res, next) {
        const body = req.body;
        const {id} = req.query;
        try {
            const product = await Product.findByIdAndUpdate(id, body)
            res.json({
                message: "product updated successfully"
            })
        } catch (error) {
            next(error);
        }
    }
    
    async deleteProduct (req, res, next) {
        const {id} = req.query;
        try {
            const product = await Product.findByIdAndDelete(id)
            res.json({
                message: "product Deleted successfully"
            })
        } catch (error) {
            next(error);
        }
    }
}


