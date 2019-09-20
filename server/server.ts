// const http = require('http');
// const app = require('./config/express');
// require('./config/database');
// require('./routes')(app);

import app from './config/express';
import * as http from 'http';
import { Database } from './config/database';
// import { Routes } from './routes';

http.createServer(app).listen(3000, () => {
    console.log('Servidor Rodando na Porta 3000!');

    Database.prototype.connection();
});