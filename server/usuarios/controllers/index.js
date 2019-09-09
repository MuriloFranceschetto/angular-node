'use strict';

var express = require('express'),
    controller = require('./Usuario.controller'),
    router = express.Router();

router.post('/', controller.cadUsuario);
router.get('/', controller.getAllUsuarios);

module.exports = router;
