'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
app.use(bodyParser.json());


app.get('/api/companies', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/api/companies', (req, res) => {
    console.log('flot');
});

app.listen(port, () => {
    console.log('Server is on port:', port);
});
