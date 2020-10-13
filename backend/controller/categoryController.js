const CategoryController={}
const { validationResult } = require('express-validator');
const Categoria = require('../model/CategoriaModel');

const CategoriaModel = require('../model/CategoriaModel');

CategoryController.ShowCategory= async (req,res)=>{

    const AllCategory = await CategoriaModel.findAll();

    if(!AllCategory){
        return res.status(500).json({
            errors:'Ocurrio error inesperado en conexion con la bd'
        })
    }

    res.json({
        resp:'ok',
        body:'Se cargo exitosamente las categorias.'
        ,Categorias:AllCategory
    })

}
CategoryController.AddCategory= async (req,res)=>{
    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    const {Nombre, Descripcion} = req.body;
   
        await Categoria.create({NombreCategoria:Nombre,Descripcion:Descripcion}).then(()=>{
            res.json({
                resp:'ok',
                body:'Se creo exitosamente la categoria'
            });
        }).catch((err)=>{
            return res.status(400).json({errors:'Categoria existente',
                                        body:err}) ;
        });

}

module.exports=CategoryController;