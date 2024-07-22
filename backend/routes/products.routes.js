import express from 'express'
import ProductController from '../controllers/products.controller.js'

const router = express.Router()

const product = new ProductController()

router.route('/products/new').post(product.createProduct)
router.route('/products/all').get(product.getAllProducts)
router.route('/products/single').get(product.getProductById)
router.route('/products/update').put(product.updateProduct)
router.route('/products/delete').delete(product.deleteProduct)





export default router




