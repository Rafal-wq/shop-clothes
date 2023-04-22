const { Router} = require('express');
const { WorkersRegistry } = require('../registry/workers-registry');

const workerRouter = Router();

workerRouter
    .get('/workers', async (req, res) => {
        const workersList = await WorkersRegistry.listAll();

        res.status(200).json(workersList);
    })
    .post('/', async (req, res) => {
        const newWorker = new WorkersRegistry({
            ...req.body,
        });
        const id = await newWorker.insert();
        res.status(201).json({
            "isSuccess": true,
            id,
        });
    })
    .get('/workers/:worker_id', async (req, res) => {
        const worker = await WorkersRegistry.workerGetOne(req.params.worker_id);

        res.status(200).json(worker);
    })
    .delete('/workers/:worker_id', async (req, res) => {
        await WorkersRegistry.delete(req.params.worker_id);

        res.status(200).json({
            "isSuccess": true,
            "id": req.params.worker_id,
        });
    })
    .patch('/workers/:worker_id', async (req, res) => {

        const worker = await WorkersRegistry.workerGetOne(req.params.worker_id);

        if (worker === null) {
            throw new Error('No such worker');
        }

        await worker.update;
        res.status(200).json(worker);
    });

module.exports = {
    workerRouter,
};