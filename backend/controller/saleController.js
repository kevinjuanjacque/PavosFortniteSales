const SaleController={}
const bd = require('../DataBase/DataBase');
const { validationResult } = require('express-validator');



//Agregar venta
/* 
    {
        "idUsuario": ,
        "estadoEntrega":   
    }
*/

SaleController.AgregarVenta = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const { idUsuario, estadoEntrega } = req.body;

    /*
    IMPORTANTE! deberia haber una funcion que cambie el estadoEntrega, no hacerlo manual.
    */

    await bd.query(
        `insert into Venta(id_usuario, estado_entrega) 
        values(${idUsuario},${estadoEntrega})`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Venta agregada con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });

}

//DetalleVenta

SaleController.AgregarDetalleVenta = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const { idVenta, idProducto, cantidad } = req.body;

    await bd.query(
        `insert into DetalleVenta(id_venta, id_producto, cantidad) 
        values(${idVenta},${idProducto}, ${cantidad})`)
        .then(() => {
            res.status(200).json({
                resp: 'ok',
                body: 'Detalle de venta agregado con exito'

            });
        }).catch((err) => {
            console.log(err);
            res.status(400).json({
                resp: 'Error en la bd',
                body: err
            });
        });

}

module.exports=SaleController;