const express = require('express');
const path = require('path')
const router = express.Router();
const contactUsController = require('../controller/contactus')

router.get('/contactus', contactUsController.displayContactUspage);


router.post('/submitFormSuccess', contactUsController.displayOnSubmitForm)

module.exports = router;