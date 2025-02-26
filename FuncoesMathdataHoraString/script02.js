// Funções de Texto (String)

let texto = "Aula de JavaScrpit";

// contar os caracteres (length)
console.log(texto.length); //18

//MAIÚCULAS e minusculas
console.log(texto.toLocaleUpperCase()); //maiusculas
console.log(texto.toLocaleLowerCase()); //misculas

// Partes do texto
//substring(inicio, fim)
console.log(texto.substring(0,4)); //Aula
// slice(Quantidade)
console.log(texto.slice(-10)); //JavaScript

//Substituir parte do texto
console.log(texto.replace("Java", "Type"))

//Tesoura (Trim)  - Somente começço e fim da palavra
let texto1 = "  JavaScript  ";
console.log(texto1); //"  JavaScript  "
console.log(texto1.trim());

//Separar texto (split) - caracteres
let linguagens = "JavaScript, Python, PHP, Java, C#"
let vetorlinguagens = linguagens.split(", ");
console.log(linguagens);
console.log(vetorlinguagens);

//desafio
let caracter = "Bom dia Com Muita Alegria";
let caracterSemEspaco = caracter.replaceAll(" ","");
console.log(caracter);
console.log(caracter.length);
console.log(caracterSemEspaco);
console.log(caracterSemEspaco.length);