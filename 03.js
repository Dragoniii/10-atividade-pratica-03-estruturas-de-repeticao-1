//3. Escreva um algoritmo que faça a tabuada de um número e apresente o resultado de acordo com o modelo a seguir, sabendo que o multiplicando deverá ser fornecido pelo usuário (n) e a quantidade de iterações também (i).

let tabuada = 0;
let numero = Math.random() * 100; 
numero = Math.round(numero)

while (tabuada < 10){
    valor = tabuada * numero
    document.write(`<br>${tabuada} * ${numero} = ${valor}.`)
    tabuada++
}

