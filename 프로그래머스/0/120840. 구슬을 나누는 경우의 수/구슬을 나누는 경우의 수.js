function solution(balls, share) {
  if (share === 0 || balls === share) return 1;

  let result = 1;
  for (let i = 1; i <= share; i++) {
    result *= (balls - i + 1);
    result /= i;
  }

  return Math.round(result);
}