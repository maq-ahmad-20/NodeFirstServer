const rootDir = require('../util/path')
const path = require('path')
module.exports.displayShop = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
};