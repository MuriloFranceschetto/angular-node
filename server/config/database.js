
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27020/projetoCerto');

mongoose.connection.on('connected', () => {
    console.log('Conectado ao DB!')
});