const { equipamentos } = require ("./equipamentos");

function atualizarEquipamento (id, novoNome, novoModelo, novoNumeroDeSerie) {
    try {
        const equipamentoss = equipamentos.find(elemento =>
            elemento.id === id
            
        )
            if (equipamentos) {
            equipamentoss.nome = novoNome;
            equipamentoss.modelo = novoModelo;
            equipamentoss.numero = novoNumeroDeSerie;
            console.log("Equipamento editado com sucesso");
            
        } else {
                console.log("Equipamento não encontrado");
            }
    
    } catch (error) {
        console.log("Equipamento não encontrada", error.message);

    }
    
    
   
    } 
    module.exports = {atualizarEquipamento};