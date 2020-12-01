/*
    /api/visit/
*/
const {Router}=require('express');
const routerVisit=Router();

const { body } = require('express-validator');

const VisitController = require('../controller/visitController');

//Registrar visita

routerVisit.post('/agregar', 
[
    body('idUsuario').isInt(),
    body('aliasUrl').isString()
], VisitController.AgregarVisita);

module.exports=routerVisit;