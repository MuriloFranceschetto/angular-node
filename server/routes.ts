
<<<<<<< HEAD
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
=======
import { Controller } from './api/usuarios/controllers/Usuario.controller';

// Todas as ações relacionada com a rotas de Usuario
export class Routes {
    public routes(app) {
        app.use('/api/usuario', Controller);
    }
}
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
