
'use strict';
const mongoose = require('mongoose')

var Model = require('./Usuario.model');
const Usuario = mongoose.model('Usuario');

exports.cadUsuario = async(req, res) => {
    Model.cadUsuarios(req.body,(err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
    const usuario = await Usuario.create(req.body);
        return res.json(usuario);
};

exports.getAllUsuarios = async(req, res) => {
    Usuario.find({})
    .then(
        (usuario) => res.json(usuario)
    )
}