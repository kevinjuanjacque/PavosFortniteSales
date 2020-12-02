const VisitController={}
const bd = require('../DataBase/DataBase');
const { validationResult } = require('express-validator');
const { DecodificarToken } = require('../helpers/jwt');

//Agregar Visita
/* 
    {
        "idUsuario" ,
        "aliasUrl": 
    }
*/

VisitController.AgregarVisita = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    //const { token, aliasUrl } = req.body;
    const { token } = req.body;
    const idUsuario = await DecodificarToken(token).then((res)=>res.id);
    const aliasUrl = window.location.pathname;
    
    await bd.query(`INSERT INTO Visita(id_usuario, alias_url) VALUES(${idUsuario},'${aliasUrl}')`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Visita agregada con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });
}

module.exports=VisitController;
