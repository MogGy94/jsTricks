const express = require('express');

const app = express();

const { config } = require('../config');
const { moviesApi } = require('./routes/movies.js');


moviesApi(app);

app.get('/', (req, res) => {
    res.send('hello World')
});
app.get('/json', (req, res) => {
    res.json({ hello: "world" })
});

app.listen(config.port, () => {
    console.log(`Listen on Port ${config.port}`);
})