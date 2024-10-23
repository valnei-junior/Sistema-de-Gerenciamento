const { equipamentos } = require ("./equipamentos");

function criarEquipamento (id, nome, modelo,  numeroDeSerie, dataDaCompra, vencimentoGarantia, localização, status,  alocadoPara){
    const novoEquipamento = {
        id,
        nome,
        modelo,
        numeroDeSerie,
        dataDaCompra,
        vencimentoGarantia,
        localização,
        status,
        alocadoPara
}
    try {
        equipamentos.push(novoEquipamento);
    } catch (error) {
        console.log("Erro ao cadastrar Equipamento", error.message);
    }
}
module.exports = {criarEquipamento};