<<<<<<< HEAD
import { Passport } from './passport'
import { Router } from 'express';

export class RoutesAuth {
    
=======
import { Router } from 'express';
import { Passport } from './passport';

export class RoutesAuth {

>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
    private passport = new Passport();
    private router = Router();

    constructor() {
        this.router.post('/', this.passport.autenticacao);
    }

    public routes() {
        return this.router;
    }
<<<<<<< HEAD

=======
>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
}