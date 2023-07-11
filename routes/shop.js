const express = require('express');

const router = express.Router();




router.get('/', (req, res, next) => {

    res.send('<h1>I am at Home Page</h1>')
});


module.exports = router;