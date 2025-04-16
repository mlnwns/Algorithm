const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.forEach((line) => {
  const [a, b, c] = line.split(" ").map(Number);
  if (a === 0 && b === 0 && c === 0) return;

  const sides = [a, b, c].sort((x, y) => x - y);
  const [x, y, z] = sides;
  console.log(x ** 2 + y ** 2 === z ** 2 ? "right" : "wrong");
});
