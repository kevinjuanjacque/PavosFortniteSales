/*
    /api/visit/
*/
const {Router}=require('express');
const routerVisit=Router();

const { body } = require('express-validator');

const VisitController = require('../controller/productController');

//Registrar visita

routerVisit.post('/agregar', 
[
    body('idVisita').isInt(),
    body('idUsuario').isInt(),
    body('aliasUrl').isString()
]
)