'use strict';

var express = require('express'),
    controller = require('./Usuario.controller'),
    router = express.Router();

router.post('/', controller.cadUsuario);
router.get('/', controller.getAllUsuario);
router.get('/:id', controller.getById);
router.put('/:id', controller.editarUsuario);
router.delete('/:id', controller.deleteUsuario);

module.exports = router;
