
import { Usuario } from '../../../models/usuario'

export class Model {

    static cadUsuarios = async (params, cb) => {
        await Usuario.create(params)
        .then(
            (result) => {
                console.log('Deu boa')
                return cb(result)
            }
        ).catch(
            (err) => {
                console.log('Deu Ruim')
                cb(err)
            }
        );
    }

    static getAllUsuarios = async (result, cb) => {
        await Usuario.find({})
        .then(
            (result) => {
                return cb(result) 
            }
        ).catch(
            (err) => { 
                return cb(err)
            }
        );
    }

    static getUsuario = async (id, cb) => {
        await Usuario.findById(id)
        .then(
            (usuario) => { 
            return cb(usuario) 
            }
        ).catch(
            (err) => { 
                return cb(err) 
            }  
            );
    }

    static editarUsuario = async (req, cb) => {
        await Usuario.findByIdAndUpdate(req.params.id, req.body)
        .then(
            (usuario) => {
                req.params.id = req.body;
                console.log(usuario)
                return cb(usuario)
            }
        ).catch(
            (err) => {
                return cb(err) 
            } 
        );
    }

    static delete = async (req, cb) => {
        await Usuario.findByIdAndDelete(req.params.id)
        .then(
            (resposta) => {
            return cb()
        }
        ).catch(
            (err) => {
                console.log('errrrouu')
                return cb(err)
            }
            )
        }
}
