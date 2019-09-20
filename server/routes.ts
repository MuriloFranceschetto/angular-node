
import { Controller } from './api/usuarios/controllers/Usuario.controller';

// Todas as ações relacionada com a rotas de Usuario
export class Routes {
    public routes(app) {
        app.use('/api/usuario', Controller);
    }
}