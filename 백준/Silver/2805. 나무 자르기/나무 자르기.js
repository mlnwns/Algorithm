const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let left = 0;
let right = Math.max(...trees);
let answer = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let sum = 0;
  for (let tree of trees) {
    if (tree > mid) {
      sum += tree - mid;
    }
  }

  if (sum >= M) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);