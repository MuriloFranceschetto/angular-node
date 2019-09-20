import { Router } from 'express';
import { Passport } from './passport';

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