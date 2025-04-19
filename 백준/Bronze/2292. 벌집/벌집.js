const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

function findMinEnterNumber(N) {
  let num = 1;
  let sum = 1;

  while (sum < N) {
    sum += 6 * num;
    num++;
  }
  return num;
}

console.log(findMinEnterNumber(N));
