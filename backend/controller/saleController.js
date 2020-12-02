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

module.exports=SaleController;
