//Usuario = require('../models/Usuario');
//const mongoose = require('mongoose');

//require('../models/Usuario');
//const Usuario = mongoose.model('Usuario');

import * as _ from 'mongoose';
import { Usuario } from './models/Usuario';

export class UsuarioModel {

    public Usuario = new Usuario();

    static cadUsuario = async (req: any, cb: any) => {
        Usuario.create(req.body)
            .then((usuario) => {
                return cb(null, usuario);
            })
            .catch((err) => {
                return cb(err);
            })
    };
    
    static getAll = async (req: any, cb: any) => {
        await Usuario.find({})
        .then((usuarios) => {
            return cb(null, usuarios);
        })
        .catch((err) => {
            return cb(err);
        })
    };
        
    static getById = async (req: any, cb: any) => {
        await Usuario.findById(req.params.id) 
            .then((usuario) => {
                return cb(null, usuario);
            })
            .catch((err) => {
                return cb(err);
            })
    };
    
    static editById = async (req: any, cb: any) => {
        await Usuario.findByIdAndUpdate(req.params.id, req.body)
            .then((usuario) => {
                return cb(null, usuario);
            })
            .catch((err) => {
                return cb(err);
            })
    };
    
    static removeById = async (req: any, cb: any) => {
        await Usuario.findByIdAndRemove(req.params.id)
            .then(() => {
                return cb();
            })
            .catch((err) => {
                return cb(err);
            })
    };
}
