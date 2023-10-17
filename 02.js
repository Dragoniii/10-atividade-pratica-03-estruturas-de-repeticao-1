//2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto Lucas tem 1,10m de altura e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que: 
//a. Lucas e Pedro tenham o mesmo tamanho; 
//b. Lucas seja maior que Pedro.

let alturaPedro = 1.5;
let alturaLucas = 1.1;

let crescimentoPedro = 0.02;
let crescimentoLucas = 0.03;

let empatar = 0;

while (alturaPedro > alturaLucas){
    alturaPedro = alturaPedro + crescimentoPedro
    alturaLucas = alturaLucas + crescimentoLucas
    empatar++
}


document.write(`A altura final de Pedro é ${alturaPedro.toFixed(2)}.<br>`)
document.write(`A altura final de Lucas é ${alturaLucas.toFixed(2)}.<br>`)

document.write(`Quantidade de anos para empatar ${empatar-1}.<br>`)
document.write(`Quantidade de anos para virar ${empatar}.<br>`)