const express = require('express');
const path = require('path')
const router = express.Router();
const productContoller = require('../controller/products')
router.get('/add-products', productContoller.getAddProducts);

router.post('/products', productContoller.displayEnteredProductsOnCOnsole);




module.exports = router;