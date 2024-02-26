const { Sequelize, DataTypes } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize({
    username: "postgres",
    database: "book",
    password: process.env.PASSWORD,
    port: 5432,
    host: "localhost",
    dialect: "postgres",
    logging: false
})

sequelize
      .authenticate()
      .then(() => console.log('Connected'))
      .catch((err) => console.log(err))  

module.exports = {
    sequelize,
    DataTypes
}