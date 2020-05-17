require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:'+ process.env.DB_PASSWORD +'@test-cluster-kidke.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req,res,next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
if (req.method === 'OPTIONS') {
res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
res.status(200).json({});
}
next();
});

// Routes List
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use((req, res, next) => {
   const error = new Error('URL not found');
    error.status = 404;
    next(error);
});
app.use((error,req,res,next) => {
res.status(error.status || 500);
res.json({
    error: error.message
});
}) ;
module.exports = app;