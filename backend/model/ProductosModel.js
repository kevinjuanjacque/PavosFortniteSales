const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:kevin123@localhost:5432/testdb',{
    dialect:'postgres',
    logging: false 
});

const Categoria = require('./CategiriaModel');

const Productos=sequelize.define('Productos',{
    NombreProducto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Price:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    Descuento:{
        type:DataTypes.NUMBER,
        allowNull:false,
        defaultValue:0
    },
    UrlImage:{
        type:DataTypes.STRING,
        defaultValue:'/imagen/NotFound.jpg'
    },
    Descripcion:{
        type:DataTypes.STRING,
        allowNull:true
    }
})
Productos.belongsTo(Categoria,{
    onDelete:'CASCADE',
    foreignKey:'IdCategoria'  
});
Productos.sync({ alter: true });
module.exports=Productos;