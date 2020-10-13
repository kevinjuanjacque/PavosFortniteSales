const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:kevin123@localhost:5432/testdb',
{
    dialect:'postgres',
    logging: false 
}

) 

const User = sequelize.define('Usuario', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  password: {
    type: DataTypes.STRING,
    allowNull:true,
    
  },
  NombreCompleto:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  Admin:{
    type: DataTypes.BOOLEAN,
    defaultValue:false,
    allowNull:false,
  }
});

User.sync({ alter: true });

module.exports=  User;