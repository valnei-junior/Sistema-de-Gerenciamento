const prompt = require("prompt-sync")();

const { criarEquipamento } = require("./Sistema_de_gerenciamento/criarEquipamento");
const { atualizarEquipamento } = require("./Sistema_de_gerenciamento/atualizarEquipamento");
const { deletarEquipamento } = require("./Sistema_de_gerenciamento/deletarequipamento"); // Verifique o nome do arquivo
const { lerEquipamento } = require("./Sistema_de_gerenciamento/lerequipamento"); // Verifique o nome do arquivo

criarEquipamento("E2020", "Fita de led", "Max Fitas", "001257899", "25/10/2024", "25/10/2025", "Natal", "troca", "loja Centro");
criarEquipamento("E2022", "Refletor led", "Max Fitas", "001258899", "26/10/2024", "26/10/2025", "Natal", "quebrado", "loja Alecrim");
lerEquipamento();

atualizarEquipamento("E2022", "Refletor grande de 100 leds", "Max Fitas", "001259999", "26/11/2024", "26/10/2025", "Natal", "quebrado", "loja Ribeira");
lerEquipamento();

deletarEquipamento("E2022");