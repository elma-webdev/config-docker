const pacientes=("../../model/user/paciente")
const bcrypt=require("bcrypt")


const createPaciente = async (req, res) => {
    const {Pnome, Snome, email, telefone, senha, isUserId}=req.body
    
    try {

        const IsEmailExist = await pacientes.find({where:{email}});
        if (IsEmailExist) {
            return res.status(400).json({ message: "Este endereço de email já existe." });
        }

        const hashPassword = bcrypt.hashSync(senha, 10);

        const paciente = await pacientes.create({Pnome, Snome, email, telefone, senha:hashPassword, isUserId});
        return res.status(201).json({ message: "Paciente criado com sucesso", paciente });

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
            .json({ message: "Erro ao criar paciente", error: e.message });
    }
};

const getPaciente = async (req, res) => {
    try {
        const paciente = await pacientes.findAll()
        return res.status(200).json(paciente);
    } catch (e) {
        return res
            .status(500)
            .json({ message: "Erro ao mostrar paciente", error: e.message });
    }
}

const updatePaciente = async (req, res) => {

    const {id}=req.params
    const {Pnome, Snome, telefone, photo}=req.body
    try {

        const paciente=await pacientes.findOne({where:{id}})

        if(!paciente){
            return res.status(404).json({message:"Paciente não encontrado."})
        }
         await pacientes.update({Pnome, Snome, telefone, photo});
        return res.status(201).json({ message: "criado com sucesso" });
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
            .json({ message: "Erro ao criar paciente", error: e.message });
    }
};

module.exports={createPaciente, getPaciente, updatePaciente}