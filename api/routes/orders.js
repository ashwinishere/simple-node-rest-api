const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET Request maping to orders'
    })
});
router.post('/', (req, res, next) => {
    const order = {
        id: req.body.id,
        quantity: req.body.quantity,

    }
    res.status(201).json({
        message: 'POST Request maping to orders',
        createdOrder: order
    })
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `GET Request maping to order id ${id}`,
        id
    })
});
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `PATCH Request maping to order id ${id}`,
        id
    })
});
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: `DELETE Request maping to order id ${id}`,
        id
    })
});
module.exports = router;