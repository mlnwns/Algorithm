const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

function divideSum(num) {
  let sum = num;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

let found = false;

for (let i = 1; i <= N; i++) {
  if (divideSum(i) === N) {
    console.log(i);
    found = true;
    break;
  }
}

if (!found) {
  console.log(0);
}
