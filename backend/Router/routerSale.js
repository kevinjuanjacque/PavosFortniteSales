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

//ventas del cliente
routerSale.post('/misCompras',[body('token').notEmpty(),],SaleController.SalesByidUser)

routerSale.get('/detalle/:id_venta',SaleController.detalleVenta);
module.exports=routerSale;

routerSale.get('/',SaleController.allSales);

routerSale.get('/ventas-segun-tipo-usuario',SaleController.VentasTipoUsuario);
