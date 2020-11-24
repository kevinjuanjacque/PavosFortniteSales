//coneccion a bd
const dataBD=require('./Conexion')
const { Pool } = require('pg');

module.exports = new Pool(dataBD);