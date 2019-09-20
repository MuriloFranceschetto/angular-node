import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as boolParser from 'express-query-boolean';
import { Routes } from '../routes';
import './utils/prototype';

class App {

    public app: express.Application = express();
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
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Device');
            next();
        });
    }
}

export default new App().app;


