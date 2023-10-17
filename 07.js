//7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

const numeros = [];
let i = 1;
let tamanho = Math.random() * 100;
tamanho = Math.round(tamanho);

while (i <= tamanho) {
  let valores0 = Math.random() * 1000;
  let valores1 = Math.random() * 1000;
  let valores = valores0 - valores1;
  valores = Math.round(valores);
  numeros.push(valores);
  console.log(valores);
  i++;
}

const final = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const media = final / numeros.length

const negativo = numeros.filter((numeros) => numeros < 0);

console.log(`Tamanho:`);
console.log(tamanho);
console.log(`Valor final:`);
console.log(final);
console.log(`Valor média:`);
console.log(media);
console.log(`Quantidade de negativos`);
console.log(negativo.length);
console.log(`Quantidade de positivos`);
console.log((negativo.length-tamanho)*-1);
console.log(`Percentual de negativos`);
console.log((negativo.length)/tamanho);
console.log(`Percentual de positivos`);
console.log(((negativo.length-tamanho)*-1)/tamanho);