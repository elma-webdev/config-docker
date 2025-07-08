const Sequelize = require("sequelize");
const db = require("../../connection/sql");

const users = db.define("users", {
  id_users: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  role: {
    type: Sequelize.ENUM("paciente", "psicologo", "admin"),
    allowNull: false,
    defaultValue:"paciente"
  },
  isAnonimo:{
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = {users};
