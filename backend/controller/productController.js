
const ProductController={}
const { validationResult } = require('express-validator');


const ProductoModel=require('../model/ProductosModel');

ProductController.ShowProducts=async(req,res)=>{
    try {
        const productos = await ProductoModel.findAll();
        res.json({
            resp:'ok',
            body:'Se cargaron correctamente los productos',
            products:productos
        })
    } catch (err) {
        return res.status(500).json({
            erros:'Ocurrio un error inesperado en la bd',
            body:err
        })
    }
    
}

ProductController.AddProduct=async(req,res)=>{
    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    const {IdCategory,Nombre,PrecioUnitario,Descuento,UrlImage,Descripcion} = req.body;

    try {
        await ProductoModel.create({
            IdCategory:IdCategory,
            NombreProducto:Nombre,
            Price:PrecioUnitario,
            Descuento:(Descuento) ? Descuento : 0 ,
            UrlImage:(!UrlImage) ? '/imagen/NotFound.jpg' : UrlImage,
            Descripcion: (Descripcion) ? Descripcion : '',
        });
        return res.json({
            resp:'ok',
            body:'Producto creado exitosamente'
        })
    } catch (err) {
        return res.status(400).json({
            errors:'Ocurrio error al crear el producto',
            body:err
        });
    }

}

module.exports=ProductController;
