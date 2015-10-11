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
    console.log('POST - companies');

    const data = req.body;

    if(!data.hasOwnProperty('name')) {
        res.status(412).send('missing name');
        return;
    }
    if(!data.hasOwnProperty('punchCount')) {
        res.status(412).send('missing punchCount');
        return;
    }

    companies.push(data);
    res.status(201).send(data);
});

app.get('/api/companies/:id', (req, res) => {
    console.log('GET - company');

    const data = companies[id];

    if(!data) {
        res.status(404).send('not found');
        return;
    }

    res.status(200).send(data);
});

app.get('/api/users', (req, res) => {
    res.status(200).send(users);
});

app.post('/api/users', (req, res) => {
    console.log('POST - users');

    const data = req.body;
    if(!data.hasOwnProperty('name')) {
        res.status(412).send('missing name');
        return;
    }
    if(!data.hasOwnProperty('email')) {
        res.status(412).send('missing email');
        return;
    }

    users.push(data);
    res.status(201).send(data);
});

app.get('/api/users/:id/punches', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/api/users/:id/punches', (req, res) => {
    console.log('flot');
    console.log('POST - punches');

    const data = req.body;
    if(!data.hasOwnProperty('id')) {
        res.status(412).send('missing company id');
        return;
    }

    users[id].push(data);
    res.status(201).send(data);
});

app.listen(port, () => {
    console.log('Server is on port:', port);
});
