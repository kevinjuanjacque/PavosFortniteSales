const VisitController={}
const bd = require('../DataBase/DataBase');
const { validationResult } = require('express-validator');
const { DecodificarToken } = require('../helpers/jwt');

//Agregar Visita
/* 
    {
        "token" ,
        "aliasUrl": 
    }
*/

VisitController.AgregarVisita = async (req, res) => {

    

    //const { token, aliasUrl } = req.body;
    const { token,url } = req.body;
    if(token){
        const id=await DecodificarToken(token).then((res)=>res.id)
        return await bd.query(`INSERT INTO Visita(id_usuario, alias_url) VALUES(${id},'${url}')`)
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
    }else{
        return await bd.query(`INSERT INTO Visita( alias_url) VALUES('${url}')`)
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
    
}

VisitController.allVisit=async(req,res)=>{
    await bd.query('select alias_url, count(id_visita) as cant from visita  group by alias_url;')
    .then((sol)=>res.json({resp:'ok',body:sol.rows})).catch((err)=>res.status(500).json({resp:'error en la bd',body:err}));



}

module.exports=VisitController;
