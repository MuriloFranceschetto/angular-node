
import { mongoose, Schema, model } from 'mongoose';

export const UsuarioSchema = new Schema({
        nome: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

const Usuario = model('Usuario', UsuarioSchema);

export {Usuario};
 


