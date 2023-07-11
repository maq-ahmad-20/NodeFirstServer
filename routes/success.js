const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir = require('../util/path')



router.get('/success', (req, res, next) => {

    res.send('<h1>FOrmSubimitedSuccessfully</h1>');

});














module.exports = router;