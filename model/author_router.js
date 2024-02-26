const { sequelize, DataTypes } = require("../db/config");
const { UUIDV4 } = require("sequelize");

const Authors = sequelize.define("authors", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  fullName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  img: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  birthYear: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  creativity: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Authors;
