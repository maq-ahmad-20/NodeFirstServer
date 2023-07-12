const rootDir = require('../util/path')
const path = require('path')
exports.displayOnSUccess = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'formsuccess.html'));

}