import Sequelize from 'sequelize' ;
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize({
  database: 'e-commerce',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: 'postgres',
  port: 5432,
  logging: true
});

module.exports = sequelize

// Test DB Conenction //


async function test(){
  try{
      let result = await sequelize.authenticate()
      console.log("Sequelize realizou a conexão com o banco de dados com sucesso!")
  }
  catch(error){
      console.error("Houve um erro ao conectar com o banco de dados:")
      console.error(error.message)
      process.exit()
  }
}

test()
