const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const redis = require('redis');
const client = redis.createClient();

app.use(bodyParser.json());
app.listen(3000, '0.0.0.0', () => {
    console.log('Server is listening at http://0.0.0.0:3000');
});
