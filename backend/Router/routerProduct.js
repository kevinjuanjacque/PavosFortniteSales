/*
    /api/product/
*/
const {Router}=require('express');
const routerProduct=Router();

const { body } = require('express-validator');

const ProductController = require('../controller/productController');



//agregar producto

routerProduct.post('/agregar',
[
    body('idCategoria').isInt(),
    body('idTipoProducto').isInt(),
    body('nombreProducto').isString(),
    body('precioUnitario').isInt(),
    body('descuento').isInt(),
    body('urlImagen').isString(),
    body('descripcion').isString(),
    body('stock').isInt(),
    body('costo').isInt()    
],ProductController.AgregarProducto);


//eliminar producto
routerProduct.delete('/eliminar',
[
    body('idProducto').isInt()
],ProductController.EliminarProducto);

//actualizar producto

routerProduct.put('/actualizar',
[
    body('idProducto').isInt(),
    body('idCategoria').isInt(),
    body('idTipoProducto').isInt(),
    body('nombreProducto').isString(),
    body('precioUnitario').isInt(),
    body('descuento').isInt(),
    body('urlImagen').isString(),
    body('descripcion').isString(),
    body('stock').isInt(),
    body('costo').isInt()   
],ProductController.ActualizarProducto);

//buscar producto por id
routerProduct.get('/por-id/:idProducto',ProductController.BuscarProductoPorId);

//buscar producto por nombre
routerProduct.get('/:nombreProducto',ProductController.BuscarProductoPorNombre);


//retornar todos los productos
routerProduct.get('/', ProductController.RetornarTodoProducto);


module.exports=routerProduct;