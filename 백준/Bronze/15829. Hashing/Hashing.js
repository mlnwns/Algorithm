const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const list = input[1].split("");

function solution(list) {
  let hash = 0;
  let power = 1;

  for (let i = 0; i < list.length; i++) {
    hash += (list[i].charCodeAt(0) - 96) * power;
    power *= 31;
  }
  hash = hash % 1234567891;
  console.log(hash);
}

solution(list);
