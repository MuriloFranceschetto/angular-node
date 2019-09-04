
const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(express.static('../../projeto-certo'));

app.use(bodyParser.json());

module.exports = app;