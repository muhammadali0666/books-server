const { sequelize, DataTypes } = require("../db/config");
const { UUIDV4 } = require("sequelize");

const Books = sequelize.define("books", {
  id: {
    type: DataTypes.TEXT,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  author: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  bookName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pageCount: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  year: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  genre: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  publisher: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

module.exports = Books;
