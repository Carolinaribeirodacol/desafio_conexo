const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(8081, () => console.log('Server is runing'));
