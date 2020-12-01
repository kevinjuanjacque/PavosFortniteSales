const VisitController={}
const bd = require('../DataBase/DataBase');
const { validationResult } = require('express-validator');

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

    const { idUsuario, aliasUrl } = req.body;

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
