import express from 'express';
import { addProduct, calorieTracker, dayInfo, registerDiary, removeProduct, searchProducts } from '../controllers/calorieTrackerControllers.js';
import { validateAuth } from '../controllers/authController.js';

const router = express.Router();

// POST /api/diary
router.post('/diary', calorieTracker);

//POST /api/register-diary
router.post('/register-diary', validateAuth, registerDiary );

//GET /api/search-products
router.get('/search-products', validateAuth, searchProducts);

//POST /api/add-product
router.post('/add-product', validateAuth, addProduct);

//POST /api/remove-product
router.post('/remove-product', validateAuth, removeProduct);

//GET /api/diary-day-info
router.get('/diary-day-info', validateAuth, dayInfo);

export default router