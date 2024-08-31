
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
            const { search, sort, category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
            // Build the query object
        let query = {};
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }

        if (category) {
            query.category = category;
        }
        if (minPrice) {
            query.price = { ...query.price, $gte: minPrice };
        }
        if (maxPrice) {
            query.price = { ...query.price, $lte: maxPrice };
        }

        // Build the sort object
        let sortObj = {};
        if (sort) {
            const sortFields = sort.split(',').map(field => field.trim());
            sortFields.forEach(field => {
                const [key, order] = field.split(':');
                sortObj[key] = order === 'desc' ? -1 : 1;
            });
        }

        // Pagination
        const skip = (page - 1) * limit;

        // Execute the query
        const products = await Product.find(query)
            .sort(sortObj)
            .skip(skip)
            .limit(parseInt(limit));
            res.json({
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


