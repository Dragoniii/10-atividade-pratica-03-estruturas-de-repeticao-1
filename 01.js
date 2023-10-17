//1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar: 
//a. A menor altura do grupo; 
//b. A maior altura do grupo;

const alturas = [];
let i = 1

function altura (min, max){
    return Math.random() * (max - min) + min;
}

while (i <= 15){
    let medidas = altura (0.3, 2.3);
    alturas.push(medidas);
    document.write(`<br> A pessoa ${i} tem ${medidas.toFixed(2)} de altura.`)
    i++;
}

let max = alturas.reduce(function(a, b) {
    return Math.max(a, b);
});

let min = alturas.reduce(function(a, b) {
    return Math.min(a, b);
});

document.write(`<br>`)
document.write(`<br>`)
document.write(`A menor pessoa do grupo tem ${min.toFixed(2)} de altura.`)
document.write(`<br>`)
document.write(`<br>`)
document.write(`A maior pessoa do grupo tem ${max.toFixed(2)} de altura.`)