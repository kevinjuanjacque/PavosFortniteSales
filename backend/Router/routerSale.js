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
    body('idUsuario').isInt(),
    body('estadoEntrega').isBoolean()  
],SaleController.AgregarVenta);

//agregar detalle venta

routerSale.post('/agregar-detalle-venta',
[
    body('idVenta').isInt(),
    body('idProducto').isInt(),
    body('cantidad').isInt() 
],SaleController.AgregarDetalleVenta);

module.exports=routerSale;
