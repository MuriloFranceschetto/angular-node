
//const express = require('express');
//const app = express();
//const router = app.Router();

import * as _ from 'express';
//const app = express();

import { RoutesUsuario } from './cadastros/usuarios/index';
import { RoutesAuth } from './auth';

export class Routes {

    public routes(app) {

        app.use('/api/auth', new RoutesAuth().routes());

        app.use('/api/cad/usuario', new RoutesUsuario().routes());
    }
}

// module.exports = (app) => {
    
    
// }
//module.exports = router;
