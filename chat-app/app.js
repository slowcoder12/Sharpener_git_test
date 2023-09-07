const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));

const loginRoute = require('./routes/login');
const messageRoute = require('./routes/message');

app.use('/login', loginRoute);
app.use('/', messageRoute);



app.listen(3000, () => {
    console.log(`Server started`);
});
