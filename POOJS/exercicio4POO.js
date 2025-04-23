// Criar um sistema de funcionários

class Funcionario {
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    //métodos para manipular o salário
    aumentarSalario(porcentagem){
        if(porcentagem<=0){
            console.log("Porcentagem inválida!");
            return;
        }
        this.salario += (this.salario * porcentagem) / 100;
    }

    exibirInfo(){
        console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario}`);
    }
}

let funcionario1 = new Funcionario("João", "Gerente", 5000);

funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();