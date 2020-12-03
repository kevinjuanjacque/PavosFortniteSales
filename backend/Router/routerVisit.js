/*
    /api/visit/
*/
const {Router}=require('express');
const routerVisit=Router();

const { body } = require('express-validator');

const VisitController = require('../controller/visitController');

//Registrar visita

routerVisit.post('/agregar', VisitController.AgregarVisita);

routerVisit.get('/',VisitController.allVisit);

module.exports=routerVisit;