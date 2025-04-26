const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(" ").map(Number);

const max = Math.max(A, B);
const min = Math.min(A, B);

let gcd;
for (let i = 1; i <= min; i++) {
  if (max % i === 0 && min % i === 0) {
    gcd = i;
  }
}
console.log(gcd);

let lcm;
for (let i = max; i <= A * B; i++) {
  if (i % A === 0 && i % B === 0) {
    lcm = i;
    break;
  }
}
console.log(lcm);
