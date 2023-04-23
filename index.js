const express = require('express');
const app = express();
const { urlencoded } = require('express');

const { userRouter } = require('./routers/user');
const { categoryRouter } = require('./routers/category');
const { brandRouter } = require('./routers/item-brand');
const { workerRouter } = require('./routers/worker');
const { itemRouter } = require('./routers/item');
const { orderRouter } = require('./routers/order');

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


app.listen(3000, '0.0.0.0', () => {
    console.log('Server is listening on http://0.0.0.0:3000');
});
