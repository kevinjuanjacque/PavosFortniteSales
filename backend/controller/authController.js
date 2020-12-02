const AuthController={};
const bd = require('../DataBase/DataBase');

const {  validationResult } = require('express-validator');
const { GeneradorToken } = require('../helpers/jwt');





/*
    {
        Eamil:,
        Password:
    }
*/

AuthController.IniciarSesion = async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({
            resp:'error en la request',
            body:errors.array()
        })
    }

    const { email, contrasena } = req.body;

    const usuario = await bd.query(`SELECT * FROM Usuario WHERE email = '${email}' and contrasena = '${contrasena}'`);
    console.log(usuario);
    await GeneradorToken(usuario.id,usuario.nombre_completo)
    .then((res)=>{
        console.log(res);
    })

    if(usuario){
        res.status(200).json({
            resp:'Ok',
            body:'Sesión iniciada correctamente' 
         });
    }else{
        res.status(401).json({
            resp:'Error',
            body:'Autenticación erronea'
        }); 
    }


}


/*
    {
        email,
        password,
        name,
        last name,

    }
*/

AuthController.registrarUsuario = async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({
            resp:'error en la request',
            body:errors.array()
        })
    }

    const { email,password,name,apellido } = req.body;

  
    await bd.query(`insert into Usuario values(3,'${name} ${apellido}', '${password}','${email}')`).then(()=>{
        res.status(200).json({
           resp:'ok',
           body:'usuario creado con exito' 
        });
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({
            resp:'Error en la bd',
            body:err
        });
    });

}

/**
 * ejemplo resp
 * {
 *      resp: 'error en la peticvion',
 *      body: 'campos de nombre e email vacios'
 * }
 */

    


module.exports=AuthController;
    