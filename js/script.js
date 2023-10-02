document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse Script está sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

/* Alt + shift + A = Atalho para comentário de várias linhas*/

// Comentário de uma linha = ctrl + ;

// Tipagem Fraca
var teste = 1;
console.log(typeof teste);
document.write("<hr>O valor da variáel teste é " + teste);
teste = "joao";
console.log(typeof teste);
document.write("<hr>O valor agora da variável de teste é " + teste);
// Variável global - cruada semn necessidade de declaração
nome = "joao";
console.log(nome.toUpperCase());

// Formas de declaração de variáveis
var v1 = 5.25;
let v2 = null;
const v3 = "teste";

console.log("Tipo de váriavel v1:" + typeof v1);
console.log("Tipo de váriavel v2:" + typeof v2);
console.log("Tipo de váriavel v3:" + typeof v3);
console.log("Tipo de váriavel Nan:" + typeof NaN); //tipo number
console.log("Tipo de váriavel Null:" + typeof null); //tip number
console.log("Tipo de váriavel +Infinity:" + typeof +Infinity);

const numero = "1";
// Operadores de comparação
console.log("Testa se numero == 1; " + (numero == 1));
console.log("Testa se numero === 1; " + (numero === 1));

//  Adicionar uma lista no body do HTML
var lista = ["arroz", "feijao", "carne", "macarrao"];
var listaUl = document.createElement("ul");

//  Acessar elementos atráes do DOM
var body = document.getElementsByTagName("body");

console.log(listaUl);
console.log(body);

document.write("<hr>Vamos criar uma lisra agora!<hr>");
body[0].appendChild(listaUl);

for (var i = 0; i < lista.length; i++) {
  var liFor = document.createElement("li");
  var textoLi = document.createTextNode(lista[i]);
  liFor.appendChild(textoLi);
  listaUl.appendChild(liFor);
}

document.write(
  "<hr>A <b> Lista Acima </b> foi criada dinamicamente via JS </hr>"
);
