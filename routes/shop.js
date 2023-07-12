const express = require('express');
const path = require('path');
const router = express.Router();

const shopController = require('../controller/shop')


router.get('/', shopController.displayShop);


module.exports = router;