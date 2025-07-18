function solution(n) {
  let answer = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    for (let j = 1; j <= n; j++) {
      if (i * j === n) {
        if (i === j) {
          answer += 1;
          continue;
        }
        answer += 2;
      }
    }
  }
  return answer;
}
