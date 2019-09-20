//const mongoose = require('mongoose');
import { Schema, model } from 'mongoose';

export const UsuarioSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    database: { type: String },
    createdAt: { type: Date, default: Date.now },
});

// Registrando o módel na aplicação
const Usuario = model('Usuario', UsuarioSchema);

export {
    Usuario
}