const { equipamentos } = require ("./equipamentos")

function lerEquipamento () {
   
    try {
        equipamentos.forEach((equipamento) => 
    console.table(equipamentos)
        )
} catch (error) {
    console.error("Erro ao listar equipamentos", error.message);
}
}
module.exports = { lerEquipamento };