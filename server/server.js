const http = require('http');

const app = require('./config/express');
require('./config/database');

http.createServer(app).listen(4200, () => {
    console.log('Servidor Rodando na Porta 4200!!!!')
})