import express from 'express'
import ProductController from '../controllers/products.controller.js'
import { isUserAuthenticated, isAuthorizedUser } from '../middleware/auth.js'
const router = express.Router()

const product = new ProductController()

router.route('/products/new').post(product.createProduct)
router.route('/products/all').get(isUserAuthenticated, isAuthorizedUser('admin', 'moderator'), product.getAllProducts)
router.route('/products/single').get(product.getProductById)
router.route('/products/update').put(product.updateProduct)
router.route('/products/delete').delete(isAuthorizedUser('admin'), product.deleteProduct)





export default router




