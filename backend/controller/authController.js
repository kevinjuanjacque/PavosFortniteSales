const AuthController={};
const bd = require('../DataBase/DataBase');

const {  validationResult } = require('express-validator');
const { GeneradorToken, DecodificarToken } = require('../helpers/jwt');





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

    const {rows} = await bd.query(`SELECT * FROM Usuario WHERE email = '${email}' and contrasena = '${contrasena}'`);
    const usuario=rows[0];
   

    if(usuario){
        res.status(200).json({
            resp:'Ok',
            body:{
                res:'Sesión iniciada correctamente',
                token: await GeneradorToken(usuario.id_usuario,usuario.nombre_completo),
                name:usuario.nombre_completo
             }
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
AuthController.validarToken = async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            resp:'error en la request',
            body:errors.array()
        })
    }
    const {token} = req.body;
    const decode = await DecodificarToken(token);
   
    if(!decode.id){
        return res.status(401).json({
            resp:'error en token',
            body:'token no valido'
        });
    }

    const {rows} =await bd.query(`SELECT * FROM Usuario WHERE id_usuario=${decode.id}`).then((res)=>res); 
    
    if(!rows[0]){
        return res.status(401).json({
            resp:'error en token',
            body:'token no valido'
        });
    }  

    res.json({
        resp:'ok',
        body:{
            email:rows[0].email,
            name: rows[0].nombre_completo
        }
    })


}


AuthController.changePass=async(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            resp:'error en la request',
            body:errors.array()
        })
    }
    const{ contrasenaActual,contrasenaNew ,token} = req.body;

    const {id}= await DecodificarToken(token);
    return await bd.query(`update usuario set contrasena='${contrasenaNew}'
    where id_usuario=${id} and contrasena='${contrasenaActual}';`).then(()=>{
        return res.json({
            resp:'ok',
            body:'contraseña cambiada con exito'
        })
    }).catch(()=>{
        return res.status(401).json({
            resp:'Ocurrio un error',
            body:'contraseña actual invalida.'
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


 // Personas Registradas
AuthController.UsuariosRegistrados = async (req, res) => {
    await bd.query(`select count(*) as cantidad from Usuario WHERE id_rol=2;`)
        .then((resp) => {
            res.json({
                resp: 'ok',
                body: resp.rows

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });

}

module.exports=AuthController;
    