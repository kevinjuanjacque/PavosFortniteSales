/*
    /api/category/
*/

const {Router}=require('express');
const routerCategory=Router();

const { body } = require('express-validator');

const CategoryController = require('../controller/categoryController');

//agregar categoria

routerCategory.post('/agregar',
[
    body('nombre').isString(),
    body('descripcion').isString() 
],CategoryController.AgregarCategoria);

//modificar categoria

routerCategory.put('/modificar',
[
    body('idCategoria').isInt(),
    body('nombre').isString(),
    body('descripcion').isString() 
],CategoryController.ModificarCategoria);

//eliminar categoria
routerCategory.delete('/eliminar',
[
    body('idCategoria').isInt()
],CategoryController.EliminarCategoria);


//mostrar categorias
routerCategory.get('/', CategoryController.RetornarTodoCategoria);









module.exports=routerCategory;