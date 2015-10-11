'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
app.use(bodyParser.json());

const companies = [];


app.get('/api/companies', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/api/companies', (req, res) => {
    console.log('flot');
});

app.get('/api/companies/:id', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/api/users', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/api/users', (req, res) => {
    console.log('flot');
});

app.get('/api/users/:id/punches', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/api/users/:id/punches', (req, res) => {
    console.log('flot');
});

app.listen(port, () => {
    console.log('Server is on port:', port);
});
