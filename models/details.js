const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Details = sequelize.define("detail", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  datetime: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: Sequelize.STRING,
});

module.exports = Details;
