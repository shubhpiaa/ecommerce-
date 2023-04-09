const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan =require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
require('dotenv/config');

const api = process.env.API_URL;

//http://localhost:8000/api/v1/products
app.get(`${api}/product`, (req, res) =>{
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url',
    }
    res.send(product);
})

app.post(`${api}/product`, (req, res) =>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

mongoose.connect('mongodb+srv://shubham123:12345s@cluster0.zqxg2t0.mongodb.net/eshop-database',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'eshop-database'
}).then(console.log('Database Connection is ready...'))

app.listen(8000, ()=>{
    console.log(api);
    console.log('sever is running http://localhost:8000');
})