const express = require('express');
const app = express();
const { urlencoded } = require('express');
const bodyParser = require('body-parser');

const { userRouter } = require('./routers/user');
const { categoryRouter } = require('./routers/category');
const { brandRouter } = require('./routers/item-brand');

app.use(express.json());
app.use(urlencoded({
    extended: true,
}));
app.use(bodyParser.json({
    type: 'application/json',
}));

app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/brand', brandRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is listening on http://0.0.0.0:3000');
});
