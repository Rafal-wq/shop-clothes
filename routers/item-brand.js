const { Router} = require('express');
const { BrandRegistry } = require('../registry/item-brand-registry');

const brandRouter = Router();

brandRouter
    .get('/brands', async (req, res) => {
        const brandList = await BrandRegistry.listAll();

        res.status(200).json(brandList);
    })
    .post('/', async (req, res) => {
        const newBrand = new BrandRegistry({
            ...req.body,
        });
        const id = await newBrand.insert();
        res.status(200).json( id );
    })
    .get('/brands/:brand_id', async (req, res) => {
        const brand = await BrandRegistry.brandGetOne(req.params.brand_id);

        res.status(200).json(brand);
    })
    .delete('/brands/:brand_id', async (req, res) => {
        await BrandRegistry.delete(req.params.brand_id);

        res.status(200).json({
            "isSuccess": true,
            "id": req.params.brand_id,
        });
    })
    .patch('/brands/:brand_id', async (req, res) => {

        const brand = await BrandRegistry.brandGetOne(req.params.brand_id);

        if (brand === null) {
            throw new Error('No such brand');
        }

        await brand.update;
        res.status(200).json(brand);
    });

module.exports = {
    brandRouter,
};
