const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);

const M = Math.max(...scores);

const newScores = scores.map((score) => {
  const normalizedScore = (score / M) * 100;
  return normalizedScore;
});

const average = newScores.reduce((acc, score) => acc + score, 0) / N;
console.log(average);
