

const express = require('express');
const path = require('path');
//const adminRoutes = require('./routes/admin')
const adminRoutes = require(path.join(__dirname, 'routes', 'admin.js'))
const shopRoutes = require('./routes/shop')
const contact = require('./routes/contactus')
const bodyParser = require('body-parser');
const success = require('./routes/success')
const pagenotfound = require('./routes/pageNotFound')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use(contact)
app.use(success)
app.use(pagenotfound)





app.listen(4000)