const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection')

class User extends Model {}

User.init({
  // Model attributes are defined here
  id_usuario: {
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true     
},
  
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  datanascimento: {
    type: DataTypes.DATE,
 },
 email:{
     type: DataTypes.STRING
 },

 senha:{
    type: DataTypes.STRING
 },
 senha:{
    type: DataTypes.STRING
 },
 cpf:{
    type: DataTypes.STRING
 },
 rg:{
    type: DataTypes.STRING
 },
 envia_sms:{
    type: DataTypes.STRING
 },
 envia_email:{
    type: DataTypes.STRING
 },
 sexo:{
    type: DataTypes.STRING
 },
 createdAt:{
    type: DataTypes.DATE
}
}
 ,{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'tb_usuario' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.tb_usuario); // true


export default User;