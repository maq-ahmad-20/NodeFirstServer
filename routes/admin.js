const express = require('express');

const router = express.Router();

router.get('/add-products', (req, res, next) => {

    res.send('<form action="/admin/products" method = "POST" ><input type="text" name="product" placeholder="Enter the item"><input type="number" name="quantity" placeholder="Enter the quantity"><button type="submit">AddProduct</button></form>')

});

router.post('/products', (req, res, next) => {
    console.log('Enterded product : ' + req.body.product)
    console.log('Selected quantity : ' + req.body.quantity)

    res.redirect('/shop/')
});




module.exports = router;