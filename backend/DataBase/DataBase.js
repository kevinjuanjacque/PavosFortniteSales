const {Sequelize}=require('sequelize');
const config = require('./Conexion');

const sequelize = new Sequelize('postgres://postgres:kevin123@localhost:5432/testdb',
    {
        dialect:'postgres',
        logging: false 
    }
    
) // Example for postgres


module.exports= sequelize;