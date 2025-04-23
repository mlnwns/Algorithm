const [L, list] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const MOD = 1234567891n;
let hash = 0n,
  power = 1n;

for (let i = 0; i < L; i++) {
  hash += BigInt(list[i].charCodeAt(0) - 96) * power;
  power *= 31n;
}
console.log((hash % MOD).toString());
