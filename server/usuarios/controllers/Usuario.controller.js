
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

exports.getAllUsuarios = (req, res) => {
    Usuario.find({})
    .then(
        (usuario) => res.json(usuario)
    )
}

exports.getById = (req, res) => {
    Usuario.findById(req.params.id)
    .then(
        (usuario) => res.json(usuario)
    )
}

exports.deleteUsuario = async (req, res) => {
    var usuario = await Usuario.findByIdAndRemove(
        req.params.id
    )
    return res.status(200);
}
// exports.editarUsuario = async(req, res) => {
//     var usuario = await Usuario.findByIdAndUpdate(
//         req.params.id,
//         usuario = req.body
//     )
//     return usuario;
// }