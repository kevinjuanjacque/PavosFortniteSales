const AuthController={}

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../model/UserModel');

/*
    {
        Eamil:,
        Password:
    }
*/

AuthController.LogIn= async (req,res)=>{
    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }
    const {Email,Password} = req.body;
   
    const usuario=await User.findAll({
        where: {
          email:Email
        }
      });

    if(usuario.length<=0){
        return res.status(400).json({
            error:'Usuario no existente'
        })
    }
    if(Password!==usuario.password){
        return res.status(400).json({
            errors:'Contraseña invalida'
        })
    }
    res.status(200).json({
        resp:'Ok',
        body:'Login existoso',
        Token: jwt.sign({
                    foo:'bar',
                },'AuthFortnitePavosCl',
                { expiresIn: '10h' })
    })
}


    /*
        {
            email,
            password,
            name,
            last name,

        }
    */

    AuthController.crearUsuario = async (req,res)=>{
        const error=validationResult(req);

        if(!error.isEmpty()){
            return res.status(400).json({ errors: error.array() });
        }

        const {Email,Password, Name, LastName} = req.body;

        const NuevoUsuario = await User.create({email:Email,password:Password,NombreCompleto:Name+' '+LastName}).then(()=>{
            res.json({
                resp:'Ok',
                body:'Usuario creado con existo'
            })

        }).catch((err)=>{
            return res.status(401).json({
                errors:'Ocurrio un error al crear usuario',
                body:err
            })

        });

    }
    

    


module.exports=AuthController;