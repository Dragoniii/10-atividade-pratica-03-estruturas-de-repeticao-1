//4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250 e verifique quais números são múltiplos de 3 e quais são múltiplos de 5.

let i = 1;

while (i <= 250) {
  if (i % 3 === 0) {
    document.write(`O valor ${i} é multiplo de 3. <br><br>`);
  }
  if (i % 5 === 0) {
    document.write(`O valor ${i} é multiplo de 5. <br><br>`);
  }
  i++;
}
