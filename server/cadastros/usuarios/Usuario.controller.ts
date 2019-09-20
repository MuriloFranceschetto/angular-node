//const mongoose = require('mongoose');
//const Model = require('./Usuario.model');
//require('../models/Usuario');
import { Usuario } from './models/Usuario';
import { UsuarioModel } from './Usuario.model';
//const usuarioModel = mongoose.model('Usuario');

export class UsuarioController {

    public async cadUsuario(req: any, res: any) {
        UsuarioModel.cadUsuario(req, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(result);
        });
    }
    
    async getAll(req: any, res: any) {
        UsuarioModel.getAll(req, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(result);
        }) 
    }
    
    async getUsuarioById(req: any, res: any) {
        UsuarioModel.getById(req, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(result);
        });
    }
    
    async editUsuario(req: any, res: any) {
        UsuarioModel.editById(req, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(result);
        })
    }
    
    async removeUsuario(req: any, res: any) {
        UsuarioModel.removeById(req, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send();
        })
    }
}

    
