const Sequelize = require("sequelize");
const sequelize = new Sequelize("sys", "root", "Password!@#$", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
