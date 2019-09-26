<<<<<<< HEAD
//import { mongoose } from 'mongoose';

const mongoose = require('mongoose');
//import * as mongoose from 'mongoose';

export class Database {

    public mongoose = mongoose();
    
    constructor() {
        this.connection();
    }
    
    public connection() {
        mongoose.connect('mongodb://localhost:27017/projetoWeb', { useNewUrlParser: true })
        mongoose.connection.on('connected', () => {
            console.log('Conectado ao DB!')
        });
    }
};
=======

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


>>>>>>> e779fb98a563032780700a95b0ab283d44b0196e
