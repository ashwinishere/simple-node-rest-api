const express = require('express');
const router = express.Router();
const Product =  require('./models/products');
const mongoose = require('mongoose');
router.get('/', (req, res, next) => {
Product.find().exec().then(doc => {
    res.status(200).json(doc);
}).catch(err => {
    res.status(500).json({error:err})
});
});
router.post('/', (req, res, next) => {
     const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
        });
        product.save().then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        });
    res.status(201).json({
        message: 'POST Request maping to products',
        createdProduct: product
    })
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.findById(id).exec().then((doc) => {
        doc ? res.status(200).json(doc):res.status(404).json({error: 'Product not found'});
    })
    .catch((err) => {
        res.status(500).json({
            error: err
        });
    });

});
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateObj = {};
    for (const ops of req.body) {
        updateObj[ops.propName] = ops.value
    }
    Product.update({_id: id}, {$set: updateObj}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => res.status(500).json({error:err}));
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Product.remove({_id: id}).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json({error: err});
    })
});
module.exports = router;