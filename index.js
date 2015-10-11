'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const app = express();
app.use(bodyParser.json());

const companies = [];
const users = [];


app.get('/api/companies', (req, res) => {
    console.log('GET - companies');
    res.status(200).send(companies);
});

app.post('/api/companies', (req, res) => {
    console.log('POSRT - companies');

    const data = req.body;

    if(!data.hasOwnProperty('name')) {
        res.status(412).send('missing name');
        return;
    }
    if(!date.hasOwnProperty('punchCount')) {
        res.status(412).send('missing punchCount');
        return;
    }

    companies.push(date);
    res.status(201).send(data);

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
