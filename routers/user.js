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
        res.status(201).json(id);
    });

module.exports = {
    userRouter,
}