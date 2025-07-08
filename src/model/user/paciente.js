const {Sequelize}=require("sequelize");
const db=require("../../connection/sql")
const users=require("./user")

const pacientes=db.define("pacientes", {
    id_pacientes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      Pnome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Snome: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo:{
        type: Sequelize.STRING,
        allowNull:true
      },
      isUserId:{
        type: Sequelize.INTEGER,
        allowNull: false,
      }
})

pacientes.hasOne(
    users,
    {foreignKey:"isUserId",
        as:"users"
    }
)

users.belongsTo(pacientes,
    {foreignKey:"id_pacientes",
        as:"pacientes"
    })

await pacientes.sync({force:true}).then(() => {
    console.log('Tabela "pacientes" criada com sucesso!');
  }).catch((error) => {
    console.error('Erro ao criar tabela "pacientes":', error);
  });

module.exports={pacientes}