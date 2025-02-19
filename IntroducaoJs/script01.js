//EStrutura de Dados

// Condicional (if else, switch case)
var precoProduto = 150;

if(precoProduto>=100){
    console.log("Valor a pagar: "+(precoProduto*0.9)); // 10% d desconto
} else{
    console.log("Valor a Pagar: "+precoProduto);
}

//switch case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;

    default:
        console.log("Outro Mês");
        break;
}

//Laços de Repetição (FOR; WHILE)
//for(inicio, fim, Incremento)
for(let i=0 ; i<=100 ; i++){
    console.log(i);
}
 //While (condiconal)
 var numeroEscolhido = 4;
 var continuar = true;
 var contador = 0;
 while(continuar){
    contador++;
    let numeroSorteado = Math.round(Math.random()*10); // sortear um n° entre 0 e 10
    if(numeroEscolhido==numeroSorteado){
        console.log("Acertou!!!!")
        console.log("N° de Tentativas: "+contador);
        continuar=false;
    }
 }

 //Funções - (void // return)
//function return
 function ola(nome){ //parametro
    return "Olá, "+nome+". Seja bem-Vindo!!"
 }
 console.log(ola("Turma A"));

 //function void
 function hello(nome){
    console.log("Hello, "+nome);
 }
 hello("Turma A");