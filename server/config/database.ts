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
