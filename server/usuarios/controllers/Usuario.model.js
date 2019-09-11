'use strict'

const mongoose = require('../../config/database');

const Usuario = mongoose.model('Usuario');

exports.cadUsuarios = (params, cb) => {
    Usuario.create(params)
    .then(
        (result) => {
            return cb(result)
        }
    ).catch(
        (err) => {
            cb(err)
        }
    );
}

exports.getAllUsuarios = async (params, cb) => {
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

exports.getUsuario = async (id, cb) => {
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

exports.editarUsuario = async (req, cb) => {
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

exports.delete = async (req, cb) => {
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
