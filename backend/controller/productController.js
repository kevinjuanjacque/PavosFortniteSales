
const ProductController={}
const bd = require('../DataBase/DataBase');
const { validationResult } = require('express-validator');



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
    

    const { id } = req.params;
    await bd.query(
        `DELETE FROM Producto WHERE id_producto=${id}`).then(()=>{
        res.status(200).json({
           resp:'ok',
           body:'Producto eliminado con exito'
            
        });
    }).catch((err)=>{
        res.status(400).json({
            resp:'Error en la bd',
            body: 'Error al intentar eliminar el producto'
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

//BUSCAR PRODUCTO POR ID
/* 
    {

    }
*/



ProductController.BuscarProductoPorId = async (req, res) => {

    const { idProducto } = req.params;
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

//BUSCAR PRODUCTO POR NOMBRE
/* 
    {
        "nombreProducto": " "
    }
*/


ProductController.BuscarProductoPorNombre = async (req, res) => {

    const { nombreProducto } = req.params;
    //const regex = new RegExp(nombreProducto, 'i');
    await bd.query(`SELECT * FROM Producto WHERE nombre_producto iLike '%${nombreProducto}%';`)
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

ProductController.RetornarTodoProducto = async (req, res) => {

    const { nombreCategoria } = req.params;
    const id = await bd.query(`SELECT id_categoria FROM Categoria WHERE nombre iLike '${nombreCategoria}%'`).then((res)=>res.rows);
    const {id_categoria} = id[0];
    await bd.query(`SELECT * FROM Producto WHERE id_categoria=${id_categoria}`)
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

//PRODUCTOS DESTACADOS

ProductController.RetornarProductoDestacado = async (req, res) => {
    //Muestra los 6 productos mas vendidos.
    await bd.query(`
        SELECT d.id_producto, p.nombre_producto, COUNT(d.id_producto) as cantidad,  p.precio_unitario 
        FROM DetalleVenta d JOIN Producto p on (d.id_producto = p.id_producto) 
        GROUP BY d.id_producto, p.nombre_producto, p.precio_unitario order by cantidad desc limit 6;`)
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

ProductController.RetornarProductoMasVendido = async (req, res) => {
    //Muestra los 6 productos mas vendidos.
    await bd.query(`
        SELECT p.nombre_producto as nombre, COUNT(d.id_producto) as cantidad
        FROM DetalleVenta d JOIN Producto p on (d.id_producto = p.id_producto) 
        GROUP BY d.id_producto, p.nombre_producto, p.precio_unitario order by cantidad desc limit 1;`)
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

ProductController.stockProductos=async(req,res)=>{

    return await bd.query('SELECT stock, nombre_producto FROM producto').then((resp) => {
        return res.json({
            resp: 'ok',
            body: resp.rows

        });
    }).catch((err) => {
        console.log(err);
        return res.status(400).json({
            resp: 'Error en la bd',
            body: err
        });
    });
}

ProductController.allProduct=async(req,res)=>{
    return await bd.query('SELECT id_producto,nombre_producto,precio_unitario FROM producto').then((resp) => {
        return res.json({
            resp: 'ok',
            body: resp.rows

        });
    }).catch((err) => {
        console.log(err);
        return res.status(400).json({
            resp: 'Error en la bd',
            body: err
        });
    });
}


ProductController.ArrayProducts=async(req,res)=>{

    const {arrayProduc} = req.body;

    var sentencia = `SELECT * FROM Producto  where id_producto=` 

    arrayProduc.forEach((id,index)=>{
        if(index===0){
            sentencia= sentencia+id;
        }else{
            sentencia= sentencia+'or id_producto='+id;
        }
    })

    const {rows} = await bd.query(sentencia);
    
    res.json({
        resp:'ok',
        body:rows
    })
}

module.exports=ProductController;
