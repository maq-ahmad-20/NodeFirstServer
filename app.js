

const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('I am in middle ware')
    next()
})
app.use((req, res, next) => {
    console.log('I am in next middle ware')
    res.send({ key1: "value" })
})

app.listen(3000)