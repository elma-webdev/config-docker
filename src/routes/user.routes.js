const { Router } = require("express");
const useRouter = new Router();
const {CreateUser, GetUsers}=require("../controller/user/user")
const {createPaciente, getPaciente, updatePaciente}=require("../controller/user/paciente")

useRouter.post("/create-user", CreateUser);
useRouter.get("/get-users", GetUsers);

useRouter.post("/create-paciente", createPaciente);
useRouter.get("/get-pacientes", getPaciente);
useRouter.put("/update-paciente/:id", updatePaciente);




module.exports = useRouter;
