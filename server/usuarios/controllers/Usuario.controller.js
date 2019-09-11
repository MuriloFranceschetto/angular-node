
'use strict';
const mongoose = require('mongoose')

var Model = require('./Usuario.model');
const Usuario = mongoose.model('Usuario');

// Novo Usuario
exports.cadUsuario = async(req, res) => {
    Model.cadUsuarios(req.body,(err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(result);
    });
};

// Busca Todos
exports.getAllUsuario = async (req, res) => {
   await Model.getAllUsuarios( req, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(result);
    });
}

// Busca por ID
exports.getById = (req, res) => {
    Model.getUsuario(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(result);
    });
}

// Edita Usuario
exports.editarUsuario = async(req, res) => {
    Model.editarUsuario(req, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } 
        return res.status(200).json(result);
    })
}

// Deleta Usuario
exports.deleteUsuario = async (req, res) => {
    Model.delete(req, (err, result) => {
        if (err) {
            console.log()
            console.log('deu ruim')
            return res.status(500).send(err);
        }
        console.log('deu boa')
        return res.status(204).send('EXCLOIO');
    })
}
