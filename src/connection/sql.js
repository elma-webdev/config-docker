const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  database: "meu_banco",
  username: "usuario",
  password: "senha123",
  host: "mysql", // normalmente eh localhost, mas no docker eh o nome do servico do compose, pq localhost eh todo mundo
  port: 3306,
});

  sequelize.authenticate()
    .then(() => console.log("🟢 Conectado ao MySQL"))
    .catch(err => console.error("🔴 Erro ao conectar:", err));



module.exports = sequelize;
