

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-products', (req, res, next) => {

    res.send('<form action="/products" method = "POST" ><input type="text" name="product" placeholder="Enter the item"><input type="number" name="quantity" placeholder="Enter the quantity"><button type="submit">AddProduct</button></form>')

});

app.use('/products', (req, res, next) => {
    console.log('Enterded product : ' + req.body.product)
    console.log('Selected quantity : ' + req.body.quantity)

    res.redirect('/')
});


app.use('/', (req, res, next) => {

    res.send('<h1>I am at Home Page</h1>')
});

app.listen(3000)