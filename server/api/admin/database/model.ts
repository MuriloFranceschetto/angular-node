import { Schema, model } from 'mongoose';

export var DataBaseSchemna: Schema = new Schema({
    name: { type: String, required: true },
    database: { type: String, required: true },
    acessos: Array({
        nome: { type: String, default: '' },
        email: { type: String, lowercase: true, unique: true, required: true },
        senha: { type: String, default: 0 },
    })
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Database = model('Database', DataBaseSchemna);

export {
    Database
}