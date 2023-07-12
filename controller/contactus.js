const rootDir = require('../util/path')
const path = require('path')
exports.displayContactUspage = (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

exports.displayOnSubmitForm = (req, res, next) => {

    res.redirect('/success/')
}