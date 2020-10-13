/*
    /api/auth/
*/
const {Router}=require('express');
const routerAuth=Router();
const { body } = require('express-validator');

const AuthController = require('../controller/authController');


routerAuth.post('/login/',[
    body('Email').isEmail(),
    body('Password').isLength({min:5})
], AuthController.LogIn );

routerAuth.post('/register/',[
    body('Email').isEmail(),
    body('Password').isLength({min:5}),
    body('Name').notEmpty(),
    body('LastName').notEmpty(),
], AuthController.crearUsuario );

module.exports = routerAuth;