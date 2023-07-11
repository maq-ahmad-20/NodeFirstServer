

const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contact = require('./routes/contactus')
const bodyParser = require('body-parser');
const success = require('./routes/success')


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use(contact)
app.use(success)


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pagenotfound.html'));
})


app.listen(3000)