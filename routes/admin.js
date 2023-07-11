const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir = require('../util/path')
router.get('/add-products', (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/products', (req, res, next) => {
    console.log('Enterded product : ' + req.body.product)
    console.log('Selected quantity : ' + req.body.quantity)

    res.redirect('/shop/')
});




module.exports = router;