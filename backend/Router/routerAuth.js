/*
    /api/auth/
*/
const {Router}=require('express');
const routerAuth=Router();

const { body } = require('express-validator');

const AuthController = require('../controller/authController');


//Login

routerAuth.post('/login',
[
    body('email').notEmpty(),
    body('contrasena').isLength({min:5})
]
,AuthController.IniciarSesion);


//Register
routerAuth.post('/register',
[
    body('name').notEmpty(),
    body('apellido').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({min:5})
]
,AuthController.registrarUsuario);


module.exports = routerAuth;