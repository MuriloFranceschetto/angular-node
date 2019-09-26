<<<<<<< HEAD

//const express = require('express');
//var bodyParser = require('body-parser');

import * as express from 'express'; //../node_modules/@types/express/index
import * as bodyParser from 'body-parser';
import { Routes } from '../routes';
=======
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as boolParser from 'express-query-boolean';
import { Routes } from '../routes';
import './utils/prototype';
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e

class App {

    public app: express.Application = express();
<<<<<<< HEAD
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
=======
    public routePrv: Routes = new Routes();

    constructor() {
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(boolParser());
        // serving static files 

        this.app.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Credentials', 'true');
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Device');
            next();
        });
<<<<<<< HEAD

    }

}

export default new App().app;
=======
    }
}

export default new App().app;


>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
