const express = require('express');
const app = express();
const { urlencoded } = require('express');
const { token, refreshToken } = require('./utils/jsonWebToken');

const { userRouter } = require('./routers/user');
const { categoryRouter } = require('./routers/category');
const { brandRouter } = require('./routers/item-brand');
const { workerRouter } = require('./routers/worker');
const { itemRouter } = require('./routers/item');
const { orderRouter } = require('./routers/order');
const { jwtRouter, tokenList} = require("./routers/jwt");

app.use(express.json());
app.use(urlencoded({
    extended: true,
}));

app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/brand', brandRouter);
app.use('/worker', workerRouter);
app.use('/item', itemRouter);
app.use('/order', orderRouter);
app.use('/api', jwtRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is listening on http://0.0.0.0:3000');
});
