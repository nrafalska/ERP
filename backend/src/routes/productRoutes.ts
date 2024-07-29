import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

// Route to get all products
router.get('/', getProducts);

// Route to get a product by ID
router.get('/:id', getProductById);

// Route to create a new product
router.post('/', createProduct);

// Route to update a product
router.put('/:id', updateProduct);

// Route to delete a product
router.delete('/:id', deleteProduct);

export default router;
