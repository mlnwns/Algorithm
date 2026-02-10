const fs = require("node:fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

input.sort((a, b) => a - b);

console.log(input.join("\n"));