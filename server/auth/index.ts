import { Passport } from './passport'
import { Router } from 'express';
import { DataBaseController } from './../api/admin/database/controller';

export class RoutesAuth {
    
    private passport = new Passport();
    private router = Router();
    private DataBaseController = new DataBaseController();

    constructor() {
        this.router.post('/', this.passport.autenticacao);
    }

    public routes() {
        return this.router;
    }
}