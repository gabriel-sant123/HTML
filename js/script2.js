document.write("<h1>Executando script2.js</h1>");
document.write("Esse script está em umarquivo externo");
document.write("Referencianddo no fim do body do HTML");

function mudarCor(novaCor){
    var x= document.getElementById("demo");
    x.style.color = novaCor;
}