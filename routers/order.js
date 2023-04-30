const { Router} = require('express');
const { OrderRegistry } = require('../registry/order-registry');

const orderRouter = Router();

orderRouter
    .get('/orders', async (req, res) => {
        const ordersList = await OrderRegistry.listAll();

        res.status(200).json(ordersList);
    })
    .post('/', async (req, res) => {
        const newOrder = new OrderRegistry({
            ...req.body,
        });
        const id = await newOrder.insert();
        res.status(200).json( id );
    })
    .get('/orders/:order_id', async (req, res) => {
        const order = await OrderRegistry.orderGetOne(req.params.order_id);

        res.status(200).json(order);
    })
    .delete('/orders/:order_id', async (req, res) => {
        await OrderRegistry.delete(req.params.order_id);

        res.status(200).json({
            "isSuccess": true,
            "id": req.params.order_id,
        });
    })
    .patch('/orders/:order_id', async (req, res) => {

        const order = await OrderRegistry.orderGetOne(req.params.order_id);

        if (order === null) {
            throw new Error('No such order');
        }

        await order.update;
        res.status(200).json(order);
    });

module.exports = {
    orderRouter,
};