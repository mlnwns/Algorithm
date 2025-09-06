function solution(n) {
  const result = new Set(); 

  let divisor = 2;
  while (n > 1) {
    while (n % divisor === 0) {
      result.add(divisor);
      n = n / divisor;
    }
    divisor++;
  }

  return Array.from(result);
}