const { Router} = require('express');
const { ItemRegistry } = require('../registry/items-registry');

const itemRouter = Router();

itemRouter
    .get('/items', async (req, res) => {
        const itemsList = await ItemRegistry.listAll();

        res.status(200).json(itemsList);
    })
    .post('/', async (req, res) => {
        const newItem = new ItemRegistry({
            ...req.body,
        });
        const id = await newItem.insert();
        res.status(201).json({
            "isSuccess": true,
            id,
        });
    })
    .get('/items/:item_id', async (req, res) => {
        const item = await ItemRegistry.itemGetOne(req.params.item_id);

        res.status(200).json(item);
    })
    .delete('/items/:item_id', async (req, res) => {
        await ItemRegistry.delete(req.params.item_id);

        res.status(200).json({
            "isSuccess": true,
            "id": req.params.item_id,
        });
    })
    .patch('/users/:item_id', async (req, res) => {

        const item = await ItemRegistry.itemGetOne(req.params.item_id);

        if (item === null) {
            throw new Error('No such item');
        }

        await item.update;
        res.status(200).json(item);
    });

module.exports = {
    itemRouter,
};
