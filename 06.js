//6. Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, marcando os números que forem primos, exatamente como mostrado abaixo:
//30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function countdownWithPrimes() {
  let result = "";
  for (let i = 30; i >= 1; i--) {
    if (isPrime(i)) {
      result += "[" + i + "] ";
    } else {
      result += i + " ";
    }
  }
  console.log(result.trim());
}

countdownWithPrimes();
