const express = require('express');
const path = require('path')
const router = express.Router();

const successController = require('../controller/success')



router.get('/success', successController.displayOnSUccess);














module.exports = router;