const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

function solve(k, n) {
  const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let floor = 1; floor <= k; floor++) {
    for (let room = 1; room <= n; room++) {
      dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
    }
  }

  return dp[k][n];
}

for (let i = 1; i <= T; i++) {
  const k = Number(input[i * 2 - 1]);
  const n = Number(input[i * 2]);

  console.log(solve(k, n));
}
