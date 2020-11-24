const AuthController={};
const bd = require('../DataBase/DataBase');

const {  validationResult } = require('express-validator');


/*
    {
        Eamil:,
        Password:
    }
*/



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
           body:'usuario creaDO CON EXITO' 
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
    