const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:kevin123@localhost:5432/testdb',{
        dialect:'postgres',
        logging: false 
    });

const ProductoNodel = require('./ProductosModel')

const Categoria = sequelize.define('Categoria',{
    'NombreCategoria':{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    'Descripcion':{
        type:DataTypes.STRING,
        allowNull:true
    }
})


Categoria.sync({ alter: true });

module.exports=Categoria;