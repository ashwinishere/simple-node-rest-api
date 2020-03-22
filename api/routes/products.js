const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET Request maping to products'
    })
});
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price,

    }
    res.status(201).json({
        message: 'POST Request maping to products',
        createdProduct: product
    })
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `GET Request maping to product id ${id}`,
        id
    })
});
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `PATCH Request maping to product id ${id}`,
        id
    })
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `DELETE Request maping to product id ${id}`,
        id
    })
});
module.exports = router;