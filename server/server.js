const http = require('http');

const app = require('./config/express');
require('./config/database');
require('./routes')(app);

http.createServer(app).listen(3000, () => {
    console.log('Servidor Rodando na Porta 3000!!!!')
})

