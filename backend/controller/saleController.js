const SaleController={}
const bd = require('../DataBase/DataBase');
const { validationResult } = require('express-validator');
const { DecodificarToken } = require('../helpers/jwt');



//Agregar venta
/* 
    {
        "token": ,
        "products":[{id: 1, cant: 10}]",
        "total"
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
    
    const {token,products,total} = req.body;
    const id = await DecodificarToken(token).then((res)=>res.id);
    const idVenta =  parseInt(new Date().getTime() +  id);
    

    await bd.query(`INSERT INTO Venta VALUES(${idVenta},${id},${total})`).catch((err)=>{console.log('error')});

    products.forEach(async (p)=>{
        await bd.query(`INSERT INTO DetalleVenta (id_venta,id_producto,cantidad) VALUES( ${idVenta},${p.id},${p.cantidad} );`);
    });

    res.json({
        resp:'ok',
        body:'Venta creada con exito'
    })
}

SaleController.SalesByidUser =async(req,res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            resp: 'error en la request',
            body: errors.array()
        })
    }

    const {token} = req.body;

    const id = await DecodificarToken(token).then(resp=>resp.id).catch((ERR)=>console.log('ERRROR: '+ERR));
    if(!id){
        return res.status(400).json({
            resp: 'error en tokent',
            body: 'token invalido o expirado'
        })
    }
    const {rows} = await bd.query(`SELECT * FROM Venta WHERE id_usuario=${id}`);

    res.json({
        resp:'ok',
        body: rows
    });




}

SaleController.detalleVenta =async(req,res)=>{


    const {id_venta}=req.params;
    const {rows} = await bd.query(`SELECT d.cantidad,p.nombre_producto, p.precio_unitario FROM detalleventa d inner join producto p on(d.id_producto=p.id_producto) where id_venta=${id_venta}`);

   

    res.json({
        resp:'ok',
        body:rows
    });

}

SaleController.allSales = async(req,res)=>{
    const {rows} = await bd.query('select * from venta');

    res.json({
        resp:'ok',
        body:rows
    })
}

//Ventas Por usuarios registrados vs usuarios no registrados

SaleController.VentasTipoUsuario = async (req, res) => {
    await bd.query(
        `SELECT COUNT(id_venta) as cantidad_ventas, 
        (SELECT COUNT(v.id_venta) FROM Venta v JOIN Usuario u on (u.id_usuario = v.id_usuario) WHERE u.id_rol = 2) as ventas_usuarios_registrados, 
        (SELECT COUNT(v.id_venta) FROM Venta v JOIN Usuario u on (u.id_usuario = v.id_usuario) WHERE u.id_rol = 3) as ventas_usuarios_no_registrados 
        FROM Venta;`)
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




module.exports=SaleController;
