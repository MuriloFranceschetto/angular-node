import { Passport } from './passport'
import { Router } from 'express';

export class RoutesAuth {
    
    private passport = new Passport();
    private router = Router();

    constructor() {
        this.router.post('/', this.passport.autenticacao);
    }

    public routes() {
        return this.router;
    }

}