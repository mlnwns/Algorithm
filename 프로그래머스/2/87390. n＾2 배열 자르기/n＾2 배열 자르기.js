function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.trunc(i / n);

    const col = i % n;

    const value = Math.max(row, col) + 1;

    result.push(value);
  }

  return result;
}