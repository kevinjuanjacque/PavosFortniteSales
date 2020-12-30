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
routerVisit.get('/categoria-mas-popular',VisitController.CategoriaMasPopular);

module.exports=routerVisit;