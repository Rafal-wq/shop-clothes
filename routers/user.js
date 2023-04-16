const { Router } = require('express');
const { UserRegistry } = require('../registry/user-registry');

const userRouter = Router();

userRouter
    .get('/users', async (req, res) => {
        const usersList = await UserRegistry.listAll();

        res.status(200).json(usersList);
    })
    .post('/', async (req, res) => {
        const { first_name, last_name, phone, email, street, city, zip_code } = req.body;
        const newUser = new UserRegistry({
            ...req.body,
        });
        const id = await newUser.insert();
        const resOk = {
            "isSuccess": true,
            id,
        }
        res.status(201).json(resOk);
    })
    .get('/users/:customer_id', async (req, res) => {
        const user = await UserRegistry.customerGetOne(req.params.customer_id);

        res.status(200).json(user);
    })
    .delete('/users/:customer_id', async (req, res) => {
        const deleteUser = await UserRegistry.delete(req.params.customer_id);

        res.status(200).json({
            "isSuccess": true,
            "id": req.params.customer_id,
        });
    })
    .patch('/users/:customer_id', async (req, res) => {
        const user = await UserRegistry.customerGetOne(req.params.customer_id);

        if (user === null) {
            throw new Error('No such user');
        }
        await user.update();
        res.status(200).json(user);
    });

module.exports = {
    userRouter,
}