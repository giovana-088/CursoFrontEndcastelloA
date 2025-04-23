//Criar uma classe representando um veículo

class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Subclasse Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano); // chama o construtor da classe pai
        this.portas = portas;
    }

    // sobrescrita do método exibirInfo()
    exibirInfo() {
        super.exibirInfo(); // chama o método da classe pai
        console.log(`Portas: ${this.portas}`);
    }
}

let veiculo2 = new Veiculo("Honda", "CG 160", 2022);
veiculo2.exibirInfo();