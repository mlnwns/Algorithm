const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const submitted = new Set(input);

for (let i = 1; i <= 30; i++) {
  if (!submitted.has(i)) {
    console.log(i);
  }
}