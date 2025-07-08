const {users} = require("../../model/user/user");

const CreateUser = async (req, res) => {
   const {role, isAnonimo} = req.body
  try {
    const user = await users.create({
      role,
      isAnonimo,
    });

    return res.status(201).json({ message: "sucessfully created", user });
  } catch (e) {
    if (
      e.name === "SequelizeValidationError" ||
      e.name === "SequelizeDatabaseError"
    ) {
      return res
        .status(400)
        .json({ message: "Erro de validação", error: e.message });
    }
    return res
      .status(500)
      .json({ message: "Erro ao criar usuário", error: e.message });
  }
}


const GetUsers= async (req, res) => {
  try {
    const user = await users.findAll()
    return res.status(200).json(user);
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Erro ao mostrar usuário", error: e.message });
  }
}

module.exports={
  CreateUser,
  GetUsers
}