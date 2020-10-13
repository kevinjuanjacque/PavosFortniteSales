/*
    /api/product/
*/
const {Router}=require('express');
const routerProduct=Router();
const { body } = require('express-validator');

const ProductController = require('../controller/productController');


routerProduct.get('/',ProductController.ShowProducts);
routerProduct.post('/addProduct',[
    body('IdCategory').isNumeric(),
    body('Nombre').notEmpty(),
    body('PrecioUnitario').isNumeric()
],ProductController.AddProduct);

module.exports=routerProduct;