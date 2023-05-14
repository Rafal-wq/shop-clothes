const express = require("express");
const { token, refreshToken } = require('../utils/jsonWebToken');

const jwtRouter = express.Router();

const tokenList = {};

jwtRouter
    .get('/', (req, res) => {
    res.send('App works correctly');
})
    .post('/login', (req, res) => {
    const postData = req.body;
    const user = {
        "email": postData.email,
        "name": postData.name,
    };
    const response = {
        "status": "Logged in",
        "token": token,
        "refreshToken": refreshToken,
    };
    tokenList[refreshToken] = response
    res.status(200).json(response);
});

module.exports = {
    jwtRouter,
}