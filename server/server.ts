
import * as http from 'http';
import { cors } from 'cors';
import app from './app'
import { Database } from './config/database';

export class Server {

    constructor() {
        
        app.use(cors());
        
        http.createServer(app).listen(3000, () => {
            console.log('Servidor Rodando na Porta 3000!!!!')
        })

        Database.prototype.connection();
    }
    
}