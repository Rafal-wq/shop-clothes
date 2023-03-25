const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const jwtSecret = "example-secret";

app.listen(port, () => {
    console.log(`Server listening at http://0.0.0.0:${port}`);
});
