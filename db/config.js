const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  `postgres://ecbqejrv:DRAYede7yrWeX0oFbeNDd_jXFYmveWv3@floppy.db.elephantsql.com/ecbqejrv`,
  { logging: false }
);

sequelize
  .authenticate()
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

module.exports = {
  sequelize,
  DataTypes,
};
