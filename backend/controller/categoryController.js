const CategoryController={}
const bd = require('../DataBase/DataBase');
const {  validationResult } = require('express-validator');


//Agregar Categoria
/* 
    {
        "nombre": ,
        "descripcion": 
    }
*/

CategoryController.AgregarCategoria = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const { nombre, descripcion } = req.body;

    await bd.query(
        `INSERT INTO Categoria(nombre, descripcion) 
        VALUES('${nombre}','${descripcion}')`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Categoria agregada con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });

}

//Modificar Categoria por id
/* 
    {
        "nombre": ,
        "descripcion": 
    }
*/

CategoryController.ModificarCategoria = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const { idCategoria, nombre, descripcion } = req.body;

    await bd.query(
        `UPDATE Categoria SET nombre = '${nombre}', descripcion = '${descripcion}'
        WHERE id_categoria = ${idCategoria}`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Categoria modificada con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });

}

//Eliminar categoria por id
/* 
    {
        "nombre": ,
        "descripcion": 
    }
*/

CategoryController.EliminarCategoria = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({
            resp:'error en la request',
            body:errors.array()
        })
    }

    const { idCategoria } = req.body;

    await bd.query(
        `DELETE FROM Categoria WHERE id_categoria=${idCategoria}`).then(()=>{
        res.status(200).json({
           resp:'ok',
           body:'Categoria eliminada con exito'
            
        });
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({
            resp:'Error en la bd',
            body:err
        });
    });
}

//Retorna todas las categorias
CategoryController.RetornarTodoCategoria = async (req, res) => {

    await bd.query(`SELECT * FROM Categoria;`)
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


module.exports=CategoryController;