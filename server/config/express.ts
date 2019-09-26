
//const express = require('express');
//var bodyParser = require('body-parser');

import * as express from 'express'; //../node_modules/@types/express/index
import * as bodyParser from 'body-parser';
import { Routes } from '../routes';

class App {

    public app: express.Application = express();
    public routes: Routes = new Routes();

    constructor() {
        this.config();
        this.routes.routes(this.app);
    }

    private config() {
        this.app.use(bodyParser.json());

        this.app.use(express.static('../../projeto-certo'));
        
        this.app.all('*', (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Device');
            next();
        });

    }

}

export default new App().app;
