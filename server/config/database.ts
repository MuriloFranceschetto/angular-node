
import { mongoose } from 'mongoose';
import { requireDir } from 'require-dir';

export class Database {

    constructor() {
    
    }

    connection() {
        mongoose.set('useFindAndModify', false);
        
        mongoose.connect('mongodb://localhost:27020/projetoCerto', { useNewUrlParser: true });
        requireDir("../models");
        
        mongoose.connection.on('connected', () => {
            console.log('Conectado ao DB!')
        });
        
        mongoose.Promise = globalThis.Promise;
    }

}


