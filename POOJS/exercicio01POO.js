class Produto {
    // Construtor com os atributos nome, preco e estoque
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    // Métodos para manipular o estoque
    vender(quantidade) {
        if (quantidade <= this.estoque) {
            this.estoque -= quantidade;
            console.log(`${quantidade} unidades de ${this.nome} vendidas.`);
        } else {
            console.log(`Estoque insuficiente. Apenas ${this.estoque} unidades disponíveis.`);
        }
    }

    // Método para repor o estoque
    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`${quantidade} unidades adicionadas ao estoque de ${this.nome}.`);
    }

    // Método para exibir informações do produto
    exibirInfo() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Estoque: ${this.estoque} unidades`);
    }
}

// Testando a classe
let produto1 = new Produto("Mouse", 60, 30);
produto1.exibirInfo();
produto1.vender(80);
produto1.repor(10);
produto1.vender(80);
produto1.exibirInfo();