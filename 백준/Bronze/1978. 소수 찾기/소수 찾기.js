const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function isPrime(num) {
  if (num < 2) return false;

  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

let primeCount = 0;

for (const number of numbers) {
  if (isPrime(number)) {
    primeCount++;
  }
}

console.log(primeCount);
