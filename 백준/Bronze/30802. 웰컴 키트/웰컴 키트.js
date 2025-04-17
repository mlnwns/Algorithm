const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const sizeRequests = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

const totalTShirtBundles = sizeRequests.reduce((sum, size) => {
  const bundles = Math.ceil(size / T);
  return sum + bundles;
}, 0);

const maxPenBundles = Math.floor(N / P);
const singlePens = N % P;

console.log(totalTShirtBundles);
console.log(maxPenBundles, singlePens);
