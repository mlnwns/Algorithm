function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= 10; i++) {
    if (factorial(i) <= n) answer++;
  }

  return answer;
}