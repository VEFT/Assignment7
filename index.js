'use strict';

const express = require('express');
const port = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Server is on port:', port);
});
