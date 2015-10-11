'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const port = 4000;
const app = express();
app.use(bodyParser.json());

const companies = [];
const users = [];

app.listen(port, () => {
    console.log('Server is on port:', port);
});

app.get('/api/companies', (req, res) => {
    res.status(200).send(companies);
});

app.post('/api/companies', (req, res) => {
    const company = req.body;

    if(!company.hasOwnProperty('name')) {
        res.status(412).send('missing name');
        return;
    }
    if(!company.hasOwnProperty('punchCount')) {
        res.status(412).send('missing punchCount');
        return;
    }

    company.id = companies.length;

    companies.push(company);
    res.status(201).send(company);
});

app.get('/api/companies/:id', (req, res) => {
    const id = req.params.id;
    const company = _.find(companies, (company) => {
        return company.id == id;
    });

    if(!company) {
        res.status(404).send('company not found');
        return;
    }

    res.status(200).send(company);
});

app.get('/api/users', (req, res) => {
    res.status(200).send(users);
});

app.post('/api/users', (req, res) => {
    const user = req.body;

    if(!user.hasOwnProperty('name')) {
        res.status(412).send('missing name');
        return;
    }
    if(!user.hasOwnProperty('email')) {
        res.status(412).send('missing email');
        return;
    }

    user.id = users.length;
    user.punches = [];

    users.push(user);
    res.status(201).send(user);
});

app.get('/api/users/:id/punches', (req, res) => {
    const id = req.params.id;
    const user = _.find(users, (user) => {
        return user.id == id;
    });

    if(!user) {
        res.status(404).send('user not found');
        return;
    }

    res.status(200).send(user.punches);
});

app.post('/api/users/:id/punches', (req, res) => {
    const punch = req.body;
    const id = req.params.id;

    if(!punch.hasOwnProperty('id')) {
        res.status(412).send('missing company id');
        return;
    }

    const user = _.find(users, (user) => {
        return user.id == id;
    });

    const company = _.find(companies, (company) => {
        return company.id == data.id;
    });

    if(!user) {
        res.status(404).send('user not found');
        return;
    }
    if(!company) {
        res.status(404).send('company not found');
        return;
    }

    punch.timestamp = new Date();

    user.punches.push(punch);
    res.status(201).send(user.punches);
});

