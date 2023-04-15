const express = require('express');
const app = express();
const { urlencoded } = require('express');

const { userRouter } = require('./routers/user');

app.use(express.json());
app.use(urlencoded({
    extended: true,
}));

app.use("/user", userRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is listening on http://0.0.0.0:3000');
});
