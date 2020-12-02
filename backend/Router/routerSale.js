/*
    /api/sale/
*/
const {Router}=require('express');
const routerSale=Router();
const { body } = require('express-validator');

const SaleController = require('../controller/saleController');

//agregar venta
routerSale.post('/agregar-venta',
[
    body('token').notEmpty(),
    body('total').isInt(),
    body('products').isArray()
],SaleController.AgregarVenta);


module.exports=routerSale;
