import { Router } from 'express';
import { UsuarioController } from './Usuario.controller';

export class RoutesUsuario {

    //const app = require('express');
    //const controller = require('./Usuario.controller');
    public router = Router();
    public controller = new UsuarioController();

    constructor() {
        
        this.router.get('/', this.controller.getAll);
        this.router.get('/:id', this.controller.getUsuarioById);
        
        this.router.post('/', this.controller.cadUsuario);
        this.router.put('/usuario/:id', this.controller.editUsuario);
        this.router.delete('/usuario/:id', this.controller.removeUsuario);
    }

    public routes() {
        return this.router;
    }
}
