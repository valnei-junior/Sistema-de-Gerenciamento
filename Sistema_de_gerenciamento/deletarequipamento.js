const { equipamentos } = require ("./equipamentos");

function deletarEquipamento (id) {
    try {
        const indice = equipamentos.findIndex ((elementoDoarray) =>
        elementoDoarray.id === id);

        if (indice ===-1) {
            console.log ("Equipamento não encontrado")
        }
        else 
        {
            let nome = equipamentos [indice].nome;
            equipamentos.splice (indice, 1)
            console.log ("o Equipamento ${nome} foi excluido com sucesso")
        }
        }catch (error) {
            console.log ("Não podemos excluir - id não Encontrado", error);
        }}

    module.exports = {deletarEquipamento};