
import * as express from 'express';
import { Controller } from './Usuario.controller';

const router = express.Router();
const controller  = new Controller;

export class Router {
    
    constructor() {
        
        router.post('/', controller.cadUsuario);
        router.get('/', controller.getAllUsuario);
        router.get('/:id', controller.getById);
        router.put('/:id', controller.editarUsuario);
        router.delete('/:id', controller.deleteUsuario);
    }
}




