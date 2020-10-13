/*
    /api/category/
*/

const {Router}=require('express');
const routerCategory=Router();
const { body } = require('express-validator');

const categoryController = require('../controller/categoryController');


routerCategory.get('/',categoryController.ShowCategory);
routerCategory.post('/AddCategoria',[
    body('Nombre').notEmpty(),
],categoryController.AddCategory);


module.exports=routerCategory;