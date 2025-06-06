//Introdução ao Estudo de DOM

// Selecionar e Modificar Elementos

// getElementById -> variavel simples
let titulo = document.getElementById("titulo"); // Pegar o Elemento
console.log(titulo); // ver o Elemento
titulo.innerText = "Outro titulo"; //Modificar o Texto

// getElementsByClassName -> Vetor(array)
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);
descricao[1].innerText = "Outro Texto";
descricao[0].style.color = "red";

//getElementsByTagName -> vetor(array)
let p = document.getElementsByTagName("p");
console.log(p[1]);
p[1].style.fontWeight = "bold";

//querySelector -> variável Simples
let paragrafo = document.querySelector("p");
console.log(paragrafo);
paragrafo.style.fontSize = "40px";

//querySelectorAll -> Vetor(array)
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => element.style.color="green");



// Lançamentos de Eventos (EventListener)

function mudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

// 2- adicionando o ouvinte(addEventListen)
document.querySelector(".btn").addEventListener(
    "click",outraCorFundo
);
function outraCorFundo(){
    document.body.style.backgroundColor ="Orange";
}