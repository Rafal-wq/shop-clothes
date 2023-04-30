const { Router} = require('express');
const { CategoryRegistry } = require('../registry/category-registry');

const categoryRouter = Router();

categoryRouter
    .get('/categories', async (req, res) => {
        const categoryList = await CategoryRegistry.listAll();

        res.status(200).json(categoryList);
    })
    .post('/', async (req, res) => {
        const newCategory = new CategoryRegistry({
            ...req.body,
        });
        const id = await newCategory.insert();
        res.status(200).json(id);
    })
    .get('/categories/:category_id', async (req, res) => {
        const category = await CategoryRegistry.categoryGetOne(req.params.category_id);

        res.status(200).json(category);
    })
    .delete('/categories/:category_id', async (req, res) => {
        await CategoryRegistry.delete(req.params.category_id);

        res.status(200).json({
            "isSuccess": true,
            "id": req.params.category_id,
        });
    })
    .patch('/categories/:category_id', async (req, res) => {

        const category = await CategoryRegistry.categoryGetOne(req.params.category_id);

        if (category === null) {
            throw new Error('No such category');
        }

        await category.update;
        res.status(200).json(category);
    });

module.exports = {
    categoryRouter,
};
