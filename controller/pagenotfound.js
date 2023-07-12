const path = require('path')

module.exports.pageNotFound = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', 'pagenotfound.html'));
};

