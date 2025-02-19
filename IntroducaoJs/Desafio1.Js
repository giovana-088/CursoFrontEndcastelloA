// Função para verificar a idade
function verificarIdade() {
    // Solicita a idade ao usuário
    const prompt = require("prompt-sync")();
    var idade = prompt("Qual é a sua idade?: ");

    // Verifica se o valor inserido é um número válido
    if (isNaN(idade) || idade < 0) {
        console.log("Insira uma idade válida.");
        return;
    }

    // Verifica a faixa etária e exibe a classificação
    if (idade < 18) {
        console.log("Você é menor de idade.");
    } else if (idade >= 18 && idade <= 60) {
        console.log("Você é adulto. ");
    } else {
        console.log("Você é idoso. ");
    }
}

// Chama a função para realizar a verificação
verificarIdade();