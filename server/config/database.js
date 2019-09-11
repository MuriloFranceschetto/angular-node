
const mongoose = require('mongoose');
const requireDir = require("require-dir");

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27020/projetoCerto', { useNewUrlParser: true });
requireDir("../models");

mongoose.connection.on('connected', () => {
    console.log('Conectado ao DB!')
});

mongoose.Promise = global.Promise;

module.exports = mongoose;