
const ProductController={}
const bd = require('../DataBase/DataBase');
const { param,  validationResult } = require('express-validator');



//AGREGAR PRODUCTO
/* 
    {
        "idCategoria": ,
        "idTipoProducto": ,
        "nombreProducto": ,
        "precioUnitario": ,
        "descuento": ,
        "urlImagen": ,
        "descripcion": ,
        "stock": ,
        "costo": 
    }
*/


ProductController.AgregarProducto = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const { idCategoria, idTipoProducto, nombreProducto, precioUnitario, descuento, urlImagen, descripcion, stock, costo } = req.body;

    await bd.query(
        `insert into Producto(id_categoria, id_tipo_producto, nombre_producto, precio_unitario, descuento, url_imagen, descripcion, stock, costo) 
        values(${idCategoria},${idTipoProducto},'${nombreProducto}',${precioUnitario},${descuento},'${urlImagen}','${descripcion}',${stock},${costo})`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Producto agregado con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });

}
//ELIMINAR PRODUCTO
/* 
    {
        "idProducto":  
    }
*/

ProductController.EliminarProducto = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({
            resp:'error en la request',
            body:errors.array()
        })
    }

    const { idProducto } = req.body;

    await bd.query(
        `DELETE FROM Producto WHERE id_producto=${idProducto}`).then(()=>{
        res.status(200).json({
           resp:'ok',
           body:'Producto eliminado con exito'
            
        });
    }).catch((err)=>{
        console.log(err);
        res.status(400).json({
            resp:'Error en la bd',
            body:err
        });
    });
}


//ACTUALIZAR PRODUCTO
/* 
    {
        "idProducto": ,
        "idCategoria": ,
        "idTipoProducto": ,
        "nombreProducto": ,
        "precioUnitario": ,
        "descuento": ,
        "urlImagen": ,
        "descripcion": ,
        "stock": ,
        "costo": 
    }
*/

ProductController.ActualizarProducto = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const { idProducto, idCategoria, idTipoProducto, nombreProducto, precioUnitario, descuento, urlImagen, descripcion, stock, costo } = req.body;

    await bd.query(
        `UPDATE Producto SET id_categoria = ${idCategoria}, id_tipo_producto = ${idTipoProducto}, nombre_producto = '${nombreProducto}', precio_unitario = ${precioUnitario}, 
        descuento = ${descuento}, url_imagen = '${urlImagen}', descripcion = '${descripcion}', stock = ${stock}, costo = ${costo}
        WHERE id_producto=${idProducto}`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Producto actualizado con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });
}

//BUSCAR PRODUCTO
/* 
    {

    }
*/



ProductController.BuscarProducto = async (req, res) => {

    const { idProducto } = req.body;
    await bd.query(`SELECT * FROM Producto WHERE id_producto = ${idProducto};`)
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


//RETORNAR TODOS LOS PRODUCTOS
/* 
    {

    }
*/

ProductController.RetornarTodoProducto = async (req, res) => {

    await bd.query(`SELECT * FROM Producto;`)
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


module.exports=ProductController;
