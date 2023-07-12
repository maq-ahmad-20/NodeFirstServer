const express = require('express');
const router = express.Router();

const pageNotFoundController = require('../controller/pagenotfound')

router.use(pageNotFoundController.pageNotFound)

module.exports = router;