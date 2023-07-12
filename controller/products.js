const rootDir = require('../util/path')
const path = require('path');
module.exports.getAddProducts = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

module.exports.displayEnteredProductsOnCOnsole = (req, res, next) => {
    console.log('Enterded product : ' + req.body.product)
    console.log('Selected quantity : ' + req.body.quantity)

    res.redirect('/shop/')
}